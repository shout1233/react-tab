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
import produce from "immer";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../actions";
import MenuA from "./MenuA";
import MenuB from "./MenuB";

const categories = [
  {
    id: "MENU001",
    name: "계약",
    index: 0,
    children: [
      {
        id: "MENU001001",
        name: "계약현황",
        componentName: MenuA,
        icon: <KeyboardArrowRightIcon />,
        active: true,
      },
      {
        id: "MENU001002",
        name: "계약조회",
        componentName: MenuB,
        icon: <KeyboardArrowRightIcon />,
      },
      {
        id: "MENU001003",
        name: "신용관리",
        componentName: MenuB,
        icon: <KeyboardArrowRightIcon />,
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
        componentName: MenuB,
        icon: <KeyboardArrowRightIcon />,
      },
      {
        id: "MENU002002",
        name: "기사조회",
        componentName: MenuB,
        icon: <KeyboardArrowRightIcon />,
      },
      {
        id: "MENU002003",
        name: "설치등록",
        componentName: MenuB,
        icon: <KeyboardArrowRightIcon />,
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
  divider: {
    marginTop: theme.spacing(2),
  },
});

function Navigator(props) {
  const { classes, ...other } = props;
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(categories.map(() => false));
  const [menuActive, setMenuActive] = useState(null);

  const handleClick = (index) => {
    setMenuOpen(menuOpen.map((open, idx) => (idx === index ? !open : open)));
  };
  const handleActiveClick = (menuId, menuName, componentName) => {
    setMenuActive(menuId);
    dispatch(actions.addMenuAction(menuId, menuName, componentName));
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
              onClick={() => handleClick(index)}
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
                {children.map(
                  ({ id: childId, name, componentName, icon, active }) => (
                    <ListItem
                      key={childId}
                      button
                      className={clsx(
                        classes.item,
                        menuActive === childId && classes.itemActiveItem
                      )}
                      onClick={() =>
                        handleActiveClick(childId, name, componentName)
                      }
                    >
                      <ListItemIcon className={classes.itemIcon}>
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.itemPrimary,
                        }}
                      >
                        {name}
                      </ListItemText>
                    </ListItem>
                  )
                )}
              </List>
            </Collapse>
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
