<template>
  <div>
    <Navbar/>
  <form class="form-horizontal of">
    <fieldset>
    <div class="form-group">
      <label for="inputEmail" class="col-lg-2 control-label">Email</label>
      <div class="col-lg-5">
        <input type="text" class="form-control" id="inputEmail" placeholder="Email" v-model="formSignin.email">
      </div>
    </div>
    <div class="form-group">
      <label for="inputPassword" class="col-lg-2 control-label">Password</label>
      <div class="col-lg-5">
        <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="formSignin.password">
      </div>
    </div>
    <div class="form-group">
      <div class="col-lg-10 col-lg-offset-2">
        <button type="submit" class="btn btn-primary" @click="signin">Signin</button>
        <button type="button" class="btn btn-default" data-toggle="modal" data-target="#signupModal">Signup</button>
        <!-- <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#signupModal">Open Modal</button -->
      </div>
    </div>
  </fieldset>
</form>

<!-- Modal Signup -->
<div class="modal" id="signupModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title">Signup Form</h4>
      </div>
      <div class="modal-body">
        <label for="inputName" class="col-lg-2 control-label">Name</label>
        <div class="col-lg-10">
          <input type="text" id="inputName" placeholder="Name" v-model="formSignup.name">
        </div>
        <div class="form-group">
          <label for="inputEmail" class="col-lg-2 control-label">Email</label>
          <div class="col-lg-10">
            <input type="text"  id="inputEmail" placeholder="Email" v-model="formSignup.email">
          </div>
          <label for="inputPassword" class="col-lg-2 control-label">Password</label>
          <div class="col-lg-10">
            <input type="password"  id="inputPassword" placeholder="Password" v-model="formSignup.password">
          </div>
      </div>
    </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" data-dismiss="modal" @click="signup">Signup</button>
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import axios from 'axios'
export default {
  data () {
    return {
      formSignin: {
        email: '',
        password: ''
      },
      formSignup: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  components: {
    Navbar
  },
  methods: {
    signin () {
      axios.post('http://localhost:3000/signin', {
        email: this.formSignin.email,
        password: this.formSignin.password
      }).then(dataSignin => {
        console.log(dataSignin)
        localStorage.setItem('auth', dataSignin.data.token)
        this.$router.push('/threads')
      }).catch(err => {
        console.log(err)
      })
    },
    signup () {
      axios.post('http://localhost:3000/signup', {
        name: this.formSignup.name,
        email: this.formSignup.email,
        password: this.formSignup.password
      }).then(response => {
        alert('selamat anda berhasil signup')
        console.log('=====', response)
      }).catch(err => {
        console.log(err)
      })
    }
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
  }
}
</script>

<style>
</style>
