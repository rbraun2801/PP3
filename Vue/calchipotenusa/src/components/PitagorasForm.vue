<template>
  <div class="container-fluid mt-3 d-flex justify-content-center">
    <div class="row">

      <div class="col-auto text-center">
        <div class="mb-2">
          <label id="label1" class="form-label">Lado B</label>
          <input id="inp_d1" type="number" class="form-control">
        </div>
        <div class="mb-2">
            <label id="label1" class="form-label">Lado A</label>
            <input id="inp_d1" type="number" class="form-control">
        </div>
      </div>

      <div class="col-auto text-center">
        <div class="mb-2">
            <label class="form-label">Resultado</label>
            <input type="text" id="resultado" class="form-control text-center" disabled>
        </div>
        <div class="mb-3">
            <button id="btn_calcular" class="btn btn-success">Calcular</button>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
/* eslint-disable */
export default {
  name: 'FormCliente',
  setup() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->