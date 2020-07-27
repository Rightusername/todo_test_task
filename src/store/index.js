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
    SET_STATE: (state, payload) => {
      Object.assign(state, payload);
    },
    NOTE_ADD: (state, payload) => {
      payload.id = generateID();
      state.notes.push(payload);
    },
    NOTE_REMOVE: (state, id) => {
      let index = state.notes.findIndex(item => item.id == id);
      if (index >= 0) {
        state.notes.splice(index, 1);
      }
    },
    NOTE_EDIT: (state, payload) => {
      let index = state.notes.findIndex(item => item.id == payload.id);
      if (index >= 0) {
        state.notes.splice(index, 1, payload);
      }
    },
  },
  actions: {
    NOTE_ADD: (context, payload) => {
      context.commit('NOTE_ADD', payload);
      context.dispatch('SAVE_STATE');
    },
    NOTE_EDIT: (context, payload) => {
      context.commit('NOTE_EDIT', payload);
      context.dispatch('SAVE_STATE');
    },
    NOTE_REMOVE: (context, payload) => {
      context.commit('NOTE_REMOVE', payload);
      context.dispatch('SAVE_STATE');
    },

    SAVE_STATE: (context, payload) => {
      localStorage.setItem('state', JSON.stringify(context.state));
    },

    LOAD_STATE: (context, payload) => {
      context.commit('SET_STATE', JSON.parse(localStorage.getItem('state')));
    },
  },
  modules: {},
});
