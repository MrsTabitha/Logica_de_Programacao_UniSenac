//Faça um programa que imprima os números de 100 até 200 de 10 em 10.

const prompt = require("prompt-sync")();

for (let i = 100; i <= 200; i += 10) { //i = i + 10
    console.log(`${i}`);
}