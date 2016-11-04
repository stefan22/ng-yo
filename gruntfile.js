module.exports = function(grunt) {

  // SL Proj Config.
  grunt.initConfig({
    //for moving all my js files into one single minimized js file.
    uglify: {
      //minimizes javascript
      options: {
        banner: '-----------------------top of document -----------------\n\n',
        footer: '\n\n----------------------end of file ------------------------\n'
      },
      builds: {
        //src and dest inside of public folder
        src: 'public/builds/src/js/*.js',
        dest: 'public/builds/dest/js/script.min.js'
      }
    }, //uglify ends
    // copying index.html and bower_components to dest folder
    concat: {
      options: {
        //banner: '\n--------------------top of document -----------------\n\n',
        //separator:'\n\n-----------------end of a file-----------------------\n\n',
        //footer: '\n\n--------------------end of document ------------------------\n'
      },
      dist1: {
        //sends index.html to dest folder
        src: ['index.html'],
        dest: 'public/builds/dest/index.html'
      }, //concat1

      dist2: {
        // sends readme.md to dest folder
        src: ['README.md'],
        dest: 'public/builds/dest/assets/README.md'
      } //concat2

     

    }, // concat ends
    // copies bower_components to dest
    copy: {
      main: {
        files: [{
        // includes files within path and its sub-directories
          expand: true, 
          src: ['bower_components/**'], 
          dest: 'public/builds/dest/'
        }]
      }

    },//copy entire bower_components to dest

    // process sass from style.scss to dest css
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          src: 'public/builds/src/sass/styles.scss',
          dest:'public/builds/dest/css/styles.css'
        }]
      }

    }, //sass

     // helps makes it more automatic
    connect: {
      //connect
      server: {
        options: {
          hostname: 'localhost',
          port: 9000,
          base: '',
          livereload: true
        }
      }

    }, //connect & livereload

    open: {
      all: {
        //gets port from connect configuration
        path: 'http://localhost:9000'
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
          'index.html',
          'README.md',
          'public/builds/src/**/*.html',
          'public/builds/dest/**/*.html',
          'public/builds/src/js/*.js',
          'public/builds/src/sass/**/*.scss',
          'public/builds/dest/css/*.css',
          'public/builds/src/js/*.js'
          ],
        tasks: ['copy', 'concat', 'sass']  
      }

    } //watch


  }); //initConfig

  // :grunt uglify
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // :grunt concat
  grunt.loadNpmTasks('grunt-contrib-concat');

  // :grunt sass
  grunt.loadNpmTasks('grunt-sass');

  // :grunt watch
  grunt.loadNpmTasks('grunt-contrib-watch');

  // :grunt connect
  grunt.loadNpmTasks('grunt-contrib-connect');

  // :grunt open
  grunt.loadNpmTasks('grunt-open');

  // :grunt copy
  grunt.loadNpmTasks('grunt-contrib-copy');

  //register concat dist1 & dist2 
  grunt.registerTask('dist', ['concat:dist1', 'concat:dist2']);


  
  // :grunt
  //default tasks
  grunt.registerTask('default', ['open', 'copy', 'uglify','dist', 'sass', 'connect', 'watch']);

}; //wrapper function
