//Async / await
/*
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
    console.log( '1s', await delay());
    console.log( '2s', await delay());
    console.log( '3s', await delay());
    

};

umPorSegundo();
*/


import axios from 'axios';


const getUserFromGitHub = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response);
    } catch (error) { 
        console.warn('Usuario não existe');
    }
}

getUserFromGitHub('meSESH');
getUserFromGitHub('meSESHssss');

/*
class GitHub {

    static async getRepositories(repo) {
        try {
        const response = await axios.get(`https://api.github.com/repos/${repo}`);
        console.log(response);
        } catch (err) {
            console.warn('Repositorio não encontrado');
        }
    }
}

GitHub.getRepositories('meSESH/Java');
GitHub.getRepositories('meSESH/Javasss');
*/

const buscaUsuario = async usuario => {
    try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response);
    } catch(err) {
        console.warn('NÃO existe');
    }
}
buscaUsuario('meSESH');
