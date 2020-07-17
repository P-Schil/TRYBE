//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

//Exemplo de palíndromo: arara.

//verificaPalindrome("arara");

//Retorno esperado: true

//verificaPalindrome("desenvolvimento");

//Retorno esperado: false



function verificaPalindromo (palavra){
   
    let palavraAoContrario=""
    
    for (let i =palavra.length -1 ;i>=0;i--){
      palavraAoContrario=palavraAoContrario+palavra[i]
    }
    if(palavra=palavraAoContrario){
        console.log(true)
    }else{console.log(false)}
    }

    verificaPalindromo("arara")

