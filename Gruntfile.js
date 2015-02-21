module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("package.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %>\n" +
				" *  Under <%= pkg.license %> License\n" +
				" */\n"
		},

		// Concat definitions
		concat: {
			options: {
				banner: "<%= meta.banner %>"
			},
			dist: {
				src: ["src/jquery.boilerplate.js"],
				dest: "dist/jquery.boilerplate.js"
			}
		},

		// Lint definitions
		jshint: {
			files: ["src/jquery.boilerplate.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["dist/jquery.boilerplate.js"],
				dest: "dist/jquery.boilerplate.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// CoffeeScript compilation
		coffee: {
			compile: {
				files: {
					"dist/jquery.boilerplate.js": "src/jquery.boilerplate.coffee"
				}
			}
		},

		// watch for changes to source
		// Better than calling grunt a million times
		// (call 'grunt watch')
		watch: {
		    files: ['src/*'],
		    tasks: ['default']
		},
		// update bower.json with data from package.json
		update_json: {
			options: {
				src: "package.json",
				indent: " "
			},
			bower: {
				dest: 'bower.json',
				fields: { //to: "from",
					name: "name",
					version: "version",
					description: "description",
					repository: "repository",
					keywords: "keywords",
					homepage: "homepage",
					main: "main",
					license: "license",
					authors: [{
						name: "/author/name",
						email: "/author/email",
						homepage: "/author/url"
					}]
				}
			}
		},
		bump: {
			options: {
				files: ['package.json', 'bower.json'],
				updateConfigs: ['pkg'],
				commit: true,
				commitMessage: 'Release v%VERSION%',
				commitFiles: ['-a'],
				createTag: true,
				tagName: 'v%VERSION%',
				tagMessage: 'Version %VERSION%',
				push: true,
				pushTo: 'origin',
				gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
				globalReplace: false,
				prereleaseName: false,
				regExp: false
			}
		}

	});

	require('load-grunt-tasks')(grunt); //DRY replacement for loadNpmTasks()

	grunt.registerTask("build", ["concat", "uglify", "update_json"]);
	grunt.registerTask("default", ["jshint", "build"]);
	grunt.registerTask("release", ["bump"]);
	grunt.registerTask("travis", ["default"]);

};
