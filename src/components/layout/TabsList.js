import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../actions";

import { withStyles } from "@material-ui/styles";
import { Tab } from "@material-ui/core";
import generateGridConfig from "../../helpers/generateGridConfig";
import { getTabIndex, getAllGrids } from "../../store";

const styles = (theme) => ({
  tabWrapper: {
    flexDirection: "row-reverse !important",
  },
  // Tab > Close Icon
  closeIconBtn: {
    color: "red !important",
    margin: "0px !important",
  },
  tabsFlexContainer: {
    height: "100%",
  },
});

function TabsList(props) {
  const dispatch = useDispatch();
  const tabIndex = useSelector((state) => getTabIndex(state));

  //console.log(tabIndex);
  const allGrids = useSelector((state) => getAllGrids(state));
  const allTabs = mapAllGridsToTabs(allGrids);

  const handleChange = (event, newValue) => {
    dispatch(actions.changeTabIndexAction(newValue));
  };
  const addNewTab = () => {
    const gridConfig = generateGridConfig();
    dispatch(actions.addTabAction(gridConfig));
  };

  return (
    <>
      <Button
        className={"action-btn"}
        onClick={() => addNewTab()}
        variant="outlined"
        color="primary"
        size="large"
      >
        ADD NEW TAB
      </Button>
      <AppBar className={"app-bar"} position="static" color="default">
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          {allTabs}
        </Tabs>
      </AppBar>
    </>
  );
}

export default withStyles(styles)(React.memo(TabsList));

function mapAllGridsToTabs(allGrids) {
  return allGrids.map((grid, index) => {
    return <Tab key={grid.id} index={index} label={index + "Tab"}></Tab>;
  });
}
