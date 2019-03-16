import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import Measurement from "../components/Measurement";
import { withRouter } from "react-router-dom";
import Page from "../components/shared/Page";

const styles = theme => ({
  root: {
    width: "100%"
  }
});

class Data extends PureComponent {
  renderPage = () => <Measurement onNavigateBack={this.navigateBack}/>;
  navigateBack = () => this.props.history.push('/')
  render() {
    return <Page>{this.renderPage()}</Page>;
  }
}

export default withRouter(withStyles(styles)(Data));
