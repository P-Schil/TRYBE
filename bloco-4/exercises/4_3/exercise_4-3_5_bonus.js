
let n=7;
let asteriskLine=""
let asterisk=""
let linhaEspacoCentral=""
let linhaEspacoCentralD=""

for(let j=n-4;j>0;j--){;
    let linhaEspaco = "";
    for( let i=0;i<j;i++){;
        linhaEspaco=linhaEspaco+" ";
    };
   
    if (j!=n-4){
        linhaEspacoCentral=linhaEspacoCentral+" "
        asterisk="*"
    }
    if (j<n-5){
        linhaEspacoCentralD=linhaEspacoCentralD+" "   
    }
    console.log(linhaEspaco+"*"+ linhaEspacoCentral + linhaEspacoCentralD +asterisk)}
for (let k=0; k<n;k++) {
    asteriskLine=asteriskLine+"*"
}console.log(asteriskLine)

    //let n=5;
//let asteriskLine="";
//for(let i=0;i<n;i++){
 //   asteriskLine=asteriskLine+"*"
 //   console.log(asteriskLine)
