import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import LinkInstructionSVG from "../assets/LinkInstructionSVG";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import Select from "./Select";
import { getSelectOptions } from "../data";
import { useState } from "react";

const onSubmit: SubmitHandler<FieldValues> = (data) => {
  alert(JSON.stringify(data));
};
function AddLinksCard() {
  const filteredOptions = getSelectOptions();
  const [selectedOption, setSelectedOption] = useState({
    value: filteredOptions[0].value,
    icon: filteredOptions[0].icon,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const hasLinks = true;

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
          {!hasLinks ? (
            <div className="right__body-links">
              <LinkInstructionSVG />
              <div className="right__body-instructions">
                <span className="heading__text-m">Let's get you started</span>
                <span className="body__text-s text-gray">
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!
                </span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="link__container">
              <Select
                options={filteredOptions}
                selectedOption={selectedOption}
                onSelect={setSelectedOption}
              />
              <Input
                className="link__input-text"
                label="Link"
                name="linkInput"
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
            </form>
          )}
        </div>
      </div>

      <div className="right__footer">
        <Button disabled>Save</Button>
      </div>
    </Card>
  );
}

export default AddLinksCard;
