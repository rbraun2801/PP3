//Funcion obtengoDatos y llamo a calcular

function getDatos(){
    const d1=document.getElementById("inp_d1").value
    const d2=document.getElementById("inp_d2").value
    
    const op=document.getElementById("slt_operacion").value
    
    let resultado=calcular(op,d1,d2)
    document.getElementById("resultado").value = resultado
    console.log(resultado)
    

}

function calcular(op,d1,d2){

    let resultado=null
    if (op == 0) {
        resultado = Number(d1) / Number(d2)        
    }
    else if (op == 1) {
        resultado = d1 / d2
    }
    else if (op == 2) {
        resultado = d1 * d2
    }
    
    return resultado
   
}

function seteoLabel() {
    let op=document.getElementById("slt_operacion").value
    if(op== 0 ){
        document.getElementById("label1").innerHTML='<h3 class="text-success">Voltaje</h3>';
        document.getElementById("label2").innerText="Intensidad";
    }else if(op== 1 ){
        document.getElementById("label1").innerText="Voltaje";
        document.getElementById("label2").innerText="Resistencia";
    }else if(op== 2 ){
        document.getElementById('label1').innerText="Intensidad";
        document.getElementById('label2').innerText="Resistencia";
        
    }
}

document.getElementById("slt_operacion").addEventListener("change", seteoLabel)
document.getElementById("btn_calcular").addEventListener("click", getDatos)

    



    
