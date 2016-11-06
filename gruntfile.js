module.exports = function(grunt) {
  //SL Proj Config.
  grunt.initConfig({
    
      cachebreaker: {
        //append a timestamp to all my js and css files in index.html
        // it keeps it real - having a ref# all-http-status 200 now!
        dev: {
          options: {
            match: [
              'bootstrap.css','reset.css','styles.css','jquery.js',
              'bootstrap.js','angular.js','angular-resource.js',
              'scripts.js'
            ],
            livereload: true,

          },
          files: {
            src: ['index.html']
          }

        }

      }, //cachebreaker

      clean: {

          all_css: ['*.sass-cache']
          
          
        },

      uglify: {
        //minimizes all scripts => to builds/js/scripts.min.js
        options: {
          banner: '-----------------------top of document -----------------\n\n',
          footer: '\n\n--------------------end of file ---------------------\n'
        },
        builds: {
          src:'public/js/*.js',
          dest:'public/builds/js/scripts.min.js'
        }

      }, // uglify

      // copying index.html and bower_components to dest folder
      concat: {
        options: {
          //banner: '\n--------------------top of document ------------\n\n',
          //separator:'\n\n-----------------end of a file---------------\n\n',
          //footer: '\n\n--------------------end of document ------------\n'
        },

        dist1: {
          //sends index.html to dest folder
          src:  'index.html',
          dest: 'public/builds/index.html'
        }, //concat1

        dist2: {
          // sends readme.md to dest folder
          src:  'README.md',
          dest: 'public/builds/README.md'
        }, //concat2

         dist3: {
          options: {
            separator: '\n\n/*--------- end of style sheet -------*/\n\n'
          },
          // must declare a destination file
          src:  ['public/sass/*.scss'],
          dest: 'public/builds/css/styles.css'
        } //concat3

       

      }, // concat ends

      // compass for sass
      // processes all files and makes copies on builds folder
      // style.scss => contains all scss builds
      compass: {
        dev: {
          options: {
            config: 'config.rb'
          }
        }

      }, //compass

      // helps makes it more automatic
      connect: {
        //connect
        server: {

            options: {
              hostname: 'localhost',
              port: 9001,
              base: '',
              livereload: true,
              debug:true,

            }, //options

            livereload: {
              options: {
                base: ''
              } //options

            } //livereload

        } //server

      }, //connect & livereload

     open: {
        all: {
          //gets port from connect configuration
          path: 'http://localhost:9001'
        }

      },//open browser


      watch: {
        // watching everywhere really
        options: {
          //run faster
          spawn: false,
          livereload: true,
          reload:true
        }, //options watch

        configFiles: {
          files: 'gruntfile.js',
          options: {
            reload: true
          }
        }, //confiFiles

        scripts: {
          files: 'public/js/*.js',
          tasks: ['uglify']  
        
        },//scripts

        html: {
          files: 'index.html',
          tasks: ['concat:dist1']
        
        },//html

        mdfiles: {
          files: '*.md',
          tasks: ['concat:dist2']

        }, //mdfiles

        sass: {
          files: ['public/sass/*.scss'],
          tasks: ['concat:dist3'],
          options: {
            livereload: true
            
          }

        }, //sass

        

    } //watch

  }); //initConfig

  // :grunt clean
  grunt.loadNpmTasks('grunt-contrib-clean');

  // :grunt cache
  grunt.loadNpmTasks('grunt-cache-breaker');

  // :grunt uglify
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // :grunt concat
  grunt.loadNpmTasks('grunt-contrib-concat');

  // :grunt compass
  grunt.loadNpmTasks('grunt-contrib-compass');

  // :grunt watch
  grunt.loadNpmTasks('grunt-contrib-watch');

  // :grunt open
  // livereload the original => deprecated
  // now is part of contrib-connect
  //grunt.loadNpmTasks('connect-livereload');

  // :grunt connect
  grunt.loadNpmTasks('grunt-contrib-connect');

  // :grunt open
  grunt.loadNpmTasks('grunt-open');

  

//register concat dist1 & dist2 
  grunt.registerTask('dist', ['concat:dist1', 'concat:dist2', 'concat:dist3']);

// :grunt
// default tasks
grunt.registerTask('default', ['cachebreaker', 'clean',  'open', 'dist',  'uglify', 'compass:dev', 'connect',  'watch']);



}; //wrapper function