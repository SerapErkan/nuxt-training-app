<template>
  <header class="p-3 text-bg-dark bg-nav">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between"
      >
        <a
          href="/"
          class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <img src="../../assets/img/logo2.PNG" alt="" />
        </a>

        <ul
          class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <nuxt-link tag="li" to="/posts">
            <a class="nav-link px-2 text-white">Posts List</a>
          </nuxt-link>

          <nuxt-link tag="li" to="/about">
            <a class="nav-link px-2 text-white">About</a>
          </nuxt-link>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input
            type="search"
            class="form-control form-control-dark text-bg-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div class="text-end">
          <!-- <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button> -->
          <nuxt-link
            tag="button"
            class="btn btn-warning rounded-circle py-2"
            to="/user"
          >
            Admin
          </nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isToggle: true,
    };
  },

  methods: {
    toggle() {
      isToggle: true;
    },
  },
};
</script>
<style scoped>
.bg-nav {
  background-color: #713be4;
}
a {
  color: white;
}
</style>
