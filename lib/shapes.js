function ShapeCode() {};

ShapeCode.prototype.circleCode = (selection) => {
    return "<circle cx='150' cy='150' r='150' />"
}

ShapeCode.prototype.triangleCode = (selection) => {
    return "<polygon points='0,300 150,50 300, 300' />"
}

ShapeCode.prototype.squareCode = (selection) => {
    return "<polygon points='0,300 300,300 300,0 0' />"
}

module.exports = ShapeCode;
