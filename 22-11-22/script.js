import { somma, sottrazione, moltiplicazione, divisione } from "./calcolatrice.js";
import { ce, qs, GET } from "./utils.js";
import http from "http";
import url from "url";
import fs from "fs";

const server = http.createServer((req, res) => {

    const my_url = url.parse(req.url, true).pathname;
    const params = url.parse(req.url, true).query;
    const {param1, param2} = params;


switch(my_url){
    case "/home":
        res.write("home");
        break;
    case "/calcolatrice":
        const data = fs.readFileSync('./calcolatrice.html');
        res.write(data.toString());
        break;
    case "/somma":
        const data1 = fs.readFileSync('./somma.html');
        res.write(data1.toString());
        res.write(`${somma(param1, param2)}`)
        break; 
    case "/sottrazione":
        const data2 = fs.readFileSync('./sottrazione.html');
        res.write(data2.toString());
        res.write(`${sottrazione(param1, param2)}`)
        break; 
    case "/moltiplicazione":
        const data3 = fs.readFileSync('./moltiplicazione.html');
        res.write(data3.toString());
        res.write(`${moltiplicazione(param1, param2)}`)
        break; 
    case "/divisione":
        const data4 = fs.readFileSync('./divisione.html');
        res.write(data4.toString());
        res.write(`${divisione(param1, param2)}`)
        break;  
    default: res.write("Errore")
   
}

res.end();

});


server.listen(3000);
console.log(server);
