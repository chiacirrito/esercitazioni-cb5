//DICHIARO LE VARAIABILI
let operation, firstNum, secondNum;

alert("Qui puoi svolgere operazioni matematiche, clicca ok per andare avanti");
operation = prompt("Scegli l'operazione matematica tra:\n 1= Addizione \n 2= Sottrazione\n 3= Moltiplicazione \n 4= Divisione");
//operation = prompt(operation);
firstNum = prompt("Scegli il primo  numero per il calcolo");
secondNum = prompt ("Scegli il secondo numero per il calcolo");
firstNum = parseInt (firstNum);
secondNum = parseInt (secondNum);

switch (operation) {


       case "Addizione":
         console.log( firstNum + secondNum );
         break;

       case "Sottrazione":
         console.log( firstNum - secondNum );
         break;

       case "Moltiplicazione":
         console.log( firstNum * secondNum );
         break;

       case "Divisione":
         console.log( firstNum / secondNum );
         break;

       default:
         console.log("Questa non è un'operazione valida!");

     }
