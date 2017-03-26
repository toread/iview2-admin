import Login from './pages/Login.vue'
import NotFound from './pages/404.vue'
import Home from './component/Home.vue'
import Table from './pages/user/Table.vue'
import Form from './pages/user/Form.vue'
import user from './pages/nav1/user.vue'
import Page4 from './pages/nav2/Page4.vue'
import Page5 from './pages/nav2/Page5.vue'


let routes = [{
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '基础权限管理',
        iconCls: 'ios-home', //图标样式class
        children: [
            { path: '/table', component: Table, name: '用户管理' },
            { path: '/form', component: Form, name: '资源管理' },
            { path: '/user', component: user, name: '授权管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '组件管理',
        iconCls: 'ios-paw',
        children: [
            { path: '/page4', component: Page4, name: '数据库字典' },
            { path: '/page5', component: Page5, name: '图标管理' }
        ]
    },
    {
          path: '*',
          hidden: true,
          redirect: { path: '/404' }
    }
];

export default routes;
