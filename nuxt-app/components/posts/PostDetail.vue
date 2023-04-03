<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 d-flex align-items-center justify-content-center">
        <div class="my-3 p-3 bg-body rounded shadow-sm mx-auto">
          <h6 class="border-bottom pb-2 mb-0">{{ post.title }}</h6>

          <div class="d-flex text-body-secondary">
            <svg
              class="bd-placeholder-img flex-shrink-0 rounded"
              width="128"
              height="128"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>{{ post.subTitle }}</title>
              <rect width="100%" height="100%" fill="#6f42c1"></rect>
              <text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text>
            </svg>

            <p class="pb-3 mb-0 small lh-sm border-bottom text-center">
              <strong class="d-block text-gray-dark">@{{ post.author }}</strong>
              {{ post.text }}
            </p>
          </div>
          <small class="d-block text-end mt-3">
            <a>Go back to home page</a>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
