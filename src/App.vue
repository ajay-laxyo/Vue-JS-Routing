<template>
  <div id="margin-shift">
    <h2>Blogs</h2>

    <router-link to = "/">Home</router-link>
    <router-link to = "/about">About</router-link>
    <router-link to = "/blogs">Show Blogs</router-link>
    <router-link to = "/service">Services</router-link>
    <router-link to = "/contact">Contact</router-link>

    <router-view></router-view>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1"></script>
<script>
export default {
  data () {
    return {
      msg: 'Welcome to My Vue project'
    }
  }
}
</script>

<style>

</style>
