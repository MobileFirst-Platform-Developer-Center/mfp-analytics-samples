require.config({
	'paths': {
		'ibmmfpfanalytics': '../node_modules/ibm-mfp-web-sdk/lib/analytics/ibmmfpfanalytics',
		'ibmmfpf': '../node_modules/ibm-mfp-web-sdk/ibmmfpf'
	}
});

require([
	// Load our app module and pass it to our definition function
	'app',
], function(App){
	demoApp = App;
});
