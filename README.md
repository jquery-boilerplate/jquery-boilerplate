# jQuery Boilerplate

## A boilerplate for jump-starting jQuery plugins development.
So, you've tried your hand at writing jQuery plugins and you're comfortable putting together something that probably works. Awesome! Thing is, you think there might be better ways you could be writing them - you've seen them done a number of different ways in the wild, but aren't really sure what the differences between these patterns are or how to get started with them.

This project won't seek to provide a perfect solution to every possible pattern, but will attempt to cover a simple template for beginners and above. By using a basic defaults object, simple constructor for assigning the element to work with and extending options with defaults and a lightweight wrapper around the constructor to avoid issues with multiple instantiations.

## Have you created a plugin from our boilerplate?
Let us know [here](https://github.com/zenorocha/jquery-boilerplate/wiki/Sites)! It’s interesting to see what features others have come up with.

## Rake

### Install ruby (if it is not installed yet)

Ruby comes preinstalled on Mac OS X and most Linux installations. Windows doesn't come with Ruby, but it's easy to get it with the One-Click Installer: see http://rubyforge.org/project/rubyinstaller/.

If you're on a Unix/Linux system and you don't have Ruby installed (or you want to upgrade), your distribution's package system may make a Ruby package available. On debian GNU/LINUX, it's available as the package ruby-[version]: for instance, ruby-1.8 or ruby-1.9. Red Hat Linux calls it ruby; so does they macports Mac OS X.

### Install rubygems (if it is not installed yet)

First download the Rubygems library from http://rubyforge.org/projects/rubygems/. Unpack the tarball or ZIP file, change into rubygems-[version] directory, and run this command as the superuser:

```
ruby setup.rb
```

The RubyGems library in the Windows One-Click Installer, so you don't have to worry about this step on Windows.

### Install bundler

```
gem install bundler
```

### Install all dependencies

```
bundle install
```

### See all available rake tasks

```
bundle exec rake -T
```

### Run default rake task

```
bundle exec rake
```

### Run `taskname` rake task 

```
bundle exec rake taskname
```
