<template>
  <div class="data">
    <h1>Data</h1>
    <div>
      {{ test }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DataView",
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