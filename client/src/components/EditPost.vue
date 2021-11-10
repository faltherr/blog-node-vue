<template>
  <ViewTemplate>
    <template v-slot:title>
      <h4>Edit Posts</h4>
    </template>
    <template v-slot:content>
      <p v-if="loadingPosts">Loading</p>
      <Post
        v-else
        v-for="post in posts"
        :key="post.id"
        :image="post.imageUrl"
        :title="post.title"
        :author="post.author"
        :content="post.content"
        :date="post.datePublished"
        :id="post.id"
        @refetch-posts="fetchAllPosts"
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
      posts: null,
      loadingPosts: false,
    };
  },
  async created() {
    this.fetchAllPosts();
  },
  methods: {
    async fetchAllPosts() {
      try {
        const response = await fetch("http://localhost:3000/posts", {
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
  }
};
</script>
