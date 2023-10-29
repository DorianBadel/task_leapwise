import { useContext, createContext, ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getFirstLinkName } from "./data";
import LocalStorage from "./localStorage";
//Write context methods for creating updating and deleting data
//The for the linkItemT type

export type linkItemT = {
  platformName: string;
  link: string;
  id: string;
};

interface LinkContextType {
  links: linkItemT[];
  addLink: (link?: linkItemT) => void;
  updateLink: (link: linkItemT) => void;
  deleteLink: (id: string) => void;
  returnSelectedLinkNames: () => string[];
}

const LinkContext = createContext<LinkContextType | undefined>(undefined);

export const useLink = () => {
  const context = useContext(LinkContext);
  if (!context) {
    throw new Error("useLink must be used within an LinkProvider");
  }
  return context;
};

interface LinkProviderProps {
  children: ReactNode;
}

export const LinkProvider: React.FC<LinkProviderProps> = ({ children }) => {
  const [links, setLinks] = useState<linkItemT[]>(LocalStorage.getLinks());

  const addLink = (link?: linkItemT) => {
    if (!link) {
      const newLink: linkItemT = {
        platformName: getFirstLinkName(),
        link: "",
        id: uuidv4(),
      };
      setLinks([...links, newLink]);
      return;
    }
    setLinks([...links, link]);
  };

  const updateLink = (link: linkItemT) => {
    setLinks(
      links.map((linkItem) => {
        if (linkItem.id === link.id) {
          return link;
        }
        return linkItem;
      })
    );
  };

  const deleteLink = (id: string) => {
    setLinks(links.filter((linkItem) => linkItem.id !== id));
  };

  const returnSelectedLinkNames = () => {
    return links.map((link) => link.platformName);
  };

  return (
    <LinkContext.Provider
      value={{
        links,
        addLink,
        updateLink,
        deleteLink,
        returnSelectedLinkNames,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};
