import { useMemo } from "react";
import * as d3 from "d3";

const MARGIN = 30;

const colors = [
  "rgba(14, 225, 105, 1)",
  "rgba(255, 74, 74, 1)",
  "rgba(243, 189, 51, 1)",
];

export const DonutChart = ({ width, height, data }) => {
  const radius = Math.min(width, height) / 2 - MARGIN;

  const pie = useMemo(() => {
    const pieGenerator = d3.pie().value((d) => d.value);
    return pieGenerator(data);
  }, [data]);

  const arcs = useMemo(() => {
    const arcPathGenerator = d3.arc();
    return pie.map((p) =>
      arcPathGenerator({
        innerRadius: 70,
        outerRadius: radius,
        startAngle: p.startAngle,
        endAngle: p.endAngle,
      })
    );
  }, [radius, pie]);

  return (
    <svg width={width} height={height} >
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {arcs.map((arc, i) => {
          return <path key={i} d={arc} fill={colors[i]} />;
        })}
      </g>
    </svg>
  );
};
