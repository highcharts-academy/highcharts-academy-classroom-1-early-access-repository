describe("02-axes-options-tests", () => {
  beforeEach("passes", () => {
    cy.visit("../../../exercises/highcharts-core/04-axes-option/index.html");
  });

  it("should check if axes are set correctly", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];

        assert.strictEqual(
          chart.xAxis[0].userOptions.title.text,
          "xAxis title",
          "xAxis title should be named: xAxis title",
        );

        assert.strictEqual(
          chart.yAxis[0].userOptions.title.text,
          "yAxis title",
          "yAxis title should be named: yAxis title",
        );
        assert.strictEqual(
          chart.yAxis[0].userOptions.labels.style.color,
          "#32CD32",
          "yAxis labels color should be set to green",
        );
        assert.strictEqual(
          chart.yAxis[0].userOptions.labels.format,
          "{text} k",
          'yAxis labels should have "k" at the end',
        );
      });
  });

  it("should check minor chart elements settings", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chartOptions = Highcharts.charts[0].userOptions;

        expect(
          chartOptions.title.text,
          'The chart title should be set to "Highcharts chart"',
        ).to.equal("Highcharts chart");
        expect(
          chartOptions.title.align,
          "The chart title should be aligned to the left",
        ).to.equal("left");

        expect(
          chartOptions.subtitle.text,
          'The subtitle should be set to "With modified default elements"',
        ).to.equal("With modified default elements");
        expect(
          chartOptions.subtitle.align,
          "The subtitle should be aligned to the left",
        ).to.equal("left");

        expect(
          chartOptions.legend.align,
          "The legend should be aligned to the left",
        ).to.equal("left");
        expect(
          chartOptions.legend.verticalAlign,
          "The legend should be vertically aligned to the top",
        ).to.equal("top");

        expect(
          chartOptions.credits.text,
          'The credits text should be set to "Highcharts website"',
        ).to.equal("Highcharts website");
        expect(
          chartOptions.credits.position.align,
          "The credits should be aligned to the left",
        ).to.equal("left");
      });
  });
});
