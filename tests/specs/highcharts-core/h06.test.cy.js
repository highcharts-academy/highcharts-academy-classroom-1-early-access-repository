describe('04-plotLine-plotBand', () => {
  beforeEach('passes', () => {
		cy.visit('../../../exercises/highcharts-core/06-plotLine-plotBand/index.html');
  });

  it('should check if there are 3 series', () => {
    cy.window().its('Highcharts').then(Highcharts => {
      const chart = Highcharts.charts[0];
      const dataMax = chart.yAxis[0].dataMax;

      expect(chart.series, "There should be 3 series").to.have.length(3);
    });
  });

  it('should check if plotLine is added correctly proper max', () => {
    cy.window().its('Highcharts').then(Highcharts => {
      const chart = Highcharts.charts[0];

      expect(chart.yAxis[0].options.plotLines).to.exist;

      const plotLine = chart.yAxis[0].options.plotLines[0];

      expect(plotLine.dashStyle.toLowerCase()).to.equal('dash');
      cy.get('#container svg path.highcharts-plot-line').should('exist')
        .and('have.attr', 'stroke-dasharray');
    });
  });

  it('should add plotBand with correct range', () => {
    cy.window().its('Highcharts').then(Highcharts => {
      const chart = Highcharts.charts[0];

      expect(chart.yAxis[0].options.plotBands).to.exist;

      const plotBand = chart.yAxis[0].options.plotBands[0];

      expect(plotBand.from).to.be.closeTo(chart.yAxis[0].dataMax * 0.5, 0.1);
      expect(plotBand.to).to.be.closeTo(chart.yAxis[0].dataMax * 1.2, 0.1);
      cy.get('#container svg path.highcharts-plot-band').should('exist')
    });
  });
});
