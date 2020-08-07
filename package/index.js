import Button from './button/index.js';

const components = [
	Button,
]

const install = function (app, opts = {}) {
	components.forEach(component => {
		app.component(component.name, component);
	});

};

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}
export default {
	version: '2.13.3',
	install,
	...components
}