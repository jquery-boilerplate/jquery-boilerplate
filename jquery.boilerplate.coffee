#  Project:
#  Description:
#  Author:
#  License:

# Note that when compiling with coffeescript, the plugin is wrapped in another
# anonymous function. We do not need to pass in undefined as well, since
# coffeescript uses (void 0) instead.
(($, window) ->
  # window is passed through as local variable rather than global
  # as this (slightly) quickens the resolution process and can be more efficiently
  # minified (especially when both are regularly referenced in your plugin).

  # Create the defaults once
  pluginName = 'defaultPluginName'
  document = window.document
  defaults =
    property: 'value'

  # The actual plugin constructor
  class Plugin
    constructor: (@element, options) ->
      # jQuery has an extend method which merges the contents of two or
      # more objects, storing the result in the first object. The first object
      # is generally empty as we don't want to alter the default options for
      # future instances of the plugin
      @options = $.extend {}, defaults, options

      @_defaults = defaults
      @_name = pluginName

      @init()

    init: ->
      # Place initialization logic here
      # You already have access to the DOM element and the options via the instance,
      # e.g., @element and @options

  # A really lightweight plugin wrapper around the constructor, 
  # preventing against multiple instantiations and allowing any
  # public function (ie. a function whose name doesn't start
  # with an underscore) to be called via the jQuery plugin,
  # e.g. $(element).defaultPluginName('functionName', arg1, arg2)
  $.fn[pluginName] = (options, args...) ->
    if options is undefined or typeof options is 'object'
      this.each ->
        if !$.data(this, "plugin_#{pluginName}")
          $.data(@, "plugin_#{pluginName}", new Plugin(@, options))
    else if typeof options is 'string' and options[0] isnt '_' and options isnt 'init'
      this.each ->
        instance = $.data(this, "plugin_#{pluginName}")
        
        if instance instanceof Plugin and typeof instance[options] is 'function'
          instance[options].apply( instance, args)
        
        # Allow instances to be destroyed via the 'destroy' method
        if options is 'destroy'
          $.data(this, "plugin_#{pluginName}", null)
)(jQuery, window)