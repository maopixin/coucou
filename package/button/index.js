import CButton from './src/button';

/* istanbul ignore next */
CButton.install = function(app) {
	app.component(CButton.name, CButton);
};

export default CButton;
