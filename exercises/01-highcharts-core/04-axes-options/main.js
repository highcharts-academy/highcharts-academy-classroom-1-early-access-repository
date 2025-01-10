Highcharts.chart("container", {
  // Here you can add your chart's config, e.g.
  yAxis: {
    lineColor: "red",
    lineWidth: 5,
  },

  series: [
    {
      type: "column",
      data: [2, 2, null, 4, 5],
    },
  ],
});
