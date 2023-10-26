import "../styles/css/components/TabGroup.css";

type TabType = {
  lable: string;
  onClick: () => void;
};

function TabGroup({
  tabs,
  initialActiveIndex = 0,
}: {
  tabs: TabType[];
  initialActiveIndex?: number;
}) {
  return (
    <div className="tab__container">
      {tabs.map((tab, key) => (
        <button
          key={key}
          className={`button-tab ${
            initialActiveIndex === key && "button-tab-selected"
          }`}
          onClick={tab.onClick}
        >
          {tab.lable}
        </button>
      ))}
    </div>
  );
}

export default TabGroup;
