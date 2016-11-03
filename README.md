Web Workflow (new & improved!)
=============================

Overview:
---------

  Takes care of processing Sass, combining scripts and loading frameworks like <kbd>Bootstrap</kbd>, <kbd>JQuery</kbd>
  and <kbd>Angular</kbd> with <kbd>Grunt.js</kbd> using <kbd>npm</kbd> and <kbd>bower</kbd>.

  
   
## Links to resources:
  
#####  <kbd>[sass documentation](http://sass-lang.com/)</kbd>
#####  <kbd>[angular documentation](https://angularjs.org/)</kbd>
#####  <kbd>[bootstrap documentation](http://getbootstrap.com/)</kbd>
#####  <kbd>[jQuery library](https://jquery.com/)</kbd>
#####  <kbd>[grunt documentation](http://http://gruntjs.com/)</kbd>

> __Plugins Included__:     
> __grunt-bower-concat__, __grunt-contrib-concat__, __grunt-contrib-connect__, __grunt-contrib-uglify__,             
> __grunt-contrib-watch__, __grunt-sass__, __grunt-watch__, __grunt-connect__ with __livereload__


![workflow-folder screenshot](/workflow-folder.png?raw=true "workflow-folder")

### builds folder

1. `builds/src`  => files to be process
2. `builds/dest` => files processed

### Sass ( using bundler)

1. create a `Gemfile` with:

                 source 'https://rubygems.org'                           
                 gem 'sass'                     


2. type __bundle install__    

### grunt

1. run each command individually.              
    *  Ex. `grunt watch` or `grunt uglify`         
2. run them all with default task.             
    *  Ex. `grunt`       

 
<br />
<hr />
### Installation:  
1. Download or clone this repository to a directory:
      * Mac or Windows: `https://github.com/stefan22/workflow-folder.git`
     
2. Install dependencies


