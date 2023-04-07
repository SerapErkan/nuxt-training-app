<template>
  <newPostForm @submit="savePost($event)" />
</template>

<script>
import newPostForm from "../../components/users/new-postForm.vue";

export default {
  layout: "userLayout",
  components: {
    newPostForm,
  },
  methods: {
    savePost(post) {
      console.log(post);
    },
  },
};
</script>
