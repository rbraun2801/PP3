<template>

  <div  class="contanier-fluid">
    <div class="row justify-content-center">
      <form style="width: 26rem;">
      <!-- Name input -->
      <div  class="form-outline mb-4">
        <input type="text" id="form4Example1" class="form-control" />
        <label class="form-label" for="form4Example1">Name</label>
      </div>

      <!-- Email input -->
      <div class="form-outline mb-4">
        <input type="email" id="form4Example2" class="form-control" />
        <label class="form-label" for="form4Example2">Email address</label>
      </div>

      <!-- Message input -->
      <div class="form-outline mb-4">
        <textarea class="form-control" id="form4Example3" rows="4"></textarea>
        <label class="form-label" for="form4Example3">Message</label>
      </div>

      <!-- Checkbox -->
      <div class="form-check d-flex justify-content-center mb-4">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value=""
            id="form4Example4"
            checked
          />
          <label class="form-check-label" for="form4Example4">
      Enviarme una copia del mensaje
          </label>
        </div>

        <!-- Submit button -->
        <button type="button" class="btn btn-primary btn-block mb-4">Send</button>
      </form> 
    </div>
  </div>

</template>

<script>
/* eslint-disable*/
export default {
  name: 'FormCliente',
  setup() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->