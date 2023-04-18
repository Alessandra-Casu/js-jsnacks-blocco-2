/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
 */

const myArr = [];


for(i=0; i<=5; i++){
    let num = parseInt(prompt('Inserisci un numero'));
    if (num %2 != 0)
    {
        myArr[i] = num;
    }
    console.log(num);
    }

console.log(myArr);
    
    