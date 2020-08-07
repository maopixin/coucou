<template>
	<button
		:class="['c-button', `c-button--${color}`, `c-button--${size}`]"
		:style="{
			...customStyle
		}"
	>
		<slot></slot>
	</button>
</template>

<script>
import { ref, reactive, computed } from 'vue';
import { isString, isObject } from '@/utils/is';

export default {
	name: 'CButton',
	props: {
		color: {
			type: String,
			default: 'default',
		},
		size: {
			type: String,
			default: 'default',
		},
		custom: {
			type: Object,
			default() {
				return {};
			},
		}
	},
	setup(props) {
		const customStyle = computed(() => {
			let result = props.custom;
			return {
				width: `${result.w}px`,
				height: `${result.h}px`,
				fontSize: `${result.fs}px`,
			}
		});	
		return {
			customStyle
		}
	}
};
</script>

<style lang="less">
.c-button {
	display: inline-block;
	width: 98px;
	height: 40px;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
	box-sizing: border-box;
	padding: 2px 6px;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
	font-size: 14px;
	line-height: 1;
	overflow: hidden;
	text-overflow: ellipsis;
	&+.c-button {
		margin-left: 10px;
	}
}
// 大小
.c-button--medium {
	width: 98px;
	height: 36px;
	font-size: 14px;
}
.c-button--small {
	width: 80px;
	height: 32px;
	font-size: 12px;
}
.c-button--mini {
	width: 80px;
	height: 28px;
	font-size: 12px;
}
// 主题
.c-button--primary {
	color: #fff;
    background-color: #409eff;
	border-color: #409eff;
	&.is-plain {
		color: #409eff;
		background: #ecf5ff;
		border-color: #b3d8ff;
	}
}
</style>