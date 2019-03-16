import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";


const styles = {
  root: {
    flexGrow: 1
  },
};

function Generic(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        
    </div>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Generic);
