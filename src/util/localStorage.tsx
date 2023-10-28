import { linkItemT } from "./data";

const LocalStorage = {
  getLocalStorage: (): linkItemT[] => {
    const linkList = localStorage.getItem("linkList");
    return (linkList && JSON.parse(linkList)) || [];
  },
  saveLinkListToLocalStorage: (linkList: linkItemT[]) => {
    localStorage.setItem("linkList", JSON.stringify(linkList));
  },
};

export default LocalStorage;
