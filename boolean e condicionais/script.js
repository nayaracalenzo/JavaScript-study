//Condicionais if else
var possuiGraduacao = true;
var naoPossuiGraduacao = false;

if (possuiGraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}

if (true) {
  console.log('É verdadeiro');
}

//Pode colocar 'var' e ela vai te dar a resposta dependendo do boolean (verdadeiro ou falso) mas ela vai criar a variável independente se for vardadeiro ou falso

if (possuiGraduacao) {
  var x = 10;
}
console.log(x);

//Já usando 'let' ela só cria se a sentença estiver de acordo, caso contrário dará erro

if (possuiGraduacao) {
  let y = 10;
  console.log(y);
}

// Condicionais else if

//Não pode ter 1 if e vários else, tem que ter o else if e terminar ou não com else

var possuiMestrado = false;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log('Possui Doutorado');
} else if (possuiMestrado) {
  console.log('Possui Mestrado');
} else {
  console.log('Não possui nada');
}
