<template>
    <div>
        <Header/>
        <Banner/>
        <nuxt/>
        <Footer/>
      
    </div>
</template>
<script>
import Header from '@/components/common/Header.vue'
import Banner from '@/components/common/Banner.vue'
import Footer from '@/components/common/Footer.vue';
export default{

  components:{
    Header,
    Banner,
    Footer
  }
}
</script>