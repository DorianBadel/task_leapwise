import { platformIcons } from "../assets/icons/LinkIcons.svg";
import LocalStorage from "./localStorage";

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
export const getSelectOptions = (): linkItemT[] => {
  const options = allPlatforms.map((platform) => ({
    platformName: platform.name,
    link: "",
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

export const getLinks = (): linkItemT[] => {
  const linkList = LocalStorage.getLinks();

  return linkList;
};

export const nameFromLink = (link: string) => {
  return link.split("www.")[1].split(".com")[0];
};

export const displayNameFromName = (name: string): string => {
  const platform = allPlatforms.find((platform) => {
    return platform.name.toLowerCase() === name;
  });
  return platform?.name || name;
};

export const retrievePlatformIcon = (platformName: string) => {
  const platform = allPlatforms.find((platform) => {
    return platform.name.toLowerCase() === platformName.toLowerCase();
  });
  return platform?.icon;
};

export type linkInputT = {
  value: string;
  icon: React.ReactElement;
};
export type linkItemT = {
  platformName: string;
  link: string;
};
