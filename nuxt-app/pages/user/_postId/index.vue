<template>
  <div>
    <div class="alert alert-success" role="alert">
      <h5 class="fw-bold">Warning ..!</h5>
      The old post will be deleted when the post update process is performed.
    </div>
    <newPostForm />
  </div>
</template>
<script>
import newPostForm from "@/components/users/new-postForm.vue";
export default {
  layout: "userLayout",
  components: {
    newPostForm,
  },
};
</script>
