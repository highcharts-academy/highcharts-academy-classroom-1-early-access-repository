# Exercise 01 - Series and Modules
Level: easy ⭐

In this exercise, you will learn how to cearte the following:
1. Create and manage series.
2. Set global defaults (use `Highcharts.setOptions`).
3. Integrate modules: include `exporting` and `accessibility` modules to enhance chart features.


Your task is to modify the chart elements and default settings to exactly match the provided example. 

![exercise.png](exercise.png)

## Instructions:
1. **Series Data**
* Objective
  * Create a column series, line series, and spline series, each with the correct number of points, types, colors, and symbols.
* Details
  * Column Series: Should have 5 points with specific color and null data point checks.
  * Line Series: Should have 6 points, the correct color, and symbol.
  * Spline Series: Should have 6 points, the correct color, and symbol.
* Documentation
  * Series Configuration: https://api.highcharts.com/highcharts/series
  * Example https://www.highcharts.com/demo/highcharts/combo

2. **Default Colors and Symbols**
* Objective
  * Use `Highcharts.setOptions` to set default colors and symbols for all series globally.
* Details
  * For grading purposes, use the following colors: Set to Blue (`#1E90FF`), Green (`#32CD32`), Red (`#FF4500`).
  * Symbols: Set to `square`, `triangle-down`, and `circle`.
* Documentation:
  * `Highcharts.setOptions`: https://api.highcharts.com/class-reference/Highcharts#.setOptions
  * Example: https://www.highcharts.com/demo/highcharts/scatter

3. **Modules**
* Objective
  * Ensure that the `exporting` and `accessibility` modules are correctly loaded.
* Details
  * Ensure that the chart has a menu in the upper right corner and that there are no console warnings.
* Documentation
  * Exporting Module: https://www.highcharts.com/docs/export-module/export-module-overview
  * Accessibility Module: https://www.highcharts.com/docs/accessibility/accessibility-module



