<template>
  <ViewTemplate>
    <template v-slot:title>
      <h4>{{pageTitle}}</h4>
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
  name: "PostContainer",
  components: {
    ViewTemplate,
    Post
  },
  data() {
    return {
      posts: null,
      loadingPosts: false
    };
  },
  // Question 2 Follow Up: Cannot read client height of undefined so component is nav component not mounted prior to computation
  // computed: {
  //   navHeight(){
  //     console.log(document.getElementsByClassName('navbar')[0])
  //     return document.getElementsByClassName('navbar')[0].clientHeight
  //   },
  computed: {
    pageTitle(){
      return `${this.$route.path === '/edit' ? 'Edit' : ' All the'} Posts`
    }
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