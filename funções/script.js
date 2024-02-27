// Crie uma função para verificar se um valor é Truthy

function isTruth(dado) {
  return !!dado;
}

console.log(isTruth('')); //false
console.log(isTruth(23)); //true

// Crie uma função matemática que retorne o perímetro de um quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}

console.log(perimetroQuadrado(2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return nome + ' ' + sobrenome; //ou return `${nome} ${sobrenome}`;
}

console.log('Nayara', 'Queiroz Calenzo');

// Crie uma função que verifica se um número é par

function isEven(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}

isEven(238); // true

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
  return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function () {
  console.log('Nayara Queiroz Calenzo');
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

//O erro é que a segunda função não consegue puxar a informação da variante 'var totalPaises = 193;'
// é preciso tirar a variante de dentro do colchete da primeira função e deixar na linha antes das descrições das funções.
