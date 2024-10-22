const mariadb= require('mariadb')

const parametros=mariadb.createPool({
    host:'localhost',
    user:'root',
    port:3306,
    password:'tito2801',
    database:'monitoreo_db'
})

async function obtener_conexion() {
    const conexion= await parametros.getConnection()
    return conexion
}

module.exports={obtener_conexion}