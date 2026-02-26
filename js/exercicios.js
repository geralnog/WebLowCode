/* let myLuckyNumber = 7;

let myName = 'Geraldo Nogueira';

alert(myName + ': ' + myLuckyNumber) */

/* 
const Word = "skateboard";

let newWord = Word.slice(5);
let facialHair = newWord.replace("o", "e");
console.log(facialHair); 

ou

const WORD = 'skateboard';
let facialHair = WORD.slice(5).replace('o','e');
alert(facialHair); */

/* let firstName = prompt('Qual é o seu primeiro nome?');
let lastName = prompt('Qual é o seu último nome?');





/*   Peça ao utilizador para digitar uma nota de 0 a 100 usando prompt e if/else:
 
Verifique:
Se for menor que 50 → "Reprovado"
Se for entre 50 e 79 → "Aprovado"
Se for 80 ou mais → "Aprovado com Distinção"
Mostre o resultado usando alert.
  */

/* let nota = prompt('Digite uma nota de 0 a 100');
if (nota < 50) {
    alert ('Reprovado')
}else if (nota >= 50 && nota < 80) {
    alert ('Aprovado')
}else if (nota >= 80) {
    alert ('Aprovado com Distinção')
}else {
    alert('Nota inválida')
} */

/* 2. Crie um sistema que:
 
Peça o nome do utilizador
Peça a idade
 
Se for maior de idade, mostre um menu com indicações personalizadas (tratando pelo nome):
Ver saldo: simule com um alerta 'tem 1.0000 de euros'
Fazer levantamentos: pergunte ao utilizador o valor a levantar. No final do levantamento, indique quanto ficou em conta.
Depositar dinheiro: lance um alerta a indicar 'depósito de 600euros efectuado!'
Se for menor, mostre: "Acesso negado */

/* let userName = prompt('Qual é o seu nome?');
let idade = prompt('Qual é a sua idade?');

if (idade >= 18) {


    alert('Veja as opções do menu');   
    let opcao = prompt('Escolha uma opção: 1 - Ver saldo, 2 - Levantar dinheiro, 3 - Depositar dinheiro', '4 - Sair');

    do {
    switch (opcao) {
        
        case '1':
            alert('Você tem 1.0000 de euros');
            break;
        case '2':
            let valorLevantamento = prompt('Quanto deseja levantar?');
            alert('Você levantou ' + valorLevantamento + ' euros. Agora tem ' + (10000 - valorLevantamento) + ' euros.');
            break;
        case '3':
            alert('Depósito de 600 euros efectuado!');
            break;
            case '4':
                prompt('Pressione 4 para sair');
                break;
        default:
            alert('Opção inválida');
    }}
        while (idade < 18);
            alert('Sinto muito, ' + userName + '. Acesso negado.');
        } */

/* let userName = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");
let saldo = 1000; // Defini um saldo inicial para poder alterar

// Verifica se é maior de idade primeiro
if (idade >= 18) {
  let opcao;

  do {
    // O prompt tem de estar AQUI DENTRO para aparecer sempre que o loop rodar
    opcao = prompt(
      "Olá " +
        userName +
        ". Escolha uma opção:\n" +
        "1 - Ver saldo\n" +
        "2 - Levantar dinheiro\n" +
        "3 - Depositar dinheiro\n" +
        "4 - Sair",
    );

    switch (opcao) {
      case "1":
        alert("O seu saldo atual é de: " + saldo + " euros.");
        break;

      case "2":
        let valorLevantamento = Number(prompt("Quanto deseja levantar?"));
        if (valorLevantamento <= saldo) {
          saldo = saldo - valorLevantamento; // Atualiza o saldo
          alert(
            "Levantou " +
              valorLevantamento +
              " euros. Novo saldo: " +
              saldo +
              " euros.",
          );
        } else {
          alert("Saldo insuficiente!");
        }
        break;

      case "3":
        let valorDeposito = Number(prompt("Quanto deseja depositar?"));
        saldo = saldo + valorDeposito; // Atualiza o saldo
        alert(
          "Depósito de " +
            valorDeposito +
            " euros efetuado! Novo saldo: " +
            saldo +
            " euros.",
        );
        break;

      case "4":
        alert("Obrigado por usar o nosso banco. Até logo!");
        break;

      default:
        alert("Opção inválida, tente novamente.");
        break;
    }
  } while (opcao !== "4"); // O loop continua ENQUANTO a opção for diferente de '4'
} else {
  // Caso seja menor de idade
  alert("Sinto muito, " + userName + ". Acesso negado. É preciso ter 18 anos.");
}
 */



/* let planets = ['Mercúrio', 'Vénus', 'Terra', 'Marte', 'Jupiter', 'Saturno', 'Urano', 'Neptuno', 'Plutão'];

planets [3] = "Marte";

planets.pop ()
planets.unshift("Andromeda.51");
alert (planets);
 */



let courses = [
    ["HTML", "CSS"],
    "Bases de Dados",
    ["Funções, Tipos de Dados, Ciclos"],
]

alert(courses[0][1]); // CSS