<template>
  <div id="layout-client">
    <loading ref="loading"/>
    <!-- Navigation -->
    <header class="topheader">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class="container">
          <router-link class="navbar-brand" to="/">Charging <span class="text-danger">Card</span></router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                  aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link class="nav-link btn" active-class="btn-outline-success" to="pending">Chờ duyệt <span
                        class="bg-danger number">10</span></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link btn" active-class="btn-outline-success" to="transaction"><i class="fa fa-money mr-2"></i>Rút tiền/Chuyển tiền
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link btn mr-5" active-class="btn-outline-success" to="history"><i class="fa fa-history mr-2"></i>Lịch sử</router-link>
              </li>
              <!--<li class="nav-item">-->
                <!--<router-link class="nav-link btn" active-class="btn-outline-success" to="profile"><i class="fa fa-user mr-2"></i>Thông tin cá nhân-->
                <!--</router-link>-->
              <!--</li>-->
              <li class="nav-item" v-if="!this.$store.getters['auth/check']">
                <router-link class="nav-link btn btn-outline-primary mr-2 " to="register"><i
                        class="fa fa-user-plus mr-2"></i>Đăng ký
                </router-link>
              </li>
              <li class="nav-item" v-if="!this.$store.getters['auth/check']">
                <router-link class="nav-link btn btn-outline-danger" to="login"><i class="fa fa-sign-in mr-2"></i>Đăng
                  nhập
                </router-link>
              </li>
              <li class="nav-item" v-if="this.$store.getters['auth/check']">
                <router-link class="nav-link btn btn-info mr-2 ml-5" to="profile" active-class="btn-outline-info"><i class="fa fa-user mr-2"></i>{{this.$store.getters['auth/user'] ? this.$store.getters['auth/user']['data']['name'] : ''}}
                </router-link>
              </li>
              <li class="nav-item" v-if="this.$store.getters['auth/check']">
                <button class="nav-link btn btn-outline-warning" @click="logout()"><i class="fa fa-sign-out mr-2"></i>Đăng xuất
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <!-- End header -->
    <!-- Page Content -->
    <section class="mt-5">
      <div class="container">
        <div class="row">
          <div :class="this.$store.getters['auth/token'] ? 'col-md-9':'col-12'">
          <!-- content -->
            <router-view/>
            <!-- end content -->
          </div>
          <div class="col-md-3" v-if="this.$store.getters['auth/token']">
            <div class="card">
              <div class="card-header bg-info text-white">
                <i class="fa fa-user mr-2"></i>Xin chào: <span class="text-warning font-weight-bold">{{this.$store.getters['auth/user'] ? this.$store.getters['auth/user']['data']['name'] : ''}}</span>
              </div>
              <div class="card-body">
                <div class="surplus"><i class="fa fa-money pr-1"></i>Số dư: <span class="text-danger">{{this.$store.getters['auth/user'] ? this.$store.getters['auth/user']['data']['balance'] : ''}} Gold</span>
                </div>
                <div class="waitingcharging"><i class="fa fa-bolt pr-1"></i>Tiền chờ nạp:</div>
                <div class="moneywithdrawn"><i class="fa fa-download pr-1"></i>Tiền chờ rút:</div>
              </div>
            </div>
            <div class="card mt-3">
              <div class="card-header text-uppercase bg-secondary text-white">
                Tin tức
              </div>
              <div class="card-body">
                <div>Blalalalal</div>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- End container -->
    </section>
    <!-- Newsletter -->
    <div class="newsletter">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center">
              <h4>Contact</h4>
              <p>Subscribe to our newsletter and get 20% off your first purchase</p>
            </div>
          </div>
          <div class="col-lg-6">
            <form action="post">
              <div class="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center">
                <input id="newsletter_email" type="email" placeholder="Your email" required="required"
                       data-error="Valid email is required.">
                <button id="newsletter_submit" type="submit" class="newsletter_submit_btn trans_300" value="Submit">
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
              <ul class="footer_nav">
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="contact.html">Contact us</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
              <ul>
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="footer_nav_container">
              <div class="cr">©2018 All Rights Reserverd. This website is made with
                <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="#">Kudo</a></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Loading from './Loading'
import {mapState} from 'vuex'

export default {
  name: 'layout-client',
  components: {
    Loading
  },
  computed: {
    ...mapState(['msg'])
  },
  data: () => ({
    layout: null,
    defaultLayout: 'default',
    AUTH_TOKEN: ''
  }),
  mounted () {
    this.$loading = this.$refs.loading
    this.AUTH_TOKEN = this.$store.getters['auth/token']
  },
  methods: {
    logout () {
      if (this.$store.getters['auth/check']) {
        this.$store.dispatch('auth/logout')
        this.$router.push({name: 'login'})
      }
    }
  }
}
</script>

<style>
</style>
