Reproduction for payload issue [#3840](https://github.com/payloadcms/payload/issues/3840).

### Steps to reproduce

Install the dependencies.

```
yarn install
```

Types are already generated in `./src/collections/payload-types.ts`.

Open `./collections/Users.ts` with VSCode or WebStorm and verify that the `Users` collection is typed as `any`.

<img alt="hovering over CollectionConfig shows it is not using the generated types" src="./images/collection_config.png" width="700">

This can be seen in the `validate` function as well, where the intellisense for the `value` type is also `any`.

<img alt="the validate function has all its generic types set to any" src="./images/validate.png" width="700">