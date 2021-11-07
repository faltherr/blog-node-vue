<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style>
#app {
  background: #f0f2f5;
  min-height: 100vh;
  width: 100vw;
  padding-bottom:25px;
}
</style>
