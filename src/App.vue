<template>
  Hello.
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div class="app">
    Hey in here.
    
    <NavBar/>
    <img alt="Vue logo" src="./assets/logo.png">
    
    <router-view/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HelloWorld,
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
}
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


</style>

