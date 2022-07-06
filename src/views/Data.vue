<!-- eslint-disable vue/multi-word-component-names -->
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
  name: "Data",
  data() {
    return {
      test: 0,
    }
  }

}
</script>

<style>
/* eslint-disable vue/multi-word-component-names  */

.data {
  font-family:Arial, Helvetica, sans-serif;
  color:#333;
  background-color: #fff;
}

</style>