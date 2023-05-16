// Operadores Lógicos em Javascript (&&, ||, !)
"use strict"

function OperadoresLogicos() {
    let n1, n2, n3, n4
    n1 = 10, n2 = 5, n3 = 15, n4 = 2
    if (!(n1==n2) && n3>n4){
        console.log("n1 é maior que n2 && n3 é maior n4")
    }
    else if (n1<n2 || n4<n3){
        console.log("n1 não é menor que n2 mas usamos || ou, então n4 é menor n3")
    }
}

OperadoresLogicos()
