// P(AB) = P(BA) * P(A) / P(B)
// teorema de bayers: abordagem probabilística
// Uso: spam, emoções, classificacao
// step1: montar tabela probabilidade (treinamento)

let list = [
    ['bom','positivo'],
    ['bom','positivo'],
    ['mau','negativo'],
    ['indiferente','positivo'],
    ['indiferente','negativo'],
];

let inputs = ['bom','bom','mau','indiferente','indiferente'];
let classes = ['positivo','positivo','negativo','positivo','negativo'];

const uniqueClasses = (classes=[]) => {
    return [...new Set(classes)];
}

const extract = (list) => {
    let _inputs = [];
    let _classes = [];

    for (let i=0; i<inputs.length; i++) {
        _inputs.push(list[i][0]);
        _classes.push(list[i][1]);
    }
    inputs = _inputs;
    classes = _classes;
}

const frequency = (arr, col, value) => {
    const result = arr.filter(i => {
        return i[col] == value;
    });
    return result;
} 

const countText = (text='', find='') => {
    return text.split(procura).length - 1;
}

const train = (_inputs=[], _classes=[]) => {

}

const predict = (input='') => {

}

let pBA = 0;
let pA = 0;
let pB = 0;

const prob = (pBA,pA, pB) => {
    return ((pBA * pA) / pB) * 100;
}

//extract(list);
//console.log(inputs);
//console.log(classes);
//console.log(uniqueClasses(classes));

const f = frequency(list,0,'bom');
console.log(f);