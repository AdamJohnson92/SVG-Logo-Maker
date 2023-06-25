function generateLogo(data) {
    return `<svg 
    viewbox='0 0 400 300'
    xmlns='http://www.w3.org/2000/svg'
    width='300' height ='200'
    stroke='${data.shapeColor}'
    fill='${data.shapeColor}'>
    <circle cx='150' cy='150' r='150' />
    </svg>
        `
};


    module.exports = generateLogo;