async function getData(){
    try {
        const url = "https://dolarapi.com/v1/dolares"
        const respuesta =await fetch(url)
        const data= await respuesta.json();
        let cell=''
        for (let i = 0; i < data.length; i++) {
        cell += `<tr><td>${data[i].moneda}</td>
                <td>${data[i].nombre}</td>
                <td>${data[i].compra}</td>
                <td>${data[i].venta}</td></tr>`
        }
        document.getElementById('data').innerHTML=cell
    }       
     catch (error) {
        alert(error)
    }     
}

const btn_getData= document.getElementById('btn_getData')
btn_getData.addEventListener("click",getData)