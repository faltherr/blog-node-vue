<template>
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">The Blog</a>
    <div class="navbar-links">
      <router-link class="nav-link" to="/">All posts</router-link>
      <router-link class="nav-link" to="/create">Create posts</router-link>
      <router-link class="nav-link" to="/edit">Manage posts</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar-links {
  display: flex;
}
</style>