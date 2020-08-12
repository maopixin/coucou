<template>
	<main-header/>
	<test/>
	<div class="container">
		<navs/>
		<div class="demo-doc-container">
			<router-view></router-view>
		</div>
	</div>
	<main-footer/>
</template>

<script>
import mainHeader from './components/header';
import navs from './components/navs';
import mainFooter from './components/footer';

export default {
	components: {
		mainHeader,
		navs,
		mainFooter,
		test: {
			template: `
				<div>123213</div>
			`,
		}
	}
}
</script>

<style lang="less">
body {
	margin: 0;
}
.container {
	display: flex;
	width: 1140px;
	margin: 0 auto;
	.demo-doc-container {
		flex: 1;
	}
}
</style>
