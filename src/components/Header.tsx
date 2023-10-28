import Button from "./Button";
import Card from "./Card";
import TabGroup from "./TabGroup";
import Logotype from "../assets/icons/Logotype";
import LinksIcon from "../assets/icons/Links.svg";
import ProfileIcon from "../assets/icons/Profile.svg";
import { NavLink } from "react-router-dom";

function Header({
  activeTab,
  selectTab,
}: {
  activeTab: number;
  selectTab: (arg: number) => void;
}) {
  return (
    <Card className="home__header">
      <Logotype />
      <TabGroup
        tabs={[
          {
            lable: "Links",
            onClick: () => {
              selectTab(0);
            },
            icon: <LinksIcon />,
          },
          {
            lable: "Profile Details",
            onClick: () => {
              selectTab(1);
            },
            icon: <ProfileIcon />,
          },
        ]}
        initialActiveIndex={activeTab}
      />
      <NavLink to="/preview" className="link">
        <Button secondary>Preview</Button>
      </NavLink>
    </Card>
  );
}

export default Header;
