<template>
  <div id="app">
    <login />
    <home msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
import home from './pages/home'
import login from './pages/login'

export default {
  name: 'App',
  components: {
    home,
    login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   margin: 0;
  padding: 0;
  list-style: none;
}
</style>
