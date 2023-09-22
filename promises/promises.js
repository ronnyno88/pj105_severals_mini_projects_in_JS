import axios from "axios"


//metodo que solicita uma api e retorna uma promisse
function getRepository(name){

    function onfulfilled(response){
        console.log(response.data);
    }
    
    function onrejected(reason){
        console.log(reason.message);
    }
    
    axios.get(`https://api.github.com/repos/${name}`)
    .then(onfulfilled)
    .catch(onrejected);
}


getRepository("facebook/react")