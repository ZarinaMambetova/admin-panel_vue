import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import skills from './modules/skills'
import works from './modules/works'
import posts from './modules/posts'

const store = new Vuex.Store({
    getters: {
        $http: () => (VueResource)
    },
    modules: {
        skills,
        posts,
        works
    }
})

export default store
