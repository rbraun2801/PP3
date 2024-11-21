<template>
    <div class="col-8 m-4">
        <div>
          <h2>Seleccioná una opción</h2>
          <select @change="capturar_datos()" v-model="equipo" class="form-select shadow p-3 mb-5 bg-body rounded">
            <option disabled value="">Elegí una opción</option>
            <option  v-for="cliente of clientes" :key="cliente.id_cliente" :value="cliente.direccion_ip">
              {{ cliente.razon_social }} {{ cliente.direccion_ip }} {{ cliente.sistema_operativo }}
            </option>
          </select>
        </div>
        <!--  TARJETA USO DEL CPU -->
         <div class="card border-primary m-3" v-bind:class="{'card border-danger mb-3' : cpu>50}" style="max-width: 18rem;">
            <div class="card-header">
                <h3>USO CPU</h3>
            </div>
            <div class="card-body text-primary">
                <p class="card-text">{{ cpu }}</p>
            </div>
        </div>
        <!-- TARJETA MEMORIA -->
        <div class="card border-primary m-3" v-bind:class="{'card border-danger mb-3' : mem.usedMemPercentage>85}" style="max-width: 18rem;">
            <div class="card-header">
                <h3>USO DE MEMORIA</h3>
            </div>
            <div class="card-body text-primary">
                <p class="card-text">{{ mem.totalMemMb }}</p>
                <p class="card-text">{{ mem.usedMemMb }}</p>
                <p class="card-text">{{ mem.freeMemMb }}</p>
            </div>
        </div>

        <!-- TARJETA INFORMACION DEL SISTEMA -->
        <div class="card border-primary m-3" v-bind:class="{'card border-danger mb-3' : mem.usedMemPercentage>85}" style="max-width: 18rem;">
            <div class="card-header">
                <h3>OS INFO</h3>
            </div>
            <div class="card-body text-primary">
                <p class="card-text">{{ osInfo }}</p>
            </div>
        </div>
            <!-- TARJETA INFORMACION DEL SISTEMA -->
        <div class="card border-primary m-3" v-bind:class="{'card border-danger mb-3' : mem.usedMemPercentage>85}" style="max-width: 18rem;">
            <div class="card-header">
                <h3>TIEMPO ENCENDIDO</h3>
            </div>
            <div class="card-body text-primary">
                <p class="card-text">{{ uptime }} Horas</p>
            </div>
        </div>

    </div>
    <div>
        <!-- <GraficoCpu/> -->
    </div>
</template>
<script>
import io from 'socket.io-client'

export default{
    name:'SocketIndicador',
    data(){
        return{
             
            cpu:null,
            mem:{},
            osInfo:'',
            osIP:'',
            razon_social:'',
            clientes:[],
            equipo:'',
            uptime:'',

        }
    },
    methods:{
        datos_cliente(){
             this.axios.get("http://localhost:3000/clientes")
                .then(response => {
                  this.clientes = response.data; // Asignamos los datos obtenidos
                })
        },
        capturar_datos(){
            const socket=io(this.equipo)

            socket.on("cpu", (equipo)=>{
               this.cpu=equipo.data
             }) 
            socket.on("mem", (equipo)=>{
               this.mem=equipo.data
            }) 
            socket.on("uptime", (equipo)=>{
               this.uptime=parseFloat((equipo/60)/60).toFixed(2)
            })
            socket.on("osInfo", (equipo)=>{
               this.osInfo=equipo
            })
            socket.on("osInfo", (equipo)=>{
               this.osInfo=equipo
            })
            
        }
    },
    mounted(){
        this.datos_cliente()
    }
}
</script>