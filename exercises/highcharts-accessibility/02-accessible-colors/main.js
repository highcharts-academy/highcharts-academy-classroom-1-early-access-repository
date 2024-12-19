Highcharts.chart("container", {
  title: {
    text: "Monthly Sales Data",
  },
  subtitle: {
    text: "Per category",
  },
  chart: {
    type: "column",
  },
  xAxis: {
    categories: ["January", "February", "March", "April", "May"],
  },
  yAxis: {
    title: {
      text: "Sales (in USD)",
    },
  },
  tooltip: {
    valueSuffix: " USD",
    stickOnContact: true,
  },
  series: [
    {
      name: "Phones",
      data: [15000, 20000, 25000, 30000, 35000],
      color: "#2CAFFE",
    },
    {
      name: "Tablets",
      data: [10000, 15000, 20000, 25000, 30000],
      color: "#544FC5",
    },
  ],
});
