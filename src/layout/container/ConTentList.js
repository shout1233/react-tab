import React from "react";
import { useSelector } from "react-redux";
import Content from "./Content";
import { componentsMap } from "../../common/dynamic-component";

export default function ContentList() {
  const currentTabIndex = useSelector((state) =>
    state.menuTab.tabIndex ? state.menuTab.tabIndex : 0
  );
  const selectedMenus = useSelector((state) => state.menuTab.selectedMenus);

  let allContents = selectedMenus.map((menu, idx) => {
    const componentName = menu.componentName;
    const DynamicComponent = componentsMap[componentName];
    return (
      <Content value={currentTabIndex} index={idx} key={idx}>
        <DynamicComponent />
      </Content>
    );
  });

  return <>{allContents}</>;
}
