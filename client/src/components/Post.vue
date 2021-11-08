<template>
  <div class="post-container">
    <img :src="image" alt="some image" class="post-image" />
    <div class="post-body">
      <h5 class="post-title">{{title}}</h5>
      <p>By: {{author}}</p>
      <p>Published: {{date | formatDate}}</p>
      <p class="post-text">{{content}}</p>
    </div>
    <div v-if="this.$route.path === '/edit'">
      <button>Edit</button>
      <button v-on:click="deletePost(id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["author", "content", "date", "image", "title", "id"],
  filters: {
    formatDate: function(value) {
      const date = new Date(value);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDay();
      return `${day}-${month}-${year}`;
    }
  },
  methods: {
    async deletePost(postId) {
      try {
        await fetch("http://localhost:3080/api/posts", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            postId
          })
        });
      } catch (err) {
        console.log("Error deleting post", err);
      }
    }
  }
};
</script>

<style scoped>
.post-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
}
.post-image {
  width: 200px;
  height: 300px;
}
.post-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>