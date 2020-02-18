const funcSum = (arr=[]) => {
    return arr.reduce((a,b) => a + b);
}

const gradienteDescent = (n=0) => {
    return n * (1 - n);
}

// funcoes ativacao

// tangente hiperbolica (-1 e 1)
const funcActTanh = (n=0) => {
    return Math.tanh(n);
}

// sigmoide (0 e 1)
const fundActSigmoide = (n=0) => {
    return 1 / (1 + Math.pow(Math.E, -n));
}

// linear retificada (nulos e positivos)
const fundActRelu = (n=0) => {
    return Math.max(n, 0);
}

// linear retificada com vazamento (maiores que zero)
const fundActReluLeaky = (n=0) => {
    return Math.max(n, 0.01);
}

// passo binário (0 ou 1)
const funcActBinStep = (n=0) => {
    return (n >= 0) ? 1 : 0;
}

const feedFoward = (inputs=[],target=0,epochs=10000, activation='Tanh') => {
    if (target<=0) { target = 0.1; }
    else if (target>=0) { target = 1; }

    let weights = [];

    for (let i=0; i<inputs.length; i++) {
        weights.push(Math.random())
    }
    /*
    inputs.map((i) => {
        weights.push( Math.random() );
    });
    */

    for(let i=1; i<=epochs; i++){
        let multiply = [];
        for (let j=0; j<inputs.length; j++) {
            // para nao zerar
            if (inputs[j] <= 0) { inputs[j] = 0.1; }
            // multiplica os pesos pela entrada
            multiply.push(inputs[j] * weights[j]);
        }

        let sum = funcSum(multiply);

        let output = 0;
        let activation_result = 0;

        switch(activation) {
            case 'Tanh': activation_result = funcActTanh(sum); break;
            case 'Sigmoid': activation_result = fundActSigmoide(sum); break;
            case 'Relu': activation_result = fundActRelu(sum); break;
            case 'Relu': activation_result = fundActReluLeaky(sum); break;
            case 'BinStep': activation_result = funcActBinStep(sum); break;
            default: activation_result = funcActTanh(sum);
        }
        // let activation = funcActTanh(sum);
        
        output = parseFloat(activation_result).toFixed(4);

        let error = parseFloat(Math.abs(target - output)).toFixed(4);
        let error_percent = parseFloat(error * 100).toFixed(2);

        for (let j=0; j<inputs.length; j++) {
            if (inputs[j] <= 0) { inputs[j] = 0.1; }
            weights[j] += inputs[j] * gradienteDescent(error);
        }

        let epoch = i.toString().padStart(7,'0');

        console.log(`Épc: ${epoch} Err: ${error_percent}% Out: ${output}`);
        if (error <= 0) { break; }
    }
}
// definida as entradas
const inputs = [1,2,3,4];
// definir os targets
const targets = [10,20,30,40];

feedFoward([0],0.1,30000,'Tanh');
//feedFoward(inputs,1,10);

