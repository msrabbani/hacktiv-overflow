<template lang="html">
  <div>
  <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Hacktiv-Overflow</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <!-- <li><a href="#">Threads<span class="sr-only">(current)</span></a></li> -->
        <li><a href="/">Threads</a></li>
        <li><a href="users">Users</a></li>
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalSignin">Signin</button></li>
      </ul>
    </div>
  </div>
</nav>

<!-- Modal Signin -->
<div id="modalSignin" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modalSignin">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Signin</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <div class="form-group">
                  <br>
                  <div class="input-group">
                    <div class="input-group-addon">Email Address</div>
                    <input type="text" class="form-control" id="exampleInputAmount" placeholder="Email Address" v-model="formSignin.email">
                  </div>
                  <br>

                  <div class="input-group">
                    <div class="input-group-addon">Password</div>
                    <input type="password" class="form-control" id="exampleInputAmount" placeholder="Password" v-model="formSignin.password">
                  </div>
                </div>
            </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="signin">Signin</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      formSignin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      axios.post('http://localhost:3000/signin', {
        email: this.formSignin.email,
        password: this.formSignin.password
      }).then(dataSign => {
        console.log(dataSign)
        localStorage.setItem('auth', dataSign.data.token)
        alert('anda berhasil signup, silahkan login')
      }).catch(err => {
        console.log(err)
      })
    }
  }

}
</script>

<style lang="css">
</style>
