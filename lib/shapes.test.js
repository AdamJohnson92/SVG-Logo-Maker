//todo Import constructor?
const ShapeCode = require('./shapes.js');

//todo build testing suite
describe('ShapeCode', () => {
    //todo a test for the function that's built on Constructor function
    describe('circleCode', () => {
        it('should take a circle selection and return the circle code', () => {
            const returnedShape = "<circle cx='150' cy='150' r='150' />";
            const shapeCode = new ShapeCode();
            expect(shapeCode.circleCode()).toEqual(returnedShape);
        });
    });
});

//todo build testing suite
describe('ShapeCode', () => {
    //todo a test for the function that's built on Constructor function
    describe('squareCode', () => {
        it('should take a square selection and return the square code', () => {
            const returnedShape = "<polygon points='0,300 300,300 300,0 0' />";
            const shapeCode = new ShapeCode();
            expect(shapeCode.squareCode()).toEqual(returnedShape);
        });
    });
});

describe('ShapeCode', () => {
    //todo a test for the function that's built on Constructor function
    describe('triangleCode', () => {
        it('should take a triangle selection and return the triangle code', () => {
            const returnedShape = "<polygon points='0,300 150,50 300, 300' />";
            const shapeCode = new ShapeCode();
            expect(shapeCode.triangleCode()).toEqual(returnedShape);
        });
    });
});