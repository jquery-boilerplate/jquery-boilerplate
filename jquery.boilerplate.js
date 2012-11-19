/*
 *  Project:
 *  Description:
 *  Author:
 *  License:
 */

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, undefined ) {

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window is passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = 'defaultPluginName',
        document = window.document,
        defaults = {
            propertyName: "value"
        };

    function plugin(element, options){

      // jQuery has an extend method that merges the
      // contents of two or more objects, storing the
      // result in the first object. The first object
      // is generally empty because we don't want to alter
      // the default options for future instances of the plugin
      options = $.extend( {}, defaults, options) ;

      var name = pluginName;

      var init = function () {
        // Place initialization logic here
        // You already have access to the DOM element and the options,
        // e.g., `element` and `options`
      };

      // Public interface
      return {
        init: init
        options: options
      };
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, plugin(this, options).init());
            }
        });
    };

}(jQuery, window));
