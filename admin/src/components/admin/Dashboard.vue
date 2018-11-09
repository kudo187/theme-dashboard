<template>
  <div class="dashboard">
    <div class="header">
        <!-- <a href="#" class="nav-trigger"><span></span></a> -->
        <nav class="navbar navbar-expand-sm navbar-light">
                <a class="navbar-brand text-white" href="#">Dashboard</a>
                <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <div class="ml-auto menu-right mt-2 mt-lg-0">
                        <div class="notification mr-2 float-left"><i class="fa fa-bell" aria-hidden="true"></i></div>
                        <div class="float-left mr-4 nav-item profile dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user mr-2"></i> Kudo</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a class="dropdown-item" href="#">Profile</a>
                                <a class="dropdown-item" href="#">Log out</a>
                            </div>
                        </div>
                        <form class="float-left form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search">
                            <button class="btn btn-info my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
    </div>
    <div class="side-nav">
        <nav>
            <ul>
                <li class="logo-nav">
                    <a href="#"><img src="../../assets/admin/images/admin-logo.png" alt="">  Kudo</a>
                </li>
                <li>
                    <a href="#">
                        <span class="mr-2"><i class="fa fa-user"></i></span>
                        <span>User</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="mr-2"><i class="fa fa-envelope"></i></span>
                        <span>Messages</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="mr-2"><i class="fa fa-bitcoin"></i></span>
                        <span >Analytics</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="mr-2"><i class="fa fa-credit-card"></i></span>
                        <span >Payments</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    <div class=" fix-bottom main-content">
        This content ......................
    </div>
    <div class="footer-copyright-area">
        <div class="text-center container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-copy-right">
                        <p>Copyright © 2018 All rights reserved. Template by <a href="#" class="text-danger">Kudo</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  // middleware: 'admin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(../../assets/admin/css/styles.css);
</style>
