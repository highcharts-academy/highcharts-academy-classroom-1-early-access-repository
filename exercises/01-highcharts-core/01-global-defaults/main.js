Highcharts.chart("container", {
  yAxis: {
    title: {
      text: "yAxis title",
    },
  },
  xAxis: {
    title: {
      text: "xAxis title",
    },
  },
  series: [
    {
      type: "column",
      data: [1, 2, 3, 4],
    },
    {
      type: "line",
      data: [5, 6, 7, 8],
    },
    {
      type: "spline",
      data: [9, 5, 6, 7],
    },
  ],
});
