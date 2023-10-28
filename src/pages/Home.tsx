import Card from "../components/Card";
import "./../styles/css/pages/Home.css";
import AddLinksCard from "../components/AddLinksCard";
import PhonePreviewSVG from "../assets/PhonePreviewSVG";
import Header from "../components/Header";
import Button from "../components/Button";
import { useState } from "react";
import { getSelectOptions, linkInputT } from "../data";
import { GitHub } from "../assets/icons/LinkIcons.svg";
import RightArrowIcon from "../assets/icons/RightArrow.svg";

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
          <div className="left__container">
            <div className="left__container-inner">
              <Button link>
                <span>
                  <GitHub />
                  GitHub
                </span>
                <RightArrowIcon />
              </Button>
            </div>
          </div>
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
