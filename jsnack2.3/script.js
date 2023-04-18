/*
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/ 
let num;
let sum = 0;
const myArr = [ 1, 2, 3, 4, 5, 1];

for (i=0; i<= myArr.length; i++)
{
    if(i %2!=0){
       num = myArr[i];
       sum += num
       console.log(num);
    }
    
    
}

console.log('La somma dei numeri contenuti negli indici dispari è: ' + sum);
