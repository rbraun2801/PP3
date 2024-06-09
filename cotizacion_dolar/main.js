async function solicitar(){

    const lista = await fetch("https://dolarapi.com/v1/dolares")
 
    //convertir los datos recibidos en una expresion nativa de javascript
    const lista_definitiva = await lista.json()
 
    lista_definitiva.forEach((element,index) => {
        console.log(`${index+1}-${element.moneda} -
         Dolar ${element.nombre}-
         COMPRA ${element.compra}-
         VENTA:${element.venta}`)
    });
 }

 solicitar();