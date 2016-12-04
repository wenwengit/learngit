import Vue from 'vue'
import VueRouter from 'vue-router'//导入vue-router
import App from './App'

var router = new VueRouter();
/*Vue.use(VueRouter);



router.map({
  /!*'/demo/home': { component: home },
  '/demo/list': { component: list },*!/
  '/demo/home': {
    component: require('./demo/home/index.vue'),
  },
  '/demo/list': {
    component: require('./demo/list/index.vue'),
  },
});*/

/*router.start(App, '#app');

router.redirect({
  '/': '/demo/home'
})*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
})

