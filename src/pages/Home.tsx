import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import TabGroup from "../components/TabGroup";
import "./../styles/css/pages/Home.css";

function Home() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="home__wrapper">
      <div className="home__wrapper-inner">
        <Card className="card__header">
          <div className="logo__text">Linkwise</div>
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
        <Card className="card__body-left">Test</Card>
        <Card className="card__body-right">
          <div className="right__container-top">
            <div className="right__title">
              <span className="heading__text-m">Customize your links</span>
              <span className="body__text-s text-gray">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </span>
            </div>
            <div className="right__body-top">
              <Button secondary>+ Add new link</Button>
              <div className="links__container">
                <div className="instruction__text">
                  <span className="heading__text-m">Let's get you started</span>
                  <span className="body__text-s text-gray">
                    Use the “Add new link” button to get started. Once you have
                    more than one link, you can reorder and edit them. We’re
                    here to help you share your profiles with everyone!
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right__body-bottom">
            <Button disabled>Save</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Home;
