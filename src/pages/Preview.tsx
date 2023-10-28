import Button from "../components/Button";
import Card from "../components/Card";
import { NavLink } from "react-router-dom";
import "../styles/css/pages/Preview.css";
import { getLinks, retrievePlatformIcon } from "../util/data";
import RightArrowIcon from "../assets/icons/RightArrow.svg";

function Preview() {
  const selectedLinks = getLinks();

  return (
    <div className="preview">
      <div className="preview-inner">
        <div className="preview-backdrop"></div>
      </div>
      <Card className="preview__header">
        <NavLink to="/" className="link">
          <Button secondary>Back to editor</Button>
        </NavLink>
        <Button>Share Link</Button>
      </Card>
      <div className="preview__card">
        <div className="preview__card-header">
          <div className="preview__card-header-avatar"></div>
          <div className="preview__card-header-text">
            <div className="heading__text-m">John Doe</div>
            <div className="body__text-m text-gray">ben@example.com</div>
          </div>
        </div>
        <div className="preview__body">
          <div className="preview__body-inner">
            <div className="preview__body-linklist">
              {selectedLinks.map((links, key) => (
                <a href={links.link} target="_blank" key={key} className="link">
                  <Button
                    link
                    className={`icon-${links.platformName.toLowerCase()}`}
                  >
                    <span>
                      {retrievePlatformIcon(links.platformName)}
                      {links.platformName}
                    </span>
                    <RightArrowIcon />
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
