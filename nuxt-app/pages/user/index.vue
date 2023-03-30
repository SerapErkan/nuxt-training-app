import PostsList from '../../components/posts/PostsList.vue';

<template>
  <div>
    <div class="text-center pt-5">
      <nuxt-link
        to="/user/new-post"
        tag="button"
        class="btn btn-outline-warning w-25"
      >
        New post added
      </nuxt-link>
    </div>

    <PostsList :is-admin="true" />
  </div>
</template>
<script>
import PostsList from "../../components/posts/PostsList.vue";
export default {
  layout: "userLayout",
  components: {
    PostsList,
  },
};
</script>
