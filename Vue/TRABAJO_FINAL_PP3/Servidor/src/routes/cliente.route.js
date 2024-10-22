const express=require('express')

const router=express.Router()

const conexion=require('../database')

router.get('/clientes', async(req,res) => {
  const db= await conexion.obtener_conexion()
  const rows= await db.query('select * from clientes')
  res.json(rows)
})

router.post('/cliente', async (req,res) => {
    const unCliente = req.body
    const db = await conexion.obtener_conexion()
    await db.query(`insert into clientes(nombre,apellido,dni)
        values('${unCliente.nombre}','${unCliente.apellido}',${unCliente.dni})`)
    res.json('El cliente se inserto exitosamente')
  })

router.put('/cliente/:id', async (req, res) => {
  const db = await conexion.obtener_conexion()
  const id =req.params.id
  const cmod= req.body
  db.query(`update clientes
    set nombre='${cmod.nombre}', apellido='${cmod.apellido}', dni=${cmod.dni}
     where id_cliente=${id}`)
    res.json('Cliente actualizado correctamente')
})

router.delete('/cliente/:id', async (req,res) => {
    const id= req.params.id
    const db = await conexion.obtener_conexion()
    await db.query(`delete from clientes where id_cliente = ${id} `)
    res.json('El cliente se elimino exitosamente')
})

router.get('/cliente/:dni', async (req,res) => {
  const dni= req.params.dni
  const db = await conexion.obtener_conexion()
  const row = await db.query(`select * from clientes where dni = ${dni} `)
  res.json(row[0])
})


module.exports= router