import React from "react";
import { useSelector } from "react-redux";
import { getSelectedMenus, getTabIndex } from "../../store";
import Content from "./Content";

function ContentList(props) {
  const selectedMenus = useSelector((state) => getSelectedMenus(state.menu));
  //console.log(allGrids.length);
  const currentTabIndex = useSelector((state) => getTabIndex(state.menu));
  //console.log("currentTabIndex : " + currentTabIndex);

  let allContents = selectedMenus.map((menu, idx) => {
    const ComponentName = menu.componentName;
    return (
      <Content value={currentTabIndex} index={idx} key={idx}>
        <ComponentName />
      </Content>
    );
  });

  return <>{allContents}</>;
}

// export default PanelsList;
export default ContentList;
