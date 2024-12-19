describe("08-accessible-chart-tests", () => {
  beforeEach("passes", () => {
    cy.visit(
      "../../exercises/highcharts-accessibility/01-accessible-chart-options/index.html",
    );
  });

  it("should check if Accessibility module is loaded", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];
        const module = "accessibility";

        expect(chart[module], `${module} should be imported`).to.exist;
      });
  });

  it("Should check if the chart has title, subtitle and axes titles", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];
        const chartOptions = chart.options;

        expect(
          chartOptions.title.text,
          'The chart title should be set to "Highcharts chart"',
        ).to.equal("Monthly Sales Data");

        expect(
          chartOptions.subtitle.text,
          'The subtitle should be set to "Per category"',
        ).to.equal("Per category");

        expect(chartOptions.xAxis[0].categories).to.deep.equal(
          ["January", "February", "March", "April", "May"],
          "The x-axis categories should be set to ['January', 'February', 'March', 'April', 'May']",
        );

        expect(
          chartOptions.yAxis[0].title.text,
          'The y-axis title should be set to "Sales (in USD)"',
        ).to.equal("Sales (in USD)");
      });
  });

  it("Should check if the series has a name", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];

        expect(
          chart.series[0].name,
          'The series name should be "Phones"',
        ).to.equal("Phones");

        expect(
          chart.series[1].name,
          'The series name should be "Tablets"',
        ).to.equal("Tablets");
      });
  });

  it("Should check if tooltip has correct suffix and if it is sticky", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];
        const chartOptions = chart.options;
        const tooltip = chartOptions.tooltip;

        expect(
          tooltip.valueSuffix,
          'The tooltip value suffix should be set to " USD"',
        ).to.equal(" USD");

        expect(tooltip.stickOnContact, "The tooltip should be sticky").to.be
          .true;
      });
  });

  it("Chart should have a description element with text content.", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];
        const descriptionText =
          chart.accessibility.components.infoRegions.linkedDescriptionElement
            .textContent;
        cy.get(".highcharts-description").then((desc) => {
          expect(
            desc,
            "Chart should have a <p> element with the correct classname",
          ).to.exist;
        });

        expect(
          descriptionText,
          "The description text should be set to have content",
        ).to.not.be.empty;
      });
  });
});
