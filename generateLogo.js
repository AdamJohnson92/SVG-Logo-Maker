function generateLogo(data) {
    return `<svg 
    viewbox='0 0 400 300'
    width='300' height ='200'
    stroke='${data.shapeColor}'
    fill='${data.shapeColor}'>
    <circle cx='150' cy='150' r='150' />
    <text font-size='6em' x='75' y='175' fill='${data.textColor}'> ${data.text}</text>
    </svg>
        `
};


module.exports = generateLogo;