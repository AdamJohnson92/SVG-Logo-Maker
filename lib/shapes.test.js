//todo Import constructor?
//const [ConstructorName] = require('[file path');

//todo build testing suite
describe('[ConstructorName]', () => {
    //todo a test for the function that's built on Constructor function
    describe('[targetFunction]', () => {
        it('[describe what the function should take in and return', () => {
            const [expectedOutputVariableName] = [expectedOutputValue];
            const [constructionName] = new ConstructorName();
            expect(constructionName.targetFunction(a,b)).toEqual(expectedOutputVariableName);
        });
    });
});