# Dependency chains in TypeScript modules

## Projects
- `animals`
- `zoo`. Depends on `animals`.
- `app`. Depends on `animals` and `zoo`.

Therefore `app` depends on `animals` via two different routes:
- `app` -> `animals`
- `app` -> `zoo` -> `animals`

## Key lessons
- when compiling library project, it may be necessary to output `.js` and `.d.ts` to a separate directory, otherwise the .`ts` files will be picked up and compiled when using `npm link` from a downstream project.
- the multiple-routes-to-the-same-module issue can cause TypeScript compiler errors if classes with private members from the module are used (in that case, duck typing fails). [TypeScript issue](https://github.com/Microsoft/TypeScript/issues/11436). This may be fixed in TS 2.5. Some workarounds:
    - use `paths` setting in `tsconfig.json`. As described [here](https://github.com/Microsoft/TypeScript/issues/11916#issuecomment-257130001)
    - if versions of module are the same use `npm dedupe` to leave a single version of the module at root of `node_modules`.