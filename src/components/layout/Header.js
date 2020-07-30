import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import HelpIcon from "@material-ui/icons/Help";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../actions";
import { getTabIndex, getSelectedMenus } from "../../store";

const lightColor = "rgba(255, 255, 255, 0.7)";

const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: "none",
    color: lightColor,
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
  tabWrapper: {
    flexDirection: "row-reverse !important",
  },
});

function Header(props) {
  const dispatch = useDispatch();
  const { classes, onDrawerToggle } = props;
  const tabIndex = useSelector((state) => getTabIndex(state));
  const selectedMenus = useSelector((state) => getSelectedMenus(state));

  const allTabs = makeTab(selectedMenus, classes);

  const handleChange = (event, newValue) => {
    dispatch(actions.setTabIndex(newValue));
  };

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item>
              <Link className={classes.link} href="#" variant="body2">
                배성진
              </Link>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" className={classes.iconButtonAvatar}>
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={tabIndex} textColor="inherit" onChange={handleChange}>
          {allTabs}
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);

function makeTab(selectedMenus, classes) {
  return selectedMenus.map((menu, index) => {
    return (
      <Tab
        key={index}
        index={index}
        label={menu.menuName}
        classes={{ wrapper: classes.tabWrapper }}
        component="div"
        textColor="inherit"
        icon={
          <IconButton container="div" onClick={(e) => {}}>
            <CloseIcon></CloseIcon>
          </IconButton>
        }
      />
    );
  });
}
