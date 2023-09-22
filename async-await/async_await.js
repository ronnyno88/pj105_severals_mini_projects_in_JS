import axios from "axios"


//metodo que solicita uma api e retorna uma promisse
async function getRepository(name){
    try {
        const response = await axios.get(`https://api.github.com/repos/${name}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}


getRepository("facebook/react")