module.exports = function (grunt) {

    grunt.initConfig({
        jablConfig: grunt.file.readJSON('jabl.json'),
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
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
            options: {
                separator: ''
            },
            angular: {
                src: [
                    'src/js/src/<%= jablConfig.appTitle.camelized %>/<%= jablConfig.appTitle.camelized %>.prefix',
                    'src/js/src/<%= jablConfig.appTitle.camelized %>/<%= jablConfig.appTitle.camelized %>.js',
                    'src/js/src/<%= jablConfig.appTitle.camelized %>/controllers/**/*.js',
                    'src/js/src/<%= jablConfig.appTitle.camelized %>/directives/**/*.js',
                    'src/js/src/<%= jablConfig.appTitle.camelized %>/filters/**/*.js',
                    'src/js/src/<%= jablConfig.appTitle.camelized %>/services/**/*.js',
                    'src/js/src/<%= jablConfig.appTitle.camelized %>/<%= jablConfig.appTitle.camelized %>.suffix'
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
                    'public/js/<%= jablConfig.appTitle.camelized %>.min.js': ['<%= concat.angular.dest %>']
                }
            }
        },
        jshint: {
            beforeConcat: {
                src: ['gruntfile.js', 'src/js/src/<%= jablConfig.appTitle.camelized %>/**/*.js']
            },
            afterConcat: {
                src: [
                    '<%= concat.angular.dest %>'
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
            jid: {
                files: {
                    "public/css/<%= jablConfig.appTitle.camelized %>.css": "src/less/<%= jablConfig.appTitle.camelized %>.less"
                }
            }
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
                'Gruntfile.js',
                'src/**/*'
            ],
            tasks: ['default']
        },
        copy: {
          main: {
            files: [
              // includes files within path
              {expand: true, nonull: true, flatten: true, src: ['src/img/*'], dest: 'public/img/', filter: 'isFile'},

              // includes files within path and its sub-directories
              // {expand: true, src: ['path/**'], dest: 'dest/'},

              // makes all src relative to cwd
              // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

              // flattens results to a single level
              // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'}
            ]
          },
          deps: {
            files: [
              {expand: true, nonull: true, flatten: true, src: ['public/bower/jquery/dist/jquery.js'], dest: 'public/bower/jquery', filter: 'isFile'},
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
            dest: 'path/to/dest/',
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
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-sitemap');

    grunt.registerTask('build', ['jade',
                                 'copy',
                                 'coffee',
                                 'less',
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
