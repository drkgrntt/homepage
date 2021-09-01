<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link v-if="!user" to="/auth">Login</router-link>
    <a @click="logout" v-if="user">Logout</a>
  </div>
  <router-view :user="user" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import {
  getAuth,
  onAuthStateChanged,
  User,
  signOut,
} from 'firebase/auth'

export default defineComponent({
  data(): { user: User | null } {
    return {
      user: null,
    }
  },
  created() {
    onAuthStateChanged(getAuth(), (user) => {
      this.user = user
    })
  },
  methods: {
    async logout() {
      await signOut(getAuth())
      this.user = null
    },
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: underline;
    cursor: pointer;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
