const inquirer = require("inquirer");
const SVG = require("./svg");
const { Semicircle, Hexagon, Rhombus, Oval, Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message:
            "Please type the text for the logo. (Must not be more than 4 characters.)",
          validate: (text) =>
            text.length <= 4 ||
            "The test must not have more than 4 characters",
        },
        {
          name: "textColor",
          type: "input",
          message: "Please enter a text color",
        },
        {
          name: "shapeType",
          type: "list",
          message: "Please chose the shape of the logo",
          choices: ["semicircle",  "hexagon", "oval", "rhombus", , "circle", "triangle", "square" ],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Enter a shape color",
        },
      ])
      .then(({ text, textColor, shapeType, shapeColor }) => {
        let shape;
        switch (shapeType) {

     

            case "semicircle":
              shape = new Semicircle();
              break;

            case "oval": 
              shape = new Oval();
              break;

              case "hexagon":
              shape = new Hexagon();
              break;

              case "circle":
                shape = new Circle();
                break;

         
              case "triangle":
                  shape = new Triangle();
                  break;
  
              case "square":
                  shape = new Square();
                    break;            

        default:
              case "rhombus":
              shape = new Rhombus();
              break;

          
        }
        shape.setColor(shapeColor);

        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setShape(shape);
        return writeFile("logo.svg", svg.render());
      })
      .then(() => {
        console.log("Generated logo.svg");
      })
      .catch((error) => {
        console.log(error);
        console.log("Oops! Something went wrong.");
      });
  }
}

module.exports = CLI;
