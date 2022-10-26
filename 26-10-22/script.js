//ESERCIZIO 1

let charsArr = ["Chiara", "Cirrito", "23 anni", "laurea in DAMS"];
console.log (charsArr);

//ESERCIZIO 2
//Rimuovere l'età
charsArr.splice(2, 1);
console.log (charsArr);

//Inserire la data di nascita al posto dell'età
charsArr[2] = "16-02-1999";
console.log (charsArr);

//Trasformare le lettere di nome e cognome in maiuscolo
charsArr[0]=charsArr[0].toUpperCase();
charsArr[1]=charsArr[1].toUpperCase();
console.log (charsArr);

//ESERCIZIO AVANZATO - Creare un triangolo rettangolo capovolto di 7 righe di '#' 

let string = "#######";

for (let x = 7; x >= 0; x--){
    string = string.slice(0, x);
    console.log(string);
}


