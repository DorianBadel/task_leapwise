import {
  FieldValues,
  UseFormUnregister,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import DragDropIcon from "../assets/icons/DragDrop.svg";
import Select from "./Select";
import Input from "./Input";
import LinksIcon from "../assets/icons/Links.svg";
import { linkItemT, useLink } from "../util/DataProvider";
import { getAllLinkNames } from "../util/data";

type linkCardProps = {
  index: number;
  link: linkItemT;
  unregister: UseFormUnregister<FieldValues>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};
function LinkCard({
  index,
  link,
  unregister,
  register,
  errors,
}: linkCardProps) {
  const linkContext = useLink();

  return (
    <div className="link__card">
      <div className="link__container">
        <div className="link__card-header">
          <div>
            <DragDropIcon />
            <span className="heading__text-s text-gray">
              Link #{`${index + 1}`}
            </span>
          </div>
          <span
            className="body__text-m text-link-secondary"
            onClick={() => {
              linkContext.deleteLink(link.id);
              unregister(`linkInput${link.id}`);
            }}
          >
            Remove
          </span>
        </div>
        <Select
          options={[
            link.platformName,
            ...getAllLinkNames()
              .filter((option) => {
                return !linkContext.links.some(
                  (linkItem) => linkItem.platformName === option
                );
              })
              .map((linkItem) => linkItem),
          ]}
          selectedOption={link.platformName}
          onSelect={(option) => {
            linkContext.updateLink({
              ...link,
              platformName: option,
            });
          }}
        />
        <Input
          className="link__input-text"
          label="Link"
          name={`linkInput${link.id}`}
          icon={<LinksIcon />}
          register={register}
          error={errors[`linkInput${link.id}`]?.type as string}
          validation={{
            required: {
              value: true,
              message: "This field is required",
            },
            pattern: {
              value: new RegExp(
                `^https:\/\/www\.${link.platformName.toLowerCase()}${
                  link.platformName.includes(".") ? "" : "\\.com"
                }\\/.*$`
              ),
              message: "Please enter a valid URL",
            },
          }}
          placeholder={`e.g. https://www.${link.platformName.toLowerCase()}${
            link.platformName.includes(".") ? "" : ".com"
          }/johnappleseed`}
        />
      </div>
    </div>
  );
}

export default LinkCard;
