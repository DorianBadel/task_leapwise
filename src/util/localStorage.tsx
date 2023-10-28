import { linkItemT } from "./data";
export type profileDetailsT = {
  name: string;
  surname: string;
  email: string;
  profilePicture: string;
};

const LocalStorage = {
  //Link List
  getLinks: (): linkItemT[] => {
    const linkList = localStorage.getItem("linkList");
    return (linkList && JSON.parse(linkList)) || [];
  },
  saveLinkList: (linkList: linkItemT[]) => {
    localStorage.setItem("linkList", JSON.stringify(linkList));
  },

  //Profile Details
  getProfileDetails: (): profileDetailsT | undefined => {
    const profileDetails = localStorage.getItem("profileDetails");
    return (profileDetails && JSON.parse(profileDetails)) || undefined;
  },
  saveProfileDetails: (profileDetails: profileDetailsT) => {
    localStorage.setItem("profileDetails", JSON.stringify(profileDetails));
  },
};

export default LocalStorage;
