import Button from "./components/Button";

function ComponentList() {
  return (
    <>
      <p className="heading__text-l">Component list</p>
      <p className="heading__text-m">Buttons [primary,secondary]</p>
      <Button primary onClick={() => {}}>
        Button
      </Button>
    </>
  );
}

export default ComponentList;
