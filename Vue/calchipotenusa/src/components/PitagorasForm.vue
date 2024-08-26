<template>
  <div class="container-fluid mt-3 d-flex justify-content-center">
    <div class="row">

      <div class="col-auto text-center">
        <div class="mb-2">
          <label id="label1" class="form-label">Lado A</label>
          <input v-model.number="ladoA" type="number" class="form-control">
        </div>
        <div class="mb-2">
            <label id="label1" class="form-label">Lado B</label>
            <input v-model.number="ladoB" type="number" class="form-control">
        </div>
      </div>

      <div class="col-auto text-center">
        <div class="mb-2">
            <h4>Resultado:</h4>
            <h5 class="form-label">{{resultado}}</h5>
        </div>
        <div class="mt-5">
            <button @click="Calcular()" class="btn btn-primary">Calcular</button>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
/* eslint-disable */
import {ref} from 'vue'
export default {
  name: 'FormCliente',
  setup() {
    //variables
    let ladoA= ref('')
    let ladoB= ref('')
    let resultado= ref('0')
    //funciones
    function Calcular() {
      resultado.value =(ladoA.value*ladoA.value)+(ladoB.value*ladoB.value)
    }
    return{
      Calcular,
      ladoA,
      ladoB,
      resultado,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->