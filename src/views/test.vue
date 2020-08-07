<template>
	<c-button :size="sizes" @click="upsize">自定义按钮</c-button>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
	setup() {
		let sizes = ref('medium');
		let color = ref('');
		let upsize = () => {
			sizes.value = "small"

			console.log(sizes.value);
		}
		return {
			sizes,
			upsize,
			color,
		}
	}
}
</script>

<style>

</style>