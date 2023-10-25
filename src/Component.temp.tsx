import Button from "./components/Button";
import TabGroup from "./components/TabGroup";

function ComponentList() {
  return (
    <>
      <p className="heading__text-l">Component list</p>
      <p className="heading__text-m">Buttons [primary,secondary]</p>
      <Button onClick={() => {}}>Button</Button>
      <Button onClick={() => {}} secondary>
        Button
      </Button>

      <TabGroup
        tabs={[
          { lable: "Tab 1", onClick: () => {} },
          { lable: "Tab 2", onClick: () => {} },
          { lable: "Tab 3", onClick: () => {} },
        ]}
      />
    </>
  );
}

export default ComponentList;
