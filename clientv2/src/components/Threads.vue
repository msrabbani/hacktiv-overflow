<template lang="html">
<div class="container">

  <div class="container-AddQ">
    <form class="form-horizontal">
  <fieldset>
    <legend>Add Question</legend>
    <div class="form-group">
      <label for="inputTitle" class="col-lg-2 control-label">Title</label>
      <div class="col-lg-10">
        <input type="text" class="form-control" id="inputTitle" placeholder="Title" v-model="formCreateQ.title">
      </div>
    </div>

    <div class="form-group">
      <label for="textArea" class="col-lg-2 control-label">Question</label>
      <div class="col-lg-10">
        <textarea class="form-control" rows="3" id="textArea" v-model="formCreateQ.question"></textarea>
        <span class="help-block">put your question here! jangan berteletele!.</span>
      </div>
    </div>

    <div class="form-group">
      <div class="col-lg-10 col-lg-offset-2">
        <button type="button" class="btn btn-primary" @click="createQuestions">Submit</button>
      </div>
    </div>
  </fieldset>
</form>
  </div>


  <div class="col-md-1">
  </div>
  <div class="col-md-10">
    <div class="list-group" v-for="thread in threads">
        <router-link :to="'/questions/' + thread._id" class="list-group-item">
        <h4 class="list-group-item-heading">{{thread.title}}</h4>
        <p class="list-group-item-text">{{thread.question}}</p>
        <i><p v-if="thread.user_id" class="list-group-item-text">Author: {{ thread.user_id.name }}</p></i>
        </router-link>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      formCreateQ: {
        title: '',
        question: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'getAllThread', 'createQuestion'
    ]),
    createQuestions () {
      this.createQuestion(this.formCreateQ)
    }
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
h1, .container-AddQ{
  text-align: center;
  padding-bottom: 20px;
}

</style>
