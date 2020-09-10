//Arrow Function

// 3.1
const arr = [ 1, 2, 3, 4, 5];

const newArr = arr.map(item => item + 10);

console.log(newArr);


// 3.2
const usuario = { nome: 'Matheus', idade: 18 };

const mostrarIdade = (usuario) => usuario.idade;

console.log(mostrarIdade(usuario));


// 3.3
const name = 'Matheus';
const age = 18;

const showUser = (name, age) => ({ name, age });

console.log(showUser(name, age));
console.log(showUser(name));
