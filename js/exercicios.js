/* function getRandomInt(max) {
  return Math.floor(Math.random() * max);
} */

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

/* let courses = [
    ["HTML", "CSS"],
    "Bases de Dados",
    ["Funções, Tipos de Dados, Ciclos"],
]

alert(courses[0][1]); // CSS

 */

/* const airplaneSeats = [
['Ruth', 'Anthony', 'Stevie'],
['Amelia', 'Pedro', 'Maya'],
['Xavier', 'Ananya', 'Luis'],
['Luke', null, 'Deniz'],
['Rin', 'Sakura', 'Francisco']
];

airplaneSeats[3][1] = 'Geraldo';
alert(airplaneSeats[3][1]); */

/* let meals = [
  "Arroz e feijão",
  "lasanha",
  "ramen",
  "pizza",
  "salada de feijão frade",
  "francesinha",
];

alert(`o prato do dia é ${meals[getRandomInt(meals.length)]}`); */

/* Cria um array chamado frutas com 5 frutas à tua escolha.
Mostra o array no console.
Pergunte ao user qual é a sua fruta preferida e adicione no array
Mostra o comprimento do array com .length (o array tem x frutas).
Gera e mostra uma fruta aleatória (fruta do dia) do array de cada vez que fizeres refresh à página.
 
A partir do array let numeros = [10, 20, 30];
Adiciona o número 40 no fim.
Adiciona o número 0 no início.
Remove o último elemento.
No fim, mostra o array resultante.
 
Cria um array cores com 4 cores.
Altera a 2.ª posição para outra cor.
Mostra apenas a primeira e a última cor no console.
 
Dado let produtos = ["telemovel", "tablet", "pc", "monitor"];
Verifica se o array contém "pc" usando includes. Se contiver, imprime "Tem PC", senão "Não tem PC".
 
Número aleatório de 1 a 10
1.Gera um número aleatório inteiro entre 1 e 10 e mostra no console.
 
2. Se o número for:
1 a 3: mostra "Número baixo"
4 a 7: mostra "Número médio"
8 a 10: mostra "Número alto" */

/* frutas = ['banana', 'maçã', 'laranja', 'uva', 'abacaxi'];
console.log(frutas);

let frutaPreferida = prompt('Qual é a sua fruta preferida?');
frutas.push(frutaPreferida);
alert(`O array tem ${frutas.length} frutas.`);
alert ('A fruta do dia é: ' + frutas[getRandomInt(frutas.length)]); */

/* let numeros = [10, 20, 30]
numeros.push(40);
numeros.unshift(0);
numeros.pop();
alert(numeros); */

/* let cores = ['vermelho', 'azul', 'verde', 'amarelo'];
cores [1] = 'blue marinho';
console.log(cores[0], cores[cores.length - 1]); */

/* let produtos = ["telemovel", "tablet", "pc", "monitor"];
if (produtos.includes("pc")) {
    alert("Tem PC");
}else {
    alert("Não tem PC");
} */
/* 
    let number = getRandomInt(10) + 1;
    if (number >= 1 && number <= 3) {
        alert("Número baixo");
    } else if (number >= 4 && number <= 7) {
        alert("Número médio");
    } else if (number >= 8 && number <= 10) {
        alert("Número alto");
    }
    console.log(number);
 */

/* 1. Cria um objecto chamado product com as seguintes propriedades:
• nome e assigna-lhe um nome à tua escolha.
• inStock, como verdadeiro.
• Price com o valor 1.99
• Colors, com um array de vermelho, azul e verde;


2. Imprime na consola os seguintes valores:
• Price
• Cor Verde


3. Ups, a inflacção chegou à nossa loja. Muda o valor do produto para 2.55. */

/* let product = {
  nome: "Camiseta",
  inStock: true,
  price: 1.99,
  colors: ['Vermelho', 'Azul', 'Verde'],
}

console.log(product.price,product.colors[2]); 

 */

/* let pass = prompt('insira uma pass com pelo menos 4 caracteres');
 
while(pass.length < 4){
  pass = prompt('insira uma pass com pelo menos 4 caracteres. Insira uma nova pass.');
}

  alert('tá boa a pass!');
 */

/*   while:

Palavra-passe
a) Cria um script que:
• Define uma palavra-passe correta, por exemplo "segredo123";
• Usa um ciclo while para pedir a palavra-passe ao utilizador até ele acertar;
• Sempre que erra, mostra "Palavra-passe errada, tenta novamente";
• Quando acerta, mostra "Acesso concedido" e termina o ciclo.


b) Adiciona uma limitação de tentativas:
• Máximo de 3 tentativas;
• Se falhar 3 vezes, mostra "Conta bloqueada" e termina sem conceder acesso
 
Construa uma lista de compras.

Dicas:
A lista é um array.

Fazer prompt para o utilizador adicionar items na lista, e
adicionar esses items ao array.

Criar uma variável "código" e se o utilizador digitar isso, o
ciclo acaba e a lista aparece. Por exemplo, se digitar 'fim',
deixam de aparecer prompts
  */



/* let password = prompt("Insira a palavra-passe:");
let attempts = 0;
const correctPassword = "segredo123";

while (password !== correctPassword && attempts < 3) {
  alert("Palavra-passe errada, tenta novamente");
  password = prompt("Insira a palavra-passe:");
  attempts++;
}

if (password === correctPassword) {
  alert("Acesso concedido");
} else {
  alert("Conta bloqueada");
}
 */

let lista = []
let codigo = "fim"

while (true) {
  let item = prompt("Adicione um item à lista de compras (digite 'fim' para terminar):");
  if (item === codigo) {
    break;
  } else {
    lista.push(item);
  }
}

alert("Sua lista de compras: " + lista.join(", "));
