<template>
  <div class="app-wrapper">
    <div class="app" v-if="this.$store.state.postLoaded">
      <NavBar/>
      <router-view/>

    </div>
  </div>
</template>

<script>
import NavBar from './components/Navigation.vue'


export default {
  name: 'App',
  components: {
    NavBar,
  },
  data() {
    return {
    }
  },
  watch: {
  },
  mounted() {
    console.log('App mounted')
  },
  methods: {
    
  }
}
</script>


<style lang="scss">
/* eslint-disable vue/multi-word-component-names  */
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  //font-family: "Quicksand", sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.app {
  //display: flex;
  //flex-direction: column;
  //min-height: 100vh;
}



</style>

