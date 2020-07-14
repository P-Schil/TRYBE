//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
//seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 
//Por exemplo:

let n=4
let linhaAsterisco=""


for (let i=0;i<n;i++){
    linhaAsterisco=linhaAsterisco+"*"
}
    
for (let line=0;line<n;line++){
    console.log(linhaAsterisco)
}