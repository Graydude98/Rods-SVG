const filesystem = require("./")
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");
const questions = require('./lib/questions')


//Code using Switch

const init = () => {
    inquirer.prompt(questions)
        .then((data) => {
            console.log("Creating svg file...");
            switch (`${data.shape}`) {
                case 'Square':
                    console.log('Square is being created....')
                    const square = new Square(data.fill, data.stroke, data.strokeWidth, data.text, data.textColor, data.width, data.width)
                    fs.WriteFile("main/output/logo.svg", square.renderSquare(), (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log('Congragulations!!! Square is now created!!');
                        }
                    });
                    break;
                  case 'Circle':
                        console.log('Circle is being created....')
                        const circle = new Circle(data.fill, data.stroke, data.strokeWidth, data.textColor, data.text, data.radius)
                        fs.WriteFile("./output/logo.svg", circle.renderCircle(), (err) => {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log('Congragulations!!! Circle is now created!!');
                            } 
                        });
                        break;
                    case `Triangle`:
                        console.log('Triangle is being created....')
                        const triangle = new Polygon(data.fill, data.stroke, data.strokeWidth, data.text, data.textColor);
                        fs.WriteFile("./output/logo.svg,", triangle.renderPolygon(), (err) => {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log('Congragulations!!! Triangle is now created!!')
                            }
                        });
                        break;
            }       
        })
}

init();