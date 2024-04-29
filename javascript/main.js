function mostrar(){
    const nombre=document.getElementById("inp_nombre").value
    const apellido=document.getElementById("inp_apellido").value
    let mensaje='Inspeccionando consola, '+apellido+' '+nombre
    console.log(mensaje)
}

document.getElementById("btn_aceptar").addEventListener("click", mostrar)
