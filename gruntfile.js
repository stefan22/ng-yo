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
        dest: 'public/builds/dest/js/myscript.min.js'
      }
    }, //uglify ends
    // if I have some text assets - place them all into a single file
    concat: {
      options: {
        banner: '\n--------------------top of document -----------------\n\n',
        separator:'\n\n-----------------end of a file-----------------------\n\n',
        footer: '\n\n--------------------end of document ------------------------\n'
      },
      dist: {
        src: ['public/builds/src/assets/*.txt'],
        dest: 'public/builds/dest/assets/alltext.txt'
      }

    }, // concat ends

    wiredep: {
      task: {
        src: 'public/builds/dest/**/*.html'
      

      }


    }, //wiredep

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
    // whenever ready to upload files to a server
    bower_concat: {
      //adds everything from bower folder to this new folder 
      all: {
        dest: 'public/builds/dest/js/_bower.js',
        cssDest: 'public/builds/dest/css/_bower.css'

      }

    }, //bower_concat

     // helps makes it more automatic
    connect: {
      //connect
      server: {
        options: {
          hostname: '0.0.0.0',
          port: 9000,
          base: 'public/builds/dest/',
          keepalive: true
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
          'public/builds/src/**/*.html',
          'public/builds/dest/**/*.html',
          'public/builds/src/js/*.js',
          'public/builds/src/sass/**/*.scss',
          'public/builds/dest/css/*.css'
          ],
        tasks: ['concat', 'sass']  
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

  // :grunt bower-concat
  grunt.loadNpmTasks('grunt-bower-concat');

  // :grunt wiredep
  grunt.loadNpmTasks('grunt-wiredep');

  
  // :grunt
  //default tasks
  grunt.registerTask('default', ['open', 'wiredep', 'uglify','concat', 'bower_concat', 'sass', 'connect', 'watch']);

}; //wrapper function
