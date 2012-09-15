module.exports = function(grunt) {

  grunt.initConfig({
    lint: {
      all: ['grunt.js', '*.js']
    },
    jshint: {
      browser: true
    }
  });

  // registers the task and what it should do
  grunt.registerTask('default', 'lint');
};