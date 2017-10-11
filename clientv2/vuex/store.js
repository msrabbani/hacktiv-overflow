import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create ({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex) //sebagai middleware

const state  = {
  threads: [],
  users: [],
  singleThreads: [],
}

const mutations = { //bertugas merubah states jadi sebuah store
  setThreads (state, payload) { //payload berasal dari data dari axios
    console.log('data di mutations sebagai payload : ', payload);
    state.threads = payload
  },
  setUsers (state, payload) {
    console.log('data di mutations sebagai payload : ', payload);
    state.users = payload
  },
  setSingleThreads (state, payload) {
    state.singleThreads = payload
  },
  setCreateQuestions (state, payload) {
    state.threads = payload
  },
  setDeleteQuestions (state, payload) {
    state.threads = payload
  }

}

const actions = { // proses async api request
  getAllThread ({ commit }) { // commit selalu ada di action
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
},
getSingleThread ({commit}, id) {
  console.log('_=-=-=-=-=',id);
  http.get(`/threads/${id}`)
  .then(data => {
    console.log('=-=-=-=-',data)
    commit('setSingleThreads', data)
  }).catch(err => {
    console.log(err)
  })
},
createQuestion ({commit}, payload) {
  http.post('/threads', {
    title     : payload.title,
    question  : payload.question
  }, {
    headers: {
      auth: localStorage.getItem('auth')
    }
  })
  .then(data => {
    console.log('=-=-=-=- data Q',data)
    commit('setCreateQuestions', data)
  }).catch(err => {
    console.log(err)
  })
},
deleteQuestion ({commit}, id) {
  http.delete(`/threads/${id}`, {
    headers: {
      auth: localStorage.getItem('auth')
    }
  })
  .then(data => {
    console.log('berhasil di delete!!')
    commit('setDeleteQuestions', data)
  }).catch(err => {
    console.log(err)
  })
}

}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
