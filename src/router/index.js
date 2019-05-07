import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/index'),
      meta: { title: '主页', icon: 'dashboard' }
    }]
  },

  {
    path: '/share',
    component: Layout,
    redirect: '/share/songList',
    name: 'Share',
    meta: { title: '分享相关', icon: 'link' },
    children: [
      {
        path: 'songList/add',
        name: 'ShareSongListAdd',
        component: () => import('@/views/share/songlist/add'),
        meta: { title: '添加歌单', icon: 'add' }
      },
      {
        path: 'songList',
        name: 'ShareSongList',
        component: () => import('@/views/share/songlist/list'),
        meta: { title: '歌单列表', icon: 'list' }
      },
      {
        path: 'songs/add',
        name: 'ShareSongsAdd',
        component: () => import('@/views/share/songs/add'),
        meta: { title: '添加歌曲', icon: 'add' }
      },
      {
        path: 'songs',
        name: 'ShareSongs',
        component: () => import('@/views/share/songs/list'),
        meta: { title: '歌曲列表', icon: 'music' }
      }
    ]
  },

  {
    path: '/search',
    name: 'Search',
    component: Layout,
    redirect: '/search/index',
    meta: { title: '搜索相关', icon: 'search' },
    children: [
      {
        path: 'index',
        name: 'Search',
        component: () => import('@/views/search/songs'),
        meta: { title: '搜索歌曲', icon: 'list' }
      },
      {
        path: 'setting',
        name: 'SearchSetting',
        component: () => import('@/views/search/setting'),
        meta: { title: '搜索设置', icon: 'setting' }
      }
    ]
  },
  {
    path: '/user',
    name: 'Search',
    component: Layout,
    meta: { title: '用户管理', icon: 'user' },
    children: [
      {
        path: '/user/list',
        name: 'UserList',
        component: () => import('@/views/user/list'),
        meta: { title: '用户列表', icon: 'list' }
      },
      {
        path: '/user/admin/list',
        name: 'UserAdminList',
        component: () => import('@/views/user/admin/list'),
        meta: { title: '管理员列表', icon: 'list' }
      },
      {
        path: '/user/admin/add',
        name: 'UserAdminAdd',
        component: () => import('@/views/user/admin/add'),
        meta: { title: '添加管理员', icon: 'add' }
      }
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://localhost:8080',
        meta: { title: '返回前台', icon: 'link' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
