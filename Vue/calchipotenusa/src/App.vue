<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light text-center">
    <a class="navbar-brand mx-2" href="#">
      <img src="../src/assets/logo.png" width="30" height="30" alt="">
    </a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <router-link class="nav-item nav-link" to="/">INICIO</router-link>
        <router-link class="nav-item nav-link" to="/cliente">CLIENTES</router-link> 
        <router-link class="nav-item nav-link" to="/pitagoras">CLIENTES</router-link> 
      </div>
    </div>
  </nav>

  <router-view/>
</template>
