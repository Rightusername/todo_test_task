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
    NOTE_ADD: (state, payload) => {
      payload.id = generateID();
      state.notes.push(payload);
    },
    NOTE_EDIT: (state, payload) => {
      state.notes.find((item, index) => {
        item.id == payload.id;
        state.notes.splice(index, 1, payload);
        return;
      })
    },
  },
  actions: {
    NOTE_ADD: (context, payload) => {
      context.commit('NOTE_ADD', payload);
    },
    NOTE_EDIT: (context, payload) => {
      context.commit('NOTE_EDIT', payload);
    },
  },
  modules: {},
});
