//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let lowestNumber=numbers[0];

for (let i=0;i<10;i++){;
    if(lowestNumber>numbers[i]){
        lowestNumber=numbers[i]
    }
}console.log(lowestNumber)
