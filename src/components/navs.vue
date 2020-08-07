<template>
	<div class="navs">
		<ul v-for="(item, index) in navConfig" :key="index">
			<li class="nav-item">{{ item.name }}</li>
			<ul v-if="item.children">
				<li class="c-item" v-for="(e, i) in item.children" :key="i">
					{{ e.name }}
				</li>
			</ul>
			<div v-if="item.groups">
				<ul v-for="(e, i) in item.groups" :key="i">
					<li class="group">{{ e.groupName }}</li>
					<li class="c-item" v-for="(ee, ii) in e.list" :key="ii">
						{{ ee.title }}
					</li>
				</ul>
			</div>
		</ul>
	</div>
</template>

<script>
import navConfig from '../nav.config.json';
export default {
	setup() {
		return {
			navConfig: navConfig['zh-CN']
		}
	}
}
</script>

<style lang="less">
.navs {
	width: 240px;
	height: 100%;
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.nav-item {
		font-size: 16px;
		color: #333;
		line-height: 40px;
		height: 40px;
		margin: 0;
		padding: 0;
		text-decoration: none;
		display: block;
		position: relative;
		transition: .15s ease-out;
		font-weight: 700;
	}
	.c-item {
		display: block;
		height: 40px;
		color: #444;
		line-height: 40px;
		font-size: 14px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-weight: 400;
		cursor: pointer;
	}
	.group {
		font-size: 12px;
		color: #999;
		line-height: 26px;
		margin-top: 15px;
	}
}
</style>