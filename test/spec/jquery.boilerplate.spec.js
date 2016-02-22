( function( $, QUnit ) {

	"use strict";

	var $testCanvas = $( "#testCanvas" );
	var $fixture = null;

	QUnit.module( "jQuery Boilerplate", {
		beforeEach: function() {

			// fixture is the element where your jQuery plugin will act
			$fixture = $( "<div/>" );

			$testCanvas.append( $fixture );
		},
		afterEach: function() {

			// we remove the element to reset our plugin job :)
			$fixture.remove();
		}
	} );

	QUnit.test( "is inside jQuery library", function( assert ) {

		assert.equal( typeof $.fn.defaultPluginName, "function", "has function inside jquery.fn" );
		assert.equal( typeof $fixture.defaultPluginName, "function", "another way to test it" );
	} );

	QUnit.test( "returns jQuery functions after called (chaining)", function( assert ) {
		assert.equal(
			typeof $fixture.defaultPluginName().on,
			"function",
			"'on' function must exist after plugin call" );
	} );

	QUnit.test( "caches plugin instance", function( assert ) {
		$fixture.defaultPluginName();
		assert.ok(
			$fixture.data( "plugin_defaultPluginName" ),
			"has cached it into a jQuery data"
		);
	} );

	QUnit.test( "enable custom config", function( assert ) {
		$fixture.defaultPluginName( {
			foo: "bar"
		} );

		var pluginData = $fixture.data( "plugin_defaultPluginName" );

		assert.deepEqual(
			pluginData.settings,
			{
				propertyName: "value",
				foo: "bar"
			},
			"extend plugin settings"
		);

	} );

	QUnit.test( "changes the element text", function( assert ) {
		$fixture.defaultPluginName();

		assert.equal( $fixture.text(), "jQuery Boilerplate" );
	} );

	QUnit.test(
		"has #yourOtherFunction working as expected",
		function( assert ) {
			$fixture.defaultPluginName();

			var instance = $fixture.data( "plugin_defaultPluginName" ),
				expectedText = "foobar";

			instance.yourOtherFunction( expectedText );
			assert.equal( $fixture.text(), expectedText );
		}
	);

}( jQuery, QUnit ) );
