import { createRouter, createWebHistory } from 'vue-router';
import navConfig from '../nav.config.json';

let lang = "zh-CN";
const registerRoute = (navConfig) => {
	let route = [];
	let navs = navConfig[lang];
	navs.forEach((nav, index) => {
		if (nav.href) return;
		if (nav.groups) {
			nav.groups.forEach(group => {
				group.list.forEach(nav => {
					addRoute(nav, lang, index);
				});
			});
		} else if (nav.children) {
			nav.children.forEach(nav => {
				addRoute(nav, lang, index);
			});
		} else {
			addRoute(nav, lang, index);
		}
	});
	function addRoute(page, lang, index) {
		route.push({
			path: page.path,
			component: () => require(`../docs/${lang}${page.path}.md`),
			name: page.name || page.title,
		})
	}

	return route;
};

let routes = registerRoute(navConfig);

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})
export default router
