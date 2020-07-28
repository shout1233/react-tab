import React from "react";
import { useSelector } from "react-redux";
import { getAllGrids, getTabIndex } from "../../store";
import Panel from "./Panel";
import MyGrid from "./MyGrid";

function PanelsList(props) {
  const allGrids = useSelector((state) => getAllGrids(state));
  console.log(allGrids.length);
  const currentTabIndex = useSelector((state) => getTabIndex(state));
  console.log("currentTabIndex : " + currentTabIndex);
  let allPanels = allGrids.map((grid, i) => {
    return (
      <Panel
        className={"tabs-panel"}
        value={currentTabIndex}
        index={i}
        key={grid.id}
      >
        <MyGrid {...grid} />
      </Panel>
    );
  });

  return <>{allPanels}</>;
}

// export default PanelsList;
export default React.memo(PanelsList);
