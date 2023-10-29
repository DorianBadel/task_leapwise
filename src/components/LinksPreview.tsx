import Button from "./Button";
import RightArrowIcon from "../assets/icons/RightArrow.svg";
import { retrievePlatformIcon } from "../util/data";
import "../styles/css/components/LinkPreview.css";
import { useLink } from "../util/DataProvider";

function LinksPreview({
  profileDetails,
}: {
  profileDetails: {
    name: string;
    surname: string;
    email: string;
    profilePicture: string;
  };
}) {
  const platformNames = useLink().returnSelectedLinkNames();
  return (
    <div className="left__preview-container">
      <div className="left__preview-container-top">
        {profileDetails.profilePicture ? (
          <img src={profileDetails.profilePicture} alt="profile" />
        ) : (
          <div className="img-placeholder" />
        )}
        <div className="left__preview-container-text">
          {profileDetails.name ? (
            <span className="heading__text-s">
              {profileDetails.name} {profileDetails.surname}
            </span>
          ) : (
            <span className="name-placeholder" />
          )}
          {profileDetails.email ? (
            <span className="body__text-s text-gray">
              {profileDetails.email}
            </span>
          ) : (
            <span className="email-placeholder" />
          )}
        </div>
      </div>
      <div className="left__container">
        <div className="left__container-inner">
          {platformNames.map((platformName, key) => (
            <Button
              link
              key={key}
              className={`icon-${
                platformName.includes(".")
                  ? platformName.replace(".", "_").toLowerCase()
                  : platformName.toLowerCase()
              }`}
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
    </div>
  );
}

export default LinksPreview;
