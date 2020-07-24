import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { generateID } from 'src/utils/common';

export default new Vuex.Store({
  plugins: [

  ],
  state: {
    notes: [],
  },
  getters: {
    notes: state => {
      return state.notes;
    },
  },
  mutations: {
    ADD_NOTE: (state, payload) => {
      payload.id = generateID();
      state.notes.push(payload);
    },
  },
  actions: {
    ADD_NOTE: (context, payload) => {
      return new Promise((resolve, reject) => {
        context.commit('ADD_NOTE', payload);
        resolve(payload);
      });
    },
  },
  modules: {},
});
