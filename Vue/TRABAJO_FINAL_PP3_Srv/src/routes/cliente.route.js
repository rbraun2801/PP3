const express=require('express')

const router=express.Router()

const conexion=require('../database')

router.get('/clientes', async(req,res) => {
  const db= await conexion.obtener_conexion()
  const rows= await db.query('select * from cliente')
  res.json(rows)
})

router.post('/cliente', async (req,res) => {
    const unCliente = req.body
    const db = await conexion.obtener_conexion()
    await db.query(`insert into clientes(razon_social,telefono, direccion_ip, descripcion_equipo, sistema_operativo)
        values('${unCliente.razon_social}','${unCliente.telefono}','${unCliente.direccion_ip}', '${unCliente.descripcion_equipo}', '${unCliente.sistema_operativo}')`)
    res.json('El cliente se inserto exitosamente')
  })

router.put('/cliente/:id', async (req, res) => {
  const db = await conexion.obtener_conexion()
  const id =req.params.id
  const cmod= req.body
  db.query(`update cliente
    set razon_social='${cmod.razon_social}', telefono='${cmod.telefono}', direccion_ip='${cmod.direccion_ip}',
    descripcion_equipo='${cmod.descripcion_equipo}',sistema_operativo='${cmod.sistema_operativo}'
     where id_cliente=${id_cliente}`)
    res.json('Cliente actualizado correctamente')
})

router.delete('/cliente/:id', async (req,res) => {
    const id= req.params.id
    const db = await conexion.obtener_conexion()
    await db.query(`delete from clientes where id_cliente = ${id_cliente} `)
    res.json('El cliente se elimino exitosamente')
})

router.get('/cliente/:dni', async (req,res) => {
  const razon_social= req.params.razon_social
  const db = await conexion.obtener_conexion()
  const row = await db.query(`select * from clientes where razon_social = ${razon_social} `)
  res.json(row[0])
})


module.exports= router