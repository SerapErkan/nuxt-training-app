<template>
  <div class="col">
    <div class="card shadow-sm">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
      </svg>
      <div class="card-body">
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <div class="d-flex justify-content-center align-items-center">
          <div v-if="isAdmin">
            <button
              type="button"
              class="btn btn-sm btn-outline-warning mx-1"
              @click="goToEdit"
            >
              Edit
            </button>

            <button
              type="button"
              class="btn btn-sm btn-outline-danger mx-2"
              @click="goToDelete"
            >
              Delete
            </button>
          </div>
          <button
            v-else
            type="button"
            class="btn btn-sm btn-outline-secondary"
            @click="goToDetail"
          >
            View
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToDetail() {
      this.$router.push("posts/1");
    },
    goToDelete() {
      alert("SİLMEK İSTEDİĞİNDEN EMİN MİSİN");
    },
    goToEdit() {
      this.$router.push("user/new-post");
    },
  },
  props: {
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
