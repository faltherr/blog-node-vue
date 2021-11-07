<template>
  <main class="post-view">
    <div class="main-title" ref="mainTitle">
      <h4>All the posts</h4>
    </div>
    <div class="content-container">
      <div class="all-posts-content">
        <Post
          v-for="post in posts"
          :key="post.id"
          :image="post.imageUrl"
          :title="post.title"
          :author="post.author"
          :content="post.content"
          :date="post.datePublished"
        />
      </div>
    </div>
  </main>
</template>

<script>
import Post from "./Post";
console.log(this.contentDimensions);
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Hey Im some content",
      posts: null
    };
  },
  // Can I use computed properties to set the height of an element based on another element?
  // computed: {
  //   navHeight(){
  //     console.log(document.getElementsByClassName('navbar')[0])
  //     // return document.getElementsByClassName('navbar')[0].clientHeight
  //     return 200
  //   },
  //   titleHeight(){

  //     console.log(document.getElementsByClassName('main-title')[0])
  //     return 200
  //     // return document.getElementsByClassName('main-title')[0].clientHeight
  //   }
  // },
  components: { Post },
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

<style scoped>
.post-view {
  padding: 0px 50px;
  height: 100%;
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
  justify-content: space-between;
}
</style>

// TODO: Add loading state while fetching
// TODO: Dynamically update height of content