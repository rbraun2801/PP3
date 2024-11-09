<template>
  <Modifcar></Modifcar>
  <div  class="row">
    <div class="col-4 ms-4 pt-3">
      <h5>Formulario</h5>
      <form style="width: 26rem;">
      <!-- Nombre input -->
      <div  class="form-outline mb-4">
        <input type="text" v-model="nombre" class="form-control" />
        <label class="form-label" for="form4Example1">Nombre</label>
      </div>

      <!-- Apellido input -->
      <div class="form-outline mb-4">
        <input type="email" v-model="apellido" class="form-control" />
        <label class="form-label" for="form4Example2">Apellido</label>
      </div>

      <!-- Message input -->
      <div class="form-outline mb-4">
        <input type="number" maxlength="8" class="form-control" v-model.number="dni">
        <label class="form-label" for="form4Example3">DNI</label>
      </div>


        <!-- Submit button -->
         <div v-if="estado==0">
          <button type="button" @click="guardarCliente()" class="btn btn-primary btn-block mb-4">Cargar</button>
         </div>
        <div v-if="estado==1">
          <button type="button" @click="actualizarCliente()" class="btn btn-primary btn-block mb-4" >Actualizar</button>
        </div>
        
      </form> 
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