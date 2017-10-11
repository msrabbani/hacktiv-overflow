<template lang="html">
  <div class="">
    <navbar/>
  <div class="container">
    <h1>Detail Question</h1>
    <div class="col-md-1">
    </div>
    <div class="col-md-10">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">{{singleThreads.data.title}}</h3>
        </div>
        <div class="panel-body">
          <p>{{singleThreads.data.question}}</p>
        </div>
        <div class="panel-footer">
          <a href="#" class="btn btn-primary btn-sm">Update</a>
          <!-- <a href="#" class="btn btn-primary btn-sm">Delete</a> -->
          <button type="button" class="btn btn-primary" @click="deleteQuestion(singleThreads.data._id)" >Delete</button>
        </div>
      </div>

      <div class="form-group">
      <label for="textArea" class="col-lg-2 control-label">Textarea</label>
      <div class="col-lg-10">
        <textarea class="form-control" rows="3" id="textArea"></textarea>
      </div>

    </div>
    </div>
  </div>
</div>

</template>

<script>
import navbar from '@/components/Navbar'
import { mapActions, mapState } from 'vuex'

export default {
  props: ['threadId'],
  components: {
    navbar
  },
  methods: {
    ...mapActions([
      'getSingleThread', 'deleteQuestion'
    ])
  },
  computed: {
    ...mapState([
      'singleThreads'
    ])
  },
  created () {
    this.getSingleThread(this.threadId)
  }
}
</script>

<style scoped>
.container {
  padding-top: 5px;
}
</style>
