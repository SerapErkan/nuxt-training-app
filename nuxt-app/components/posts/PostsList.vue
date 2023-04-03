<template>
  <div class="album py-5 bg-body-tertiary">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Post
          v-for="post in posts"
          :is-admin="isAdmin"
          :key="post.id"
          :post="post"
        />
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
      required: false,
    },
    posts: {
      required: true,
      type: Array,
    },
  },
};
</script>
