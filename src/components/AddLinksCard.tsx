import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import LinkInstructionSVG from "../assets/LinkInstructionSVG";
import LinksIcon from "../assets/icons/Links.svg";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import Select from "./Select";
import { linkInputT } from "../data";
import DragDropIcon from "../assets/icons/DragDrop.svg";

const onSubmit: SubmitHandler<FieldValues> = (data) => {
  alert(JSON.stringify(data));
};

function AddLinksCard({
  addLinkButtonPressed,
  listOfSelectedLinks,
  allLinks,
  setSelectedLinks: setSelectedLink,
  removeSelectedLink,
}: {
  addLinkButtonPressed: () => void;
  listOfSelectedLinks: linkInputT[];
  allLinks: linkInputT[];
  setSelectedLinks: (index: number, option: linkInputT) => void;
  removeSelectedLink: (index: number) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  return (
    <Card className="home__article-r">
      <form onSubmit={handleSubmit(onSubmit)} className="article__right-form">
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
            <Button
              name="addLinkButton"
              secondary
              onClick={(e) => {
                e.preventDefault();
                addLinkButtonPressed();
              }}
            >
              + Add new link
            </Button>
            {listOfSelectedLinks.length === 0 ? (
              <div className="right__body-links">
                <LinkInstructionSVG />
                <div className="right__body-instructions">
                  <span className="heading__text-m">Let's get you started</span>
                  <span className="body__text-s text-gray">
                    Use the “Add new link” button to get started. Once you have
                    more than one link, you can reorder and edit them. We’re
                    here to help you share your profiles with everyone!
                  </span>
                </div>
              </div>
            ) : (
              <div className="link__container-wrapper">
                <div className="link__container-wrapper-inner">
                  {listOfSelectedLinks.map((link, key) => (
                    <div className="link__card" key={key}>
                      <div className="link__container">
                        <div className="link__card-header">
                          <div>
                            <DragDropIcon />
                            <span className="heading__text-s text-gray">
                              Link #{`${key + 1}`}
                            </span>
                          </div>
                          <span
                            className="body__text-m text-link-secondary"
                            onClick={() => removeSelectedLink(key)}
                          >
                            Remove
                          </span>
                        </div>
                        <Select
                          index={key}
                          options={[
                            link,
                            ...allLinks.filter((option) => {
                              return !listOfSelectedLinks.some(
                                (linkItem) => linkItem.value === option.value
                              );
                            }),
                          ]}
                          selectedOption={{
                            value: link.value,
                            icon: link.icon,
                          }}
                          onSelect={setSelectedLink}
                        />
                        <Input
                          className="link__input-text"
                          label="Link"
                          name={`linkInput${key}`}
                          icon={<LinksIcon />}
                          register={register}
                          error={errors[`linkInput${key}`]?.type as string}
                          validation={{
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                            pattern: {
                              value: new RegExp(
                                `^https:\\/\\/www\\.${link.value.toLowerCase()}\\.com\\/.*$`
                              ),
                              message: "Please enter a valid URL",
                            },
                          }}
                          placeholder={`e.g. https://www.${link.value.toLowerCase()}.com/johnappleseed`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="right__footer">
          <Button type="submit" disabled={listOfSelectedLinks.length === 0}>
            Save
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default AddLinksCard;
