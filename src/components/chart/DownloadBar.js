import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SaveIcon from "@material-ui/icons/VerticalAlignBottom";
import { Button, Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    boxShadow: "none",
    minWidth: "150px"
  },
  formControl: {
    minWidth: 20
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  outlinedSelect: {
    paddingTop: 0,
    paddingBottom: 0
  },
  select: {
    minWidth: 100,
    height: 30,
    marginTop: 25
  }
});

class DownloadBar extends PureComponent {
  state = {
    type: "CSV",
    labelWidth: 0
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-end"
        spacing={8}
      >
        <Grid item> {this.renderSelection()}</Grid>
        <Grid item> {this.renderDownloadButton()}</Grid>
      </Grid>
    );
  }

  renderDownloadButton = () => {
    const { classes } = this.props;

    return (
      <Button
        variant="contained"
        size="small"
        className={classes.button}
        color="primary"
      >
        <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
        Download
      </Button>
    );
  };

  renderSelection = () => {
    const { classes } = this.props;
    return (
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel
          ref={ref => {
            this.InputLabelRef = ref;
          }}
          htmlFor="outlined-type-simple"
        />
        <Select
          value={this.state.type}
          className={classes.select}
          onChange={this.handleChange}
          input={
            <OutlinedInput
              labelWidth={this.state.labelWidth}
              name="type"
              id="outlined-type-simple"
              classes={{ input: classes.outlinedSelect }}
              readOnly
            />
          }
        >
          <MenuItem value={"CSV"}>CSV</MenuItem>
        </Select>
      </FormControl>
    );
  };
}

DownloadBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DownloadBar);
