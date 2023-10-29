import Card from "../components/Card";
import "./../styles/css/pages/Home.css";
import AddLinksCard from "../components/AddLinksCard";
import PhonePreviewSVG from "../assets/PhonePreviewSVG";
import Header from "../components/Header";
import { useState } from "react";
import LinksPreview from "../components/LinksPreview";
import Profile from "../components/Profile";
import LocalStorage, { profileDetailsT } from "../util/localStorage";

function Home() {
  const [profile, setProfile] = useState<profileDetailsT>(
    LocalStorage.getProfileDetails()
  );

  const [selectedTab, setSelectedTab] = useState(0);

  function setProfileDetails(profileDetails: profileDetailsT) {
    setProfile(profileDetails);
  }

  return (
    <div className="home">
      <div className="home__grid">
        <Header activeTab={selectedTab} selectTab={setSelectedTab} />
        <Card className="home__article-l">
          <PhonePreviewSVG />
          <LinksPreview profileDetails={profile} />
        </Card>
        {selectedTab === 0 ? (
          <AddLinksCard />
        ) : (
          <Profile
            profileDetails={profile}
            setProfileDetails={setProfileDetails}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
