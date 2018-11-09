<template>
    <div class="profile pending">
        <ul class="nav nav-pills nav-justified pills-rounded ">
            <li class="nav-item">
                <a class="nav-link active font-weight-bold text-uppercase" data-toggle="tab" href="#panelWithdrawal"
                   role="tab">Thông tin cá nhân</a>
            </li>
            <li class="nav-item">
                <a class="nav-link font-weight-bold text-uppercase" data-toggle="tab" href="#panelBuyCard" role="tab">Tài
                    khoản ngân hàng</a>
            </li>
        </ul>
        <!-- Tab panels -->
        <div class="tab-content pt-0">
            <!--Panel 1-->
            <div class="tab-pane fade in show active" id="panelWithdrawal" role="tabpanel">
                <br>
                <div class="col-lg">
                    <h4>
                        <span> Thông tin tài khoản</span>
                    </h4>
                    <div class="clearfix"></div>
                    <table class="table table-borderless">
                        <tr>
                            <td class="text-right">Số điện thoại</td>
                            <td>
                                <span class="text-danger">{{this.$store.getters['auth/user'] ? this.$store.getters['auth/user'].data.phone : ''}}</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-right">Email</td>
                            <td>
                                <b>
                                    <span>{{this.$store.getters['auth/user'] ? this.$store.getters['auth/user'].data.email : ''}}</span>
                                </b>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-right">Ngày mở tài khoản</td>
                            <td>
                                <b>
                                    <span>{{this.$store.getters['auth/user'] ? this.$store.getters['auth/user'].data.created_at.date : ''}}</span>
                                </b>
                            </td>
                        </tr>
                        <!-- <tr>
                            <td class="text-right">Key phân phối</td>
                            <td>
                                <b>
                                    <span>784423</span>
                                </b>
                            </td>
                        </tr> -->
                        <tr>
                            <td class="text-right">Tình trạng tài khoản</td>
                            <td :class="this.$store.getters['auth/user'] ? this.$store.getters['auth/user'].data.status == 1 ? 'text-success' : 'text-danger': ''">
                                <b>
                                    <span>{{this.$store.getters['auth/user'] ? this.$store.getters['auth/user'].data.status == 1 ? 'Active' : 'Hidden' : ''}}</span>
                                </b>
                            </td>
                        </tr>
                    </table>
                    <!-- end BgTblUserInfo -->
                    <h4>
                        <p class="text-danger">Thông tin cá nhân</p>
                    </h4>
                    <div class="InfoCurrent" id="account">
                        <div class="col-xs-12">
                            <form @submit.prevent="updateUser" id="update-form">
                                <div class="form-group row">
                                    <label for="name" class="col-4 col-form-label">Avatar</label>
                                    <div class="col-8">
                                        <input type="file" class="cmnd-input" style="display: none;"/>
                                        <img src="../assets/client/images/user.png" class="cmnd-img pointer"/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="name" class="col-4 col-form-label"> Họ và tên (
                                        <span class="text-danger">*</span>)</label>
                                    <div class="col-8">
                                        <input required type="text" value="" :class="{ 'is-invalid': errors.has('name') }" v-validate= "'required'" tabindex="103" class="form-control" name="name" v-model="name"/>
                                        <span v-if="errors.has('name')" class="help-block">{{ errors.first('name') }}</span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="name" class="col-4 col-form-label"> Giới tính (
                                        <span class="text-danger">*</span>)
                                    </label>
                                    <div class="col-8">
                                        <div class="form-check form-check-inline">
                                            <input required class="form-check-input" type="radio" name="gender" id="male"
                                                   value="male" v-model="gender">
                                            <label class="form-check-label" for="male">Nam</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input required class="form-check-input" type="radio" name="gender" id="female"
                                                   value="female" v-model="gender">
                                            <label class="form-check-label" for="female">Nữ</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="birth" class="col-4 col-form-label"> Ngày sinh (
                                        <span class="text-danger">*</span>)</label>
                                    <div class="col-8">
                                        <input type="date" value="0932121761767" class="form-control" name="birth" v-model="birth"/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="name" class="col-4 col-form-label"> Số CMND (
                                        <span class="text-danger">*</span>)</label>
                                    <div class="col-8">
                                        <input type="text" value="0932121761767" class="form-control" name="cmnd" v-model="cmnd"/>
                                    </div>
                                </div>
                                <!-- <div class="form-group row">
                                    <label for="name" class="col-4 col-form-label"> Tình trạng chứng thực</label>
                                    <div class="col-8" style="color:#3c763d; font-weight: bold;">
                                        <span>Chưa chứng thực</span>
                                    </div>
                                </div> -->
                                <div class="form-group row">
                                    <label for="name" class="col-4 col-form-label">Số điện thoại (
                                        <span class="text-danger">*</span>)</label>
                                    <div class="col-8">
                                        <input required type="text" :class="{ 'is-invalid': errors.has('phone') }" v-validate= "{ required: true, regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/ }" value="0965288463" class="form-control" id="phone"
                                               name="phone" v-model="phone"/>
                                    <span v-if="errors.has('phone')" class="help-block">{{ errors.first('phone') }}</span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="name" class="col-4 col-form-label"> Địa chỉ (
                                        <span class="text-danger">*</span>)</label>
                                    <div class="col-8">
                                        <input type="text" value="Thôn 4, Ðiền Hòa, Phong Ðiền, Thừa Thiên Huế"
                                               class="form-control" name="address" id="phone" v-model="address"/>
                                    </div>
                                </div>
                                <!-- <div class="form-group row">
                                    <label for="name" class="col-4 col-form-label"> </label>
                                    <div class="col-8">
                                        <div class="row">
                                            <div class="selectpicker col-sm-6">
                                                <span class="arrow-up"></span>
                                                <select class="form-control">
                                                    <option value="-1">Chọn tỉnh / thành phố</option>
                                                </select>
                                            </div>
                                            <div class="selectpicker col-sm-6">
                                                <select class="form-control">
                                                    <option value="-1">Chọn quận / huyện</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <div class="form-group text-right">
                                    <div class="col-sm-7  col-sm-offset-4">
                                        <input type="submit" value="Cập Nhật" class="btn btn-outline-danger"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!--/.Panel 1-->
            <!--Panel 2-->
            <div class="tab-pane fade" id="panelBuyCard" role="tabpanel">
                <br>
                <div class="col-lg">
                    <div class="alert alert-warning" role="alert">
                        <strong>Hiện tại!</strong> Bạn chưa có ngân hàng nào.
                    </div>
                    <vue-good-table
                            :columns="columns"
                            :rows="rows"
                            :pagination-options="{
                                enabled: true,
                                perPageDropdown: [5,10,15,20,30,50,100],
                                rowsPerPageLabel: 'Hiện',
                                nextLabel: 'Trước',
                                prevLabel: 'Sau',
                                }"
                            :search-options="{
                                enabled: true,
                                skipDiacritics: true,
                                placeholder: 'Tìm kiếm ngân hàng.',
                            }"
                            :sort-options="{
                                enabled: true,
                                initialSortBy: {field: 'name', type: 'desc'}
                            }"
                    >
                    </vue-good-table>
                    <div class="btn btn-success mt-4"><i class="fa fa-plus mr-2"></i>Thêm ngân hàng</div>
                </div>
            </div>
            <!--/.Panel 2-->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'profile',
  middleware: 'auth',
  data () {
    return {
      name: '',
      phone: '',
      birth: '',
      cmnd: '128429267',
      gender: 'men',
      address: 'Thôn 4',
      columns: [
        {
          label: 'Tên tài khoản',
          field: 'name',
          tdClass: 'text-center'
        },
        {
          label: 'Số tài khoản',
          field: 'num_account',
          tdClass: 'text-center'
        },
        {
          label: 'Số trên thẻ',
          field: 'num_card',
          tdClass: 'text-center'
        },
        {
          label: 'Ngân hàng',
          field: 'name_bank',
          tdClass: 'text-center'
        },
        {
          label: 'Chi nhánh',
          field: 'branch',
          tdClass: 'text-center'
        },
        {
          label: 'Xóa',
          field: 'delete',
          tdClass: 'btn btn-outline-danger text-center'
        }
      ],
      rows: [
        { id: 1, name: 'Nguyễn Văn Khoa', num_account: '4723827822', num_card: '03484738', name_bank: 'TP-Bank', branch: 'Công Hòa', delete: 'Xóa' }
      ]
    }
  },
  mounted () {
    console.log(this.$store.getters['auth/user'].data)
    this.name = this.$store.getters['auth/user'].data.name
    this.phone = this.$store.getters['auth/user'].data.phone
    this.gender = this.$store.getters['auth/user'].data.gender
    this.birth = this.$store.getters['auth/user'].data.birth
  },
  methods: {
    updateUser () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          var registerPromise = new Promise((resolve, reject) => {
            axios({
              method: 'put',
              url: '/users/' + this.$store.getters['auth/user'].data.id,
              data: {
                name: this.name,
                phone: this.phone,
                // cmnd: this.cmnd,
                gender: this.gender,
                birth: this.birth
                // address: this.address
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
            console.log('user_update', value)
            this.$swal({
              type: 'success',
              title: 'Cập nhập thành công',
              preConfirm: () => {
                this.$router.push({name: '/profile'})
              }
            })
          })
          registerPromise.catch(reason => {
            this.error_message = reason
          })
          return
        }
        this.$swal({
          type: 'error',
          title: 'Lỗi !!!',
          text: 'Vui lòng điền chính xác thông tin để hoàn tất cập nhập.'
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
