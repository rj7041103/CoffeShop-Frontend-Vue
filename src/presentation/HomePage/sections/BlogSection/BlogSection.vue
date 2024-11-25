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
