<script lang="ts">
export default {
  name: 'BannerSection',
}
</script>

<template>
  <section class="banner">
    <div class="content-banner">
      <p>Café Delicioso</p>
      <h2>100% Natural <br />Café Fresco</h2>
      <a href="#">Comprar ahora</a>
    </div>
  </section>
</template>

<style lang="css" scoped>
.banner {
  background-image: linear-gradient(100deg, #000000, #00000020),
    url('../../../assets/img/banner.jpg');
  height: 60rem;
  background-size: cover;
  background-position: center;
}
.content-banner {
  max-width: 50rem;
  margin: 0 auto;
  padding: 25rem 0;
}
</style>
