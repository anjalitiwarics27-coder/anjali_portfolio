fs = require("fs");
const https = require("https");
process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

function writeJson(filePath, content, label) {
  fs.writeFile(filePath, content, function (err) {
    if (err) {
      console.log(`Failed to write ${label}:`, err.message || err);
      return;
    }
    console.log(`saved file to ${filePath}`);
  });
}

function safeGetJson(options, {label, onSuccess, onFail}) {
  const req = https.request(options, res => {
    let body = "";
    console.log(`${label} statusCode: ${res.statusCode}`);

    res.on("data", d => {
      body += d;
    });

    res.on("end", () => {
      if (res.statusCode !== 200) {
        console.log(onFail || `${label} request failed with status ${res.statusCode}`);
        return;
      }
      try {
        onSuccess(body);
      } catch (err) {
        console.log(`${label} processing failed:`, err.message || err);
      }
    });
  });

  req.on("error", error => {
    console.log(`${label} request error:`, error.message || error);
  });

  return req;
}

if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    console.log(ERR.noUserName);
  } else {
    console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
    var queryData = JSON.stringify({
      query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
    });

    const default_options = {
      hostname: "api.github.com",
      path: "/graphql",
      port: 443,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Node"
      }
    };

    if (GITHUB_TOKEN) {
      default_options.headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
    }

    const req = safeGetJson(default_options, {
      label: "GitHub",
      onFail: ERR.requestFailed,
      onSuccess: data => writeJson("./public/profile.json", data, "GitHub profile")
    });

    req.write(queryData);
    req.end();
  }
}

if (MEDIUM_USERNAME) {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET"
  };

  const req = safeGetJson(options, {
    label: "Medium",
    onFail: ERR.requestFailedMedium,
    onSuccess: mediumData => writeJson("./public/blogs.json", mediumData, "Medium blogs")
  });

  req.end();
}
