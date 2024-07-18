const StyleDictionary = require("style-dictionary");

StyleDictionary.registerTransform({
  name: "size/px",
  type: "value",
  matcher: function (prop) {
    return prop.attributes.category === "size";
  },
  transformer: function (prop) {
    return parseFloat(prop.original.value) + "px";
  },
});

module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    js: {
      transforms: ["attribute/cti", "name/cti/constant"],
      buildPath: "styles/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
      ],
    },
    json: {
      transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"],
      buildPath: "styles/",
      files: [
        {
          destination: "tokens.json",
          format: "json/nested",
        },
      ],
    },
  },
};
