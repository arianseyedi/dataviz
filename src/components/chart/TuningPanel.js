import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  select: {
    minWidth: 200,
    height: 30,
    marginTop: 25
  },
  outlinedSelect: {
    paddingTop: 0,
    paddingBottom: 0
  }
});

class SimpleSelect extends React.Component {
  state = {
    sensors: ["101", "114", "301"]
  };

  handleChange = event => {};

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={8}
      >
        <Grid item> {this.renderTypeSelection()}</Grid>
        <Grid item> {this.renderSensorSelection()}</Grid>
        <Grid item> {this.renderDataGranularity()}</Grid>
        <Grid item> {this.renderTimeRange()}</Grid>
      </Grid>
    );
  }
  renderTypeSelection = () => {
    const { classes } = this.props;
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="type-readonly">Sensor Type</InputLabel>
          <Select
            className={classes.select}
            labelWidth={0}
            value={"humidity"}
            input={
              <OutlinedInput
                classes={{ input: classes.outlinedSelect }}
                name="name"
                id="type-readonly"
              />
            }
          >
            <MenuItem value="humidity">Humidity</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  };
  renderSensorSelection = () => {
    const { classes } = this.props;
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="sensor-readonly">Sensors</InputLabel>
          <Select
            multiple
            className={classes.select}
            labelWidth={0}
            value={this.state.sensors}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                classes={{ input: classes.outlinedSelect }}
                name="sensors"
                id="sensor-readonly"
              />
            }
          >
            <MenuItem value="101">CH01 SE01</MenuItem>
            <MenuItem value="114">CH01 SE14</MenuItem>
            <MenuItem value="301">CH03 SE01</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  };
  renderDataGranularity = () => {
    const { classes } = this.props;
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="gran-readonly">Data Granularity</InputLabel>
          <Select
            className={classes.select}
            labelWidth={0}
            value={"fiveminutes"}
            input={
              <OutlinedInput
                classes={{ input: classes.outlinedSelect }}
                name="name"
                id="gran-readonly"
              />
            }
          >
            <MenuItem value="fiveminutes">5 Min</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  };
  renderTimeRange = () => {
    const { classes } = this.props;
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="frame-readonly">Time Range</InputLabel>
          <Select
            className={classes.select}
            labelWidth={0}
            value={"pastday"}
            input={
              <OutlinedInput
                classes={{ input: classes.outlinedSelect }}
                name="name"
                id="frame-readonly"
              />
            }
          >
            <MenuItem value="pastday">Past 1 Day</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  };
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);
