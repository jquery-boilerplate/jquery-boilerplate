describe "jquery-pluginName", ->
  it "should export $.pluginName", ->
    expect(typeof $.pluginName).toEqual 'function'
    
  it "should use default options if nothing was specified", ->
    $(document.body).pluginName()
    plugin = $(document.body).getPluginName()
    
    expect(plugin.options.propertyName).toEqual 'value'
    
  it "should overwrite default options with given value", ->
    $(document.body).pluginName { propertyName: 'foo' }
    plugin = $(document.body).getPluginName()
    
    expect(plugin.options.propertyName).toEqual 'foo'