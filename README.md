# Description

Reproduction repository for payload issue # "Missing webpack cache behaviour in monorepos". This repository assumes that you have setup [yarn berry](https://yarnpkg.com/getting-started/install) locally, and have provided an populated `.env` file.

### Steps to reproduce

Run it once and wait for the `webpack compiled successfully` message.

```
yarn install
yarn dev
```

Verify that the `node_modules` folder contains a `.cache/webpack/default-development` folder with files like `0.pack` and `index.pack`. Then run it again.

```
yarn dev
```

Now you should get an error message.

```
ERROR in main
Module not found: Error: Can't resolve '.../payload-webpack-cache-bug/apps/payload/node_modules/payload/dist/admin' in '.../payload-webpack-cache-bug/apps/payload'
```