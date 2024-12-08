Highcharts.chart("container", {
  // Here you can add your chart's config, e.g.
  xAxis: {
    title: {
      text: "X axis title"
    }
  },
  yAxis: {
    title: {
      text: "Y axis title"
    }
  },

  series: [
    {
      data: [2, 6, 4, 7, 9, 3]
    }
  ]
});
