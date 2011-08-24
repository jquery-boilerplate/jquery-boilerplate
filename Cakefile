fs            = require 'fs'
{print}       = require 'sys'
{spawn,exec}  = require 'child_process'

#
# handle builds using the Node.js coffee command
#
build = (output, files) ->  
  options = ['-c', '-j', output]
  
  for file in files 
    options.push file
  
  coffee = spawn 'coffee', options
  coffee.stdout.on 'data', (data) -> print data.toString()
  coffee.stderr.on 'data', (data) -> print data.toString()
  coffee.on 'exit', (status) -> callback?() if status is 0
  
#
# Minify the JavaScript file using googles closure compiler
#
minify = (output, input)->
  options = ['--js', input, '--js_output_file', output]
  compiler = spawn 'closure', options
  
  compiler.stdout.on 'data', (data) -> print data.toString()
  compiler.stderr.on 'data', (data) -> print data.toString()
  compiler.on 'exit', (status) -> callback?() if status is 0
  
  
task 'build', 'Compile all CoffeeScript source files', ->
  # TODO call build
  console.log "done building"
  
task 'minify', 'Minify the build JavaScript source file', ->
  # TODO call minify
  console.log "done minifying"