<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="data">
    <h1>Data</h1>
    <div>
      {{ test_string }}
    </div>
    <p>Count: {{ this.$store.state.count}}</p>
    <button @click="this.$store.commit('increment')">Increment count</button>

    <Chart :tweetData="loadData" />
  </div>
</template>

<script>
//import Chart from "../components/Chart.vue"
import { defineAsyncComponent } from 'vue'
import * as d3 from "d3"

export default {
  name: "Data",
  components: {
    Chart: defineAsyncComponent(() =>
      import('../components/Chart.vue'))
  },
  data() {
    return {
      test_string: "Testing this string",
      loadData: [],
    }
  },
  mounted() {
    console.log('Data mounted')
    this.fetchData()
  },
  methods: {
    async fetchData() {
      console.log('fetchData')
      let data = await d3.json("./tweets.json");
      // let data = [
      //   {
      //     "user": "Al",
      //     "content": "I really love seafood.",
      //     "timestamp": " Mon Dec 23 2013 21:30 GMT-0800 (PST)",
      //     "retweets": ["Raj", "Pris", "Roy"],
      //     "favorites": ["Sam"]
      //   },
      //   {
      //     "user": "Al",
      //     "content": "I take that back, this doesn't taste so good.",
      //     "timestamp": "Mon Dec 23 2013 21:55 GMT-0800 (PST)",
      //     "retweets": ["Roy"],
      //     "favorites": []
      //   }]
      
      console.log(data)
      this.loadData = data;

    }
  },


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