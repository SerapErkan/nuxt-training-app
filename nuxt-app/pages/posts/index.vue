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

  // data() {
  //   return {
  //   };
  //},
  created() {
    this.$store.dispatch("setPosts", this.fetchedPosts);
  },

  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        fetchedPosts: [
          {
            id: 1,
            title: "kötü kara kedi köfte ",
            subTitle: "Patile",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            author: "SerapErkan",
          },
          {
            id: 2,
            title: "küçük kar kedi köfte ",
            subTitle: "Patile",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            author: "SerapErkan",
          },
          {
            id: 3,
            title: "kötü kedi köfte ",
            subTitle: "Patile",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            author: "SerapErkan",
          },
        ],
      });
    }, 0);
  },
};
</script>
