describe "jquery-pluginName", ->    
  it "should export $().pluginName", ->
    expect(typeof $().pluginName).toEqual 'function'
    
  describe "PluginName", ->
    it "should use default options if not specified", ->
      plugin = new PluginName $(document.body), {}
      expect(plugin.options.propertyName).toEqual 'value'
      
    it "should overwrite default options if specified", ->
      plugin = new PluginName $(document.body), {propertyName: 'foo'}
      expect(plugin.options.propertyName).toEqual 'foo'