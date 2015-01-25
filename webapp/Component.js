sap.ui.core.UIComponent.extend('sample.Component', {
	metadata: {
		name: 'Sample app bootstrap',
		version: '1.0.0',
		includes: ['css/styles.css'],
		dependencies: {
			libs: ['sap.m']
		},
		rootView: 'sample.view.App'
	}
});
