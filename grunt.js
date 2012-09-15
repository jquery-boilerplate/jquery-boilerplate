module.exports = function(grunt) {

  grunt.initConfig({
    qunit: {
      files: ['test/**/*.html']
    },
    lint: {
      all: ['grunt.js', '*.js']
    },
    jshint: {
      globals: {
        jQuery: true
      }
    }
  });

  // registers the task and what it should do
  grunt.registerTask('default', 'qunit lint');
};