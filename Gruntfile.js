/* eslint-disable linebreak-style */
module.exports = function (grunt) {
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*!<%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/\n',
      },
      build: {
        src: ['src/db/*.js', 'src/math/*.js', 'src/routes/api/*.js', 'src/routes/special/*.js', 'src/routes/views/*.js'],
        expand: true,
        dest: 'build',
      },
    },
  });
  // Load the plugin that provides the "uglify" task
  grunt.loadNpmTasks('grunt-contrib-uglify-es');

  // Default Task(s).
  grunt.registerTask('default', ['uglify']);
};
