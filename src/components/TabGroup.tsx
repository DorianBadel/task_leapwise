import "../styles/css/components/TabGroup.css";

type TabType = {
  lable: string;
  onClick: () => void;
};

function TabGroup({ tabs }: { tabs: TabType[] }) {
  return (
    <div className="tab__container">
      {tabs.map((tab) => (
        <button className="button-tab" onClick={tab.onClick}>
          {tab.lable}
        </button>
      ))}
    </div>
  );
}

export default TabGroup;
