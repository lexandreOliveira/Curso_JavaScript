// Aprendendo sobre operador ternário - Curso de Javascript Moderno

"use strict";

function SemTernario() {
    let num = 10;
    while(num>0){
        let res = num % 2;
        if (res==0){
            console.log(num + " Par");
        }else{
            console.log(num + " Impar");
        }
        num--;
    }
}
//SemTernario()

// O código acima pode ser reduzido da seguinte forma utilizando o operador ternario "?"
// Teste lógico ? se true : se false

function ComTernario() {
    let num = 10
    while(num>0){
        let res=!(num%2) ? "Par" : "Impar"
        console.log(num, res)
        num--
    }
}
ComTernario()











