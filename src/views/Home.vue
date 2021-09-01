<template>
  <div class="home">
    <p v-if="user">Logged in as {{ user.email }}</p>
    <Clock />
  </div>
</template>

<script lang="ts">
import Clock from '@/components/Clock.vue'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'Home',
  components: {
    Clock,
  },
  props: {
    user: Object,
  },
})
</script>
