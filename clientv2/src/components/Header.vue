<template lang="html">
  <div class="satu">
    <div class="col-md-6">
    </div>
    <div class="col-md-3">
      <form>
      <div class="form-group">
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">Username</div>
            <input type="text" class="form-control" id="exampleInputAmount" placeholder="J. Doe" v-model="formSignup.username">
          </div>

          <br>
          <div class="input-group">
            <div class="input-group-addon">Email Address</div>
            <input type="text" class="form-control" id="exampleInputAmount" placeholder="you@example.com" v-model="formSignup.email">
          </div>
          <br>

          <div class="input-group">
            <div class="input-group-addon">Password</div>
            <input type="password" class="form-control" id="exampleInputAmount" placeholder="*********" v-model="formSignup.password">
          </div>
        </div>
      <button type="button" class="btn btn-default" @click="signup">Signup</button>
    </div>
    </form>
  </div>
</div>

</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      formSignup: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signup () {
      axios.post('http://localhost:3000/signup', {
        name: this.formSignup.username,
        email: this.formSignup.email,
        password: this.formSignup.password
      }).then(dataSign => {
        console.log(dataSign)
        localStorage.setItem('auth', dataSign.data.token)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.satu {
  padding: 80px;
  padding-left: 100px;
  padding-right: 100px;
  background-color: #FEE3CF;
  height: 310px;
}
.input-group-addon {

}

</style>
