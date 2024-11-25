<script lang="ts">
export default {
  name: 'ProductComponent',
}
</script>

<template>
  <div class="card-product">
    <div class="container-img">
      <img src="../../assets/img/cafe-australiano.jpg" alt="Cafe Australiano" />
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
      <h3>Cafe Australiano</h3>
      <span class="add-cart">
        <font-i icon="fa-solid fa-basket-shopping"></font-i>
      </span>
      <p class="price">$3.20</p>
    </div>
  </div>
</template>
