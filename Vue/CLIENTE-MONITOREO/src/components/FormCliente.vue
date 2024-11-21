<template>
  <div class="d-flex justify-content-center align-items-center" >
   <div class="col-4 mt-3 ">
      <h5>INGRESE LOS DATOS DEL CLIENTE</h5>
      <!-- Razon Social input -->
      <div  class="form-outline mb-4">
        <input type="text" v-model="razon_social" class="form-control" />
        <label class="form-label" for="form4Example1">Razon Social</label>
      </div>

      <!-- telefono -->
      <div class="form-outline mb-4">
        <input type="number" maxlength="8" class="form-control" v-model.number="telefono">
        <label class="form-label" for="form4Example3">Telefono</label>
      </div>
    
      <!-- IP -->
      <div class="form-outline mb-4">
        <input type="email" v-model="direccion_ip" class="form-control" />
        <label class="form-label" for="form4Example2">Direccion IP</label>
      </div>

      <!-- Descripcion Sistema -->
      <div class="form-outline mb-4">
        <input type="email" v-model="descripcion_equipo" class="form-control" />
        <label class="form-label" for="form4Example2">Descripcion equipo</label>
      </div>

      <!-- Sistema Operativo -->
      <div class="form-outline mb-4">
        <input type="email" v-model="sistema_operativo" class="form-control" />
        <label class="form-label" for="form4Example2">Sistema Operativo</label>
      </div>

        <!-- Submit button -->
         <div v-if="estado==0">
          <button type="button" @click="guardarCliente()" class="btn btn-primary btn-block mb-4">Cargar</button>
         </div>
        <div v-if="estado==1">
          <button type="button" @click="actualizarCliente()" class="btn btn-primary btn-block mb-4" >Actualizar</button>
        </div> 
    </div>
  </div>
</template>

<script>
import Modifcar from './Modifcar.vue';
/* eslint-disable*/
export default {
  components:{
    Modifcar,
  },
  name: 'FormCliente',
  data() {
    return{
      id:null,
      razon_social:'',
      telefono:'',
      direccion_ip:'',
      descripcion_equipo:'',
      sistema_operativo:'',
      lista:[],
      estado:0
    }
  },
  methods:{
    vaciar(){
        this.nombre='';
        this.razon_social='';
        this.direccion_ip='';
        this.telefono='';
        this.descripcion_equipo='';
        this.sistema_operativo='';
      },
    guardarCliente(){
      const unCliente={
        razon_social: this.razon_social,
        telefono:this.telefono,
        direccion_ip:this.direccion_ip,
        descripcion_equipo:this.descripcion_equipo,
        sistema_operativo:this.sistema_operativo
      }
      this.axios.post("http://localhost:3000/cliente",unCliente).then( result => {
        alert(result.data)
        this.vaciar()
        this.listarClientes()
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->