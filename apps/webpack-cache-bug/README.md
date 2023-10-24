Reproduction for payload issue [#3576: Missing webpack cache behaviour in monorepos](https://github.com/payloadcms/payload/issues/3756).

### Steps to reproduce

Start the webpack dev server for the first time and wait for the `webpack compiled successfully` message.

```
yarn install
yarn dev
```

Verify that the `node_modules` folder contains a `.cache/webpack/default-development` folder with files like `0.pack` and `index.pack`. Then start the dev server again.

```
yarn dev
```

Now you should get an error message.

```
ERROR in main
Module not found: Error: Can't resolve '.../payload-webpack-cache-bug/apps/payload/node_modules/payload/dist/admin' in '.../payload-webpack-cache-bug/apps/payload'
```