<script lang="ts">
import NavbarComponent from '@/components/NavBar/NavbarComponent.vue'
import BannerSection from './sections/BannerSection/BannerSection.vue'
import BlogSection from './sections/BlogSection/BlogSection.vue'
import CategorySection from './sections/CategorySection/CategorySection.vue'
import EspecialSection from './sections/EspecialSection/EspecialSection.vue'
import GallerySection from './sections/GallerySection/GallerySection.vue'
import ProductSection from './sections/ProductSection/ProductSection.vue'
import WidgetsSection from './sections/WidgetSection/WidgetsSection.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'

export default {
  name: 'HomeIndex',
  components: {
    BannerSection,
    BlogSection,
    CategorySection,
    EspecialSection,
    GallerySection,
    ProductSection,
    WidgetsSection,
    NavbarComponent,
    FooterComponent,
  },
}
</script>

<template>
  <main class="main-content">
    <NavbarComponent />
    <BannerSection />
    <WidgetsSection />
    <CategorySection />
    <ProductSection />
    <GallerySection />
    <EspecialSection />
    <BlogSection />
    <FooterComponent />
  </main>
</template>
