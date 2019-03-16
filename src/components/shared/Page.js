import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    margin: "25px"
  }
});

class Page extends PureComponent {
  render() {
    const { children, classes } = this.props;
    return <div className={classes.root}>{children}</div>;
  }
}

export default withStyles(styles)(Page);
