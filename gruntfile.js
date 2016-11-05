module.exports = function(grunt) {
  //SL Proj Config.
  grunt.initConfig({
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
        } //concat2

       

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
            livereload: true
          }
        }

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
          livereload: true
        },
        scripts: {
          files: [
            'public/js/**/*.js'
          ],
          tasks: ['uglify']  
        
        },//scripts

        html: {
          files: ['*.html', 'README.md'],
          tasks: ['concat']
        
        },//html

        sass: {
          files: ['public/sass/*.scss'],
          tasks: ['compass:dev']

        } //sass

      } //watch

  }) //initConfig

  // :grunt uglify
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // :grunt concat
  grunt.loadNpmTasks('grunt-contrib-concat');

  // :grunt compass
  grunt.loadNpmTasks('grunt-contrib-compass');

  // :grunt watch
  grunt.loadNpmTasks('grunt-contrib-watch');

  // :grunt connect
  grunt.loadNpmTasks('grunt-contrib-connect');

  // :grunt open
  grunt.loadNpmTasks('grunt-open');

//register concat dist1 & dist2 
  grunt.registerTask('dist', ['concat:dist1', 'concat:dist2']);

// :grunt
// default tasks
grunt.registerTask('default', ['open', 'compass:dev',  'dist', 'uglify', 'connect', 'watch']);



}; //wrapper function