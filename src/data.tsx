import { platformIcons } from "./assets/icons/LinkIcons.svg";

type platformT = {
  name: string;
  icon: React.ReactElement;
  validation: RegExp;
};

const allPlatforms: Array<platformT> = Object.entries(platformIcons).map(
  ([key, icon]) => ({
    name: key,
    icon: icon(),
    validation: new RegExp(`^${key}\\.com$`),
  })
);

export const getSelectOptions = (selected?: string) => {
  const options = allPlatforms.map((platform) => ({
    value: platform.name,
    label: platform.name,
    icon: platform.icon,
  }));
  if (selected) {
    return options
      .filter((option) => option.value !== selected)
      .filter((option) =>
        option.value.toLowerCase().includes(selected.toLowerCase())
      );
  }
  return options;
};

export type linkItemT = {
  order: number;
  platformName: string;
  link: string;
};
