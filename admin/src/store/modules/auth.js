import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'

// state
export const state = {
  user: null,
  userId: Cookies.get('user_id'),
  token: Cookies.get('access_token')
}

// getters
export const getters = {
  user: state => state.user,
  token: state => state.token,
  check: state => state.user !== null
}

// mutations
export const mutations = {
  [types.SAVE_TOKEN] (state, {token, remember, userId}) {
    state.token = token
    state.userId = userId
    Cookies.set('user_id', userId, {expires: remember ? 365 : null})
    Cookies.set('access_token', token, {expires: remember ? 365 : null})
  },

  [types.FETCH_USER_SUCCESS] (state, {user}) {
    state.user = user
  },

  [types.FETCH_USER_FAILURE] (state) {
    state.token = null
    Cookies.remove('access_token')
    Cookies.remove('user_id')
  },

  [types.LOGOUT] (state) {
    state.user = null
    state.token = null

    Cookies.remove('access_token')
    Cookies.remove('user_id')
  },

  [types.UPDATE_USER] (state, {user}) {
    state.user = user
  }
}

// actions
export const actions = {
  saveToken ({commit, dispatch}, payload) {
    commit(types.SAVE_TOKEN, payload)
    // commit(types.FETCH_USER_SUCCESS, {user: payload.user})
  },

  async fetchUser ({commit}) {
    try {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
      const {data} = await axios.get('/users/' + state.userId)
      commit(types.FETCH_USER_SUCCESS, {user: data})
    } catch (e) {
      commit(types.FETCH_USER_FAILURE)
    }
  },

  updateUser ({commit}, payload) {
    commit(types.UPDATE_USER, payload)
  },

  async logout ({commit}) {
    // try {
    //     await axios.post('/api/logout')
    // } catch (e) {
    // }

    commit(types.LOGOUT)
  },

  async fetchOauthUrl (ctx, {provider}) {
    const {data} = await axios.post(`/api/oauth/${provider}`)

    return data.url
  }
}
