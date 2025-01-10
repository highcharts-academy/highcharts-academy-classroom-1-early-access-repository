# Exercise 12 - Visible Points Zoom

Level: advanced ⭐⭐⭐

In this exercise, you will learn how to:

1. Implement Zoom Functionality in Charts.
2. Dynamically Update Chart Labels Based on Visible Data.
3. Highlight Key Data Points.
4. Utilize Highcharts Events for Custom Interactions.

In this task, you'll create an interactive line chart with 100 random values. As users zoom in or out, a label will show the number of visible points, and the highest point(s) will be highlighted with a red label and dot on the x-axis. Both the "Visible points" label and the markers will update dynamically with each zoom

![exercise.gif](exercise.gif)

## Instructions

0. **Good to know**

- To run the test, use the following command: `npm run test-12`

1. **Set Up a Line Chart with Zoom Capability**

- Objective
  - Create a line chart with zoom functionality enabled on both the `x` and `y` axes.
- Details
  - Use the zoomType option set to `xy` to allow users to zoom in both directions.
  - Initialize the chart with 100 random integer data points.
- Documentation
  - Zoom Options: https://api.highcharts.com/highcharts/chart.zoomType

2. **Add Dynamic Labels to Display Number of Visible Points**

- Objective
  - Show a `label` on the chart that dynamically updates to display the number of visible points when the chart is zoomed.
- Details
  - Use the render event to update the `label` text based on the number of visible data points.
- Documentation
  - Chart Events: https://api.highcharts.com/highcharts/chart.events.render

3. **Highlight the Highest Visible Points with Custom Labels and Markers**

- Objective
  - Identify and highlight the highest visible data points with red labels and markers on the `xAxis`.
- Details
  - Use custom rendering to create text labels and markers for the highest points that are currently visible on the chart.
  - Ensure that these elements are dynamically created and destroyed based on the visible data points.
- Documentation
  - SVG Renderer: https://api.highcharts.com/class-reference/Highcharts.SVGRenderer

4. **Use Highcharts Events for Dynamic Updates**

- Objective
  - Use Highcharts events to dynamically update labels and markers whenever the chart is redrawn or zoomed.
- Details
  - Implement the load event to initialize custom labels and markers.
  - Use the render event to update or destroy these elements based on changes in the chart’s view.
- Documentation
  - Chart Events: https://api.highcharts.com/highcharts/chart.events
