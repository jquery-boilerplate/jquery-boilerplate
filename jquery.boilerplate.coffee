(function() {
  var $;
  $ = jQuery;
  $.fn.pluginName = function(method) {
    var helpers, methods;
    methods = {
      init: function(options) {
        this.pluginName.settings = $.extend({}, this.pluginName.defaults, options);
        return this.each(function() {
          var $element, element;
          $element = $(this);
          return element = this;
        });
      },
      foo_public_method: function() {}
    };
    helpers = {
      foo_private_method: function() {}
    };
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      return $.error('Method "' + method + '" does not exist in pluginName plugin!');
    }
  };
  $.fn.pluginName.defaults = {
    foo: 'bar'
  };
  $.fn.pluginName.settings = {};
}).call(this);
