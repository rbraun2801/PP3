<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light text-center">
    <a class="navbar-brand mx-2" href="#">
      <img src="../src/assets/logo.png" width="30" height="30" alt="">
    </a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <router-link class="nav-item nav-link" to="/home">INICIO</router-link>
        <router-link class="nav-item nav-link" to="/cliente">CARGA CLIENTES</router-link> 
        <router-link class="nav-item nav-link" to="/pitagoras">PITAGORAS</router-link> 
        <router-link class="nav-item nav-link" to="/catalogo">CATALOGO</router-link>
      </div>
    </div>
  </nav>

  <router-view/>
</template>
