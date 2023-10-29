import Button from "../components/Button";
import Card from "../components/Card";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/css/pages/Preview.css";
import { getLinks, linkItemT, retrievePlatformIcon } from "../util/data";
import RightArrowIcon from "../assets/icons/RightArrow.svg";
import LocalStorage, { simpleProfileDetailsT } from "../util/localStorage";
import { useAlert } from "../util/AlertProvider";
import LinksIcon from "../assets/icons/Links.svg";

function Preview() {
  const selectedLinks = getLinks();
  const profileDetails = LocalStorage.getProfileDetails();
  const alert = useAlert();

  //get the data form the url
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const urlJSON = searchParams.get("data")?.split("?");
  const urlLinksJSON = urlJSON ? urlJSON[0] : "[]";
  const urlProfileJSON = urlJSON ? urlJSON[1] : "{}";

  const urlLinks: linkItemT[] = JSON.parse(urlLinksJSON);
  const urlProfile: simpleProfileDetailsT = JSON.parse(urlProfileJSON);

  function addLinkToClipboard() {
    const finalLink = createUrl();
    navigator.clipboard.writeText(finalLink);
    alert.showAlert(
      "The link has been copied to your clipboard!",
      <LinksIcon />
    );
  }

  function createUrl() {
    const currentUrl = `${window.location.origin}${location.pathname}`;

    const linksString = `${JSON.stringify(selectedLinks)}`;
    const profileString = `${JSON.stringify({
      name: profileDetails?.name,
      surname: profileDetails?.surname,
      email: profileDetails?.email,
    })}`;

    const finalLink = `${currentUrl}?data=${linksString}?${profileString}`;
    return finalLink;
  }

  return (
    <div className="preview">
      <div className="preview-inner">
        <div className="preview-backdrop"></div>
      </div>
      <Card className="preview__header">
        <NavLink to="/" className="link">
          <Button secondary>Back to editor</Button>
        </NavLink>
        <Button onClick={addLinkToClipboard}>Share Link</Button>
      </Card>
      <div className="preview__card">
        {urlProfile.name ? (
          <div className="preview__card-header">
            <div className="preview__card-header-text">
              {urlProfile.name && (
                <div className="heading__text-m">
                  {urlProfile.name} {urlProfile.surname}
                </div>
              )}
              {urlProfile.email && (
                <div className="body__text-m text-gray">{urlProfile.email}</div>
              )}
            </div>
          </div>
        ) : (
          profileDetails && (
            <div className="preview__card-header">
              {profileDetails.profilePicture && (
                <div className="preview__card-header-avatar">
                  <img src={profileDetails.profilePicture} alt="avatar" />
                </div>
              )}
              <div className="preview__card-header-text">
                {profileDetails.name && (
                  <div className="heading__text-m">
                    {profileDetails.name} {profileDetails.surname}
                  </div>
                )}
                {profileDetails.email && (
                  <div className="body__text-m text-gray">
                    {profileDetails.email}
                  </div>
                )}
              </div>
            </div>
          )
        )}

        <div className="preview__body">
          <div className="preview__body-inner">
            <div className="preview__body-linklist">
              {urlLinks.length > 0
                ? urlLinks.map((link, key) => (
                    <a
                      href={link.link}
                      target="_blank"
                      key={key}
                      className="link"
                    >
                      <Button
                        link
                        className={`icon-${link.platformName.toLowerCase()}`}
                      >
                        <span>
                          {retrievePlatformIcon(link.platformName)}
                          {link.platformName}
                        </span>
                        <RightArrowIcon />
                      </Button>
                    </a>
                  ))
                : selectedLinks &&
                  selectedLinks.map((link, key) => (
                    <a
                      href={link.link}
                      target="_blank"
                      key={key}
                      className="link"
                    >
                      <Button
                        link
                        className={`icon-${link.platformName.toLowerCase()}`}
                      >
                        <span>
                          {retrievePlatformIcon(link.platformName)}
                          {link.platformName}
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
