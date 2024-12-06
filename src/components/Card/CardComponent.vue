<script lang="ts">
export default {
  name: 'CardComponent',
}
</script>

<template>
  <div class="card-blog">
    <div class="container-img">
      <img src="../../assets/img/blog-1.jpg" alt="Imagen Blog 1" />
      <div class="button-group-blog">
        <span>
          <font-i icon="fa-solid fa-magnifying-glass"></font-i>
        </span>
        <span>
          <font-i icon="fa-solid fa-link"></font-i>
        </span>
      </div>
    </div>
    <div class="content-blog">
      <h3>Lorem, ipsum dolor sit</h3>
      <span>29 Noviembre 2022</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
        molestiae! Ratione et, dolore ipsum quaerat iure illum reprehenderit non
        maxime amet dolor voluptas facilis corporis, consequatur eius est sunt
        suscipit?
      </p>
    </div>
  </div>
</template>
