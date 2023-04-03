<template>
  <div>
    <Header />

    <div class="center">
      <Banner />
    </div>
    <nuxt />

    <Footer />
  </div>
</template>
<script>
import Header from "@/components/common/Header.vue";
import Banner from "@/components/common/Banner.vue";
import Footer from "@/components/common/Footer.vue";
export default {
  components: {
    Header,
    Banner,
    Footer,
  },
};
</script>
<style>
.center {
  display: flex; /* Flex konteyner olarak ayarla */
  flex-direction: column; /* Dikey hizalanacak öğeler */
  justify-content: center; /* Dikeyde de ortala */
  align-items: center; /* Yatayda ortala */
  height: 50vh; /* Ekran yüksekliği kadar genişlet */
}
</style>
