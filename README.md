# jQuery Boilerplate [![Build Status](https://secure.travis-ci.org/jquery-boilerplate/boilerplate.png?branch=master)](https://travis-ci.org/jquery-boilerplate/boilerplate)

### A boilerplate for jump-starting jQuery plugins development.

So, you've tried your hand at writing jQuery plugins and you're comfortable putting together something that probably works. Awesome! Thing is, you think there might be better ways you could be writing them - you've seen them done a number of different ways in the wild, but aren't really sure what the differences between these patterns are or how to get started with them.

This project won't seek to provide a perfect solution to every possible pattern, but will attempt to cover a simple template for beginners and above. By using a basic defaults object, simple constructor for assigning the element to work with and extending options with defaults and a lightweight wrapper around the constructor to avoid issues with multiple instantiations.

## Guides

#### How did we get here?

Have you got in this repo and still not sure about using this boilerplate?

Well, extending jQuery with plugins and methods is very powerful and can save you and your peers a lot of development time by abstracting your most clever functions into plugins.

[This awesome guide](https://github.com/jquery-boilerplate/boilerplate/wiki/How-did-we-get-here%3F), adapted from [jQuery Plugins/Authoring](http://docs.jquery.com/Plugins/Authoring), will outline the basics, best practices, and common pitfalls to watch out for as you begin writing your plugin.

#### How to publish plugins?

Also, check our guide on [How to publish a plugin in jQuery Plugin Registry](https://github.com/jquery-boilerplate/boilerplate/wiki/How-to-publish-a-plugin-in-jQuery-Plugin-Registry
)!

## Structure

The basic structure of the project is given in the following way:

<pre>
.
|-- build/
|   |-- jquery.boilerplate.js
|   |-- jquery.boilerplate.min.js
|-- src/
|   |-- jquery.boilerplate.coffee
|   |-- jquery.boilerplate.js
|-- .editorconfig
|-- .gitignore
|-- .jshintrc
|-- .travis.yml
|-- boilerplate.jquery.json
|-- Gruntfile.js
`-- package.json

</pre>

#### [build/](https://github.com/jquery-boilerplate/boilerplate/tree/master/build)

This is where the generated files are stored once Grunt runs.

#### [src/](https://github.com/jquery-boilerplate/boilerplate/tree/master/src)

Contains the files responsible for your plugin, you can choose between JavaScript or CoffeeScript.

#### [.editorconfig](https://github.com/jquery-boilerplate/boilerplate/tree/master/.editorconfig)

This file is for unifying the coding style for different editors and IDEs.

> Check [editorconfig.org](http://editorconfig.org) if you haven't heard about this project yet.

#### [.gitignore](https://github.com/jquery-boilerplate/boilerplate/tree/master/.gitignore)

List of files that we don't want Git to track.

> Check this [Git Ignoring Files Guide](https://help.github.com/articles/ignoring-files) for more details.

#### [.jshintrc](https://github.com/jquery-boilerplate/boilerplate/tree/master/.jshintrc)

List of rules used by JSHint to detect errors and potential problems in JavaScript.

> Check [jshint.com](http://jshint.com/about/) if you haven't heard about this project yet.

#### [.travis.yml](https://github.com/jquery-boilerplate/boilerplate/tree/master/.travis.yml)

Definitions for continous integration using Travis.

> Check [travis-ci.org](http://about.travis-ci.org/) if you haven't heard about this project yet.

#### [.boilerplate.jquery.json](https://github.com/jquery-boilerplate/boilerplate/tree/master/.boilerplate.jquery.json)

Package manifest file used to publish plugins in jQuery Plugin Registry.

> Check this [Package Manifest Guide](http://plugins.jquery.com/docs/package-manifest/) for more details.

#### [Gruntfile.js](https://github.com/jquery-boilerplate/boilerplate/tree/master/Gruntfile.js)

Contains all automated tasks using Grunt.

> Check [gruntjs.com](http://gruntjs.com) if you haven't heard about this project yet.

#### [package.json](https://github.com/jquery-boilerplate/boilerplate/tree/master/package.json)

Specify all dependencies loaded via Node.JS.

> Check [NPM](https://npmjs.org/doc/json.html) for more details.

## Contributing

Before sending a pull request remember to follow [jQuery Core Style Guide](http://contribute.jquery.org/style-guide/js/).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Make your changes on the `src` folder, never on the `build` folder.
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request :D

#### Have you created a plugin from our boilerplate?

[Let us know!](https://github.com/jquery-boilerplate/boilerplate/wiki/Sites) It’s interesting to see what features others have come up with.


## History

* v3.3.0 May 1, 2013
	* Added Travis continous integration
	* Added Grunt automated tasks
	* Follow jQuery core style guide
* v3.2.0 January 17, 2013
	* Added wiki about the new jQuery Plugins Registry
	* Added package manifest for jQuery Plugins Registry

> **TODO:** Check commit history and add the rest.

## License

[MIT License](http://zenorocha.mit-license.org/)
