import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


const http = axios.create ({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex) //sebagai middleware

const state  = {
  threads: [],
  users: []
}

const mutations = { //bertugas merubah states jadi sebuah store
  setThreads (state, payload) { //payload berasal dari data dari axios
    console.log('data di mutations sebagai payload : ', payload);
    state.threads = payload
  },
  setUsers (state, payload) {
    console.log('data di mutations sebagai payload : ', payload);
    state.users = payload
  }

}

const actions = { // proses async api request
  getAllThread ({ commit }) {
    http.get('/threads')
    .then(({ data }) => {
    console.log('data di actions (threads) : ', data);
    commit('setThreads', data)
  }).catch(err=>{
    console.log(err);
  })
},
  createThread ({ commit }) {
    http.post('/threads')
    .then(({ data }) => {
    console.log('data di actions (threads) : ', data);
    commit('setThreads', data)
  }).catch(err=>{
    console.log(err);
  })
  },

  getAllUser ({ commit }) {
    http.get('/users')
    .then(({ data }) => {
    console.log('data di actions (users): ', data);
    commit('setUsers', data)
  }).catch(err=>{
    console.log(err);
  })
}

}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
