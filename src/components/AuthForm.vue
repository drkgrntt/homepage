<template>
  <form v-on:submit="handleSubmit" class="form">
    <div class="field">
      <input
        class="input"
        name="email"
        type="email"
        v-model="email"
        required
      />
      <label for="email">Email</label>
    </div>
    <div class="field">
      <input
        class="input"
        name="password"
        type="password"
        v-model="password"
        required
      />
      <label for="password">Password</label>
    </div>
    <input class="submit" type="submit" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'AuthForm',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    handleSubmit(event: MouseEvent) {
      event.preventDefault()
      this.$emit('onSubmit', {
        email: this.email,
        password: this.password,
      })
    },
  },
})
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input {
  font-size: 1rem;
  padding: 0.5rem;
}

.submit {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #0fa;
  background-color: transparent;
  border: 0.1rem solid #0fa;
  border-radius: 0.2rem;
  cursor: pointer;
}
</style>
