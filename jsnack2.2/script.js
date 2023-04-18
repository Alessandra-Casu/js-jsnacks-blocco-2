/*
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi,
 e da queste vuole generare una falsa lista di invitati con nome e cognome.

 */

 const numberList = 12;

 const nameArr = ['Maria', 'Giuseppe', 'Enrico', 'Caterina',' Alessandro', 'Antonio'];
 const lastNameArr = [ 'Rossi', 'Verdi', 'Gialli', 'Neri', 'Bianchi', 'Grigi'];

 console.log(nameArr);
 console.log(lastNameArr);

 /*
 for(i=0; i<=5; i++){
        for(j=0; j<=5; j++)
        {
            console.log( nameArr[i] + ' ' + lastNameArr[j] );
        }

 }
 */

 for(i = 0; i < numberList; i++){

    const nameCasual = Math.floor(Math.random() * nameArr.length);
    const lastNameCasual = Math.floor(Math.random() * lastNameArr.length);

    console.log(nameArr[nameCasual] + ' ' + lastNameArr[lastNameCasual]);
 }