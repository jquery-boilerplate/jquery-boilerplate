module.exports = function(grunt) {

  grunt.initConfig({
    qunit: {
      files: ['test/**/*.html']
    },
    lint: {
      all: ['grunt.js', '*.js']
    },
    min: {
      dist: {
        src: ['jquery.boilerplate.js'],
        dest: 'jquery.boilerplate.min.js'
      }
    },
    jshint: {
      globals: {
        jQuery: true
      }
    }
  });

  // tasks
  grunt.registerTask('default', 'lint');
  grunt.registerTask('test', 'qunit');
  grunt.registerTask('min', 'min');
};