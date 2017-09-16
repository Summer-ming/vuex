<template>
  <div id="app">
    <!--<h1>{{msg}}</h1>-->
     <!--路由路径-->
		<router-link :to="{name:'index'}">首页</router-link>
		<router-link :to="{name:'about'}">关于</router-link>
		<router-link to='/we'>我们</router-link>
		<router-link to='/stro'>存储数据</router-link>
		<router-link to='/ming'>明明是毛大爷</router-link>
		<!--路由视图容器-->
		<router-view></router-view>
		<router-view name='page'></router-view>
		<router-view name='pages'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      /*msg: '路由'*/
    }
  }
}
</script>

<style>

</style>
