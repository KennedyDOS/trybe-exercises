const checkNumber = (myNumber,number) => myNumber === number;

const lotery = (myNumber, callback) => {
    const generateNumber = Math.floor((Math.random() * 5) + 1 );    

    return callback(myNumber,generateNumber) ? 'Seu dia de sorte, você ganhou!' : 'Tente de novo!';
}

console.log(lotery(2, checkNumber));