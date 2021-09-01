<template>
  <div class="auth">
    <div class="form">
      <h3>Register</h3>
      <AuthForm @onSubmit="registerUser" />
    </div>
    <div class="form">
      <h3>Login</h3>
      <AuthForm @onSubmit="loginUser" />
    </div>
  </div>
</template>

<script lang="ts">
import AuthForm from '../components/AuthForm.vue'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'Auth',
  components: { AuthForm },
  data() {
    return {}
  },
  props: ['user'],
  methods: {
    async registerUser({
      email,
      password,
    }: {
      email: string
      password: string
    }) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          getAuth(),
          email,
          password
        )
        this.$router.push('/')
      } catch ({ code, message }) {
        console.error({ code, message })
      }
    },
    async loginUser({
      email,
      password,
    }: {
      email: string
      password: string
    }) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          getAuth(),
          email,
          password
        )
        this.$router.push('/')
      } catch ({ code, message }) {
        console.error({ code, message })
      }
    },
  },
})
</script>

<style scoped lang="scss">
.auth {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
</style>
