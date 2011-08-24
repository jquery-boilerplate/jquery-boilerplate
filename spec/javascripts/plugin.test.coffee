describe "jquery-flexirails", ->
  it "should export $.pluginName", ->
    expect(typeof $().pluginName).toEqual 'function'