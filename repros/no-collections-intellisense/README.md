Reproduction for payload issue []().

### Steps to reproduce

Install the dependencies. Types are already generated.

```
yarn install
```

Open `./collections/Users.ts` with VSCode or WebStorm and verify that the `Users` collection is typed as `any`. This can be seen in the `validate` function as well, where the intellisense is available for the `value` type is also `any`.