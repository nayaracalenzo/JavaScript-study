// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(var, marca, portas);

//Resposta: Erro de sintaxe. O método está errado pois o primeiro objeto do conteúdo não está com o nome da variável 'cor' e sim com a palavra-chave 'var'. Além disso, let e const não vazam, tem que colocar o console.log para dentro do bloco.

// Como corrigir o erro abaixo?

function somarDois(x) {
  const dois = 2; // Resposta: colocar a sintaxe const dois para fora do escopo
  return x + dois;
}
function dividirDois(x) {
  return x + dois; // Resposta: trocar '+' por ''/''
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;  

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

//Resposta: trocar var por let dentro do escopo 'porque o var vaza do escopo' e fora do escopo pode trocar por const, já que o numero de fora do escopo não tem objetivo de mudar o valor e não vai dá conflito com o let do escopo pois o escopo não vaza let.
