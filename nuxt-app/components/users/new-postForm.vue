<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
          <div class="card-body">
            <h4 class="text-center">Write Something ...</h4>
            <hr />

            <div class="form-group mb-3">
              <label>Author Name</label>
              <input
                v-model="post.author"
                type="text"
                class="form-control"
                placeholder="Author Name.."
              />
            </div>
            <div class="form-group mb-3">
              <label>Title</label>
              <input
                type="text"
                class="form-control"
                placeholder="Title .."
                v-model="post.title"
              />
            </div>
            <div class="form-group mb-3">
              <label>Subtitle</label>
              <input
                type="text"
                class="form-control"
                placeholder="Subtitle.."
                v-model="post.subTitle"
              />
            </div>
            <div class="form-group mb-3">
              <label>Corner Post</label>
              <textarea
                v-model="post.text"
                cols="30"
                rows="5"
                placeholder="Corner Post..."
                class="form-control"
              ></textarea>
            </div>

            <button class="w-100 btn btn-lg btn-warning" type="submit">
              Save
            </button>
            <hr class="my-4" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: null,
        subTitle: null,
        author: null,
        text: null,
      },
    };
  },
  methods: {
    onSubmit() {
      //$emit
      this.$emit("submit", this.post);
    },
  },
};
</script>
