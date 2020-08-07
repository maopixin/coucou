const mdContainer = require('markdown-it-container');
const striptags = require('./strip-tags');

function convert(str) {
	str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
		return String.fromCharCode(
			parseInt(
				encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'),
				16
			)
		);
	});
	return str;
}

module.exports = md => {
	md.use(mdContainer, 'demo', {
		validate(params) {
			return params.trim().match(/^demo\s*(.*)$/);
		},
		render(tokens, idx) {
			const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
			if (tokens[idx].nesting === 1) {
				const description = m && m.length > 1 ? m[1] : '';
				const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
				var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
				var style = striptags.fetch(content, 'style');
				
				return `<demo-block>
					<template v-slot:source>${html}</template>
				`;
			}
			return '</demo-block>';
		}
	});

	md.use(mdContainer, 'tip');
	md.use(mdContainer, 'warning');
};
