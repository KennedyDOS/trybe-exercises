const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui
const emailConfirmation = (element) => {
    console.log(`O email ${element} está cadastrado em nosso banco de dados!`); 
}

emailListInData.forEach(emailConfirmation);

