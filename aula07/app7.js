// Operadores Bitwise em Javascript (operadores Bitwise que são operadores que operam bit a bit em Javascript)


"use strict"
function Bitwise() {
    let n1=10
    let n2=11
    let res=(n1&n2) // Os operadores são: &,|,^, <<,>>
    if (n1 < n2){
        console.log("A operação de bitwise entre: " + n1 + " e " + n2 + " = " + res)
    }else{
        console.log("False")
    }
}
Bitwise()