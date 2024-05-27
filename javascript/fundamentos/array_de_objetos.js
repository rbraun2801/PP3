const alumnos=[
    {
        nombre:'juan',
        legajo:2123,
        notas:{
            matemticas:8,
            sociales:9
        }
    },
    {
        nombre:'pedro',
        legajo:2126,
        notas:{
            matemticas:8,
            sociales:9
        }

    }
]

alumnos.forEach(el=>{
    console.log(el.nombre)
})