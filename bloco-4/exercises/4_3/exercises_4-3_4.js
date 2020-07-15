//Depois, faça uma pirâmide com n asteriscos de base:

let n=5;
let asteriskLine = "";
let asterisk=""
for(let j=n;j>0;j--){;
    let linhaEspaco = "";
    for( let i=0;i<j;i++){;
        linhaEspaco=linhaEspaco+" ";
    }
    asteriskLine=asteriskLine+"*";
    if(j!=n){
        asterisk=asterisk+"*"
    }
    console.log(linhaEspaco+asteriskLine+asterisk)};