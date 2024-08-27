<template>

  <div  class="contanier-fluid">
    <div class="row">
      <div class="col-3" v-for="(p,index) of lista_productos.products" v-bind:key="index">
      <div class="card mt-3" style="width: 18rem;">
        <img :src='p.thumbnail' class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">{{ p.title }}</p>
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
      const productos= await fetch('https://dummyjson.com/products')
      lista_productos.value = await productos.json()
      //console.log(lista_productos.value)
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