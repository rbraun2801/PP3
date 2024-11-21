<template>

  <div  class="row">
    <div class="col-12 ms-3 pt-3">
          <h5 class="card-header">Clientes</h5>
            <table class="table al">
               <thead>
                 <tr>
                   <th>Razon Social</th>
                   <th>Telefono</th>
                   <th>Dir. IP</th>
                   <th>Descripcion equipo</th>
                   <th>Sistema Operativo</th>
                   <th>Accion</th>
                 </tr>
               </thead>
               <tbody>
                   <tr v-for="c of lista" v-bind:key="c.id_cliente">
                       <td class="align-middle">{{ c.razon_social }}</td>
                       <td class="align-middle">{{ c.telefono }}</td>
                       <td class="align-middle">{{ c.direccion_ip }}</td>
                       <td class="align-middle">{{ c.descripcion_equipo }}</td>
                       <td class="align-middle">{{ c.sistema_operativo }}</td>
                       <td class="align-middle">
                         <button @click="eliminarCliente(c.id_cliente)" class="btn btn-danger btn-sm">X</button>
                         <button @click="updateCliente(c)" class="btn btn-success btn-sm mx-2">edit</button>
                       </td>
                   </tr>
               </tbody>
             </table>
    </div>
  </div>
  <!-- Modal -->
  <div
      v-if="showModal"
      class="modal fade show"
      tabindex="-1"
      style="display: block; background-color: rgba(0, 0, 0, 0.5);"
      >
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Encabezado del Modal -->
          <div class="modal-header">
            <h5 class="modal-title">Actulizacion de cliente</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>

          <!-- Cuerpo del Modal -->
          <div class="modal-body">
            <div class="d-flex justify-content-center align-items-center" >
                <div class="col-4 mt-3 ">
            <!-- Razon Social input -->
            <div  class="form-outline mb-4">
              <input type="text" v-model="razon_social" class="form-control" />
              <label class="form-label" for="form4Example1">Razon Social</label>
            </div>
          
            <!-- telefono -->
            <div class="form-outline mb-4">
              <input type="number" maxlength="8" class="form-control"  v-model="telefono">
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
             
            </div>
          </div>
          </div>

          <!-- Pie del Modal -->
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="closeModal">Cerrar</button>
            <button class="btn btn-primary" @click="actualizarCliente()">
              Actualizar
            </button>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
/* eslint-disable*/
export default {
  name: 'Modicar',
  data() {
    return{
      id:null,
      razon_social:'',
      telefono:'',
      direccion_ip:'',
      descripcion_equipo:'',
      sistema_operativo:'',
      lista:[],
      //estado:0
      showModal: false,
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
    listarClientes(){
      this.axios.get("http://localhost:3000/clientes").then( result =>{
        this.lista=result.data;
      })
      },
      eliminarCliente(id){
        this.axios.delete("http://localhost:3000/cliente/"+id).then( result =>{
            alert(result.data)
            this.listarClientes()
        })
      },
      updateCliente(unCliente){
        this.showModal=true;
        this.razon_social=unCliente.razon_social
        this.telefono=unCliente.telefono
        this.direccion_ip=unCliente.direccion_ip
        this.descripcion_equipo=unCliente.descripcion_equipo
        this.sistema_operativo=unCliente.sistema_operativo
        this.id=unCliente.id_cliente
      },
      actualizarCliente(){
        const clienteModificado={
          razon_social:this.razon_social,
          telefono:this.telefono,
          direccion_ip:this.direccion_ip,
          descripcion_equipo:this.descripcion_equipo,
          sistema_operativo:this.sistema_operativo
        }
        this.axios.put("http://localhost:3000/cliente/"+this.id, clienteModificado).then(result=>{
          alert(result.data)
          this.listarClientes()
          this.vaciar()
          this.showModal=false
        })
      },
      closeModal() {
      this.showModal = false;
    },
    confirmAction() {
      alert("Acción confirmada!");
      this.closeModal();
    }
    },
  mounted(){
    this.listarClientes()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style>
  body.modal-open {
  overflow: hidden;
}
</style>