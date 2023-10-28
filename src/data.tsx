import { platformIcons } from "./assets/icons/LinkIcons.svg";

type platformT = {
  name: string;
  icon: React.ReactElement;
  validation: RegExp;
};

const allPlatforms: Array<platformT> = Object.entries(platformIcons).map(
  ([key, icon]) => ({
    name: key.replace("_", "."),
    icon: icon(),
    validation: new RegExp(`^${key}\\.com$`),
  })
);

export type selectOptionT = {
  value: string;
  icon: React.ReactElement;
};
export const getSelectOptions = () => {
  const options = allPlatforms.map((platform) => ({
    value: platform.name,
    icon: platform.icon,
  }));
  // if (filter) { //turned out not to be necessary
  //   return (
  //     options
  //       // .filter((option) => option.value !== filter) // in case I want to remove the selected one
  //       .filter((option) =>
  //         option.value.toLowerCase().includes(filter.toLowerCase())
  //       )
  //   );
  // }
  return options;
};

export type linkInputT = {
  value: string;
  icon: React.ReactElement;
};
export type linkItemT = {
  order: number;
  platformName: string;
  link: string;
};
