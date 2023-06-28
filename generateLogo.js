const ShapeCode = require('./lib/shapes')


function generateLogo(data) {
    if (data.shape === 'circle'){
        const circleObj = new ShapeCode 

    return `<svg 
    width='300' height ='200'
    stroke='${data.shapeColor}'
    fill='${data.shapeColor}'>
    ${circleObj.circleCode()}
    <text font-size='6em' x='60' y='175' fill='${data.textColor}'> ${data.text}</text>
    </svg>
        `
} else if (data.shape === 'triangle'){
    const triangleObj = new ShapeCode 

    return `<svg 
    width='300' height ='200'
    stroke='${data.shapeColor}'
    fill='${data.shapeColor}'>
    ${triangleObj.triangleCode()}
    <text font-size='5em' x='75' y='250' fill='${data.textColor}'> ${data.text}</text>
    </svg>
        `
} else {
    const squareObj = new ShapeCode
    return `<svg 
    width='300' height ='200'
    stroke='${data.shapeColor}'
    fill='${data.shapeColor}'>
    ${squareObj.squareCode()}
    <text font-size='5em' x='70' y='175' fill='${data.textColor}'> ${data.text}</text>
    </svg>
        `
}};


module.exports = generateLogo;