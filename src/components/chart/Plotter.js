import React from "react";
import { TimeSeries } from "pondjs";
import {
  ChartContainer,
  YAxis,
  LineChart,
  Resizable,
  ChartRow,
  Charts,
  styler,
  Legend
} from "react-timeseries-charts";
import _ from "underscore";
import { format } from "d3-format";

// Data
const CH01SE01 = require("../../resources/data/CH01SE01.json");
const CH01SE14 = require("../../resources/data/CH01SE14.json");
const CH03SE01 = require("../../resources/data/CH03SE01.json");

function buildPoints() {
  const CH01SE01Pts = CH01SE01.data;
  const CH01SE14Pts = CH01SE14.data;
  const CH03SE01Pts = CH03SE01.data;
  let points = [];
  for (let i = 0; i < CH01SE01Pts.length; i++) {
    points.push([
      CH01SE01Pts[i][0],
      CH01SE01Pts[i][1],
      CH01SE14Pts[i][1],
      CH03SE01Pts[i][1]
    ]);
  }
  return points;
}

const temperatureSeries = new TimeSeries({
  name: "TemperatureData",
  columns: ["time", "CH01SE01", "CH01SE14", "CH03SE01"],
  points: buildPoints()
});

const style = styler([
  { key: "CH01SE01", color: "steelblue", width: 2 },
  { key: "CH01SE14", color: "#F68B24", width: 2 },
  { key: "CH03SE01", color: "red", width: 2 }
]);

class CrossHairs extends React.Component {
  render() {
    const { x, y } = this.props;
    const style = { pointerEvents: "none", stroke: "#ccc" };
    if (!_.isNull(x) && !_.isNull(y)) {
      return (
        <g>
          <line style={style} x1={0} y1={y} x2={this.props.width} y2={y} />
          <line style={style} x1={x} y1={0} x2={x} y2={this.props.height} />
        </g>
      );
    } else {
      return <g />;
    }
  }
}

class Plotter extends React.Component {
  state = {
    tracker: null,
    timerange: temperatureSeries.range(),
    x: null,
    y: null
  };

  handleTrackerChanged = tracker => {
    if (!tracker) {
      this.setState({ tracker, x: null, y: null });
    } else {
      this.setState({ tracker });
    }
  };

  handleTimeRangeChange = timerange => {
    console.log(timerange);
    this.setState({ timerange });
  };

  handleMouseMove = (x, y) => {
    this.setState({ x, y });
  };

  render() {
    const f = format(".2f");
    const range = this.state.timerange;

    let CH01SE14Val, CH01SE01Val, CH03SE01Val;
    if (this.state.tracker) {
      const index = temperatureSeries.bisect(this.state.tracker);
      const trackerEvent = temperatureSeries.at(index);
      CH01SE01Val = `${f(trackerEvent.get("CH01SE01"))}`;
      CH01SE14Val = `${f(trackerEvent.get("CH01SE14"))}`;
      CH03SE01Val = `${f(trackerEvent.get("CH03SE01"))}`;
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Resizable>
              <ChartContainer
                timeRange={range}
                timeAxisStyle={{
                  ticks: {
                    stroke: "#AAA",
                    opacity: 0.25,
                    "stroke-dasharray": "1,1"
                  },
                  values: {
                    fill: "#AAA",
                    "font-size": 12
                  }
                }}
                showGrid={true}
                paddingRight={25}
                maxTime={temperatureSeries.range().end()}
                minTime={temperatureSeries.range().begin()}
                timeAxisAngledLabels={true}
                timeAxisHeight={60}
                onTrackerChanged={this.handleTrackerChanged}
                onBackgroundClick={() => this.setState({ selection: null })}
                onTimeRangeChanged={this.handleTimeRangeChange}
                onMouseMove={(x, y) => this.handleMouseMove(x, y)}
                minDuration={60 * 60 * 5}
              >
                <ChartRow height="400">
                  <YAxis
                    id="y"
                    label="(deg C)"
                    min={100}
                    max={250}
                    style={{
                      ticks: {
                        stroke: "#AAA",
                        opacity: 0.25,
                        "stroke-dasharray": "1,1"
                      }
                    }}
                    showGrid
                    hideAxisLine
                    width="80"
                    type="linear"
                    format=".2f"
                  />
                  <Charts>
                    <LineChart
                      axis="y"
                      breakLine={false}
                      series={temperatureSeries}
                      columns={["CH01SE01", "CH01SE14", "CH03SE01"]}
                      style={style}
                      interpolation="curveBasis"
                      highlight={this.state.highlight}
                      onHighlightChange={highlight =>
                        this.setState({ highlight })
                      }
                      selection={this.state.selection}
                      onSelectionChange={selection =>
                        this.setState({ selection })
                      }
                    />
                    <CrossHairs x={this.state.x} y={this.state.y} />
                  </Charts>
                </ChartRow>
              </ChartContainer>
            </Resizable>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <span>
              <Legend
                type="line"
                align="right"
                style={style}
                highlight={this.state.highlight}
                onHighlightChange={highlight => this.setState({ highlight })}
                selection={this.state.selection}
                onSelectionChange={selection => this.setState({ selection })}
                categories={[
                  {
                    key: "CH01SE01",
                    label: "CH01SE01",
                    value: CH01SE01Val || "\u200C" // zero-width non-joiner
                  },
                  {
                    key: "CH01SE14",
                    label: "CH01SE14",
                    value: CH01SE14Val || "\u200C" // zero-width non-joiner
                  },
                  {
                    key: "CH03SE01",
                    label: "CH03SE01",
                    value: CH03SE01Val || "\u200C" // zero-width non-joiner
                  }
                ]}
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Plotter;
