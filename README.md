## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Install Dependencies

```bash
npm install style-dictionary tailwindcss postcss autoprefixer --save-dev
```

## Create Design Tokens with Style Dictionary

Create a tokens directory and define your design tokens in JSON files. For example, tokens/color/base.json:

```json
{
  "color": {
    "base": {
      "red": { "value": "#ff0000" },
      "green": { "value": "#00ff00" },
      "blue": { "value": "#0000ff" }
    }
  }
}
```

## Configure Style Dictionary

Create a style-dictionary.config.js file at the root of your project:

```javascript
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
```

Run the Style Dictionary build command to generate the tokens.js and tokens.json files:

```bash
    npx style-dictionary build
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
