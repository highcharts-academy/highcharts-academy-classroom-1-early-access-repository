describe('06-plotLine-plotBand', () => {
  beforeEach('passes', () => {
    cy.visit('../../../exercises/highcharts-core/06-plotLine-plotBand/index.html');
  });

  // Test to check the number of series
  it('should check if there are 3 series', () => {
    cy.window().its('Highcharts').then(Highcharts => {
      const chart = Highcharts.charts[0];
      expect(chart.series, "There should be 3 series").to.have.length(3);
    });
  });

  // Test to check if the plotLine is added correctly
  it('should check if plotLine is added correctly with proper max value', () => {
    cy.window().its('Highcharts').then(Highcharts => {
      const chart = Highcharts.charts[0];

      expect(chart.yAxis[0].options.plotLines).to.exist;

      const plotLine = chart.yAxis[0].options.plotLines[0];

      // Check plotLine properties
      expect(plotLine.dashStyle.toLowerCase()).to.equal('dash');
      expect(plotLine.value, "PlotLine value should be 1.5x the max value")
        .to.be.closeTo(chart.yAxis[0].dataMax * 1.5, 0.1);

      // Ensure the plotLine is rendered in the DOM
      cy.get('#container svg path.highcharts-plot-line').should('exist')
        .and('have.attr', 'stroke-dasharray');
    });
  });

  // Test to check if the plotBand is added correctly with the correct range
  it('should add plotBand with correct range', () => {
    cy.window().its('Highcharts').then(Highcharts => {
      const chart = Highcharts.charts[0];

      expect(chart.yAxis[0].options.plotBands).to.exist;

      const plotBand = chart.yAxis[0].options.plotBands[0];

      // Check plotBand range
      expect(plotBand.from, "PlotBand 'from' value should be 0.5x the max value")
        .to.be.closeTo(chart.yAxis[0].dataMax * 0.5, 0.1);
      expect(plotBand.to, "PlotBand 'to' value should be 1.2x the max value")
        .to.be.closeTo(chart.yAxis[0].dataMax * 1.2, 0.1);

      // Ensure the plotBand is applied to the chart
      cy.get('#container').should('exist');
    });
  });
});
