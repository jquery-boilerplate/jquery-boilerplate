// remember to change every instance of "pluginName" to the name of your plugin!
// the semicolon at the beginning is there on purpose in order to protect the integrity of your scripts when
// mixed with incomplete objects, arrays, etc.
;(function($) {

	$.fn.pluginName = function(options) {  

		// plugin's default options
		// this is private property and is accessible only from inside the plugin
		var defaults = {
			propertyName : 'value',
    	};

		// maintaining chainability
		return this.each(function() {

			var $this = $(this);        
		
			// If options exist, lets merge them with our default settings
			if (options) { 
				$.extend(defaults, options);
			}

		});

		// private function for debugging
		var debug = function ($obj) {
			if (window.console && window.console.log) {
				window.console.log('Debug: ' + $obj);
			}
		};

	};

})(jQuery);


