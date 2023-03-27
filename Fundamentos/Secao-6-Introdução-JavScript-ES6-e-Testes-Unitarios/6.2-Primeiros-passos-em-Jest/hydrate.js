const hydrate = (drinks) => {
    const splitDrinks = drinks.split('');
    let glassOfWater = 0;

    for (let index = 0; index < splitDrinks.length; index += 1) {
        const parseNamesOfDrinks = parseInt(splitDrinks[index]);

        if (parseNamesOfDrinks) {
            glassOfWater += parseNamesOfDrinks;
        }
    }

    let glass = 'copo';
    if (glassOfWater > 1) {
        glass = 'copos';
    }
    return `${glassOfWater} ${glass} de água`
};

module.exports = hydrate;


/* 
// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água' */