function setValor(){

    const car=document.getElementById("slt_vehiculos").value
    
    
    let resultado=null
    
    if (car == 0) {
        resultado = 10700000 / 1.05       
    }
    else if (car == 1) {
        resultado = 15350000 / 1.05
    }
    else if (car == 2) {
        resultado = 1850000 / 1.15
    }
    
    document.getElementById("h1_precio").innerHTML="$"+resultado.toFixed(0)
    console.log(resultado)    
}

const btn_calcular=document.getElementById("btn_calcular")
btn_calcular.addEventListener("click", setValor)
