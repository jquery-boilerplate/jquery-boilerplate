# 
$ = jQuery

# el is a jQuery selector object, or array
$.pluginName = (el, options) ->
  defaults = 
    defaultValue: true
  
  plugin = this
  $el = el
  
  plugin.settings = {}
  
  init = (options) ->
    data = $el.data 'pluginName'
    
    if !data
      plugin.settings = $.extend {}, defaults, options
      plugin.el = el
      
      $el.data 'pluginName', plugin
      # initialization completed
    else
      # already initialized
  
  init options
  plugin

# plugin instanciator
$.fn.pluginName = (options) ->
  this.each ->
    new $.pluginName $(this), options

# get the flexirails instance
$.fn.getPluginName = ->
  this.data 'pluginName'