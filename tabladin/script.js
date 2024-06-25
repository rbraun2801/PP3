async function getData(){

    const url = "https://dolarapi.com/v1/dolares"
    await fetch(url)
        .then(response=>response.json())
        .then(data=>setData(data))
        .catch(error=> alert("HUBO UN ERROR AL CARGAR: "+error ))
    }        

    const setData= (data)=> {
        console.log(data)
        let cel=''
        for (let i = 0; i < data.length; i++) {
            cel += `<tr><td>${data[i].moneda}</td>
                    <td>${data[i].nombre}</td>
                    <td>${data[i].compra}</td>
                    <td>${data[i].venta}</td></tr>`
        }
        document.getElementById('data').innerHTML=cel
    }

const btn_getData= document.getElementById('btn_getData')
btn_getData.addEventListener("click",getData)