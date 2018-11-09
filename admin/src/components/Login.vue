<template>
  <div class="login">
    <div class="container">
        <div class="card col-10 p-0 offset-1">
            <h5 class="card-header text-uppercase bg-danger text-center text-white">
                Đăng nhập
            </h5>
            <div class="card-body">
                <div class="alert alert-danger" v-if="error_message != ''">
                    <strong>Lỗi!</strong> {{ error_message }}.
                </div>
                <form @submit.prevent="login" id="signup-form" class="signup-form" action="" method="post">
                    <div class="input-group mt-5">
                        <span class="input-group-addon"><i class="fa fa-user"></i></span>
                        <input type="text" class="form-control form-control-lg" id="username" v-model="username" placeholder="Tên đăng nhập">
                    </div>
                    <br/>
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-unlock-alt"></i></span>
                        <input type="password" class="form-control form-control-lg" id="password" v-model="password" placeholder="Mật khẩu">
                    </div>
                    <br>
                    <div class="form-group text-center mb-5 mt-4">
                        <button type="submit" class="form-control-lg btn btn-danger">Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  middleware: 'guest',
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

</style>
