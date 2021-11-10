<template>
  <ViewTemplate>
    <template v-slot:title>
      <h4>All the Posts</h4>
    </template>
    <template v-slot:content>
      <!-- <p>Loading</p> -->
      <Post
        v-for="post in posts"
        :key="post.id"
        :image="post.imageUrl"
        :title="post.title"
        :author="post.author"
        :content="post.content"
        :date="post.datePublished"
        @refetch-posts="fetchAllPosts"
      />
    </template>
  </ViewTemplate>
</template>

<script>
import Post from "./Post";
import ViewTemplate from "./ViewTemplate";

export default {
  name: "HelloWorld",
  components: { ViewTemplate, Post },
  // Question 1: What is the simple Vue method for setting loading state?
  async created() {
    this.fetchAllPosts();
  },
  data() {
    return {
      msg: "Hey Im some content",
      posts: null
    };
  },
  // Question 2 Follow Up: Cannot read client height of undefined so component is nav component not mounted prior to computation
  // computed: {
  //   navHeight(){
  //     console.log(document.getElementsByClassName('navbar')[0])
  //     return document.getElementsByClassName('navbar')[0].clientHeight
  //   },
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

<style scoped>
.post-view {
  padding: 0px 50px;
}
.main-title {
  margin: 15px 0px;
}
.content-container {
  background: #fff;
  height: calc(100% - 200px);
  padding: 20px;
}
.all-posts-content {
  display: flex;
  flex-wrap: wrap;
}
</style>

// TODO: Add loading state while fetching
// TODO: Dynamically update height of content