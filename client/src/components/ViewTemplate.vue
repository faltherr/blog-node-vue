<template>
  <main class="post-view">
    <div class="main-title" ref="mainTitle">
      <slot name="title"></slot>
    </div>
    <div class="content-container">
      <div class="all-posts-content">
        <slot name="content"></slot>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ViewTemplate",
  props: ["content", "title"]
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