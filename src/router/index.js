import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/views/WelcomePage.vue';
import Login from '@/views/LoginPage.vue';
import store from '../store';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/welcome',
            name: 'Welcome',
            component: Welcome,
            meta: { requiresAuth: true } // 添加meta字段以标识需要认证访问的路由
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        { path: '*', redirect: '/welcome' } // 默认重定向到欢迎页面，可以根据实际需求修改
    ]
});

// 导航守卫
router.beforeEach((to, from, next) => {
    // 检查路由元信息中是否需要认证
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 判断用户是否登录，这里假设使用Vuex管理登录状态
        if (!store.getters.isLoggedIn) {
            next({
                path: '/login',
                query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            });
        } else {
            next();
        }
    } else {
        next(); // 确保一定要调用 next()
    }
});

export default router;
