/**
 * 路由注册
 */

 export default [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home.vue')
  }
 ]

 export const routerData = [
   {
     id: '1',
     name: '首页',
     icon: 'el-icon-location',
     path: '/home'
   },
   {
    name: '组织架构',
    icon: 'el-icon-location',
    path: '/home',
    children: [
      { 
        id: '2',
        name: '人员',
        icon: 'el-icon-location',
        path: '/home'
      },
      { 
        id: '3',
        name: '用户管理',
        icon: 'el-icon-location',
        path: '/home'
      },
      {
        name: '角色管理',
        icon: 'el-icon-location',
        path: '/home',
        children: [
          {
            id: '4',
            name: '角色1',
            icon: 'el-icon-location',
            path: '/home'
          }
        ]
      }
    ]
  },
   {
    id: '5',
    name: '路由测试1',
    icon: 'el-icon-location',
    path: '/home'
   },
   {
    id: '6',
    name: '路由测试2',
    icon: 'el-icon-location',
    path: '/home'
   },
   {
    id: '7',
    name: '路由测试3',
    icon: 'el-icon-location',
    path: '/home'
   },
   {
    id: '8',
    name: '路由测试4',
    icon: 'el-icon-location',
    path: '/home'
   },
   {
    id: '9',
    name: '路由测试5',
    icon: 'el-icon-location',
    path: '/home'
   },
   {
    id: '10',
    name: '路由测试6',
    icon: 'el-icon-location',
    path: '/home'
   },
   {
    id: '11',
    name: '路由测试7',
    icon: 'el-icon-location',
    path: '/home'
   },
   {
    id: '12',
    name: '路由测试8',
    icon: 'el-icon-location',
    path: '/home'
   },
   {
    id: '12',
    name: '路由测试8',
    icon: 'el-icon-location',
    path: '/home'
   },
   {
    id: '12',
    name: '路由测试8',
    icon: 'el-icon-location',
    path: '/home'
   },
   {
    id: '12',
    name: '路由测试8',
    icon: 'el-icon-location',
    path: '/home'
   },
   {
    id: '12',
    name: '路由测试8',
    icon: 'el-icon-location',
    path: '/home'
   },
   {
    id: '12',
    name: '路由测试8',
    icon: 'el-icon-location',
    path: '/home'
   },
   {
    id: '12',
    name: '路由测试8',
    icon: 'el-icon-location',
    path: '/home'
   }
 ]
