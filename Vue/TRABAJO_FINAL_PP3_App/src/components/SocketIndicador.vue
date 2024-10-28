<template>
    <h1>probando SocketIndicador</h1>
</template>
<script>
import io from 'socket.io-client'
export default{
    name:'SocketIndicador',
    data(){
        return{

        }
    },
    methods:{
        capturar_datos(){
            const socket=io('http://localhost:3000')
            socket.on('dato', (valor)=>{
                console.log(valor)
            })
        }
    },
    mounted(){
        this.capturar_datos()
    }
}
</script>