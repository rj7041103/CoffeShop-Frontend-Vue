<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'ProductComponent',
  props: {
    imagen: {
      type: String as PropType<string>,
      required: true,
    },
    nombre: {
      type: String as PropType<string>,
      required: true,
    },
    precio: {
      type: Number as PropType<number>,
      required: true,
    },
  },
})
</script>

<template>
  <div class="card-product">
    <div class="container-img">
      <img :src="imagen" alt="Imagen del producto" />
      <div class="button-group">
        <span>
          <font-i icon="fa-regular fa-eye"></font-i>
        </span>
        <span>
          <font-i icon="fa-regular fa-heart"></font-i>
        </span>
        <span>
          <font-i icon="fa-solid fa-code-compare"></font-i>
        </span>
      </div>
    </div>
    <div class="content-card-product">
      <div class="stars">
        <font-i icon="fa-solid fa-star"></font-i>
        <font-i icon="fa-solid fa-star"></font-i>
        <font-i icon="fa-solid fa-star"></font-i>
        <font-i icon="fa-solid fa-star"></font-i>
        <font-i icon="fa-solid fa-star"></font-i>
      </div>
      <h3>{{ nombre }}</h3>
      <span class="add-cart">
        <font-i icon="fa-solid fa-basket-shopping"></font-i>
      </span>
      <p class="price">${{ precio.toFixed(2) }}</p>
    </div>
  </div>
</template>
