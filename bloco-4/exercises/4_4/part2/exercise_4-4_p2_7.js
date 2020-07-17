/*Crie uma função que receba uma string word e outra string ending. 
Verifique se a string ending é o final da string word. 
Considere que a string ending sempre será menor que a string word.

Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be");
Retorno esperado: true

verificaFimPalavra("joaofernando", "fernan");
Retorno esperado: false*/
function wordEnding (word,ending){
let countTrue=0
let countFalse=0
    for(let i= ending.length-1;i>=0;i--){
        if(ending[i]!=word[i+(word.length-ending.length)]){
            countFalse+=countFalse
        }        
    }    
    if (countFalse!=0){
        console.log(false)
    }else{console.log(true)}
}
wordEnding("trybe","be")





//else{console.log(true)}