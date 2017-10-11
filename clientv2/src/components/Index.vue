<template>
  <div class="indexPage">
    <navbar/>
    <headers/>

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

<style lang="css">
</style>
