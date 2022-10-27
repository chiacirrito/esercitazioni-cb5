//ESERCIZIO UNO
function calculator(num1, num2, operation = "+") {
    switch (operation) {
      case "Addizione":
        return num1 + num2;
      case "Sottrazione":
        return num1 - num2; 
      case "Moltiplicazione":
        return num1 * num2;
      case "Divisione":
        return num1 / num2;
    }
  }
  //operation = prompt("Scegli l'operazione matematica tra:\n Addizione (+)\n Sottrazione (-)\n Moltiplicazione (*) \n Divisione (/)");
  //num1 = prompt("Scegli il primo  numero per il calcolo");
  //num2 = prompt ("Scegli il secondo numero per il calcolo");
  //num1 = parseInt (num1);
  //num2 = parseInt (num2);  
 //console.log (calculator(num1, num2, operation));

 //ESERCIZIO DUE 
 let character = {
    name: "Lorenzo",
    surname: "Cherubini",
    age: 56,
    brothers: ["Bernardo", "Anna", "Umberto"],
    job: "Cantante",
 };

 console.log(character);
 console.log(character.brothers[2]);
 character.name = "Jovanotti";
 console.log(character);
 console.log(Object.keys(character));

 //ESERCIZIO AVANZATO 

 function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
 }
 console.log(sum(10 , 20 , 30, 40));


 //ESERCIZIO AVANZATO TIPO 2
 function calculator(num1, num2, ...num3, operation = "+") {
    switch (operation) {
      case "Addizione":
        return num1 + num2 + ...num3;
      case "Sottrazione":
        return num1 - num2 - ...num3; 
      case "Moltiplicazione":
        return num1 * num2 * ...num3;
      case "Divisione":
        return num1 / num2 / ...num3;
    }
  }
  //operation = prompt("Scegli l'operazione matematica tra:\n Addizione (+)\n Sottrazione (-)\n Moltiplicazione (*) \n Divisione (/)");
  //num1 = prompt("Scegli il primo  numero per il calcolo");
  //num2 = prompt ("Scegli il secondo numero per il calcolo");
  //num1 = parseInt (num1);
  //num2 = parseInt (num2);  
 //console.log (calculator(num1, num2, operation));
    