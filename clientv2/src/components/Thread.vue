<template lang="html">
<div class="container">
  <h1>Questions List</h1>
  <div class="col-md-1">
  </div>
  <div class="col-md-10">
    <div class="list-group" v-for="thread in threads">
      <a href="#" class="list-group-item">
        <h4 class="list-group-item-heading">{{thread.title}}</h4>
        <p class="list-group-item-text">{{thread.question}}</p>
      </a>
    </div>
  </div>

</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'getAllThread'
    ])
  },
  computed: {
    ...mapState([
      'threads'
    ])
  },
  created () {
    this.getAllThread()
  }
}
</script>

<style scoped>
.container {
  padding-top: 15px;
}
h1 {
  text-align: center;
  padding-bottom: 20px;

}

</style>
