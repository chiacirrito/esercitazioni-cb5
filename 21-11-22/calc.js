//ESERCITAZIONE CALCOLATRICE CHE ESEGUE OPERAZIONI CON NODE.JS


const argvs = process.argv
const argv = process.argv.slice(2);
const calcolatore = argv[0]
const num1 = parseFloat(argv[1])
const num2 = parseFloat(argv[2])



if (calcolatore === "addizione" && !isNaN(num1) && !isNaN(num2)){
    console.log("L'" + calcolatore + " corrisponde a " + (num1 + num2));
}

if (calcolatore === "sottrazione" && !isNaN(num1) && !isNaN(num2)){
    console.log("La " + calcolatore + " corrisponde a " + (num1 - num2));
}

if (calcolatore === "divisione"){
    if (num2 == 0){
        console.log("ERROR - Il risultato non esiste!")
    } else {
        console.log("La " + calcolatore + " corrisponde a " + (num1 / num2));
    }
}

if (calcolatore === "prodotto" && !isNaN(num1) && !isNaN(num2)){
    console.log("Il " + calcolatore + " corrisponde a " + (num1 * num2));
} 




