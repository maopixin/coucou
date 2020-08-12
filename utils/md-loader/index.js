var cheerio = require('cheerio');
const md = require('./config');


module.exports = function (source) {
	const content = md.render(source);
	var $ = cheerio.load(content, {
		decodeEntities: false,
		lowerCaseAttributeNames: false,
		lowerCaseTags: false
	});
	return(`
		<template><div class="markdown">${content}</div></template>
		<style lang="less">${ $('.style').text() }</style>
	`)
};
