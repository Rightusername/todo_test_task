import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';
import NoteView from './views/NoteView.vue';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Main,
    },
    {
      path: '/note/:id',
      component: NoteView,
      meta: { transitionName: 'fade-left' },
    },
  ],
});
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title : 'Todo List';
  });
});

export default router;
