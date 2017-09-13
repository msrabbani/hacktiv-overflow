<template>
  <div class="hello">
    <Navbar/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import { mapActions } from 'vuex' // mapaction unutk melakukan maping atau mengkopi method

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Navbar
  },
  methods: {
    ...mapActions([
      'getAllThread'
    ])
  },
  created () {
    this.getAllThread()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
