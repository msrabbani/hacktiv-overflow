<template lang="html">
  <div class="main-page">
    <navbar/>
    <headers/>
    <threads/>
    <footers/>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
import headers from '@/components/Header'
import threads from '@/components/Thread'
import footers from '@/components/Footer'

export default {
  components: {
    navbar,
    headers,
    threads,
    footers
  }
}
</script>

<style>
</style>
