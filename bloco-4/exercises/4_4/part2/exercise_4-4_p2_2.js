//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1];.
//Valor esperado no retorno da função: 4.

function higherNumber (array){
    let testNumber = array[0]
    for(let i=0;i<array.length;i++){
        
        if(array[i]<array[i+1]){
            testNumber=array[i+1]
        }
    }
    console.log(testNumber)
}
higherNumber([2, 3, 6, 7, 10, 1])