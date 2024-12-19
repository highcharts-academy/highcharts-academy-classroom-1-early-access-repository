Highcharts.chart("container", {
  chart: {
    type: "column",
  },
  series: [
    {
      data: [1, 2, 3, 1.5, 0.4],
    },
  ],
  annotations: [
    {
      labels: [
        {
          point: {
            x: 2,
            y: 3,
            xAxis: 0,
            yAxis: 0,
          },
          text: "Middle point",
        },
      ],
    },
  ],
});
