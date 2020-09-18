<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import login from './components/login.vue'

export default {
  name: 'app',
  components: {
    // login
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
}
</style>
