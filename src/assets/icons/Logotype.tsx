import Logo from "./Logo.svg";
function Logotype({ labelClass }: { labelClass?: string }) {
  return (
    <div className={`logotype`}>
      <Logo />
      <span className={`logotype__text ${labelClass ? labelClass : ""}`}>
        Linkwise
      </span>
    </div>
  );
}

export default Logotype;
