describe("04-axes-options-tests", () => {
  beforeEach("passes", () => {
    cy.visit(
      "../../../exercises/01-highcharts-core/04-axes-options/index.html"
    );
    cy.window().its("Highcharts.charts").should("have.length.greaterThan", 0); // Wait until the chart exists
  });

  it("should check if axes are set correctly", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];
        assert.isDefined(chart, "The chart should be initialized");

        // Assertions for axes
        assert.strictEqual(
          chart.xAxis[0].options.title.text,
          "xAxis title",
          "xAxis title should be named: xAxis title"
        );

        assert.strictEqual(
          chart.yAxis[0].options.title.text,
          "yAxis title",
          "yAxis title should be named: yAxis title"
        );
        assert.strictEqual(
          chart.yAxis[0].options.labels.style.color,
          "#32CD32",
          "yAxis labels color should be set to green"
        );
        // Allow both "{value} k" and "{text} k" formats
        const yAxisLabelFormat = chart.yAxis[0].options.labels.format;
        const isValidFormat =
          yAxisLabelFormat === "{value} k" || yAxisLabelFormat === "{text} k";
        assert.isTrue(
          isValidFormat,
          'yAxis labels format should be either "{value} k" or "{text} k"'
        );
      });
  });

  it("should check minor chart elements settings", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chartOptions = Highcharts.charts[0].options;

        expect(
          chartOptions.title.text,
          'The chart title should be set to "Highcharts chart"'
        ).to.equal("Highcharts chart");
        expect(
          chartOptions.title.align,
          "The chart title should be aligned to the left"
        ).to.equal("left");

        expect(
          chartOptions.subtitle.text,
          'The subtitle should be set to "With modified default elements"'
        ).to.equal("With modified default elements");
        expect(
          chartOptions.subtitle.align,
          "The subtitle should be aligned to the left"
        ).to.equal("left");

        expect(
          chartOptions.legend.align,
          "The legend should be aligned to the left"
        ).to.equal("left");
        expect(
          chartOptions.legend.verticalAlign,
          "The legend should be vertically aligned to the top"
        ).to.equal("top");

        expect(
          chartOptions.credits.text,
          'The credits text should be set to "Highcharts website"'
        ).to.equal("Highcharts website");
        expect(
          chartOptions.credits.position.align,
          "The credits should be aligned to the left"
        ).to.equal("left");
      });
  });
});
