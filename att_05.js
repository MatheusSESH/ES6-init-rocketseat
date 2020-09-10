// REST/SPREAD


// REST 5.1 

const arr = [ 1, 2, 3, 4, 5, 6];

const [ x, ...y] = arr;

console.log(x);
console.log(y);


const soma = function(...a){
    return a.reduce((total,next) => total+next);
}

console.log(soma(1,2,3,4,5,6))


// SPREAD 5.2

const user = {
    nome: 'Diego',
    idade: 23,
    endereço: {
        cidade: 'Rio do Sul',
        UF: 'SC',
        país: 'Brasil',
    }
};

const user2 = { ...user, nome: 'Gabriel' };

const user3 = { ...user, endereço: { ...user.endereço, cidade: 'Lonstras' }};

console.log(user);
console.log(user2);
console.log(user3);