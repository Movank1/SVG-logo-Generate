const { Semicircle, Hexagon, Oval, Rhombus, Circle, Triangle, Square } = require("./shapes");

describe("Rhombus", () => {
  test("should render svg for a green Rhombus element", () => {
    const expectedSvg =
      '<polygon points="100,20 180,100 100,180 20,100" fill="red" />';
    const rhombus = new Rhombus();
    rhombus.setColor("red");
    const actualSvg = rhombus.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<polygon points="100,20 180,100 100,180 20,100" fill="purple" />';
    const rhombus = new Rhombus();
    rhombus.setColor("purple");
    const actualSvg = rhombus.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});



describe("Oval", () => {
  test("should render svg for a green Oval element", () => {
    const expectedSvg = '<ellipse cx="100" cy="90" rx="75" ry="50" fill="green" />';
    const oval = new Oval();
    oval.setColor("green");
    const actualSvg = oval.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg = '<ellipse cx="100" cy="90" rx="75" ry="50" fill="blue" />';
    const oval = new Oval();
    oval.setColor("blue");
    const actualSvg = oval.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});


describe("Hexagon", () => {
  test("should render svg for a green Hexagon element", () => {
    const expectedSvg = '<polygon points="100,20 180,50 180,150 100,180 20,150 20,50" fill="blac" />';
    const hexagon = new Hexagon();
    circle.setColor("black");
    const actualSvg = hexagon.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg = '<polygon points="100,20 180,50 180,150 100,180 20,150 20,50" fill="red" />';
    const circle = new Hexagon();
    hexagon.setColor("red");
    const actualSvg = hexagon.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});



describe("Semicircle", () => {
  test("should render svg for a green Semicircle element", () => {
    const expectedSvg = '<path d="M30,100 A80,80 0 0,1 200,100" fill="blue" />';
    const semicircle = new Semicircle();
    circle.setColor("blue");
    const actualSvg = semicircle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg = '<path d="M30,100 A80,80 0 0,1 200,100" fill="red" />';
    const semicircle = new Semicircle();
    semicircle.setColor("red");
    const actualSvg = semicircle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
    const circle = new Circle();
    circle.setColor("green");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
    const circle = new Circle();
    circle.setColor("blue");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
    const triangle = new Triangle();
    triangle.setColor("bisque");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
    const triangle = new Triangle();
    triangle.setColor("purple");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
    const square = new Square();
    square.setColor("dodgerblue");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="red" />';
    const square = new Square();
    square.setColor("red");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
