<template>
  <div class="row">
    <div class="col-lg-4">
      <h4>Probando componente</h4>
      <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input type="text" class="form-control" v-model="nombre">
      </div>
      <button @click="mostrar()" class="btn btn-success">Mostrar</button>
  </div>
</div>
</template>
<script>
/* eslint-disable */
import { ref } from "vue";
export default {
  name: 'FormClientes',
  setup(){
    let nombre = ref('')

    function mostrar(){
      alert(nombre.value)
    }
    return{
      nombre,
      mostrar
    }
  },
}
</script>
