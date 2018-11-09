import Home from '@/components/Home'
import History from '@/components/History'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Pending from '@/components/Pending'
import Profile from '@/components/Profile'
import Transaction from '@/components/Transaction'
import Error from '@/components/404'
import LayoutClient from '@/components/LayoutClient'
// import Admin
import LoginAdmin from '@/components/admin/LoginAdmin'
import Dashboard from '@/components/admin/Dashboard'

export default [
  {
    path: '/',
    component: LayoutClient,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/',
        // component: Home
        redirect: {
          name: 'home'
        }
      },
      {
        path: '/history',
        name: 'history',
        component: History
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/pending',
        name: 'pending',
        component: Pending
      },
      {
        path: '/profile',
        name: 'profile',
        component: Profile
      },
      {
        path: '/transaction',
        name: 'transaction',
        component: Transaction
      }
    ]
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: LoginAdmin
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '*',
    component: Error
  }
]
