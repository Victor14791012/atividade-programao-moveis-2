function adicionar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Erro: divisão por zero";
    }
}

let num1 = 10;
let num2 = 5;

console.log("Adição: " + adicionar(num1, num2));          
console.log("Subtração: " + subtrair(num1, num2));        
console.log("Multiplicação: " + multiplicar(num1, num2)); 
console.log("Divisão: " + dividir(num1, num2));          
