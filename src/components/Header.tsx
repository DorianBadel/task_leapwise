import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import TabGroup from "./TabGroup";

function Header() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Card className="home__header">
      <h1 className="home__header-text logo__text">Linkwise</h1>
      <TabGroup
        tabs={[
          {
            lable: "Links",
            onClick: () => {
              setSelectedTab(0);
            },
          },
          {
            lable: "Profile Details",
            onClick: () => {
              setSelectedTab(1);
            },
          },
        ]}
        initialActiveIndex={selectedTab}
      />
      <Button secondary>Preview</Button>
    </Card>
  );
}

export default Header;
