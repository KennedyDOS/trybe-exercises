let productCost = 50;
let saleCost = 80;

if (productCost >= 0 && saleCost >= 0){
    let totalCostOfProduct = productCost * 1.2;
    let totalProfit = (saleCost - totalCostOfProduct) * 1000;
    console.log(totalProfit);
} else {
    console.log(`Erro: Valor invalido`);
}