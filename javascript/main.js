function mostrar(){
    const d1=document.getElementById("inp_d1").value
    const d2=document.getElementById("inp_d2").value
    
    const op=document.getElementById("slt_operacion").value
    let resultado=null
    if (op == 0) {
        resultado = Number(d1) + Number(d2)        
    }
    if (op == 1) {
        resultado = d1 - d2
    }
    if (op == 2) {
        resultado = d1 * d2
    }
    if (op == 3) {
        resultado = d1 / d2
    }
    //alert(resultado)
    let mensaje='El resultado es= '+resultado
    document.getElementById("h_resultado").textContent = mensaje
    console.log(mensaje)
}

document.getElementById("btn_aceptar").addEventListener("click", mostrar)
