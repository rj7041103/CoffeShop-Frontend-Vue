<script lang="ts">
import CardComponent from '@/components/Card/CardComponent.vue'

export default {
  name: 'BlogSection',
  components: {
    CardComponent,
  },
}
</script>
<template>
  <section class="container blogs">
    <h1 class="heading-1">Últimos Blogs</h1>

    <div class="container-blogs">
      <CardComponent />
      <CardComponent />
      <CardComponent />
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

.blogs {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.container-blogs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}
</style>
