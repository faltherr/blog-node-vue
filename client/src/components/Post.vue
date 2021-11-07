<template>
  <div class="post-container">
    <img :src="image" alt="some image" class="post-image" />
    <div class="post-body">
      <h5 class="post-title">{{title}}</h5>
      <p>By: {{author}}</p>
      <p>Published: {{date | formatDate}}</p>
      <p class="post-text">{{content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["author", "content", "date", "image", "title"],
  filters: {
    formatDate: function(value) {
      const date = new Date(value);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDay();
      return `${day}-${month}-${year}`;
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