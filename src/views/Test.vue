<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="text-3xl font-bold">
    <h1>Test</h1>
    <button @click="toggleClass">Toggle</button>
    <br/>
    <svg id="dataviz" v-bind:class="{active: isActive}" >
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3"

export default {
  name: "Test",
  components: {

  },
  data() {
    return {
      isActive: false,

    }
  },
  mounted() {
    console.log('Test mounted')
    //this.foo()
    var svg = d3.select("#dataviz")

    svg.attr("height", 200).attr("width", 450)

    // Create a scale: transform value in pixel
    var x = d3.scaleLinear()
        .domain([0, 100])         // This is the min and the max of the data: 0 to 100 if percentages
        .range([0, 400]);       // This is the corresponding value I want in Pixel
    // Try console.log( x(25) ) to see what this x function does.

    // Add 3 dots for 0, 50 and 100%
    svg.append("circle")
      .attr("cx", x(30)).attr("cy", 100).attr("r", 40).style("fill", "blue");
    svg.append("circle")
      .attr("cx", x(60)).attr("cy", 100).attr("r", 40).style("fill", "red");
    svg.append("circle")
      .attr("cx", x(90)).attr("cy", 100).attr("r", 40).style("fill", "green");


  },
  methods: {
    foo(active) {
      d3.select(".circle")
        .style("stroke-width", active ? 5 : 1);
    },
    toggleClass() {
      
      this.isActive = !this.isActive
      console.log('toggling to ' + this.isActive)
      this.foo(this.isActive)
      this.opaque(this.isActive)
    },
    opaque(active) {
      d3.select(".circle")
        .style("opacity", active ? 1 : 0.5)
    }

  },



}
</script>

<style lang="scss" scoped>
/* eslint-disable vue/multi-word-component-names  */
/*
.test {
  margin-top: 20px;
}

.circle {
  fill: red;
  stroke:black;
}*/

</style>