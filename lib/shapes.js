// Base class for shapes
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}



class Semicircle extends Shape {
  render() {
    return `<path d="M30,100 A80,80 0 0,1 200,100" fill="${this.color}" />`;
  }
}

class Hexagon extends Shape {
  render() {
    return `<polygon points="100,20 180,50 180,150 100,180 20,150 20,50" fill="${this.color}" />`;
  }
}

class Rhombus extends Shape {
  render() {
    return `<polygon points="100,20 180,100 100,180 20,100" fill="${this.color}" />`;
  }
}

class Oval extends Shape {
  render() {
    return `<ellipse cx="100" cy="90" rx="75" ry="50" fill="${this.color}"  />`;
  }
}



module.exports = { Semicircle, Hexagon, Oval, Rhombus, };
