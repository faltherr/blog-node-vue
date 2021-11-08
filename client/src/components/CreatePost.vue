<template>
  <form>
    <div class="form-group">
      <label for="postTitle">Title</label>
      <input
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
      <textarea type="text" class="form-control" id="postContent" placeholder="Content" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "Createpost",

  data() {
    return {};
  }
};
</script>

// TODO: wire this up with the create endpoint
// TODO: cue user to success or error