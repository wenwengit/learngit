<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <div class="list-group">
      <a class="list-group-item" v-link="{ path: '/demo/home'}">Home</a>
      <a class="list-group-item" v-link="{ path: '/demo/list'}">list</a>
    </div>
    <router-view></router-view>
  </div>

</template>
<script>
import Hello from './components/Hello'
import home from './demo/home/index.vue'
import list from './demo/list/index.vue'
export default {
  name: 'app',
  components: {
    Hello,
    home,
    list
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
