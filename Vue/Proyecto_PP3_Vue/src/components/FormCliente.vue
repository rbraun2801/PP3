<template>

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
    <div class="col-7 ms-3 pt-3">
          <h5 class="card-header">Clientes</h5>
            <table class="table al">
               <thead>
                 <tr>
                   <th>Nombre</th>
                   <th>Apellido</th>
                   <th>DNI</th>
                   <th>Accion</th>
                 </tr>
               </thead>
               <tbody>
                   <tr v-for="c of lista" v-bind:key="c.id_cliente">
                       <td class="align-middle">{{ c.nombre }}</td>
                       <td class="align-middle">{{ c.apellido }}</td>
                       <td class="align-middle">{{ c.dni }}</td>
                       <td class="align-middle">
                         <button @click="eliminarCliente(c.id_cliente)" class="btn btn-danger btn-sm">X</button>
                         <button @click="updateCliente(c)" class="btn btn-success btn-sm mx-2">edit</button>
                       </td>
                   </tr>
               </tbody>
             </table>
    </div>
  </div>

  

</template>

<script>

/* eslint-disable*/
export default {
  name: 'FormCliente',
  data() {
    return{
      id:null,
      nombre:'',
      apellido:'',
      dni:null,
      lista:[],
      estado:0
    }
  },
  methods:{
    vaciar(){
        this.nombre='';
        this.apellido='';
        this.dni=null

      },
    guardarCliente(){
      const unCliente={
        nombre: this.nombre,
        apellido:this.apellido,
        dni:this.dni
      }
      this.axios.post("http://localhost:3002/cliente",unCliente).then( result => {
        alert(result.data)
        this.vaciar()
        this.listarClientes()
      })
    },

    listarClientes(){
      this.axios.get("http://localhost:3002/clientes").then( result =>{
        this.lista=result.data;
      })
      },
      eliminarCliente(id){
        this.axios.delete("http://localhost:3002/cliente/"+id).then( result =>{
            alert(result.data)
            this.listarClientes()
        })
      },
      updateCliente(unCliente){
        this.estado=1;
        this.nombre=unCliente.nombre
        this.apellido=unCliente.apellido
        this.dni=unCliente.dni
        this.id=unCliente.id_cliente
      },
      actualizarCliente(){
        const clienteModificado={
          nombre:this.nombre,
          apellido:this.apellido,
          dni:this.dni
        }
        this.axios.put("http://localhost:3002/cliente/"+this.id, clienteModificado).then(result=>{
          alert(result.data)
          this.listarClientes()
          this.vaciar()
          this.estado=0
        })
      }
    },
  mounted(){
    this.listarClientes()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->