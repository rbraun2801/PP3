const empleados={
    nombre:'Juan',
    apellido:'Rodriguez',
    dni:32323232,
    correo:{
        gmail:'juan@gmail.com',
        outlook:'juan@outlook.com'
    }
}

const {gmail,outlook}=empleados.correo

console.log(`
    ${gmail}
    ${outlook}
`)