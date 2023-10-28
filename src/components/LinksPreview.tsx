import Button from "./Button";
import RightArrowIcon from "../assets/icons/RightArrow.svg";
import { retrievePlatformIcon } from "../util/data";

function LinksPreview({ platformNames }: { platformNames: string[] }) {
  return (
    <div className="left__container">
      <div className="left__container-inner">
        {platformNames.map((platformName, key) => (
          <Button
            link
            key={key}
            className={`icon-${platformName.toLowerCase()}`}
            disabled
          >
            <span>
              {retrievePlatformIcon(platformName)}
              {platformName}
            </span>
            <RightArrowIcon />
          </Button>
        ))}
      </div>
    </div>
  );
}

export default LinksPreview;
