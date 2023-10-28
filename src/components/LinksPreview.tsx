import Button from "./Button";
import RightArrowIcon from "../assets/icons/RightArrow.svg";
import { linkInputT } from "../data";

function LinksPreview({ links }: { links: linkInputT[] }) {
  return (
    <div className="left__container">
      <div className="left__container-inner">
        {links.map((link, key) => (
          <Button
            link
            key={key}
            className={`icon-${link.value.toLowerCase()}`}
            disabled
          >
            <span>
              {link.icon}
              {link.value}
            </span>
            <RightArrowIcon />
          </Button>
        ))}
      </div>
    </div>
  );
}

export default LinksPreview;
