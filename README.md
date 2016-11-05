Web Workflow (lighter new & improved!)
======================================

Overview:
---------

  Takes care of processing Sass, combining scripts and loading frameworks like <kbd>Bootstrap</kbd>, <kbd>JQuery</kbd>
  and <kbd>Angular</kbd> with <kbd>Grunt.js</kbd> using <kbd>npm</kbd> and <kbd>bower</kbd>. Sass,Compass and Susy using bundle(ruby).

  
   
## Links to resources:
  
#####  <kbd>[sass documentation](http://sass-lang.com/)</kbd>
#####  <kbd>[angular documentation](https://angularjs.org/)</kbd>
#####  <kbd>[bootstrap documentation](http://getbootstrap.com/)</kbd>
#####  <kbd>[jQuery library](https://jquery.com/)</kbd>
#####  <kbd>[grunt documentation](http://http://gruntjs.com/)</kbd>

> __Plugins Included__:     
> __grunt-contrib-concat__, __grunt-contrib-connect__, __grunt-contrib-uglify__, __grunt-open__,          
> __grunt-contrib-watch__, __grunt-contrib-compass__, __grunt-watch__, __grunt-connect__ with __livereload__
> __matchdep__, __grunt-contrib-compass__


![workflow-folder screenshot](/workflow-folder.png?raw=true "workflow-folder")

### builds folder

1. `public/['js'][sass]/, public/*.*`  => files to be process
2. `public/builds/` => files processed
3.  index.html and readme.md (copying to builds with concat plugin just for fun/don't need it.         
4.  node_modules,bower_components (normally .ignore)

```
accidentally included node_modules and bower_components = helped me get rid of node_modules

git filter-branch -f --index-filter "git rm -rf --cached --ignore-unmatch FOLDERNAME" -- --all

replace FOLDERNAME with the file or folder you wish to remove from the given git repository.

Once this is done run the following commands to clean up the local repository

rm -rf .git/refs/original/
git reflog expire --expire=now --all
git gc --prune=now
git gc --aggressive --prune=now

Now push all the changes to the remote repository

git push --all --force
````
  


### Sass ( using bundler)

1. create a `Gemfile` with:

                 source 'https://rubygems.org'                           
                 gem 'sass'
                 gem 'compass'
                 gem 'susy'


2. create __config.rb__    

```
              require 'susy'

              css_dir = '/public/builds/css'
              sass_dir = '/public/sass'
              javascript_dir = '/public/js'
              output_style = :expanded

```
    


3. type __bundle install__    

### grunt

1. run each command individually.              
    *  Ex. `grunt watch` or `grunt uglify`         
2. run them all with default task.             
    *  Ex. `grunt`
    *  view: `http://localhost:9000`

 
<br />
<hr />
### Installation:  
1. Download or clone this repository to a directory:
      * Mac or Windows: `https://github.com/stefan22/workflow-folder.git`
     
2. Install dependencies


