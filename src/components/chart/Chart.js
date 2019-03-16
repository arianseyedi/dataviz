import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import TopPanel from "./TopPanel";
import DownloadBar from "./DownloadBar";
import TuningPanel from "./TuningPanel";
import { Grid } from "@material-ui/core";
import Plotter from "./Plotter";

const styles = {
  root: {}
};

function Chart(props) {
  const { classes } = props;
  return (
    <Grid container direction="column" className={classes.root} spacing={16}>
      <Grid item>
        <TopPanel />
      </Grid>
      <Grid item>
        <TuningPanel />
      </Grid>
      <Grid item>
        <Plotter />
      </Grid>
      <Grid item>
        <DownloadBar />
      </Grid>
    </Grid>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Chart);
