import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import LinkInstructionSVG from "../assets/LinkInstructionSVG";
import LinksIcon from "../assets/icons/Links.svg";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import Select from "./Select";
import { getSelectOptions, linkInputT } from "../data";
import { useState } from "react";

const filteredOptions = getSelectOptions();

const onSubmit: SubmitHandler<FieldValues> = (data) => {
  alert(JSON.stringify(data));
};

const defaultLinkInput: linkInputT = {
  order: 0,
  value: filteredOptions[0].value,
  icon: filteredOptions[0].icon,
};
function AddLinksCard() {
  const [links, setLinks] = useState<linkInputT[]>([]);
  const [selectedOption, setSelectedOption] = useState({
    value: filteredOptions[0].value,
    icon: filteredOptions[0].icon,
  });

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
                setLinks(links.concat(defaultLinkInput));
              }}
            >
              + Add new link
            </Button>
            {links.length === 0 ? (
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
                  {links.map((link) => (
                    <div className="link__container">
                      <Select
                        options={filteredOptions}
                        selectedOption={{ value: link.value, icon: link.icon }}
                        onSelect={setSelectedOption}
                      />
                      <Input
                        className="link__input-text"
                        label="Link"
                        name="linkInput"
                        icon={<LinksIcon />}
                        register={register}
                        error={errors.linkInput?.type as string}
                        validation={{
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                          pattern: {
                            value: new RegExp(
                              `^https:\\/\\/www\\.${selectedOption.value.toLowerCase()}\\.com\\/.*$`
                            ),
                            message: "Please enter a valid URL",
                          },
                        }}
                        placeholder={`e.g. https://www.${selectedOption.value.toLowerCase()}.com/johnappleseed`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="right__footer">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Card>
  );
}

export default AddLinksCard;
