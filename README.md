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

Create a tokens directory and define your design tokens in JSON files. For example, tokens/color.json:

```json
{
  "colors": {
    "$type": "color",
    "black": {
      "$value": "#000000"
    },
    "white": {
      "$value": "#ffffff"
    }
  }
}
```

## Configure Style Dictionary

Create a config.js file at the root of your project:

```javascript
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
  },
};
```

Run the Style Dictionary build command to generate the tokens.js and tokens.json files:

```bash
    npx style-dictionary build
```

Your output will be a styles folder with js and json files and a sass variables folder.

## Pull token styles in tailwind.config.ts

```javascript
import * as tokens from "./styles/tokens.json";
```
Once this is brought in you will then add your json output to match up to whichever tailwind theme layout you will want to ouput.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
