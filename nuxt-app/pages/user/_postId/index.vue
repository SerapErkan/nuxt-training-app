<template>
  <div>
    <div class="alert alert-success" role="alert">
      <h5 class="fw-bold">Warning ..!</h5>
      The old post will be deleted when the post update process is performed.
    </div>
    <newPostForm :post="LoadedPost" />
  </div>
</template>
<script>
import newPostForm from "@/components/users/new-postForm.vue";
export default {
  layout: "userLayout",
  components: {
    newPostForm,
  },
  data() {
    return {
      LoadedPost: {
        id: 1,
        title: "kötü kara kedi köfte ",
        subTitle: "Patile",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        author: "SerapErkan",
      },
    };
  },
};
</script>
