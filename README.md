# footystats monorepo

This is the monorepo for the aflfootystats applications.

## What's inside?

This repo includes the following packages/apps:

### Apps and Packages

- `docs`: A docs site for the monorepo
- `web`: The aflfootystats.com web app
- `ui`: Shared component libraries
  - `design-system-react`: React port of the design system
- `libs`: Shared libraries
  - `database` The database schema for connecting to the postgres DB
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```shell
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```shell
cd my-turborepo
pnpm dev
```

### Remote Caching

This repo uses Turborepo remote caching for faster builds, if you want to enable this, you need to login to `turbo` locally.

```shell
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```shell
npx turbo link
```
