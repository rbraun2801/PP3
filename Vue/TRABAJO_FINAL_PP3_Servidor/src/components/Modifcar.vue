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
        this.estado=1;
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