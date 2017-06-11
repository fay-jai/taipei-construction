import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});
