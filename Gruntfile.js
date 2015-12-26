module.exports = function (grunt) {
    grunt.initConfig({
        cssmin: {
            sitecss: {
                files: {
                    'www/assets/css/styles.min.css': [
                        'bower_components/Materialize/dist/css/materialize.css',
                        'bower_components/animate.css/animate.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                compress: true
            },
            applib: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/Materialize/dist/js/materialize.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js'
                ],
                dest: 'www/assets/js/scripts.min.js'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/Materialize/font/',
                        src: '**',
                        dest: 'www/assets/font/',
                        flatten: false
                    }
                ]
            }
        }
    });

    grunt.registerTask("default", ["bower:install"]);
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
};