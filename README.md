Web Workflow (lighter new & improved!)
======================================

Overview:
---------

  Takes care of processing Sass, combining scripts and loading frameworks like <kbd>Bootstrap</kbd>, <kbd>JQuery</kbd>
  and <kbd>Angular</kbd> with       
  <kbd>Grunt.js</kbd> using <kbd>npm</kbd> and <kbd>bower</kbd>. <kbd>Sass</kbd>, <kbd>Compass</kbd> and <kbd>Susy</kbd> using bundle(ruby).

  
   
## Links to resources:
  
##### :pill:  <kbd>[sass documentation](http://sass-lang.com/)</kbd>
##### :pill:  <kbd>[angular documentation](https://angularjs.org/)</kbd>
##### :pill:  <kbd>[bootstrap documentation](http://getbootstrap.com/)</kbd>
##### :pill:  <kbd>[jQuery library](https://jquery.com/)</kbd>
##### :pill:  <kbd>[grunt documentation](http://http://gruntjs.com/)</kbd>
##### :pill:  <kbd>[npm documentation](https://www.npmjs.com/)</kbd>
##### :pill:  <kbd>[bower documentation](https://bower.io/)</kbd>
##### :pill:  <kbd>[ruby documentation](https://www.ruby-lang.org/en/)</kbd>
##### :pill:  <kbd>[bundler.io documentation](http://bundler.io/)</kbd>

<br />

> __Plugins Included__:     
> __grunt-contrib-concat__, __grunt-contrib-connect__, __grunt-contrib-uglify__, __grunt-open__,          
> __grunt-contrib-watch__, __grunt-contrib-compass__, __grunt-watch__, __grunt-connect__ with __livereload__
> __matchdep__, __grunt-contrib-compass__, __grunt-cache-breaker__, __grunt-contrib-clean__


![workflow-folder screenshot](/workflow-folder.png?raw=true "workflow-folder")

<br />
## :one: Public/builds folder

1. `public/['js'][sass]/, index.html`  => files to be process
2. `public/builds/` => files processed
3.  node_modules,bower_components (normally .ignore)

<br />
## :two: Sass ( using bundler)

__ii.1__ create a `Gemfile` with:

                 source 'https://rubygems.org'                           
                 gem 'sass'
                 gem 'compass'
                 gem 'susy'


__ii.2__ create __config.rb__    

```
            require 'susy'

            css_dir = '/public/builds/css'
            sass_dir = '/public/sass'
            javascript_dir = '/public/js'
            output_style = :expanded

```

__ii.3__ create __Gemfile__

```
             source 'https://rubygems.org'
             gem 'sass'
             gem 'compass'
             gem 'susy'

```
    

__ii.4__ type __$ gem install bundler__ 
                __bundle install__
                
                

__ii.5__ type  __npm install__ & __bower install__

<br />

## :three: Grunt

1. run each command individually.              
    *  Ex. `grunt watch` or `grunt uglify`         
2. run them all with default task.             
    *  Ex. `grunt`
    *  view: `http://localhost:9001`

 
<br />
<hr />
## :four: Installation:  
1. Download or clone this repository to a directory:
      * Mac or Windows: `https://github.com/stefan22/workflow-folder.git`
     
2. Install dependencies


