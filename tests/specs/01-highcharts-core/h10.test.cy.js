describe("Line Chart with Custom Cursor and Click Points", () => {
  const clickPosition = { x: 500, y: 200 }; // Position to trigger click
  const mouseMovePosition = { x: 300, y: 250 }; // Position to trigger mousemove

  beforeEach(() => {
    cy.viewport(800, 600);
    cy.visit("../../../exercises/01-highcharts-core/10-click-mousemove-cursor/index.html");
  });

  it("should render the chart", () => {
    cy.get(".highcharts-container").should("be.visible");
  });

  it("should have a custom cursor that follows the mouse", () => {
    cy.get(".highcharts-container")
      .trigger("mousemove", mouseMovePosition.x, mouseMovePosition.y);

    cy.window()
      .its("Highcharts.charts[0]")
      .then((chart) => {
        const cursor = chart.circleCursor;
        expect(cursor, "Custom cursor should exist").to.exist;

        // Validate cursor attributes
        const cursorX = cursor.attr("x");
        const cursorY = cursor.attr("y");

        expect(cursorX, "Cursor x position").to.equal(mouseMovePosition.x);
        expect(cursorY, "Cursor y position").to.equal(mouseMovePosition.y);
      });
  });

  it("should add a circle and text on chart click", () => {
    cy.get(".highcharts-container")
      .trigger("click", clickPosition.x, clickPosition.y);

    cy.window()
      .its("Highcharts.charts[0]")
      .then((chart) => {
        const customPoints = chart.customPoints;
        expect(customPoints, "Custom points array should not be empty").to.have
          .length.greaterThan(0);

        const lastPoint = customPoints[customPoints.length - 1];
        expect(lastPoint.circleGfx.attr("x"), "Circle x position").to.equal(
          clickPosition.x
        );
        expect(lastPoint.circleGfx.attr("y"), "Circle y position").to.equal(
          clickPosition.y
        );

        const textContent = lastPoint.textGfx.element.textContent;
        const x = chart.xAxis[0].toValue(clickPosition.x);
        const y = chart.yAxis[0].toValue(clickPosition.y);

        expect(textContent).to.contain(`x: ${x.toFixed(2)}`);
        expect(textContent).to.contain(`y: ${y.toFixed(2)}`);
      });
  });

  it("should update custom points correctly on window resize", () => {
    cy.get(".highcharts-container")
      .trigger("click", clickPosition.x, clickPosition.y);

    cy.window()
      .its("Highcharts.charts[0]")
      .then((chart) => {
        const xAxis = chart.xAxis[0];
        const yAxis = chart.yAxis[0];

        const x = xAxis.toValue(clickPosition.x);
        const y = yAxis.toValue(clickPosition.y);

        cy.viewport(400, 500);

        const updatedX = xAxis.toPixels(x);
        const updatedY = yAxis.toPixels(y);

        const customPoints = chart.customPoints;
        const lastPoint = customPoints[customPoints.length - 1];

        expect(
          lastPoint.circleGfx.attr("x"),
          "Updated circle x position after resize"
        ).to.equal(updatedX);

        expect(
          lastPoint.circleGfx.attr("y"),
          "Updated circle y position after resize"
        ).to.equal(updatedY);

        const updatedTextX = lastPoint.textGfx.attr("x");
        const updatedTextY = lastPoint.textGfx.attr("y");

        expect(updatedTextX, "Updated text x position after resize").to.equal(
          updatedX + 10
        );
        expect(updatedTextY, "Updated text y position after resize").to.equal(
          updatedY + 5
        );
      });
  });
});
