# Exercise 06 - Adding PlotLine and PlotBand

Level: intermediate ⭐⭐

In this exercise, you will learn how to:

1. Generate and Configure Series.
2. Add Custom Plot Lines.
3. Add Custom Plot Bands.

In this task, you'll create a simple column chart and use the load event to set dynamic options when the chart is initially loaded.

![exercise.png](exercise.png)

## Instructions

0. **Good to know**

- To run the test, use the following command: `npm run test-06`

1. **Generate 3 Column Series with Random Data**

- Objective
  - Create three series with random integer data ranging from 0 to 9.
- Details
  - Each series should represent a column chart.
  - Random data can be generated using JavaScript's `Math.random()` function and then rounded to get integers.

2. **Add a Dashed Plot Line**

- Objective
  - Add a dashed plot line at a value of 1.5 times the maximum column value.
- Details
  - Use `plotLines` to add a line to the `yAxis`.
  - Ensure the line is styled as dashed and correctly positioned.
- Documentation
  - Plot Lines: https://api.highcharts.com/highcharts/yAxis.plotLines
  - Dash Style: https://api.highcharts.com/highcharts/plotOptions.series.dashStyle

3. **Add a Plot Band**

- Objective
  - Add a dashed plot band at values from 0.5 times the maximum column value and 1.5 times the maximum column value.
- Details
  - Use `plotBands` to add a band to the `yAxis`.
- Documentation
  - Plot Bands: https://api.highcharts.com/highcharts/yAxis.plotBands
