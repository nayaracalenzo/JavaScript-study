//Exercício:

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var idadeNayara = 28;
var idadeFelipe = 26;

if (idadeNayara > idadeFelipe) {
  console.log('É maior');
} else if (idadeNayara === idadeFelipe) {
  console.log('É igual');
} else {
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?

var expressao = 5 - 2 && 5 - ' ' && 5 - 2; // (5 - ' ') ele retorna 5

console.log(expressao); //resposta = 3, considera a última verdadeira

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  !!nome, //true
  !!idade, //true
  !!possuiDoutorado, //false
  !!empregoFuturo, //false
  !!dinheiroNaConta, //false
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('Brasil tem mais habitantes');
} else {
  console.log('Brasil tem menos habitantes');
}

// O que irá aparecer no console?
if ('Gato' === 'gato' && 5 > 2) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); //resposta = Falso
}

// O que irá aparecer no console?
if ('Gato' === 'gato' || 5 > 2) {
  console.log('Gato' && 'Cão'); //resposta = Cão
} else {
  console.log('Falso');
}
