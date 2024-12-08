describe("02-create-series-tests", () => {
  beforeEach(() => {
    // Visit the exercise page
    cy.visit('../../../exercises/highcharts-core/02-create-series/index.html');
  });

  it("should verify the column series data", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];
        const columnSeries = chart.series.find(s => s.type === 'column');

        expect(columnSeries, "Column series should exist").to.exist;
        expect(columnSeries.points.length, "Column series should have 5 points").to.eq(5);

        // Extract the actual data values from the points
        const columnDataValues = columnSeries.data.map(p => p.y);
        expect(columnDataValues, "Column series data should match expected values")
          .to.deep.eq([1, 6, null, 3, 2]);
      });
  });

  it("should verify the line series data", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];
        const lineSeries = chart.series.find(s => s.type === 'line');

        expect(lineSeries, "Line series should exist").to.exist;
        expect(lineSeries.points.length, "Line series should have 6 points").to.eq(6);

        const lineDataValues = lineSeries.data.map(p => p.y);
        expect(lineDataValues, "Line series data should match expected values")
          .to.deep.eq([1.5, 5, 2, 3, 6, 5]);
      });
  });

  it("should verify the spline series data", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];
        const splineSeries = chart.series.find(s => s.type === 'spline');

        expect(splineSeries, "Spline series should exist").to.exist;
        expect(splineSeries.points.length, "Spline series should have 6 points").to.eq(6);

        const splineDataValues = splineSeries.data.map(p => p.y);
        expect(splineDataValues, "Spline series data should match expected values")
          .to.deep.eq([3, 4, 1, 5, 1, 6]);
      });
  });
});
