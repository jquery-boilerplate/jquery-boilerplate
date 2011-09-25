# author: Raphael Randschau
# version: v0.1
#
# We need attach the plugin to jQuery's namespace or otherwise it would not be
# available outside this function's scope
$ = jQuery

# "element" should be a jQuery object or a collection of jQuery objects as returned by
# jQuery's selector engine
$.pluginName = (el, options = {}) ->
  # To avoid scope issues, use 'self' instead of 'this'
  # to reference this class from internal events and functions.
  plugin = this

  # Access to jQuery version of element
  plugin.$el = el

  # Add a reverse reference to the DOM object
  plugin.$el.data 'pluginName', plugin

  plugin.init = ->
    plugin.options = $.extend {}, $.pluginName.defaultOptions, options
    # Put your initialization code here

  plugin.init()

# plugin's default options
# this is private property and is accessible only from inside the plugin
$.pluginName.defaultOptions =
  propertyName: 'value'

# This function can be used just like every other jQuery function
# Allows for chaining etc.
$.fn.pluginName = (options) ->
  this.each ->
    new $.pluginName $(this), options

# This function breaks the chain, but returns
# the pluginName if it has been attached to the object.
$.fn.getPluginName = ->
  this.data 'pluginName'