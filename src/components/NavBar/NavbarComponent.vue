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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"></svg>
          <h1 class="logo"><a href="/">Baristas</a></h1>
        </div>

        <div class="container-user">
          <!--  user-icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="user-icon"
          >
            <path
              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
            />
          </svg>

          <!-- cart -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="cart-icon"
          >
            <path
              d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z"
            />
          </svg>

          <div class="content-shopping-cart">
            <span class="text">Carrito</span>
            <span class="number">(0)</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container-navbar">
      <nav class="navbar container">
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

<style lang="css" scoped>
/* Hero */
.container {
  max-width: 120rem;
  margin: 0 auto;
}

.container-hero {
  background-color: var(--background-color);
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
}

.container-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.container-logo svg {
  font-size: 3rem;
}

.container-logo h1 a {
  text-decoration: none;
  color: #000;
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: -1px;
}

.container-user {
  display: flex;
  gap: 1rem;
  cursor: pointer;
}

.container-user .user-icon {
  font-size: 3rem;
  color: var(--primary-color);
  padding-right: 2.5rem;
  border-right: 1px solid #e2e2e2;
}

.container-user .cart-icon {
  font-size: 3rem;
  color: var(--primary-color);
  padding-left: 1rem;
}

.content-shopping-cart {
  display: flex;
  flex-direction: column;
}

/* NavBar */

.container-navbar {
  background-color: var(--primary-color);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.navbar .fa-bars {
  display: none;
}

.menu {
  display: flex;
  gap: 2rem;
}

.menu li {
  list-style: none;
}

.menu a {
  text-decoration: none;
  font-size: 1.3rem;
  color: var(--dark-color);
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
}

.menu a::after {
  content: '';
  width: 1.5rem;
  height: 1px;
  background-color: #fff;
  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%, 50%);
  opacity: 0;
  transition: all 0.3s ease;
}

.menu a:hover::after {
  opacity: 1;
}

.menu a:hover {
  color: #fff;
}
</style>
