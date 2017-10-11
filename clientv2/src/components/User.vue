<template>
  <div class="Users">
    <Navbar/>
    <div class="container">
      <div class="col-md-1">
      </div>
      <div class="col-md-9">
        <h1>Users</h1>
        <div class="list-group" v-for = "userz in users">
          <a href="#" class="list-group-item">
            <h4 class="list-group-item-heading">{{userz.name}}</h4>
            <p class="list-group-item-text">{{userz.email}}</p>
            <p class="list-group-item-text">{{userz.role}}</p>
            <p class="list-group-item-text">{{userz.created_at}}</p>
          </a>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import {mapActions, mapState} from 'vuex'

export default {
  methods: {
    ...mapActions([
      'getAllUser'
    ])
  },
  computed: {
    ...mapState([
      'users'
    ])
  },
  components: {
    Navbar
  },
  created () {
    this.getAllUser()
  }
}
</script>

<style>
.Users {
  padding-top: 40px;
}
</style>
