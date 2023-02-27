let anguloA = 100;
let anguloB = 65;
let anguloC = 15;

let somaDoTriangulo = anguloA + anguloB + anguloC;
let ladosPositivosDoTriangulo = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (ladosPositivosDoTriangulo){
    if (somaDoTriangulo === 180){
        console.log(true);
    } else {
        console.log(false);        
    };
} else {
    console.log('Valor do angulo incorreto');
}

