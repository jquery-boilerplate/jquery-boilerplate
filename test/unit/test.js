(function($, window, undefined) {

	'use strict';

	var

		document = window.document;

	QUnit.test('Initialization', function() {

		$(document).defaultPluginName({
			propertyName : 'A custom value'
		});

		ok($(document).data('plugin_defaultPluginName'), 'Initialized.');
	});
})(jQuery, window);