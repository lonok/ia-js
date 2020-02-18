const linearRegression = require('./linear-regression');
const multivariateRegression = require('./multivariate-regression');

// regressao linear
/*
const x = [1,3,5,7];
const y = [15,35,55,75];

//linearRegression.train(x,y);
//linearRegression.saveModel('./model/','vezes10more5');
linearRegression.loadModel('./model/','vezes10more5');

const predict = [9,10];

const result = linearRegression.predict()
console.log(result);
*/

// multivariada
const x = [[1,2,1],[2,3,1],[3,4,1],[4,5,1]];
const y = [4,6,8,10];

multivariateRegression.train(x,y);

const predict = [[5,6,1],[6,7,1]];

const result = multivariateRegression.predict(predict);
console.log(result);