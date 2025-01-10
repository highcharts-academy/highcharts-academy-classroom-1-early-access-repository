describe("01-global-defaults-tests", () => {
  beforeEach("visit the exercise page", () => {
    cy.visit('../../../exercises/highcharts-core/01-global-defaults/index.html');
  });

  it("should check if default colors and symbols were set by Highcharts.setOptions", () => {
    cy.window().then((win) => {
      const defaultOptions = win.Highcharts.getOptions();

      // Check the default colors
      expect(defaultOptions.colors).to.deep.equal(
        ["#1E90FF", "#32CD32", "#FF4500"],
        "Colors (blue, green, and red) should be set through Highcharts.setOptions"
      );

      // Check the default symbols
      expect(defaultOptions.symbols).to.deep.equal(
        ["square", "triangle-down", "circle"],
        "Symbols (square, triangle-down, and circle) should be set through Highcharts.setOptions"
      );
    });
  });

  it("should ensure the global settings are applied to a chart instance", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];

        // Verify the chart instance exists
        expect(chart).to.exist;

        // Verify that the series inherit the global colors and symbols
        const expectedColors = ["#1E90FF", "#32CD32", "#FF4500"];
        const expectedSymbols = ["square", "triangle-down", "circle"];

        chart.series.forEach((series, index) => {
          const seriesColor = series.color;
          const seriesSymbol = series.options.marker?.symbol;

          // Check series color
          expect(seriesColor).to.equal(
            expectedColors[index],
            `Series ${index + 1} should have the correct default color`
          );

          // Check series symbol (if applicable)
          if (seriesSymbol) {
            expect(seriesSymbol).to.equal(
              expectedSymbols[index],
              `Series ${index + 1} should have the correct default symbol`
            );
          }
        });
      });
  });
});
