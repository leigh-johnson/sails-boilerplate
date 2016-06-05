module.exports = function(grunt) {
  grunt.config.set('bower', {
    dev: {
        dest: '.tmp/public',
        js_dest: '.tmp/public/js/dependencies',
        css_dest: '.tmp/public/styles',
        fonts_dest: '.tmp/public/fonts/',
        options: {
          expand: true,
          keepExpandedHierarchy: false,
          ignorePackages: ['bootstrap-sass-official']
        }
    }
  });

  grunt.loadNpmTasks('grunt-bower');

};
