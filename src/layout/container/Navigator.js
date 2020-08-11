import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Collapse } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addMenuTab } from "../state/thunk";

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

function Navigator(props) {
  const { classes, ...other } = props;
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(categories.map(() => false));
  const [menuActive, setMenuActive] = useState(null);

  const clickCategory = (index) => {
    setMenuOpen(menuOpen.map((open, idx) => (idx === index ? !open : open)));
  };
  const clickMenu = (menuId, menuName, componentName) => {
    setMenuActive(menuId);

    const selectedMenu = { menuId, menuName, componentName };
    dispatch(addMenuTab(selectedMenu));
  };

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          className={clsx(classes.firebase, classes.item, classes.itemCategory)}
        >
          SKmagic Rental
        </ListItem>
        {categories.map(({ id, name, index, children }) => (
          <React.Fragment key={id}>
            <ListItem
              className={classes.categoryHeader}
              button
              onClick={() => clickCategory(index)}
            >
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {name}
              </ListItemText>
            </ListItem>
            <Collapse in={menuOpen[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {children.map(({ id: childId, name, componentName }) => (
                  <ListItem
                    key={childId}
                    button
                    className={clsx(
                      classes.item,
                      menuActive === childId && classes.itemActiveItem
                    )}
                    onClick={() => clickMenu(childId, name, componentName)}
                  >
                    <ListItemIcon className={classes.itemIcon}>
                      <KeyboardArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.itemPrimary,
                      }}
                    >
                      {name}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Collapse>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

const categories = [
  {
    id: "MENU001",
    name: "계약",
    index: 0,
    children: [
      {
        id: "MENU001001",
        name: "계약현황",
        componentName: "Todo",
        active: true,
      },
      {
        id: "MENU001002",
        name: "계약조회",
        componentName: "Product",
      },
      {
        id: "MENU001003",
        name: "신용관리",
        componentName: "TestMenu2",
      },
    ],
  },
  {
    id: "MENU002",
    name: "설치",
    index: 1,
    children: [
      {
        id: "MENU002001",
        name: "설치조회",
        componentName: "TestMenu",
      },
      {
        id: "MENU002002",
        name: "기사조회",
        componentName: "TestMenu",
      },
      {
        id: "MENU002003",
        name: "설치등록",
        componentName: "TestMenu",
      },
    ],
  },
  {
    id: "MENU003",
    name: "사용자관리",
    index: 2,
    children: [
      {
        id: "MENU003001",
        name: "사용자관리",
        componentName: "Account",
        active: true,
      },
      {
        id: "MENU003002",
        name: "사용자관리(Redux)",
        componentName: "AccountRedux",
      },
    ],
  },
  {
    id: "MENU004",
    name: "개인 스터디",
    index: 3,
    children: [
      {
        id: "MENU004001",
        name: "useCallback",
        componentName: "Study01",
      },
    ],
  },
];

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover,&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  },
  itemCategory: {
    backgroundColor: "#232f3e",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: "#4fc3f7",
  },
  itemPrimary: {
    fontSize: "inherit",
  },
  itemIcon: {
    minWidth: "auto",
    marginRight: theme.spacing(2),
  },
});

export default withStyles(styles)(Navigator);
