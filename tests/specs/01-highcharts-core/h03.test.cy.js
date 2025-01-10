describe("03-modules-tests", () => {
  beforeEach(() => {
    cy.visit("../../../exercises/01-highcharts-core/03-modules/index.html");
  });

  it("should verify that the exporting module is loaded", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        // Check for a function that the exporting module adds
        expect(
          Highcharts.Chart.prototype.exportChart,
          "Exporting module should add exportChart function"
        ).to.be.a("function");
      });
  });

  it("should verify that the accessibility module is loaded", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];
        // The presence of chart.accessibility indicates the accessibility module is loaded
        expect(
          chart.accessibility,
          "Accessibility module should add chart.accessibility"
        ).to.exist;
      });
  });
});
