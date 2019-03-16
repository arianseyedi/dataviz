import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  GridList,
  GridListTile,
  IconButton,
  GridListTileBar
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { withRouter } from "react-router-dom";
import image from "../resources/images/chart.png";
import comingsoon_1 from "../resources/images/comingsoon_1.jpg";
import comingsoon_2 from "../resources/images/comingsoon_2.jpg";
import Page from "../components/shared/Page";

const styles = theme => ({
  body: {
    padding: "10px"
  },
  gridList: {
    display: "flex",
    textAlign: "center"
  },
  activeTile: {
    color: theme.palette.common.black,
    background: theme.palette.primary.light
  },
  inactiveTile: {
    color: theme.palette.common.black,
    background: theme.palette.grey[500]
  },
  activeBorder: {
    border: `1px solid ${theme.palette.primary.light}`
  },
  inactiveBorder: {
    border: `1px solid transparent`
  }
});

const images = [
  {
    file: image,
    title: "Sensor Data",
    author: "Arian",
    cols: 1
  },
  {
    file: comingsoon_1,
    title: "Humidity Data",
    cols: 1
  },
  {
    file: comingsoon_2,
    title: "Integrated Data",
    cols: 2
  }
];

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { activeTileId: null };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  redirectToDataPage = () => {
    this.props.history.push("/data");
  };
  renderBody = () => <React.Fragment>{this.renderGridList()}</React.Fragment>;

  handleMouseEnter = id => {
    this.setState({ activeTileId: id });
  };

  handleMouseLeave = () => {
    this.setState({ activeTileId: null });
  };

  renderGridList = () => {
    const { classes } = this.props;
    return (
      <div className={classes.gridList}>
        <GridList cols={3}>
          {images.map((tile, index) => (
            <GridListTile
              key={index}
              cols={tile.cols || 1}
              onMouseEnter={() => this.handleMouseEnter(index)}
              onMouseLeave={this.handleMouseLeave}
              onClick={
                tile.title === "Sensor Data" ? this.redirectToDataPage : null
              }
              className={
                this.state.activeTileId === index
                  ? classes.activeBorder
                  : classes.inactiveBorder
              }
            >
              <img src={tile.file} alt={tile.title} style={{ margin: 10 }} />
              <GridListTileBar
                titlePosition="bottom"
                className={
                  this.state.activeTileId === index
                    ? classes.activeTile
                    : classes.inactiveTile
                }
                style={{ opacity: 0.7, fontWeight: "bold" }}
                title={tile.title}
                color="black"
                subtitle={
                  tile.author ? (
                    <span>by: {tile.author}</span>
                  ) : (
                    <span>Coming Soon!</span>
                  )
                }
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  };
  renderTitle = () => {
    const { classes } = this.props;
    return (
      <div className={classes.body}>
        <Typography variant="display1">Welcome To DataViz</Typography>
      </div>
    );
  };

  renderPage = () => {
    return <React.Fragment>{this.renderBody()}</React.Fragment>;
  };

  render() {
    return <Page>{this.renderPage()}</Page>;
  }
}

export default withRouter(withStyles(styles)(Home));
