<template>
  <div class="home">
    <h1>Home</h1>
    <div>
      {{ test }}
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue"
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      test: "Test string from data",
    }
  }

}
</script>

<style>

.home {
  font-family:Arial, Helvetica, sans-serif;
  color:#333;
  background-color: #fff;
}

</style>