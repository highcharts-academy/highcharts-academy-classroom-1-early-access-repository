# Exercise 09 - Separate Axes

Level: advanced ⭐⭐⭐

In this exercise, you will learn how to:

1. Create Dual-Axis Charts.
2. Customize Axis Labels and Positionsn.
3. Manage Series Grouping and Data Labels.
4. Implement Custom Rendering Logic.

In this task, you will create a dual-axis bar chart with separate y axes (for managerial and non-managerial data). You will configure each axis and series independently to display different data sets, ensuring each axis is correctly aligned and all data points and labels are rendered as expected. Additionally, you will use a trick involving a "fake series" to create background bars, enhancing the visual clarity of the chart.

![05-separate-axes](https://github.com/user-attachments/assets/72971e74-a6d0-4586-a61e-0773523a5e12)

## Instructions

0. **Good to know**

- To run the test, use the following command: `npm run test-09`

1. **Set Up Dual y-Axes for Different Data Sets**

- Objective
  - Create two y-axes.
- Details
  - Left y-axis: Reversed, displaying managerial data.
  - Right y-axis: Displaying non-managerial data.
  - Both axes should have the same range (0 to 100) and tick intervals for consistent scaling.
  - x-axis (interpreted as a vertical axis in this context) should be hidden.
- Documentation
  - yAxis Configuration: https://api.highcharts.com/highcharts/yAxis
  - yAxis offset: https://api.highcharts.com/highcharts/xAxis.offset
  - Link managerial series to the left axis and non-managerial series to the right axis: https://api.highcharts.com/highcharts/series.column.yAxis
  - xAxis Configuration: https://api.highcharts.com/highcharts/xAxis.visible

2. **Customize and Position Axis Labels**

- Objective
  - Position axis labels in the center of each axis and ensure they update correctly when the chart is rendered.
- Details
  - Use a custom function `centerLabelOnAxis` to dynamically center the labels for each y-axis.
  - Update the labels during the chart’s render event to keep them aligned.
- Documentation
  - Renderer Text: https://api.highcharts.com/class-reference/Highcharts.SVGRenderer#text
  - Label alignment `left` or `right`: https://api.highcharts.com/highcharts/series.column.dataLabels.align

3. **Manage Series Configuration and Grouping**

- Objective
  - Configure the series to manage grouping, data labels, and hover behaviors correctly.
- Details
  - Set grouping to false for both series to display them independently.
  - Enable data labels for real series and disable them for mock/fake series. For real series, data labels should be positioned inside the bars, and aligned to the opposite side of the chart.
  - Each series should have exactly 5 data points.
- Documentation
  - Series Configuration: https://api.highcharts.com/highcharts/series
  - Data Labels: https://api.highcharts.com/highcharts/plotOptions.series.dataLabels
  - Disable grouping: https://api.highcharts.com/highcharts/plotOptions.column.grouping
  - Axes width: https://api.highcharts.com/highcharts/xAxis.width

4. **Ensure Proper Alignment and Visibility of Axes and Series**

- Objective
  - Validate that all axes and series are correctly aligned and visible according to their configurations.
- Details
  - Verify the positioning of left and right y-axes and ensure they are less than half the viewport width for clarity.
  - Check that series data points are correctly set and that mock/fake series are visible but not interactive.
  - Be sure that all data points in the mock series have a value of 100, as they are intended to serve as a static background.
  - Be sure that the mock series is drawn below (has a lower index) than the real series.
- Documentation
  - Series Configuration: https://api.highcharts.com/highcharts/series
  - `zIndex`: https://api.highcharts.com/highcharts/series.line.zIndex
