function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result !== null
      ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
      : null;
};

// color coming in as hex
function getLuminance(hex) {
  // Transforming hex to Rgb
  const rgb = hexToRgb(hex);
  console.log('test', rgb);

  // calculating relative luminance from rgb values
  const a = [rgb.r, rgb.g, rgb.b].map((v) => {
      // Dividing the value by 255 to normalize it to a range of 0 to 1
      v /= 255;
      // Applying a piecewise gamma correction.
      // If value is less than or equal to 0.03928, divide by 12.92.
      // Otherwise, add 0.055 and raise to the power of 2.4
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  // calculating relative luminance as a number. The relative luminance can range from 0 (black) to 1 (white)
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

function calculateContrastRatio(hex1, hex2) {
  const luminance1 = getLuminance(hex1);
  const luminance2 = getLuminance(hex2);

  return (
      (Math.max(luminance1, luminance2) + 0.05) /
      (Math.min(luminance1, luminance2) + 0.05)
  );
};

describe("08-accessible-chart-tests", () => {
  beforeEach("passes", () => {
		cy.visit("../../exercises/highcharts-accessibility/02-accessible-colors/index.html");

  });

  it("Columns should have enough contrast to background color of the chart.", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];
        const backgroundColor = chart.options.chart.backgroundColor;
        const blueSeriesColor = chart.series[0].color;
        const purpleSeriesColor = chart.series[1].color;

        const contrastBlueSeries = calculateContrastRatio(blueSeriesColor, backgroundColor);
        const contrastPurpleSeries = calculateContrastRatio(purpleSeriesColor, backgroundColor);

        console.log(chart.backgroundColor);

        expect(
          contrastBlueSeries,
          `The contrast ratio of the blue series should be at least 3:1, but it was ${contrastBlueSeries}`,
        ).to.be.greaterThan(3);

        expect(
          contrastPurpleSeries,
          `The contrast ratio of the purple series should be at least 3:1, but it was ${contrastPurpleSeries}`,
        ).to.be.greaterThan(3);




      });
  });


});