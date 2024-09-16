const readline = require('readline-sync');

const weightInKg = 80;
const heightInCm = 178;

function handleBMI(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const bmi = weight / heightSquared;

  return bmi;
}

const BMI_MAX_AND_MIN = {
    'Abaixo do peso': {
      minBMI: 0,
      maxBMI: 18.4,
    },
    'Peso normal': {
      minBMI: 18.5,
      maxBMI: 24.9,
    },
    'Acima do peso': {
      minBMI: 25,
      maxBMI: 29.9,
    },
    'Obesidade Class I': {
      minBMI: 30.0,
      maxBMI: 34.9,
    },
    'Obesidade Class II': {
      minBMI: 35,
      maxBMI: 39.9,
    },
    'Obesidade Class III': {
      minBMI: 40,
      maxBMI: 100,
    },
  };

function checkBMIStatus(bmi) {
    const statuses = Object.keys(BMI_MAX_AND_MIN);

  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status];

    
    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
}

function main() {
  const weight = readline.questionFloat('Qual o seu peso? (kg) ');
  const height = readline.questionInt('Qual a sua altura? (cm) ');

  const bmi = handleBMI(weight, height);
  const bmiStatus = checkBMIStatus(bmi);
  
  console.log(`IMC: ${bmi.toFixed(2)}`);
  console.log(`Status: ${bmiStatus}`);

}

main();