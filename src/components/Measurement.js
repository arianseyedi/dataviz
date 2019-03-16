import React, { PureComponent } from "react";
import Toolbar from "./chart/Chart";
import { Typography, Grid, Button } from "@material-ui/core";
import { DataChart } from '../resources/icons/DataChart'

export default class Measurement extends PureComponent {
  render() {
    return (
      <Grid container direction="column" spacing={32}>
        <Grid item>{this.renderTitle()}</Grid>
        <Grid item>{this.renderBody()}</Grid>
      </Grid>
    );
  }
  navigateBack = () => this.props.onNavigateBack;
  renderBody = () => <Toolbar />;
  renderTitle = () => (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
      spacing={8}
    >
      <Grid item>
        <Grid container direction='row' spacing={16}><Grid item><Typography variant="h5">Measurements</Typography></Grid><Grid item><DataChart/></Grid></Grid>
      </Grid>
      <Grid item>
        <Button variant="text" onClick={this.navigateBack()} color="primary" >
          Back
        </Button>
      </Grid>
    </Grid>
  );
}
