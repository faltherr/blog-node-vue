<template>
  <form>
    <div class="form-group">
      <label for="postTitle">Title</label>
      <input
        v-model="postTitle"
        type="text"
        class="form-control"
        id="postTitle"
        aria-describedby="postHelp"
        placeholder="Enter a title"
      />
      <small id="postHelp" class="form-text text-muted">All good posts start with a title.</small>
    </div>
    <div class="form-group">
      <label for="postContent">Content</label>
      <textarea
        v-model="postContent"
        type="text"
        class="form-control"
        id="postContent"
        placeholder="Content"
      />
    </div>
    <button
      type="submit"
      class="btn btn-primary"
      v-on:click="createPost({postTitle, postContent})"
    >Submit</button>
  </form>
</template>

<script>
import { dateNow } from "./utils";
console.log(dateNow())
export default {
  name: "Createpost",

  data() {
    return {
      postTitle: "",
      postContent: ""
    };
  },
  methods: {
    async createPost(postObj) {
      await fetch("http://localhost:3000/posts", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          author: "TheWriter",
          datePublished: dateNow(),
          title: postObj.postTitle,
          content: postObj.postContent,
          imageUrl: `https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/200/300`
        })
      });
      this.postTitle = "";
      this.postContent = "";
    }
  }
};
</script>

// TODO: wire this up with the create endpoint
// TODO: cue user to success or error