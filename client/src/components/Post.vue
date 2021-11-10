<template>
  <div class="post-container">
    <img :src="image" alt="some image" class="post-image" />
    <div class="post-body">
      <h5 class="post-title">{{title}}</h5>
      <p>By: {{author}}</p>
      <p>Published: {{date | formatDate}}</p>
      <p v-if="!isEditing" class="post-text">{{content}}</p>
      <textarea v-else class="post-text" v-model="postContent" />
    </div>
    <div v-if="this.$route.path === '/edit'">
      <button
        v-if="!isEditing"
        type="button"
        class="btn btn-secondary"
        v-on:click="toggleEditing()"
      >Edit</button>
      <button v-else type="button" class="btn btn-secondary" v-on:click="toggleEditing()">Cancel</button>

      <button
        v-if="!isEditing"
        v-on:click="deletePost(id)"
        type="button"
        class="btn btn-danger"
      >Delete</button>
      <button v-else v-on:click="updatePost(id)" type="button" class="btn btn-success">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["author", "content", "date", "image", "title", "id"],
  data() {
    return {
      postContent: this.content,
      isEditing: false
    };
  },
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
    // Question 4: How do I update state in the event of a successful or failed network request
    async deletePost(postId) {
      console.log(postId);
      try {
        await fetch(`http://localhost:3000/posts/${postId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        });
        this.$emit("refetch-posts");
      } catch (err) {
        console.log("Error deleting post", err);
      }
    },
    toggleEditing: function() {
      this.isEditing = !this.isEditing;
      this.postContent = this.content;
    },
    // Question 4: How do I update state in the event of a successful or failed network request
    async updatePost(postId) {
      try {
        await fetch(`http://localhost:3000/posts/${postId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ content: this.postContent })
        });
        this.$emit("refetch-posts");
      } catch (err) {
        console.log("Error deleting post", err);
      }
      this.isEditing = false;
    }
  }
};
</script>

<style scoped>
.post-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
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