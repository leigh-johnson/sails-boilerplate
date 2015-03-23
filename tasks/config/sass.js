/**
 * Compiles SASS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/importer.scss` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-sass
 */
module.exports = function(grunt) {

	grunt.config.set('sass', {
		dev: {
			options: {
				style: 'expanded',
				loadPath: 'bower_components/bootstrap-sass-official/assets/stylesheets'
			},

			files: [
				{
				expand: true,
				cwd: 'assets/scss/',
				src: ['importer.scss'],
				dest: 'assets/styles/',
				ext: '.css'
			}]
		}

	});

grunt.loadNpmTasks('grunt-contrib-sass');
};
