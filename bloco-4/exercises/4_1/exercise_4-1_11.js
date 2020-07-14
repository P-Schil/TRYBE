let salario=3000; 
let inss;
let ir;

if (1556.94>=salario){
    inss = salario*0.08};
    else if(1556.94<salario && salario<=2594.92){
    inss = salario*0.09};
    else if(2594.92<salario && salario<=5189.82){
    inss = salario*0.11};
    else {inss=570.88};

if (salario<1903.98){
    ir=0
};
else if(1903.88>=salario && salario<2826.65){
    ir=142.80
};
else if(2826.65>=salario && salario<3751.06){
    ir=354.80
};
else if(3751.06>=salario && salario<4664.68){
    ir=636.13
};
else{ir=869.36};

salarioLiquido= salario-inss-ir;
console.log(salarioLiquido);


