const verifyAvarage = (n1, n2, n3, n4) => {
if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number') {
    throw new Error('Os valores precisam ser número para serem verificados');
}
}

const calculateAvarage = (n1, n2, n3, n4) => {
    try {
        verifyAvarage(n1, n2, n3, n4);
        let sum = n1 + n2 + n3 + n4;
        let result = sum / 4;
        return result;
    } catch (error) {

        return error.message;

    }
}

console.log(calculateAvarage(6, 6, 6, '8'));