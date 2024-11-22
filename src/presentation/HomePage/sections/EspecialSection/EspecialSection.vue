<script lang="ts">
export default {
  name: 'EspecialSection',
}
</script>
<template>
  <section class="container specials">
    <h1 class="heading-1">Especiales</h1>

    <div class="container-products"></div>
  </section>
</template>

<style lang="css" scoped>
.container {
  max-width: 120rem;
  margin: 0 auto;
}
.heading-1 {
  font-size: 2.4rem;
}

.container-products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;
}
</style>
