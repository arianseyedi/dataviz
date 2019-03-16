import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Chip, Grid } from "@material-ui/core";

const styles = theme => ({
  realTimeFab: {
    minWidth: "115px",
    border: "2px solid #00b6c5",
    color: "#00b6c5",
    fontWeight: "bold"
  },
  snapShotFab: {
    minWidth: "115px",
    border: "2px solid orange",
    color: "orange",
    fontWeight: "bold"
  },
  historicalFab: {
    minWidth: "115px",
    border: "2px solid #eb005d",
    backgroundColor: "#eb005d",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      color: "black"
    }
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

function TopPanel(props) {
  const { classes } = props;
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={8}
      >
        <Grid item>
          <Chip
            label="Real-time"
            className={classes.realTimeFab}
            variant="outlined"
            clickable
          />
        </Grid>
        <Grid item>
          <Chip
            label="Snapshot"
            className={classes.snapShotFab}
            variant="outlined"
            clickable
          />
        </Grid>
        <Grid item>
          <Chip
            label="Historical"
            className={classes.historicalFab}
            variant="outlined"
            clickable
          />
        </Grid>
      </Grid>
    </div>
  );
}

TopPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopPanel);
