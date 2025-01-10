describe("05-finding-max", () => {
  beforeEach("passes", () => {
    cy.visit("../../../exercises/01-highcharts-core/05-finding-max/index.html");
  });

  // Test for Question 1: Generate 3 Column Series with Random Data
  it("should check if there are 3 series and each series has 3 random data points", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];

        // Check there are 3 series
        expect(chart.series, "There should be 3 series").to.have.length(3);

        for (const series of chart.series) {
          // Check each series has exactly 3 points
          expect(
            series.points,
            `Series '${series.name}' should have 3 points`
          ).to.have.length(3);

          // Check all points have values between 0 and 9
          for (const point of series.points) {
            expect(
              point.y,
              `Point value in series '${series.name}' should be between 0 and 9`
            )
              .to.be.gte(0)
              .and.to.be.lte(9);
          }
        }
      });
  });

  // Test for Question 2: Identify the Maximum Column and Add Data Labels
  it("should check if max points have proper data labels and others do not", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];
        const dataMax = chart.yAxis[0].dataMax;

        for (const series of chart.series) {
          for (const point of series.points) {
            if (point.y === dataMax) {
              // Max points should have a data label with text 'max'
              expect(
                point.dataLabel.text.textStr,
                "Max value points should have data label with text 'max'"
              ).to.equal("max");
            } else if (point.dataLabel) {
              // Other points should not have any data labels
              expect(
                point.dataLabel.text.textStr,
                "Other points should not have data labels"
              ).to.equal("");
            }
          }
        }
      });
  });

  // Test for Question 3: Set Dynamic yAxis Maximum to Twice the Maximum Data Value
  it("should check if yAxis has a maximum value set to twice the max column value", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];
        const dataMax = chart.yAxis[0].dataMax;

        // Check if yAxis maximum is exactly twice the dataMax
        expect(
          chart.yAxis[0].max,
          "Y-Axis max should be exactly 2 times the max value"
        ).to.equal(dataMax * 2);
      });
  });
});
