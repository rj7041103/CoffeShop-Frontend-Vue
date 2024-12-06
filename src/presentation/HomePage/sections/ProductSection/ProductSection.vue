<script lang="ts">
//import ProductComponent from '@/features/Products/components/ProductComponent.vue'

export default {
  name: 'ProductSection',
  //components: { ProductComponent },
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
      <!--       <ProductComponent />
      <ProductComponent />
      <ProductComponent /> -->
    </div>
  </section>
</template>
