<template>
  <div class="album py-5 bg-body-tertiary">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Post v-for="index in 9" :is-admin="isAdmin" />
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  components: { Post },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
      // required: false,
    },
  },
};
</script>
