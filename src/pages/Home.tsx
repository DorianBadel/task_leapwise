import Card from "../components/Card";
import "./../styles/css/pages/Home.css";
import AddLinksCard from "../components/AddLinksCard";
import PhonePreviewSVG from "../assets/PhonePreviewSVG";
import Header from "../components/Header";
import { useState } from "react";
import { getLinks, getSelectOptions, linkItemT } from "../util/data";
import LinksPreview from "../components/LinksPreview";

const filteredOptions = getSelectOptions();

const defaultLinkInput: linkItemT = {
  platformName: filteredOptions[0].platformName,
  link: filteredOptions[0].link,
};

function Home() {
  const [links, setLinks] = useState<linkItemT[]>(getLinks());

  function addDefaultLink() {
    setLinks(links.concat(defaultLinkInput));
  }

  function setSelectedLink(index: number, option: string) {
    const newLinks = [...links];
    newLinks[index] = {
      platformName: option,
      link: option,
    };
    setLinks(newLinks);
  }

  function removeSelectedLink(index: number) {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  }

  return (
    <div className="home">
      <div className="home__grid">
        <Header />
        <Card className="home__article-l">
          <PhonePreviewSVG />
          <LinksPreview
            platformNames={links.map((link) => link.platformName)}
          />
        </Card>
        <AddLinksCard
          removeSelectedLink={removeSelectedLink}
          addLinkButtonPressed={addDefaultLink}
          listOfSelectedLinks={links}
          allLinks={filteredOptions}
          setSelectedLinks={setSelectedLink}
        />
      </div>
    </div>
  );
}

export default Home;
