<template>
	<button
		:class="[
			'c-button',
			`c-button--${color}`,
			`c-button--${size}`,
			{
				'is-plain': plain,
				'is-round': round,
			}
		]"
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
		radius: {
			type: Number,
			default: 2,
		},
		plain: {
			type: Boolean,
			default: false,
		},
		round: {
			type: Boolean,
			default: false,
		},
	},
	setup(props) {
		
		return {
		}
	}
};
</script>

<style lang="less">
.c-button {
	display: inline-block;
	padding: 12px 20px;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
	box-sizing: border-box;
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
// round
.c-button.is-round {
    border-radius: 20px;
    padding: 12px 20px;
}
// size
.c-button--medium {
	width: 98px;
	height: 36px;
	font-size: 14px;
	padding: 10px 20px;
	&.is-round {
		padding: 10px 20px;
	}
}
.c-button--small {
	width: 80px;
	height: 32px;
	font-size: 12px;
	padding: 9px 15px;
	&.is-round {
		padding: 9px 15px;
	}
}
.c-button--mini {
	width: 80px;
	height: 28px;
	font-size: 12px;
	padding: 7px 15px;
	&.is-round {
		padding: 7px 15px;
	}
}

// theme
.c-button {
	&:focus, &:hover {
		color: #409eff;
		border-color: #c6e2ff;
		background-color: #ecf5ff;
	}
	&:active {
		color: #3a8ee6;
		border-color: #3a8ee6;
		outline: none;
	}
	&.is-plain {
		&:focus, &:hover {
			background: #fff;
			border-color: #409eff;
			color: #409eff;
		}
		&:active {
			border-color: #3a8ee6;
    		color: #3a8ee6;
		}
	}
}
.c-button--primary {
	color: #fff;
    background-color: #409eff;
	border-color: #409eff;
	&:focus, &:hover {
		background: #66b1ff;
		border-color: #66b1ff;
		color: #fff;
	}
	&:active, &.is-active {
		background: #3a8ee6;
		border-color: #3a8ee6;
		color: #fff;
	}
	&.is-plain {
		color: #409eff;
		background: #ecf5ff;
		border-color: #b3d8ff;
		&:focus, &:hover {
			background: #409eff;
			border-color: #409eff;
			color: #fff;
		}
		&:active, &.is-active {
			background: #3a8ee6;
			border-color: #3a8ee6;
			color: #fff;
			outline: none;
		}
	}
}
.c-button--success {
	color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
	&:focus, &:hover {
		background: #85ce61;
		border-color: #85ce61;
		color: #fff;
	}
	&:active, &.is-active {
		background: #5daf34;
		border-color: #5daf34;
		color: #fff;
	}
	&.is-plain {
		color: #67c23a;
		background: #f0f9eb;
		border-color: #c2e7b0;
		&:focus, &:hover {
			background: #67c23a;
			border-color: #67c23a;
			color: #fff;
		}
		&:active, &.is-active {
			background: #5daf34;
			border-color: #5daf34;
			color: #fff;
			outline: none;
		}
	}
}
.c-button--info {
	color: #fff;
    background-color: #909399;
    border-color: #909399;
	&:focus, &:hover {
		background: #a6a9ad;
		border-color: #a6a9ad;
		color: #fff;
	}
	&:active, &.is-active {
		background: #82848a;
		border-color: #82848a;
		color: #fff;
	}
	&.is-plain {
		color: #909399;
		background: #f4f4f5;
		border-color: #d3d4d6;
		&:focus, &:hover {
			background: #909399;
			border-color: #909399;
			color: #fff;
		}
		&:active, &.is-active {
			background: #82848a;
			border-color: #82848a;
			color: #fff;
			outline: none;
		}
	}
}
.c-button--warning {
	color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
	&:focus, &:hover {
		background: #ebb563;
		border-color: #ebb563;
		color: #fff;
	}
	&:active, &.is-active {
		background: #cf9236;
		border-color: #cf9236;
		color: #fff;
	}
	&.is-plain {
		color: #e6a23c;
		background: #fdf6ec;
		border-color: #f5dab1;
		&:focus, &:hover {
			background: #e6a23c;
			border-color: #e6a23c;
			color: #fff;
		}
		&:active, &.is-active {
			background: #cf9236;
			border-color: #cf9236;
			color: #fff;
			outline: none;
		}
	}
}
.c-button--danger {
	color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
	&:focus, &:hover {
		background: #f78989;
		border-color: #f78989;
		color: #fff;
	}
	&:active, &.is-active {
		background: #dd6161;
		border-color: #dd6161;
		color: #fff;
	}
	&.is-plain {
		color: #f56c6c;
		background: #fef0f0;
		border-color: #fbc4c4;
		&:focus, &:hover {
			background: #f56c6c;
			border-color: #f56c6c;
			color: #fff;
		}
		&:active, &.is-active {
			background: #dd6161;
			border-color: #dd6161;
			color: #fff;
			outline: none;
		}
	}
}

</style>