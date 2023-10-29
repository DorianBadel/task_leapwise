import { platformIcons } from "../assets/icons/LinkIcons.svg";

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

export const getAllLinkNames = (): string[] => {
  return allPlatforms.map((platform) => platform.name);
};

export const getFirstLinkName = (): string => {
  return allPlatforms[0].name;
};

// export const getSelectOptions = (): linkItemT[] => {
//   const options = allPlatforms.map((platform) => ({
//     platformName: platform.name,
//     link: "",
//     id: key,
//   }));
//   return options;
// };
export const nameFromLink = (link: string) => {
  return link.split("www.")[1].split(".com")[0];
};

export const displayNameFromName = (name: string): string => {
  if (name === "dev") return "Dev.to";
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
