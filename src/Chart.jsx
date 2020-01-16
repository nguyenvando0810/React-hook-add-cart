import React from "react";
import PropTypes from "prop-types";

import { scaleOrdinal, scalePoint } from "d3-scale";
import { set } from "d3-collection";

import { ChartCanvas, Chart } from "react-stockcharts";
import { GroupedBarSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";

function GroupedBarChart(props) {
  // const arr = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"];
  // const f = scaleOrdinal(arr).domain(set(props.data.map(d => d.region)));

  // const fill = (d, i) => f(i);
  return (
    <ChartCanvas
      ratio={props.ratio}
      width={props.width}
      height={500}
      margin={{ left: 40, right: 10, top: 20, bottom: 30 }}
      type={props.type}
      seriesName="Fruits"
      xExtents={list => list.map(d => d.x)}
      data={props.data}
      xAccessor={d => d.x} xScale={scalePoint()}
      padding={1}>
      <Chart id={1}
        yExtents={[0, d => [d.y1, d.y2, d.y3, d.y4]]}>
        <XAxis axisAt="bottom" orient="bottom" />
        <YAxis axisAt="left" orient="left" />
        <GroupedBarSeries yAccessor={[d => d.y1, d => d.y2, d => d.y3, d => d.y4]}
          // fill={fill}
          spaceBetweenBar={3}
        />
      </Chart>
    </ChartCanvas>
  )
}

GroupedBarChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

GroupedBarChart = fitWidth(GroupedBarChart);
export default GroupedBarChart
