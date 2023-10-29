import { linkItemT } from "./data";

export type simpleProfileDetailsT = {
  name: string;
  surname: string;
  email: string;
};

export type profileDetailsT = simpleProfileDetailsT & {
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
  getProfileDetails: (): profileDetailsT => {
    const profileDetails = localStorage.getItem("profileDetails");
    return (
      (profileDetails && JSON.parse(profileDetails)) || {
        name: "",
        surname: "",
        email: "",
        profilePicture: "",
      }
    );
  },
  saveProfileDetails: (profileDetails: profileDetailsT) => {
    localStorage.setItem("profileDetails", JSON.stringify(profileDetails));
  },
};

export default LocalStorage;
