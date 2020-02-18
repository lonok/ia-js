const fs = require('fs');

let X = [];
let Y = [];

const produtos = (x=[],y=[]) => {
    const temp = [];
    for (i=0; i<x.length; i++) {
        temp.push(parseFloat(x[i]) * parseFloat(y[i]));
    }
    return temp;
}

const quadrados = (x=[]) => {
    const temp = [];
    for (i=0; i<x.length; i++) {
        temp.push(parseFloat(x[i]) * parseFloat(x[i]));
    }
    return temp;
}

const somatorio = (x=[]) => {
    let temp = 0;
    for (i=0; i<x.length; i++) {
        temp += parseFloat(x[i])
    }
    return temp;
}

const media = (x=[]) => {
    return somatorio(x) / x.length;
}

const results = (x=[], y=[], p=0) => {
    const r1 = (somatorio(x) * somatorio(y)) / x.length;
    const r2 = (somatorio(x) * somatorio(x)) / x.length;
    const r3 = somatorio(produtos(x,y)) - r1;
    const r4 = r3 / (somatorio(quadrados(x)) - r2);
    const r5 = media(y) - (r4 * media(x));
    //console.log(r1,r2,r3,r4,r5);

    return ((r4 * p) + r5).toFixed(0);
}

const train = (x=[0],y=[0]) => {
    X = x;
    Y = y;
}

const saveModel = (path='./', filename='model') => {
    const model = {
        x: X,
        y: Y
    }
    fs.writeFileSync(`${path}${filename}.json`, JSON.stringify(model));
}

const loadModel = (path='./', filename='model') => {
    const data = fs.readFileSync(`${path}${filename}.json`, 'utf8');
    const json = JSON.parse(data);
    X = json.x;
    Y = json.y;
}

const predict = (p=[]) => {
    let regretions = [];
    for(let i=0; i<p.length; i++) {
        const temp = results(X,Y, p[i]);
        regretions.push(temp);
    }
    return regretions;
}

module.exports = {
    train: train,
    predict,
    saveModel,
    loadModel,
}