import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import TabGroup from "./TabGroup";
import Logotype from "../assets/icons/Logotype";
import LinksIcon from "../assets/icons/Links.svg";
import ProfileIcon from "../assets/icons/Profile.svg";

function Header() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Card className="home__header">
      <Logotype />
      <TabGroup
        tabs={[
          {
            lable: "Links",
            onClick: () => {
              setSelectedTab(0);
            },
            icon: <LinksIcon />,
          },
          {
            lable: "Profile Details",
            onClick: () => {
              setSelectedTab(1);
            },
            icon: <ProfileIcon />,
          },
        ]}
        initialActiveIndex={selectedTab}
      />
      <Button secondary>Preview</Button>
    </Card>
  );
}

export default Header;
