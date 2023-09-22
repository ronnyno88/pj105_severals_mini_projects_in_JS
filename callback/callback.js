//function que sera chamada dentro de outra (callback)
function result(num){
    console.log(num)
}

function sum(num1, num2, callback){
    let opr =  num1+num2
    callback(opr)
}

function mult(num1, num2, callback){
    let opr =  num1*num2
    callback(opr)
}

sum(2,2,result);
mult(2,2,result);


