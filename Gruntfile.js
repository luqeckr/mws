/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
            {
              name: 'normal',
              width: 200,
              suffix: "",
              quality: 50
            },
            {
              name: 'small',
              width: 100,
              suffix: "",
              quality: 50
            },
          ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'photo',
          dest: 'public/images'
        }]
      }
    },

    responsive_images2: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
            {
              name: 'large',
              width: 1056,
              suffix: "",
              quality: 50
            },
            {
              name: 'normal',
              width: 750,
              suffix: "",
              quality: 50
            },
            {
              name: 'small',
              width: 300,
              suffix: "",
              quality: 30
            },
          ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src',
          dest: 'public/images'
        }]
      }
    },

    // exec: {
    //   crop: 'convert images_src/horses.jpg -quality 30 -crop 750x500+410+110 images/horses-normal_1x.jpg',
    //   crop_small: 'convert images_src/horses.jpg -quality 30 -crop 500x400+550+230 images/horses-small.jpg',
    // },

    // /* Clear out the images directory if it exists */
    // clean: {
    //   dev: {
    //     src: ['images'],
    //   },
    // },

    // /* Generate the images directory if it is missing */
    // mkdir: {
    //   dev: {
    //     options: {
    //       create: ['images']
    //     },
    //   },
    // },

    // /* Copy the "fixed" images that don't go through processing into the images/directory */
    // copy: {
    //   dev: {
    //     files: [{
    //       expand: true,
    //       cwd: 'imges_src/fixed',
    //       src: './*.{gif,jpg,png}',
    //       dest: 'images'
    //     }]
    //   },
    // },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  // grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-mkdir');
  // grunt.loadNpmTasks('grunt-exec');
  grunt.registerTask('default', ['responsive_images']);

};
