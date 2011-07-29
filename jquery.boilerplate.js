// remember to change every instance of "pluginName" to the name of your plugin!
// the semicolon at the beginning is there on purpose in order to protect the integrity of your scripts when
// mixed with incomplete objects, arrays, etc.
;(function($) {

    // we need attach the plugin to jQuery's namespace or otherwise it would not be
    // available outside this function's scope
    // "el" should be a jQuery object or a collection of jQuery objects as returned by
    // jQuery's selector engine
    $.pluginName = function(el, options) {

        // plugin's default options
        // this is private property and is accessible only from inside the plugin
        var defaults = {

            propertyName: 'value',

            // if your plugin is event-driven, you may provide callback capabilities for its events.
            // call these functions before or after events of your plugin, so that users may "hook"
            // custom functions to those particular events without altering the plugin's code
            onSomeEvent: function() {}

        }

        // to avoid confusions, use "plugin" to reference the current instance of the object
        var plugin = this;

        // this will hold the merged default, and user-provided options
        // plugin's properties will be accessible like:
        // plugin.settings.propertyName from inside the plugin or
        // myplugin.settings.propertyName from outside the plugin
        // where "myplugin" is an instance of the plugin
        plugin.settings = {}

        // the "constructor" method that gets called when the object is created
        // this is a private method, it can be called only from inside the plugin
        var init = function() {

            // the plugin's final properties are the merged default and user-provided options (if any)
            plugin.settings = $.extend({}, defaults, options);

            // make the collection of target elements available throughout the plugin
            // by making it a public property
            plugin.el = el;

            // code goes here

        }

        // public methods
        // these methods can be called like:
        // plugin.methodName(arg1, arg2, ... argn) from inside the plugin or
        // myplugin.publicMethod(arg1, arg2, ... argn) from outside the plugin
        // where "myplugin" is an instance of the plugin

        // a public method. for demonstration purposes only - remove it!
        plugin.foo_public_method = function() {

            // code goes here

        }

        // private methods
        // these methods can be called only from inside the plugin like:
        // methodName(arg1, arg2, ... argn)

        // a private method. for demonstration purposes only - remove it!
        var foo_private_method = function() {

            // code goes here

        }

        // call the "constructor" method
        init();

    }

})(jQuery);
