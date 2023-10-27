import LinkInstructionSVG from "../assets/LinkInstructionSVG";
import Button from "./Button";
import Card from "./Card";

function AddLinksCard() {
  return (
    <Card className="home__article-r">
      <div className="right__container">
        <div className="right__title">
          <span className="right__title-heading heading__text-m">
            Customize your links
          </span>
          <span className="right__title-description body__text-s text-gray">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </span>
        </div>

        <div className="right__body">
          <Button secondary>+ Add new link</Button>
          <div className="right__body-links">
            <LinkInstructionSVG />
            <div className="right__body-instructions">
              <span className="heading__text-m">Let's get you started</span>
              <span className="body__text-s text-gray">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="right__footer">
        <Button disabled>Save</Button>
      </div>
    </Card>
  );
}

export default AddLinksCard;
