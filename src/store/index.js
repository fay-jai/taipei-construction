import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable */
const store = new Vuex.Store({
  state: {
    lang: 'en',
  },
  mutations: {
    SET_TO_LANG(state, lang) {
      state.lang = lang;
    },
  },
  actions: {
    setToChinese({ commit }) {
      commit('SET_TO_LANG', 'ch');
    },
    setToEnglish({ commit }) {
      commit('SET_TO_LANG', 'en');
    }
  }
});

export default store;
