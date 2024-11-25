<script lang="ts">
export default {
  name: 'NavbarComponent',
}
</script>

<template>
  <header>
    <div class="container-hero">
      <div class="container hero">
        <div class="container-logo">
          <font-i icon="fa-solid fa-mug-hot" class="logo"></font-i>
          <h1 class="logo"><a href="/">Baristas</a></h1>
        </div>

        <div class="container-user">
          <font-i icon="fa-solid fa-user"></font-i>
          <font-i icon="fa-solid fa-basket-shopping"></font-i>
          <div class="content-shopping-cart">
            <span class="text">Carrito</span>
            <span class="number">(0)</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container-navbar">
      <nav class="navbar container">
        <font-i icon="fa-solid fa-bars"></font-i>
        <ul class="menu">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Moca Helado</a></li>
          <li><a href="#">Expreso</a></li>
          <li><a href="#">Capuchino</a></li>
          <li><a href="#">Más</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
