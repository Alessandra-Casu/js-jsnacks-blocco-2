/*
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi,
 e da queste vuole generare una falsa lista di invitati con nome e cognome.

 */
let nameCasual;
let lastNameCasual;

 const nameArr = [ 'Rossi', 'Verdi', 'Gialli', 'Neri', 'Bianchi', 'Grigi'];

 const lastNameArr = ['Maria', 'Giuseppe', 'Enrico', 'Caterina',' Alessandro', 'Antonio'];

 console.log(nameArr);
 console.log(lastNameArr);

 for(i=0; i<=5; i++){
        for(j=0; j<=5; j++)
        {
            console.log(nameArr[i]);
            console.log(lastNameArr[j]);
        }
    

 }