# We need attach the plugin to jQuery's namespace or otherwise it would not be
# available outside this function's scope
$ = jQuery

# your Plugin class
class PluginName
  initialize: (@el, options) ->
    # Add a reverse reference to the DOM object
    @el.data 'pluginName', @
    
    @options = $.extend {}, PluginName::defaultOptions, options
    # Put your initialization code here

# plugin's default options
# this is private property and is accessible only from inside the plugin
PluginName::defaultOptions = 
  propertyName: 'value'

# This function can be used just like every other jQuery function
# Allows for chaining etc.
$.fn.pluginName = (options) ->
  this.each ->
    new PluginName $(this), options

# This function breaks the chain, but returns
# the pluginName if it has been attached to the object.
$.fn.getPluginName = ->
  this.data 'pluginName'