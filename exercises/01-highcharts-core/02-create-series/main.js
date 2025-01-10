Highcharts.chart("container", {
  title: {
    text: "Highcharts chart",
    align: "left",
  },
  subtitle: {
    text: "With modified default elements",
    align: "left",
  },
  legend: {
    align: "left",
    verticalAlign: "top",
  },
  credits: {
    text: "Highcharts website",
    position: {
      align: "left",
      x: 10,
    },
  },
  yAxis: {
    title: {
      text: "yAxis title",
    },
    labels: {
      format: "{text} k",
      style: {
        color: "green",
      },
    },
  },
  xAxis: {
    title: {
      text: "xAxis title",
    },
  },
  series: [
    {
      data: [1, 1, null, 1, 1],
    },
    {
      data: [3, 4, 1, 0, 0, 0],
    },
    {
      data: [1.5, 5, 2, 3],
    },
  ],
});
