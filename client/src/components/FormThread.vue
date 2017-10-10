<template>
  <div>
  <Navbar/>
    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Create Questions</button>
  <!-- Modal -->
  <div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title">Create Questions</h4>
      </div>
      <div class="modal-body">
            <fieldset>
              <div class="form-group">
                <label for="inputEmail" class="col-lg-2 control-label">Title</label>
                <div class="col-lg-10">
                  <input v-model="title" type="text" class="form-control" id="title" placeholder="title">
                </div>
              </div>
              <div class="form-group">
                <label for="textArea" class="col-lg-2 control-label">Questions</label>
                <div class="col-lg-10">
                  <textarea v-model="question" class="form-control" rows="3" id="questions" placeholder="questions"></textarea>
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary">Create</button>
                </div>
              </div>
            </fieldset>
      </div>
    </div>
  </div>
</div>
<br><br>

  <div class="panel panel-warning" v-for = "threadz in threads" >
  <div class="panel-heading">
    <h3 class="panel-title">{{threadz.title}}</h3>
  </div>
  <div class="panel-body">
    <p>{{threadz.question}}</p>
  </div>
  <span>
    <a class="btn btn-primary btn-xs">Details</a>
  </span>

</div>

</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Navbar from '@/components/Navbar'
import axios from 'axios'

export default {
  methods: {
    ...mapActions([
      'getAllThread'
    ]),
    postQuestions () {
      axios.post('http://localhost:3000/threads', {
        title: this.title,
        question: this.question
      }).then(dataQ => {
        console.log(dataQ)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  computed: {
    ...mapState([
      'threads'
    ])
  },
  data () {
    return {
      title: '',
      question: ''
    }
  },
  components: {
    Navbar
  },
  created () {
    if (localStorage.auth) {
      if (localStorage.auth === 'undefined') {
        this.$router.push('/')
      } else {
        this.$router.push('/threads')
      }
    } else {
      this.$router.push('/')
    }
    this.getAllThread()
  }
}
</script>

<style>
</style>
