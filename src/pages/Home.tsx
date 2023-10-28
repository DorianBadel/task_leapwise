import Card from "../components/Card";
import "./../styles/css/pages/Home.css";
import AddLinksCard from "../components/AddLinksCard";
import PhonePreviewSVG from "../assets/PhonePreviewSVG";
import Header from "../components/Header";
import { useState } from "react";
import { getSelectOptions, linkInputT } from "../data";
import LinksPreview from "../components/LinksPreview";

const filteredOptions = getSelectOptions();

const defaultLinkInput: linkInputT = {
  value: filteredOptions[0].value,
  icon: filteredOptions[0].icon,
};

function Home() {
  const [links, setLinks] = useState<linkInputT[]>([]);

  function setSelectedLink(index: number, option: linkInputT) {
    const newLinks = [...links];
    newLinks[index] = option;
    setLinks(newLinks);
  }
  return (
    <div className="home">
      <div className="home__grid">
        <Header />
        <Card className="home__article-l">
          <PhonePreviewSVG />
          <LinksPreview links={links} />
        </Card>
        <AddLinksCard
          addLinkButtonPressed={() => setLinks(links.concat(defaultLinkInput))}
          listOfSelectedLinks={links}
          allLinks={filteredOptions}
          setSelectedLinks={setSelectedLink}
        />
      </div>
    </div>
  );
}

export default Home;
