<template lang="html">
  <div class="main-page">
    <navbar/>
    <headers/>
    <router-view/>
    <footers/>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
import headers from '@/components/Header'
import footers from '@/components/Footer'

export default {
  components: {
    navbar,
    headers,
    footers
  }
}
</script>

<style>
</style>
