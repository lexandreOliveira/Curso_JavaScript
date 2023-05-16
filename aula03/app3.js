// Diferença entre LET, VAR e CONST em Javascript - 
//Curso de Javascript Moderno - Aula 03

"use strict"
// Neste exemplo abaixo, a variável está sendo declarada como var.
// Desta forma a variável pode ser acessada de fora de seu escopo, não 
// sendo uma boa prática. O modo correto é declara-la como let
if(true){
    //var nome = "Alexandre"
    let nome = "Alexandre"
}
//console.log(nome)


// Exemplo utilizando function

function teste() {
    let nome = "Alexandre"
    if (true) {
        console.log("Dentro do IF e da function name: " + nome)
    }    
    console.log("Fora do escopo do IF e dentro do escopo da function: " + nome)
}
teste()

// console.log("Fora do escopo da function e fora do escopo do if: " + nome) 


// Constantes, não pode ser atribuido outro valor
const carro = "Mercedes"
console.log(carro)









