const sass = require("node-sass");

module.exports = function (grunt) {
  // Configuration
  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },

      build: {
        files: [
          {
            src: "src/sass/main.scss",
            dest: "css/styles.css",
          },
        ],
      },
    },

    watch: {
      files: "src/sass/*.scss",
      tasks: ["sass"],
    },
  });

  // Load  plugin
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");

  //   register
  grunt.registerTask("grunt-sass", ["sass"]);
  grunt.registerTask("grunt-contrib-watch", ["watch"]);
};
