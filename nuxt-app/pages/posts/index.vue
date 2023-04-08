import PostsList from '../../components/posts/PostsList.vue';

<template>
  <PostsList :posts="fetchedPosts" />
</template>
<script>
import PostsList from "../../components/posts/PostsList.vue";
export default {
  components: {
    PostsList,
  },
  layout: "userLayout",

  computed: {
    fetchedPosts() {
      return this.$store.getters.getPost;
    },
  },
};
</script>
