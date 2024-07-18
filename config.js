module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    js: {
      transformGroup: "js",
      buildPath: "styles/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
      ],
    },
    json: {
      buildPath: "styles/",
      files: [
        {
          destination: "tokens.json",
          format: "json/nested",
        },
      ],
    },
    scss: {
      transformGroup: "scss",
      buildPath: "styles/",
      files: [
        {
          destination: "scss/_variables.scss",
          format: "scss/variables",
        },
      ],
    },
    // android: {
    //   transformGroup: "android",
    //   buildPath: "build/android/",
    //   files: [
    //     {
    //       destination: "font_dimens.xml",
    //       format: "android/fontDimens",
    //     },
    //   ],
    // },
  },
};
