/// Exercicio 1!

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('BBem vinda, ' + info.personagem + '.' );  

/// Exercicio 2!

let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'Sim'
  };

  info.recorrente = 'Não';
  console.log(info.recorrente);

  /// Exercicio 3!
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

for (let key in info) {
    console.log(key);
    
} 

/// Exercicio 4!

 let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

for (let key in info) {
    console.log(info[key]);
    
} 

/// Exercicio 5!

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for (let key in info, info2) {
    if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
            console.log('Ambos recorrentes');
        
    } else {
        console.log(info[key] + ' e ' + info2[key]);
    }
        
    
} 

/// Exercicio 6!

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: '"O Pior Dia de Todos"',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log('O livro favorito de' + leitor.nome + ' ' + leitor.sobrenome + 'se chama '  + leitor['livrosFavoritos'][0]['titulo']);
  leitor.livrosFavoritos.titulo = 'Harry Potter e o Prisioneiro de Azkaban'
  console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.titulo.length + ' livros favoritos.');