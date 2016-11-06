module.exports = function(grunt) {
  //SL Proj Config.
  grunt.initConfig({
    

      clean: {

          all_css: ['*.sass-cache']
          
          
        },

      uglify: {
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
          src: ['index.html'],
          dest: 'public/builds/index.html'
        }, //concat1

        dist2: {
          // sends readme.md to dest folder
          src: ['README.md'],
          dest: 'public/builds/README.md'
        }, //concat2

         dist3: {
          // sends scss to dest folder
          src: ['public/sass/styles.scss'],
          dest: 'public/builds/css/styles.css'
        } //concat3

       

      }, // concat ends

      // compass for sass
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
          files: 'public/sass/styles.scss',
          tasks: ['compass:dev'],
          options: {
            livereload: true,
            cwd: {
              files: 'public/builds/css/*.css',
              spawn: false
            }
          }

        }, //sass

        somecss: {
          files: 'public/builds/css/styles.css',
          tasks: ['concat:dist3'],
          options: {
            livereload: true,
            cwd: {
              files: 'public/sass/*.scss',
              spawn: false
            } 
          } //options css
          
         
      } //somecss

        

    } //watch

  }); //initConfig

  // :grunt clean
  grunt.loadNpmTasks('grunt-contrib-clean');

  // :grunt uglify
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // :grunt concat
  grunt.loadNpmTasks('grunt-contrib-concat');

  // :grunt compass
  grunt.loadNpmTasks('grunt-contrib-compass');

  // :grunt watch
  grunt.loadNpmTasks('grunt-contrib-watch');

  // :grunt open
  //grunt.loadNpmTasks('connect-livereload');

  // :grunt connect
  grunt.loadNpmTasks('grunt-contrib-connect');

  // :grunt open
  grunt.loadNpmTasks('grunt-open');

  

//register concat dist1 & dist2 
  grunt.registerTask('dist', ['concat:dist1', 'concat:dist2', 'concat:dist3']);

// :grunt
// default tasks
grunt.registerTask('default', ['clean',  'open', 'dist',  'uglify', 'compass:dev', 'connect',  'watch']);



}; //wrapper function