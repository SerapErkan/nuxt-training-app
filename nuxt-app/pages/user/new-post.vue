<template>
  <newPostForm @submit="savePost($event)" />
</template>

<script>
import newPostForm from "../../components/users/new-postForm.vue";
import axios from "axios";
export default {
  layout: "userLayout",
  components: {
    newPostForm,
  },
  methods: {
    savePost(post) {
      // axios
      //   .post(
      //     "https://nuxt-app-001-default-rtdb.firebaseio.com/posts.json",
      //     post
      //   )
      //   .then((res) => {
      //     console.log(res);
      //   });
    },
  },
};
</script>
