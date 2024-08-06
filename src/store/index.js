import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: false
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        }
    },
    actions: {
        login({ commit }, credentials) {
            // 这里可以进行异步的登录操作，例如向服务器发送登录请求
            if (credentials.username === 'admin' && credentials.password === '123456') {
                commit('login');
                return true;
            } else {
                return false;
            }
        }
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn
    }
});
