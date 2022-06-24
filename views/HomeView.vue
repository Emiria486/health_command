<template>
  <div class="home">
  <TopNavVue></TopNavVue>
  <SceneChangeVue></SceneChangeVue>
  <RelatedProductsVue></RelatedProductsVue>
  <HomeFooterVue></HomeFooterVue>
  </div>
</template>

<script>
import TopNavVue from '@/components/home/TopNav.vue'
import SceneChangeVue from '@/components/home/SceneChange.vue'
import RelatedProductsVue from '@/components/home/RelatedProducts.vue'
import HomeFooterVue from '@/components/home/HomeFooter.vue'
export default {
    name: "HomeView",
    components: {TopNavVue,SceneChangeVue,RelatedProductsVue,HomeFooterVue,}
}
</script>
