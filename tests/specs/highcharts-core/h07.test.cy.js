describe("07-minimal-charts", () => {
  beforeEach(() => {
    cy.visit("../../../exercises/highcharts-core/07-minimal-charts/index.html");
  });

  // Test 1: Validate the spline chart
  it("should render the spline chart correctly", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const matchedChart = Highcharts.charts.find(
          (chart) => chart.series[0]?.type === "spline",
        );

        expect(matchedChart, "Spline chart should exist").to.exist;
        expect(
          matchedChart.series[0]?.data.length,
          "Spline chart should have 6 data points",
        ).to.equal(6);
      });
  });

  // Test 2: Validate the areaspline chart
  it("should render the areaspline chart correctly", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const matchedChart = Highcharts.charts.find(
          (chart) => chart.series[0]?.type === "areaspline",
        );

        expect(matchedChart, "Areaspline chart should exist").to.exist;
        expect(
          matchedChart.series[0]?.data.length,
          "Areaspline chart should have 6 data points",
        ).to.equal(6);
      });
  });

  // Test 3: Validate the column chart
  it("should render the column chart correctly", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const matchedChart = Highcharts.charts.find(
          (chart) => chart.series[0]?.type === "column",
        );

        expect(matchedChart, "Column chart should exist").to.exist;
        expect(
          matchedChart.series[0]?.data.length,
          "Column chart should have 6 data points",
        ).to.equal(6);

        const thirdPoint = matchedChart.series[0]?.data[2]?.y;
        assert.strictEqual(
          thirdPoint === 0 || thirdPoint === null || thirdPoint === undefined,
          true,
          "The third point of the column series should be 0, null, or undefined",
        );
      });
  });

  // Test 4: Validate the pie chart
  it("should render the pie chart correctly", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const matchedChart = Highcharts.charts.find(
          (chart) => chart.series[0]?.type === "pie",
        );

        expect(matchedChart, "Pie chart should exist").to.exist;
        expect(
          matchedChart.series[0]?.data.length,
          "Pie chart should have 3 data points",
        ).to.equal(3);
      });
  });

  // Test 5: Validate global Highcharts options
  it("should set global Highcharts options correctly", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        // Validate applied settings via one of the rendered charts
        const chart = Highcharts.charts[0];
        expect(chart, "A chart should exist").to.exist;

        // Validate yAxis global settings
        const yAxisOptions = chart.yAxis[0].options;
        expect(
          yAxisOptions.gridLineWidth,
          "Global yAxis gridLineWidth should be 0",
        ).to.equal(0);
        expect(
          yAxisOptions.title?.text,
          "Global yAxis title text should be empty",
        ).to.equal("");
        expect(
          yAxisOptions.labels?.enabled,
          "Global yAxis labels should be disabled",
        ).to.equal(false);

        // Validate xAxis global settings
        const xAxisOptions = chart.xAxis[0].options;
        expect(
          xAxisOptions.lineWidth,
          "Global xAxis lineWidth should be 0",
        ).to.equal(0);
        expect(
          xAxisOptions.tickLength,
          "Global xAxis tickLength should be 0",
        ).to.equal(0);
        expect(
          xAxisOptions.labels?.enabled,
          "Global xAxis labels should be disabled",
        ).to.equal(false);

        // Validate tooltip global settings
        const tooltipOptions = chart.tooltip.options;
        expect(
          tooltipOptions.outside,
          "Global tooltip should be outside",
        ).to.equal(true);

        // Validate plotOptions for series
        const plotOptionsSeries = chart.options.plotOptions?.series || {};
        expect(
          plotOptionsSeries.marker?.enabled,
          "Global series marker should be disabled",
        ).to.equal(false);

        // Validate pie-specific plot options
        const pieOptions =
          Highcharts.charts.find((c) => c.series[0]?.type === "pie")?.options
            .plotOptions?.pie || {};
        expect(
          pieOptions.dataLabels?.enabled,
          "Global pie dataLabels should be disabled",
        ).to.equal(false);

        // Validate global legend and credits
        expect(
          chart.options.legend?.enabled,
          "Global legend should be disabled",
        ).to.equal(false);
        expect(
          chart.options.credits?.enabled,
          "Global credits should be disabled",
        ).to.equal(false);

        // Validate title global setting
        expect(
          chart.options.title?.text,
          "Global title text should be empty",
        ).to.equal("");
      });
  });
});
