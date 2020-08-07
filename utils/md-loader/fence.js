// 覆盖默认的 fence 渲染策略
const hljs = require('highlight.js');
module.exports = md => {
	const defaultRender = md.renderer.rules.fence;
	md.renderer.rules.fence = (tokens, idx, options, env, self) => {
		const token = tokens[idx];
		// 判断该 fence 是否在 :::demo 内
		const prevToken = tokens[idx - 1];
		const isInDemoContainer = prevToken && prevToken.nesting === 1 && prevToken.info.trim().match(/^demo\s*(.*)$/);
		if (token.info === 'html' && isInDemoContainer) {
			let str = hljs.highlight('html', token.content, true);
			console.log(str.value);
			return `<template v-slot:highlight><pre v-pre class="hljs"><code>${str.value}</code></pre></template>`;
		}
		return defaultRender(tokens, idx, options, env, self);
	};
};
