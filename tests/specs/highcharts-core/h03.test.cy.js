describe('03-finding-max', () => {
  beforeEach('passes', () => {
		cy.visit('../../../exercises/highcharts-core/03-finding-max/index.html');
  });

  it('should check if there are 3 series and that max points have proper data labels', () => {
    cy.window().its('Highcharts').then(Highcharts => {
      const chart = Highcharts.charts[0];
      const dataMax = chart.yAxis[0].dataMax;

      expect(chart.series, "There should be 3 series").to.have.length(3);

      for (const series of chart.series) {
        for (const point of series.points) {
          if (point.y === dataMax) {
            expect(point.dataLabel.text.textStr, "Max value points should have data label with text 'max'").to.equal('max');
          } else if (point.dataLabel) {
            expect(point.dataLabel.text.textStr, "Other points should not have data labels").to.equal('');
          }
        }
      }
    });
  });

  it('should check if yAxis has proper max', () => {
    cy.window().its('Highcharts').then(Highcharts => {
      const chart = Highcharts.charts[0];
      const dataMax = chart.yAxis[0].dataMax;

      expect(chart.yAxis[0].max, "Y-Axis max should be exactly 2 times the max value").to.equal(dataMax * 2);
    });
  });
});
