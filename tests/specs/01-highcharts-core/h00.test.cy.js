describe("00-getting-started-tests", () => {
  beforeEach("passes", () => {
    cy.visit(
      "../../../exercises/01-highcharts-core/00-getting-started/index.html"
    );
  });

  it("should check if the chart is a column chart", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];

        assert.strictEqual(
          chart.options.chart.type,
          "column",
          "The chart type should be column"
        );
      });
  });

  it("should check if series data matches [1, 2, 3, 1.5, 0.4]", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];
        const seriesData = chart.series[0].options.data;

        expect(seriesData).to.deep.equal(
          [1, 2, 3, 1.5, 0.4],
          "The series data should match [1, 2, 3, 1.5, 0.4]"
        );
      });
  });

  it("should check if the annotations module is loaded", () => {
    cy.get('script[src="https://code.highcharts.com/modules/annotations.js"]')
      .should("exist")
      .then(() => {
        cy.window()
          .its("Highcharts")
          .then((Highcharts) => {
            const chart = Highcharts.charts[0];
            expect(chart.annotations).to.exist;
            expect(chart.annotations[0]).to.exist;
          });
      });
  });

  it("should check if the annotation matches the expected details", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];
        const annotation = chart.annotations[0].userOptions.labels[0];

        expect(annotation.point.x).to.equal(
          2,
          "Annotation x point should be 2"
        );
        expect(annotation.point.y).to.equal(
          3,
          "Annotation y point should be 3"
        );
        expect(annotation.point.xAxis).to.equal(
          0,
          "Annotation xAxis should be 0"
        );
        expect(annotation.point.yAxis).to.equal(
          0,
          "Annotation yAxis should be 0"
        );
        expect(annotation.text).to.equal(
          "Middle point",
          "Annotation text should be 'Middle point'"
        );
      });
  });
});
