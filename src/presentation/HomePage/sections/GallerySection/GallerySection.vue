<script lang="ts">
export default {
  name: 'GallerySection',
}
</script>

<template>
  <section class="gallery">
    <img
      src="../../../assets/img/gallery1.jpg"
      alt="Gallery Img1"
      class="gallery-img-1"
    /><img
      src="../../../assets/img/gallery2.jpg"
      alt="Gallery Img2"
      class="gallery-img-2"
    /><img
      src="../../../assets/img/gallery3.jpg"
      alt="Gallery Img3"
      class="gallery-img-3"
    /><img
      src="../../../assets/img/gallery4.jpg"
      alt="Gallery Img4"
      class="gallery-img-4"
    /><img
      src="../../../assets/img/gallery5.jpg"
      alt="Gallery Img5"
      class="gallery-img-5"
    />
  </section>
</template>

<style lang="css" scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 30rem);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-img-3 {
  grid-column: 2/4;
  grid-row: 1/3;
}
</style>
