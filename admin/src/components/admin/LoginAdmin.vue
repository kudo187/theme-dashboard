<template>
  <div class="admin-login text-center" >
    <div class="col-sm-4 offset-sm-4 form-lolgin-admin">
        <div class="top-form">
            <h1 class="font-weight-bold text-uppercase pt-5 pb-3">Admin</h1>
            <img src="../../assets/client/images/admin.png" width="200px" height="200px" class="rounded-circle" alt="">
        </div>
        <div class="content mt-5">
            <div class="alert alert-danger" v-if="error_message != ''">
                    <strong>Lỗi!</strong> {{ error_message }}.
            </div>
          <form @submit.prevent="login">
            <div class="input-group pb-4 ">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input type="text" class="form-control form-control-lg" id="username" v-model="username" placeholder="Tên đăng nhập">
            </div>
            <div class="input-group pb-4">
                <span class="input-group-addon"><i class="fa fa-unlock-alt"></i></span>
                <input type="password" class="form-control form-control-lg " id="password" v-model="password" placeholder="Mật khẩu">
            </div>
            <div class="form-group text-center pb-5">
                <button type="submit" class="form-control-lg btn btn-danger" style="font-size: 20px">Đăng nhập</button>
            </div>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'admin-login',
  data () {
    return {
      error_message: '',
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.username && this.password) {
        var loginPromise = new Promise((resolve, reject) => {
          axios({
            method: 'post',
            url: '/login',
            data: {
              username: this.username,
              password: this.password
            }
          }).then(function (response) {
            if (response.data.data) {
              resolve(response.data.data)
            } else {
              reject(response.data.message)
            }
          }).catch(function (error) {
            reject(error.response.data.message)
          })
        })

        loginPromise.then(value => {
          console.log('user_info', value)
          this.$store.dispatch('auth/saveToken', {
            token: value.token.access_token,
            remember: true,
            userId: value.id
          })
          this.$router.push({name: 'home'})
        })

        loginPromise.catch(reason => {
          this.error_message = reason
        })
      } else {
        this.error_message = 'Tên đăng nhập hoặc mật khẩu không được trống!'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin-login {
    margin: 100px 0px
}
.admin-login .form-lolgin-admin.col-sm-4.offset-sm-4 {
    background: #d5dcdc;
    padding: 10px 60px;
}
</style>
