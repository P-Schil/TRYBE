//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
//Valor esperado no retorno da função: Fernanda.

function higherCharacter (array){
    let arrayCharacter=[]
    
    for(let i=0;i<array.length;i++){
        arrayCharacter.push(array[i].length)
        }
        let testNumber=array[0]
    for (let k =0; k<arrayCharacter.length;k++){
        if( arrayCharacter[k]<arrayCharacter[k+1]){
            testNumber=array[k+1]
        }

    }
    console.log(testNumber)
}

higherCharacter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

