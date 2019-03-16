import React, { PureComponent } from "react";
import Icon from "@material-ui/core/Icon";
import ShowChart from "@material-ui/icons/ShowChart";

export class DataChart extends PureComponent {
  render() {
    return (
      <Icon {...this.props}>
        <ShowChart />
      </Icon>
    );
  }
}
