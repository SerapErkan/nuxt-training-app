<template>
  <PostDetail :post="fetchedPost" />
</template>

<script>
import PostDetail from "@/components/posts/PostDetail.vue";
export default {
  components: {
    PostDetail,
  },
  layout: "userLayout",

  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        fetchedPost: {
          id: "1",
          title: "kötü kara kedi köfte",
          subTitle: "patilio",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quam ex iusto vel esse dolore facilis reprehenderit architecto consequatur, neque possimus.",
          author: "SerapErkan",
        },
      });
    }, 2000);
  },
};
</script>
