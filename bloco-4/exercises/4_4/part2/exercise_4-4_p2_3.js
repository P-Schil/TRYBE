//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3];.
//Valor esperado no retorno da função: 6.

/*function lowestNumber (array){
    let testNumber=array[0]
    for(let i=0; i<array.length;i++){
        if(array[i]>array[i+1]){
            testNumber=array[i+1]
        }
    }console.log(testNumber)
}
lowestNumber([2, 4, 6, 7, 10, 0, -3])*/

function concatName(array) {
    // seu código aqui
    let arrayResposta=[]
    for (let i=array.length-1; i>=0;i--){
      if(i==array.length-1 || i==0){
      arrayResposta.push(array[i])
      }
    }return arrayResposta
    
  }
  console.log(concatName(["Lucas","João","Pedro"]))