let pecaDeXadrez = 'rei';

switch (pecaDeXadrez.toLocaleLowerCase()) {
    case 'peão':
        console.log('Anda uma casa para frente, se for o primeiro movimento pula duas casa e não pula outras peças');
        break;
    case 'cavalo':
        console.log('Somente se movimenta em L e pode saltar outras peças');
        break;
    case 'bispo':
        console.log('Apenas se movimenta pela diagonal e não passa por cima das peças');
        break;
    case 'torre':
        console.log('Anda para os lados em linhas retas, sem limite de casas e não salta peças');
        break;
    case 'rei':
        console.log('Se movimenta apenas uma casa em qualquer direção sem saltar peças');        
        break;
    case 'rainha':
        console.log('Se movimenta para todos os lados sem saltar peças');
        break;
    default:
        break;
};