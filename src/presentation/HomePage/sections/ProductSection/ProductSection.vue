<script lang="ts">
import ProductComponent from '@/features/Products/ProductComponent.vue'

export default {
  name: 'ProductSection',
  components: { ProductComponent },
}
</script>

<template>
  <section class="container top-products">
    <h1 class="heading-1">Mejores Productos</h1>

    <div class="container-options">
      <span class="active">Destacados</span>
      <span>Más recientes</span>
      <span>Mejores Vendidos</span>
    </div>

    <div class="container-products">
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
    </div>
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

.top-products {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

.container-options {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.container-options span {
  color: #777;
  background-color: #fff;
  padding: 0.7rem 3rem;
  font-size: 1.4rem;
  text-transform: capitalize;
  border-radius: 2rem;
  cursor: pointer;
}

.container-options span:hover {
  background-color: var(--primary-color);
  color: #fff;
}

.container-options span.active {
  background-color: var(--primary-color);
  color: #fff;
}

/* Products */
.container-products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;
}
</style>
