import { ref, reactive, computed } from 'vue';
import { isString, isObject } from '@/utils/is';
export default function(size) {
	const defaultSize = {
		w: 98,
		h: 40,
		f: 14,
	};
	const sizes = computed(() => {
		if(isObject(size)) {
			let result = Object.assign({}, defaultSize, size);
			return {
				sizeClass: '',
				sizeStyle: {
					width: `${result.w}px`,
					height: `${result.h}px`,
					fontSize: `${result.f}px`,
				},
			}
		} else {
			return {
				sizeClass: size,
				sizeStyle: {},
			}
		}
	});	

	return sizes
}