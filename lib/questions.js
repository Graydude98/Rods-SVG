const questions = [
    {
        type: "list",
        name:"shape",
        message:"What Shape do you want to draw",
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type:"input",
        name:"text",
        message:"What text do you want inside the shape(enter up to 3 characters)",
    },
    {
        type:"input",
        name:"textColor",
        message:"What should be the color of the text?(enter name of the color or color hashtag)"
    },
    {
        type:"input",
        name:"fill",
        message:"What background color you want the shape to have?(enter name of the color or color hashtag)"
    },
    {
        type:"input",
        name:"stroke",
        message:"What color of shape boundary should be?(enter name of the color or color hashtag)"
    },
    {
        type:"number",
        name:"strokeWidth",
        message:"How thick the border be?(choose a value between 1-5)",
    },
    {
        type:"input",
        name:"radius",
        message:"Radius of circle?(choose a value between 50-200)",
        when: (answers) => answers.shape === 'Circle'
    },
    {
        type:"input",
        name:"width",
        message:"How wide should the square be?(choose a value between 100-400)",
        when: (answers) => answers.shape === "Square"
    },

];

module.exports = questions