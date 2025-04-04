# Exercise 08 - Boosted Chart

Level: easy ⭐

In this exercise, you will learn how to:

1. Implement Boost Module for Large Data Sets.
2. Differentiate Between Boosted and Non-Boosted Series.
3. Configure Multiple Axes for Different Series Types.

In this task, you'll create a Highcharts chart featuring a large boosted column series with 10,000 points and a smaller scatter series. You'll configure each series with separate x-axes and optimize performance using Highcharts' Boost module to handle large datasets efficiently.

![exercise.png](exercise.png)

## Instructions

0. **Good to know**

- To run the test, use the following command: `npm run test-08`

1. **Set Up a Column Series**

- Objective
  - Create a column series with 10,000 data points that is automatically boosted for improved performance.
- Details
  - Generate 10,000 random integer data points for the column series. You can use `Array.from()` or generate data in other, preferable way.
  - Ensure to add the boost mode to enhance rendering efficiency.
- Documentation
  - Boost Module: https://www.highcharts.com/docs/advanced-chart-features/boost-module

2. **Create a Scatter Series**

- Objective
  - Add a scatter series with only 10 data points to be rendered without boost mode.
- Details
  - Generate 10 data points to simulate a smaller data set.
  - Set `boostThreshold` to `0` to explicitly prevent this series from being boosted, regardless of the data size.
- Documentation
  - Series Configuration: https://api.highcharts.com/highcharts/series.scatter
  - Boost Threshold: https://api.highcharts.com/highcharts/series.scatter.boostThreshold

3. **Configure Multiple x-Axes:**

- Objective
  - Set up two x-axes to support the column and scatter series, ensuring proper data representation and alignment.
- Details
  - Configure one x-axis for the column series and another for the scatter series to ensure clarity and correct scaling.
