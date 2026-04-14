const numero1 = 2;
const numero2 = 3;

var op = parseInt(prompt("Insira qual operação quer: 1: soma 2: subtração 3: multiplicação 4: divisão"));

switch (op){
    case 1:
        console.log(numero1 + numero2);
    case 2: 
        console.log(numero1 - numero2);
    case 3:
        console.log(numero1 * numero2);
    case 4:
        console.log(numero1 / numero2);
}