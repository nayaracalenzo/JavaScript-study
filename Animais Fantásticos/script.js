// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgInitial = document.querySelectorAll('[src^="img/imagem"]');
console.log(imgInitial);
// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector('.animais-descricao h2');
console.log(h2);
// Selecione o último p do site
const p = document.querySelectorAll('p');
console.log(p[24]);

console.log(p[p.length - 1]);

//ou

console.log(p[--p.length]);
