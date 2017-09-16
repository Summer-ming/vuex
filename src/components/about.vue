<template id='about'>
	<div>
			<h1>这是一个关于我们的传说</h1>
			<div class='box'>曾经有一份真挚的感情摆在我的面前我没有珍惜，等我失去的时候才追悔莫及，人间最痛苦的事莫过于此，你的剑在我的咽喉上刺下去吧，不用在犹豫了！如果上天能给我一次再来一次的机会，我会对哪个女孩说三个字：我爱你，如果非要在这份爱上加一个期限，我希望是一万年！</div>
			<router-link to='/about/stro'></router-link>
			<router-view></router-view>
	</div>
</template>
<script>
	var about={
		template:'#about'
	}
	module.exports=about
</script>
<style>

.box{
		width:60vw;color:red;
	}
	
</style>