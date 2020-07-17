//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3];.
//Valor esperado no retorno da função: 6.

function lowestNumber (array){
    let testNumber=array[0]
    for(let i=0; i<array.length;i++){
        if(array[i]>array[i+1]){
            testNumber=array[i+1]
        }
    }console.log(testNumber)
}
lowestNumber([2, 4, 6, 7, 10, 0, -3])