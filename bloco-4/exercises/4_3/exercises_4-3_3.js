//Agora inverta o lado do triângulo. Por exemplo:

let n=5;
let asteriskLine = ""
for(let j=n;j>0;j--){
    let linhaEspaco = ""
    
    for( let i=0;i<j;i++){
        linhaEspaco=linhaEspaco+" "
    }
   
    
    asteriskLine=asteriskLine+"*"
  
    console.log(linhaEspaco+asteriskLine)}



