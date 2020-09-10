// Desestruturação
// 4.1 

const empresa = {
    nome: 'Rocketseat',
    endereço: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, endereço: { cidade , estado }} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

console.log("");