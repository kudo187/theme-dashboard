<template>
  <div class="register">
    <div class="container">
        <div class="card">
            <h5 class="card-header text-uppercase bg-info text-center text-white">
                Đăng ký thành viên
            </h5>
            <div class="card-body">
                <div class="alert alert-danger" v-if="error_message != ''">
                    <strong>Lỗi!</strong> {{ error_message }}.
                </div>
                <form @submit.prevent="register" id="signup-form" class="signup-form">
                    <!-- <div class="form-group" >
                        <label for="name">Full Name</label>
                        <input required type="text" :class="{ 'is-invalid': errors.has('name') }" v-validate= "'required'" class="form-control form-control-lg" id="name" name="name" placeholder="Nhập tên người dùng..." v-model="name">
                        <span v-if="errors.has('name')" class="help-block">{{ errors.first('name') }}</span>
                    </div> -->
                    <div class="input-group mt-5" >
                        <span class="input-group-addon"><i class="fa fa-user-circle"></i></span>
                        <input required type="text" :class="{ 'is-invalid': errors.has('name') }" v-validate= "'required'" class="form-control form-control-lg" id="name" name="name" placeholder="Nhập họ và tên" v-model="name">
                        <span class="text-danger ml-2">*</span>
                        <span v-if="errors.has('name')" class="help-block">{{ errors.first('name') }}</span>
                    </div>
                    <br/>
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-user"></i></span>
                        <input required type="text" :class="{ 'is-invalid': errors.has('username') }" v-validate= "{ required: true, regex: /^[a-zA-Z0-9\-]+$/, min: 6, max: 16 }" class="form-control form-control-lg" name="username" id="username" placeholder="Nhập tên người dùng" v-model="username">
                        <span class="text-danger ml-2">*</span>
                        <span v-if="errors.has('username')" class="help-block">{{ errors.first('username') }}</span>
                    </div>
                    <br/>
                    <div class="form-row">
                        <div class="input-group col-md-6">
                            <span class="input-group-addon"><i class="fa fa-key"></i></span>
                            <input required :class="{ 'is-invalid': errors.has('password') }" v-validate= "{ required: true, regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/}" type="password" class="form-control form-control-lg" name = "password" id="password" placeholder="Nhập mật khẩu" v-model="password">
                            <span class="text-danger ml-2">*</span>
                            <span v-if="errors.has('password')" class="help-block">{{ errors.first('password') }}</span>
                        </div>
                        <div class="input-group re-pass col-md-6">
                            <span class="input-group-addon"><i class="fa fa-unlock-alt"></i></span>
                            <input required type="password" class="form-control form-control-lg" id="re-password" placeholder="Nhập lại mật khẩu" v-model="re_password">
                            <span class="text-danger ml-2">*</span>
                            <span v-if="this.re_password !== this.password" class="help-block">Mật khẩu không khớp! Mời nhập lại.</span>
                        </div>
                    </div>
                    <br/>
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                        <input required type="text" :class="{ 'is-invalid': errors.has('email') }" v-validate= "'required|email'" class="form-control form-control-lg" name ="email" id="email" placeholder="Nhập email" v-model="email">
                        <span class="text-danger ml-2">*</span>
                        <span v-if="errors.has('email')" class="help-block">{{ errors.first('email') }}</span>
                    </div>
                    <br/>
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-phone"></i></span>
                        <input required type="text" :class="{ 'is-invalid': errors.has('phone') }" v-validate= "{ required: true, regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/ }" class="form-control form-control-lg" name="phone" id="phone" placeholder="Nhập số điện thoại" v-model="phone">
                        <span class="text-danger ml-2">*</span>
                        <span v-if="errors.has('phone')" class="help-block">{{ errors.first('phone') }}</span>
                    </div>
                    <br/>
                    <div class="form-group text-center mb-5">
                        <button type="submit" class=" form-control-lg btn btn-primary ">Đăng ký</button>
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
  name: 'Register',
  middleware: 'guest',
  data () {
    return {
      error_message: '',
      name: '',
      username: '',
      password: '',
      re_password: '',
      email: '',
      phone: ''
    }
  },
  methods: {
    register () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          if (this.password === this.re_password) {
            var registerPromise = new Promise((resolve, reject) => {
              axios({
                method: 'post',
                url: '/register',
                data: {
                  name: this.name,
                  username: this.username,
                  password: this.password,
                  re_password: this.re_password,
                  email: this.email,
                  phone: this.phone
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
            registerPromise.then(value => {
              this.$swal({
                type: 'success',
                title: 'Đăng ký thành công',
                preConfirm: () => {
                  this.$router.push({name: 'login'})
                }
              })
            })
            registerPromise.catch(reason => {
              this.error_message = reason
            })
          } else {
            this.error_message = 'Mật khẩu của bạn không khớp !'
          }
          return
        }
        this.$swal({
          type: 'error',
          title: 'Lỗi !!!',
          text: 'Vui lòng điền chính xác thông tin để hoàn tất đăng ký.'
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
