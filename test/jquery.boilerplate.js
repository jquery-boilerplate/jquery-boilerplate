(function($) {

  module('jQuery-Boilerplate');

  test("should be defined on jquery object", function () {
    ok($(document.body).defaultPluginName, 'defaultPluginName method is defined');
  });

}(jQuery));