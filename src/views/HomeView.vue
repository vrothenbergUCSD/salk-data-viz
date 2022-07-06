<template>
  <div class="home">
    <h1>Home</h1>
    <div>
      {{ test }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      test: 0,
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