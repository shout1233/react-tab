import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};

function Content(props) {
  const { classes, value, index, children, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <> {children} </>
    </div>
  );
}

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden",
  },
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: "block",
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: "40px 16px",
  },
});

export default withStyles(styles)(Content);
