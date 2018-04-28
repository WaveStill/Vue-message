import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../pages/Home.vue'
// import Dashboard from '@/pages/Dashboard'
// import BasicTable from '@/pages/BasicTable'
// import EditableTable from '@/pages/EditableTable'
// import Widget from '@/pages/Widget'
// import Panels from '@/pages/Panels'
// import Editor from '@/pages/Editor'
// import ImageList from '@/pages/ImageList'
// import Charts from '@/pages/Charts'
// import Login from '@/pages/Login'
// import LockScreen from '@/pages/LockScreen'
// import Loading from '@/pages/Loading'

const Home = resolve => require(['../pages/Home.vue'], resolve)
const Dashboard = resolve => require(['@/pages/Dashboard.vue'], resolve)
const BasicTable = resolve => require(['@/pages/BasicTable.vue'], resolve)
const EditableTable = resolve => require(['@/pages/EditableTable.vue'], resolve)
const Widget = resolve => require(['@/pages/Widget.vue'], resolve)
const Panels = resolve => require(['@/pages/Panels.vue'], resolve)
const Editor = resolve => require(['@/pages/Editor.vue'], resolve)
const ImageList = resolve => require(['@/pages/ImageList.vue'], resolve)
const Charts = resolve => require(['@/pages/Charts.vue'], resolve)

const Login = resolve => require(['@/pages/Login.vue'], resolve)
const LockScreen = resolve => require(['@/pages/LockScreen.vue'], resolve)
const Loading = resolve => require(['@/pages/Loading.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'widget',
          name: 'Widget',
          component: Widget
        },
        {
          path: 'panels',
          name: 'Panels',
          component: Panels
        },
        {
          path: 'editor',
          name: 'Editor',
          component: Editor
        },
        {
          path: 'imagelist',
          name: 'ImageList',
          component: ImageList
        },
        {
          path: 'basic-table',
          name: 'BasicTable',
          component: BasicTable
        },
        {
          path: 'editable-table',
          name: 'EditableTable',
          component: EditableTable
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        blank: Login
      }
    },
    {
      path: '/lockscreen',
      name: 'Lockscreen',
      components: {
        blank: LockScreen
      }
    },
    {
      path: '/loading',
      name: 'Loading',
      components: {
        blank: Loading
      }
    }
  ]
})
