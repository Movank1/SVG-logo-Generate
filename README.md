# SVG-logo-Generate

# Link: 

git@github.com:Movank1/SVG-logo-Generate.git

- GIVEN a command-line application that accepts user input
- WHEN I am prompted for text
- THEN I can enter up to four characters
- WHEN I am prompted for the text color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I am prompted for a shape
- THEN I am presented with a list of shapes to choose from: circle, triangle, and square
- WHEN I am prompted for the shape's color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I have entered input for all the prompts
- THEN an SVG file is created named `logo.svg`
- AND the output text "Generated logo.svg" is printed in the command line
- WHEN I open the `logo.svg` file in a browser
- THEN I am shown a 200x200 pixel image that matches the criteria I entered

# SVG Logo Maker

Command line tool to generate an svg logo and write it to file.

## Usage

- Requires Node v12+. (This app has only been tested on Node 16)
- Run `npm install` to download dependencies.
- Run `node index.js` to start the app.
  - Answer questions to generate a logo.
  - Logo will be written to `logo.svg` in the working directory.
- Run tests with `npm run test`

## References

<https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Introduction>
<https://marketplace.visualstudio.com/items?itemName=jock.svg>
<https://github.com/SBoudrias/Inquirer.js>
<https://jestjs.io/>

