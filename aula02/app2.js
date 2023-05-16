/* Aula 02 de JavaScript Moderno, do CFBcursos!
JavaScript em modo estrito
Hoje em nosso curso de Javascript Completo e Profissional 
vamos aprender o que é o modo estrito, usando o comando "use strict". 
O modo estrito ou strict mode faz com que a programação seja mais limpa e funcional.

JavaScript é uma linguagem de programação interpretada estruturada, 
de script em alto nível com tipagem dinâmica fraca e multiparadigma. 
Juntamente com HTML e CSS, o JavaScript é uma das três principais 
tecnologias para desenvolvimento de aplicações Web e Sites. */


// O código abaixo refere-se ao JavaScript sem modo estrito, podendo
// assim não declarar a variável
/*
nome = "Cyber"
console.log("Profissão")
console.log(nome)
console.log("Profissão: " + nome)
                                   */

// O código abaixo refere-se ao JavaScript em modo estrito. 
// Neste modo é obrigatório declarar as variáveis.

"use strict"
let nome = "Alexandre"
console.log("Profissão")
console.log(nome)
console.log("Nome: " + nome)
