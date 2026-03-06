/* let firstCode = "hello world";

let className = "low-code";

let number = 9;

className = "Design UX/UI";

number = 8;

if (number % 2 == 0) {
    alert("Número Par");
} else {
    alert("Número Ímpar");
}

 

let firstName = "Geraldo";
let lastName = "Nogueira";

alert('Olá ' + firstName + " " + lastName[0]+ '.');


const message = " TASTE THE RAINBOW! ";
let whisper = message.toLowerCase().trim();

console.log(whisper);
*/

/* let fullName = "Sara Monteiro";
let firstName = fullName.slice(0, 4);
console.log(firstName); */

/* let fullName = "Sara Monteiro";

let cutIndex = fullName.indexOf(" ");


let firstName = fullName.slice(0, cutIndex);
alert(firstName); */

/* //primeira linha de código JS
let firstCode = "hello world";
let className = "Low Code";
let number = 9;
 
//reassignar um novo valor à variável
className = "Design UI/UX";
 
//concatenar variáveis
alert(className+': '+firstCode+'!');
 
//forma alternativa de concatenar variáveis
alert(`a turma é ${className}: ${firstCode}!`);
  */

/* //alert

alert('olá sou um alerta!')
 */
/* //console.log()
console.log('estou loggado na consola e sou amigo dos programadores')
 */

/* let userName = prompt('Qual é o seu nome?');

console.log('olá programador ' + userName);



console.log("Olá " + firstName + " " + lastName); */

/* switch (weekDay) {
  case "segunda":
  case "segunda-feira":
    alert("é segunda");
    break;
  case "terça":
  case "terça-feira":
    alert("é terça");
    break;
  case "quarta":
  case "quarta-feira":
    alert("é quarta");
    break;
  case "quinta":
  case "quinta-feira":
    alert("é quinta");
    break;
  case "sexta":
  case "sexta-feira":
    alert("é sexta");
    break;
  case "sábado":
  case "domingo":
    alert("é fim de semana");
    break;
  default:
    alert("dia inválido");
}

 */

/* let weekDay = prompt('Que dia da semana é hoje?').toLowerCase().trim();

if (weekDay == 'segunda') {
    alert('Espoca segunda')
}else
    alert('Não é segunda')

    if (weekDay == "segunda" || weekDay == "segunda-feira") {
  alert("força para esta semana!");
} else if (weekDay == "quarta" || weekDay == "quarta-feira") {
  alert("chegámos ao meio da semana");
} else {
  alert("já faltou mais para o fim de semana");
} */

//array de strings
/* let alunos = ['Maria Cardoso', 'Bruno Azevedo', 'Beatriz Afonso'];
 */
/* 
//array de números
let notas = [20, 15, 9];
 
//array com vários tipos de dados: string, número e boleano
let mixedArray=['Cesae', 15, true];
 
alert(alunos[2])
 
alert(`a aluna ${alunos[2]} tem nota ${notas[2]}`);
 
alunos[1] = 'Bruno Silva';
alert(alunos);
 
//perguntar ao user que index quer alterar
let index = prompt('qual é o index a alterar?');
 
//perguntar ao user o novo nome
let newName = prompt('qual é o novo nome?');
 
//alterar no array
alunos[index] = newName;
 
//mostrar a ver se está ok
alert(alunos);
 
//adicionar no fim do array
alunos.push('Andreia Ricardo');
alert(alunos);
  */

/* alunos.push('Andreia Ricardo');
alert(alunos);

//remover do início
alunos.shift()
alert(alunos);
 */
/* 
let course = {
  cname: "Programador de Low Code",
  responsible: "Inês Castro",
  hours: 1100,
  modules: ["Programação Web", "Algoritimia", "Inglês"],
};

course.hours = 1150;

course.modules.push(prompt("Qual o módulo a acrescentar?"));

alert("o curso de " + course.cname + " e tem " + course.hours + "h");

alert(
  "o curso de " +
    course.cname +
    " e tem " +
    course.hours +
    "h e o módulo mais importante é " +
    course.modules[2],
); */

/* 
let codigo = 0;
let lista = [];
let item = '';
 
while (codigo != 4) {
    codigo = prompt ('Digite a opção desejada:\n1. Adicionar Item \n2. Remover Item \n3. Ver lista \n4. Sair');
    switch (codigo) {
        case '1':
            alert('Opção 1 - Adicionar Item:');
            item = prompt ('Digite o item que deseja adicionar:');
            lista.push(item);
            break;
        case '2':
            alert('Opção 2 - Remover Primeiro Item:');
            lista.shift();
            break;
        case '3':
            alert('Opção 3 - Listar Itens:');
            alert(lista);
            break;
        case '4':
            alert('Opção 4 - Sair');
            break
        default:
            alert('Opção Inválida')
    }
} */

/*     for(let count = 1; count<11; count++){
  alert(count);
}
 
for(let count = 2; count<11; count= count+2){
  alert(count);
}
 

let shoppingList = ['bananas', 'maçãs','salada'];
 
 
let shoppingList = ['bananas', 'maçãs','salada'];
alert('comprar '+shoppingList[0])
alert('comprar '+shoppingList[1])
alert('comprar '+shoppingList[2])
 
for(let count=0; count<shoppingList.length;count++){
  alert('comprar '+shoppingList[count])
}
 
 
for(let element of shoppingList){
  alert('comprar '+element)
}
 
  */

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

/* //funções
alert('hello world!');
 
//funções
function hello() {
  alert("hello world!");
}
  */

/* document.getElementById('button_heart').onclick = function(){
window.alert('Hello ♥');
}

 */

/* let rant = function() {
  document.getElementById('button_heart').addEventListener('click', function() {
      console.log("I hate everything!");
  });
};

rant();
 */


function rant(rant, numTimes) {
    for (let i = 0; i < numTimes; i++) {
        alert(('odeio ' + rant).toUpperCase())
    }
}