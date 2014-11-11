module.exports = function (grunt) {

    grunt.initConfig({
        jablConfig: grunt.file.readJSON('jabl.json'),
        jade: {
            compile: {
                options: {
                    pretty: true
                },
                files: [
                    {
                        expand: true,     // Enable dynamic expansion.
                        cwd: 'src/jade/public',      // Src matches are relative to this path.
                        src: ['**/*.jade'], // Actual pattern(s) to match.
                        dest: 'public/',   // Destination path prefix.
                        ext: '.html'    // Dest filepaths will have this extension.
                    }
                ]
            }
        },
        concat: {
            deps: {
                src: [
                    'public/js/<%= jablConfig.appTitle.camelized %>-cs.js',
                    'public/js/extra.js'
                ],
                dest: 'public/js/<%= jablConfig.appTitle.camelized %>.js'
            }

        },
        uglify: {
            options: {
                banner: '/*! <%= jablConfig.appTitle.original %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            jid: {
                files: {
                    'public/js/<%= jablConfig.appTitle.camelized %>.min.js': ['public/js/<%= jablConfig.appTitle.camelized %>.js']
                }
            }
        },
        jshint: {
            beforeConcat: {
                src: ['gruntfile.js', 'src/js/src/<%= jablConfig.appTitle.camelized %>/**/*.js']
            },
            afterConcat: {
                src: [
                    'public/js/<%= jablConfig.appTitle.camelized %>.js'
                ]
            },
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true,
                    angular: false
                },
                globalstrict: false
            }
        },
        less: {
            dev: {
                options:
                {
                    cleancss: false
                },
                files: {
                    "public/css/<%= jablConfig.appTitle.camelized %>.css": "src/less/<%= jablConfig.appTitle.camelized %>.less"
                }
            },
            prod: {
                options:
                {
                    cleancss: true,
                    report: 'min',
                    optimization: 1
                },
                files: {
                    "public/css/<%= jablConfig.appTitle.camelized %>.min.css": "src/less/<%= jablConfig.appTitle.camelized %>.less"
                }
            },

        },
        connect: {
            server:{
                options: {
                    port: 9000,
                    base: 'public',
                    hostname: 'localhost',
                    keepalive: true,
                    livereload: true
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            files: [
                'gruntfile.js',
                'src/**/*'
            ],
            tasks: ['default']
        },
        modernizr: {
            dist: {
                // [REQUIRED] Path to the build you're using for development.
                "devFile" : "node_modules/grunt-modernizr/lib/modernizr-dev.js",

                // Path to save out the built file.
                "outputFile" : "public/js/modernizr-custom.js",

                // Based on default settings on http://modernizr.com/download/
                "extra" : {
                    "shiv" : true,
                    "printshiv" : false,
                    "load" : true,
                    "mq" : false,
                    "cssclasses" : true
                },

                // Based on default settings on http://modernizr.com/download/
                "extensibility" : {
                    "addtest" : false,
                    "prefixed" : false,
                    "teststyles" : false,
                    "testprops" : false,
                    "testallprops" : false,
                    "hasevents" : false,
                    "prefixes" : false,
                    "domprefixes" : false,
                    "cssclassprefix": ""
                },

                // By default, source is uglified before saving
                "uglify" : true,

                // Define any tests you want to implicitly include.
                "tests" : [],

                // By default, this task will crawl your project for references to Modernizr tests.
                // Set to false to disable.
                "parseFiles" : true,

                // When parseFiles = true, this task will crawl all *.js, *.css, *.scss and *.sass files,
                // except files that are in node_modules/.
                // You can override this by defining a "files" array below.
                // "files" : {
                    // "src": []
                // },

                // This handler will be passed an array of all the test names passed to the Modernizr API, and will run after the API call has returned
                // "handler": function (tests) {},

                // When parseFiles = true, matchCommunityTests = true will attempt to
                // match user-contributed tests.
                "matchCommunityTests" : false,

                // Have custom Modernizr tests? Add paths to their location here.
                "customTests" : []
            }
        },
        copy: {
          main: {
            files: [
              // includes files within path
              {
                expand: true,
                nonull: true,
                flatten: true,
                src: ['src/img/*',
                      'public/bower/blueimp-gallery/img/*.*',
                      'public/bower/blueimp-bootstrap-image-gallery/img/*.*'
                     ],
                dest: 'public/img/',
                filter: 'isFile'
              },
              {
                expand: true,
                nonull: true,
                flatten: true,
                src: ['src/js/*'],
                dest: 'public/js/',
                filter: 'isFile'
              },
            ]
          },
          js: {
            files: [
              {
                expand: true,
                nonull: true,
                flatten: true,
                src: ['public/bower/bootstrap/dist/js/bootstrap.js',
                      'public/bower/jquery-scrolldeck/js/jquery-1.8.2.min.js',
                      'public/bower/jquery-scrolldeck/js/jquery.easing.1.3.js',
                      'public/bower/jquery-scrolldeck/js/jquery.scrollTo-1.4.3.1.min.js',
                      'public/bower/jquery-scrolldeck/js/jquery.scrollorama.js',
                      'public/bower/jquery-scrolldeck/js/jquery.scrolldeck.js',
                      'public/bower/jquery-scrolldeck/decks/parallax/scripts/jquery.parallax-1.1.js',
                      'public/bower/blueimp-bootstrap-image-gallery/js/bootstrap-image-gallery*.js',
                      'public/bower/blueimp-gallery/js/blueimp-gallery*.js'
                      ],
                dest: 'public/js/',
                filter: 'isFile'
              },
            ]
          },
          css: {
            files: [
              {
                expand: true,
                nonull: true,
                flatten: true,
                src: ['public/bower/blueimp-gallery/css/blueimp-gallery*.css',
                      'public/bower/blueimp-bootstrap-image-gallery/css/bootstrap-image-gallery*.css'
                      ],
                dest: 'public/css/',
                filter: 'isFile'
              },
            ]
          },
          fonts: {
            files: [
              {
                expand: true,
                nonull: true,
                flatten: true,
                src: ['public/bower/bootstrap/fonts/glyphicons-halflings-regular.woff',
                      ],
                dest: 'public/fonts/',
                filter: 'isFile'
              },
            ]
          }
        },
        coffee: {
          compile: {
            options: {
              bare: true
            },
            files: {
              'public/js/guake-cs.js': ['src/coffee/guake.coffee'] // compile and concat into single file
            }
          },

          glob_to_multiple: {
            expand: true,
            flatten: true,
            cwd: 'path/to',
            src: ['*.coffee'],
            dest: 'public/js/',
            ext: '.js'
          },
        },
        sitemap: {
            dist: {
            siteRoot: 'public/',
            homepage: 'http://www.guake.org',
            pattern: '/*.html',
        },
    }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks ('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-sitemap');
    grunt.loadNpmTasks("grunt-modernizr");

    grunt.registerTask('build', ['jade',
                                 'coffee',
                                 'less',
                                 'copy',
                                 'modernizr',
                                 'sitemap',
                                 'jshint:beforeConcat',
                                 'concat',
                                 'jshint:afterConcat',
                                 'uglify']);
    grunt.registerTask('release', ['build', 'uglify']);
    grunt.registerTask('dev', ['build']);
    grunt.registerTask('default', ['dev']);
    grunt.registerTask('serve', ['connect']);
    grunt.registerTask('livereload', ['dev', 'watch']);
};
