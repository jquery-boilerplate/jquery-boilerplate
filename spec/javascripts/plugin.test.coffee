describe "jquery-flexirails", ->
  it "should create a PluginName class", ->
    expect(typeof PluginName).toBe 'function'
    
  it "should export $().pluginName", ->
    expect(typeof $().pluginName).toEqual 'function'