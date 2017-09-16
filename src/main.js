import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import index from './components/index.vue';
import about from './components/about.vue';
import we from './components/we.vue';
import stro from './components/stro.vue';
import first from './components/first.vue';
import second from './components/second.vue';
import ming from './components/ming.vue';
//配置路由，定义路由
var myRoute=[
        {path:'/index',name:'index',components:{
        	default:index,
        	page:we
        }},
        {path:'/about',name:'about',components:{
        	default:about,
        	pages:we
        }},
        {path:'/we',component:we},
        {path:'/stro',component:stro,
          'children':[
             {path:'first',component:first},
             {path:'second',component:second}
          ]
        },
    {
      path:'./ming',component:ming
    },
        {path: '*', redirect: '/index' } 
]
 //实例化路由对象老老实实的写这个名字route
 var routers=new VueRouter({
 	  routes:myRoute
 })
new Vue({
  el: '#app',
  router:routers,
  render: h => h(App)
})
