const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, answerOfStudent) => {
    if(rightAnswer === answerOfStudent){
        return 1;
    } if (answerOfStudent === 'N.A'){
        return 0;
    }
    return -0.5;
}

const countPoints = (rightAnswer, answerOfStudent , counter) => {
    let count = 0;
    for(let index = 0; index < rightAnswer.length; index += 1){
        const returnPoints = counter(rightAnswer[index],answerOfStudent[index]);
        count += returnPoints;
    }
    return `Total de pontos: ${count}`;
} 

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));    