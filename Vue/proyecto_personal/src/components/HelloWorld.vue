<template>

  <div  class="contanier-fluid">
    <div class="row">
      <div class="col-3">
      <div class="card mt-3" style="width: 18rem;">
        <img :src='lista_productos.icon_url' class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">{{ lista_productos.value }}</p>
        </div>
      </div>
    </div>
    </div>
  </div>

</template>

<script>
import { ref } from "vue";
/* eslint-disable*/
export default {
  name: 'Catalogo',
  setup() {

    let lista_productos = ref([])

    async function readApi() {
      const productos= await fetch('https://api.chucknorris.io/jokes/random')
      lista_productos.value = await productos.json()
    }
  return{
    readApi,
    lista_productos
  }
  },
  created(){
    this.readApi()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->