// const shapesJS = require('./lib/shapes')

function generateLogo(data) {
    if (data.shape === 'circle'){

    return `<svg 
    viewbox='0 0 400 300'
    width='300' height ='200'
    stroke='${data.shapeColor}'
    fill='${data.shapeColor}'>
    <circle cx='150' cy='150' r='150' />
    <text font-size='6em' x='75' y='175' fill='${data.textColor}'> ${data.text}</text>
    </svg>
        `
} else if (data.shape === 'triangle'){

    return `<svg 
    viewbox='0 0 400 300'
    width='300' height ='200'
    stroke='${data.shapeColor}'
    fill='${data.shapeColor}'>
    <polygon points='0,300 150,50 300, 300' />
    <text font-size='6em' x='75' y='175' fill='${data.textColor}'> ${data.text}</text>
    </svg>
        `
} else {
    return `<svg 
    viewbox='0 0 400 300'
    width='300' height ='200'
    stroke='${data.shapeColor}'
    fill='${data.shapeColor}'>
    <polygon points='0,300 300,300 300,0 0,0' />
    <text font-size='5em' x='75' y='235' fill='${data.textColor}'> ${data.text}</text>
    </svg>
        `
}};


module.exports = generateLogo;