const Config = require('markdown-it-chain');
const anchorPlugin = require('markdown-it-anchor');
const slugify = require('transliteration').slugify;
const containers = require('./containers');
const overWriteFenceRule = require('./fence');
const hljs = require('highlight.js');

const config = new Config();

config
	.options.html(true).end()
	.options.highlight(function (str, lang) {
		if (lang && hljs.getLanguage(lang)) {
		  try {
			return '<pre class="hljs"><code>' +
				   hljs.highlight(lang, str, true).value +
				   '</code></pre>';
		  } catch (__) {}
		}
	
		return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
	}).end()
	.plugin('anchor').use(anchorPlugin, [
		{
			level: 2,
			slugify: slugify,
			permalink: true,
			permalinkBefore: true,
			permalinkSymbol: '#',
		}
	]).end()
	.plugin('containers').use(containers).end();

const md = config.toMd();
// overWriteFenceRule(md);

module.exports = md;
