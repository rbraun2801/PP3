<template>

  <nav class="navbar navbar-expand-lg  bg-primary text-center" data-bs-theme="dark">
    <a class="navbar-brand mx-3" href="#">
      <img src="../src/assets/logo.png" width="50" height="50" alt="">
    </a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <router-link class="nav-item nav-link" to="/home">INICIO</router-link>
        <router-link class="nav-item nav-link" to="/cliente">CARGA CLIENTES</router-link> 
        <router-link class="nav-item nav-link" to="/modificar">MODIFICAR CLIENTES</router-link>
        <router-link class="nav-item nav-link" to="/monitoreo">MONITOREO</router-link>
      </div>
    </div>
  </nav>

<router-view/>
</template>
