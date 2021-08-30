<template>
  <h2 class="time">{{ time }}</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Clock",
  data() {
    return {
      interval: 0,
      time: new Date().toLocaleTimeString()
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.time = new Date().toLocaleTimeString()
    }, 1000)
  },
  beforeUnmount() {
    clearInterval(this.interval)
  }
});
</script>

<style scoped lang="scss">
  .time {
    font-size: 3rem;
    font-weight: 500;
  }
</style>
