<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

axios.defaults.baseURL = 'http://card.xclicker.org/api/v1'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'

export default {
  name: 'app'
}
</script>

<style>
</style>
