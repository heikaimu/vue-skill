import Vue from 'vue';

export const state = Vue.observable({
  views: 0
});

export const mutations = {
  setViews(views) {
    state.views = views;
  }
};
