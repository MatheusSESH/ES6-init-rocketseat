//métodos de array (map, reduce, filter e find)

const Usuarios = [
    { nome: 'Diego' , idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel' , idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas' , idade: 30 , empresa: 'Facebook' },
];

const idade = Usuarios.map(function(item) {
    return item.idade;
});

console.log(idade);

const userByRocketseat = Usuarios.filter(function(item) {
    return item.empresa === 'Rocketseat' && item.idade >= 18;
});

console.log(userByRocketseat);

const userByGoogle = Usuarios.find(function(item) {
    return item.empresa === 'Google';
});

console.log(userByGoogle);

const maiorId = Usuarios.filter(function(item) {
    var id = item.idade;
    id = id *2;

        if(id < 50){
            return item.idade = id;
        }
});

console.log(maiorId);