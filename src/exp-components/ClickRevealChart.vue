<template>
  <div id="poof" class="hide">
    <canvas id="myChart"></canvas>
  </div>

  <button @click="togglePoof">Reveal</button>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import "https://cdn.jsdelivr.net/npm/chart.js@3.8.2/dist/chart.min.js";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};

onMounted(() => {
  const myChart = new Chart(document.getElementById("myChart"), config);
});
function togglePoof() {
  document.getElementById("poof").classList.toggle("hide");
}
</script>

<style lang="scss">
#poof {
  transition: opacity 1s;
}
.hide {
  visibility: hidden;
  opacity: 0;
}
</style>