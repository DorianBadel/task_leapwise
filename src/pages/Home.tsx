import Button from "../components/Button";
import Card from "../components/Card";
import TabGroup from "../components/TabGroup";
import "./../styles/css/pages/Home.css";

function Home() {
  return (
    <div className="home__wrapper">
      <Card className="card__header">
        <div className="logo__text">Linkwise</div>
        <TabGroup
          tabs={[
            { lable: "Tab 1", onClick: () => {} },
            { lable: "Tab 2", onClick: () => {} },
            { lable: "Tab 3", onClick: () => {} },
          ]}
        />
        <Button secondary>Preview</Button>
      </Card>
      <Card className="card__body-left">Test</Card>
      <Card className="card__body-right">Test</Card>
    </div>
  );
}

export default Home;
