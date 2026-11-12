import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

const defaultProfile = {
  id: "default-profile",
  name: "Anjali Tiwari",
  bio: "Aspiring Software Engineer passionate about AI/ML, problem solving, and building practical software solutions.",
  avatarUrl:
    process.env.PUBLIC_URL +
    "/Anjali_image.jpeg",
  location: "South Delhi, India",
  hireable: "Yes"
};

export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
            throw new Error("profile.json not found");
          })
          .then(response => {
            if (response?.data?.user) {
              setProfileFunction(response.data.user);
            } else {
              setProfileFunction(defaultProfile);
            }
          })
          .catch(function () {
            setProfileFunction(defaultProfile);
          });
      };
      getProfileData();
    }
  }, []);

  if (openSource.display && openSource.showGithubProfile === "true") {
    if (typeof prof === "string" || prof instanceof String) {
      return <Contact />;
    }
    if (!prof || (Array.isArray(prof) && prof.length === 0)) {
      return renderLoader();
    }
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id || "profile"} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
