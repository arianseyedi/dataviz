import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

function CustomAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar
          style={{
            backgroundImage: "url(/images/header.jpg)",
            backgroundPosition: "center"
          }}
        >
          <img
            src="/images/dataviz.png"
            alt="logo"
            style={{ width: "35px", marginRight: 10 }}
          />
          <Grid
            container
            style={{ color: "white" }}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs="auto">
              <Typography variant="h6" style={{ color: "white" }}>
                DataViz
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <Button
                variant="outlined"
                focusRipple
                color="inherit"
                style={{ color: "white", borderColor: "white" }}
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

CustomAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomAppBar);
