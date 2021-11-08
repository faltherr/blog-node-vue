<template>
  <ViewTemplate>
    <template v-slot:title>
      <h4>Edit Posts</h4>
    </template>
    <template v-slot:content>
      <Post
        v-for="post in posts"
        :key="post.id"
        :image="post.imageUrl"
        :title="post.title"
        :author="post.author"
        :content="post.content"
        :date="post.datePublished"
        :id="post.id"
      />
    </template>
  </ViewTemplate>
</template>

<script>
import ViewTemplate from "./ViewTemplate";
import Post from "./Post";
export default {
  components: {
    ViewTemplate,
    Post
  },
  data() {
    return {
      posts: null
    };
  },
  async created() {
    try {
      const response = await fetch("http://localhost:3080/api/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const result = await response.json();
      this.posts = result;
    } catch (err) {
      console.log("Error", err);
    }
  }
};
</script>

// TODO update state in response to new server data