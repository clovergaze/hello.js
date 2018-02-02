"use strict";

module.exports = function (grunt) {
    grunt.initConfig({
        tslint: {
            options: {
                configuration: "tslint.json"
            },
            files: ["src/**/*.ts"]
        },
        ts: {
            default: {
                options: {
                    verbose: false
                },
                tsconfig: true
            }
        },
        uglify: {
            default: {
                files: {
                    "src/hello.min.js": [
                        "src/hello.js"
                    ]
                }
            }
        },
        copy: {
            default: {
                src: "src/hello.min.js",
                dest: "dist/hello.min.js"
            }
        },
        clean: {
            development: {
                src: [
                    "src/*.js*"
                ]
            },
            release: {
                src: [
                    "dist"
                ]
            },
            other: {
                src: [
                    ".tscache"
                ]
            }
        },
        watch: {
            config: {
                files: ["Gruntfile.js"],
                options: {
                    reload: true
                }
            },
            default: {
                files: [
                    "src/**/*.ts",
                    "tsconfig.json",
                    "tslint.json"
                ],
                tasks: ["build"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("build", ["tslint", "clean:development", "ts", "uglify"]);
    grunt.registerTask("release", ["clean:release", "copy"]);

    grunt.registerTask("default", ["build"]);
};
