# The Futino Monorepo

This is Futino's Monorepo.

<a href="https://www.producthunt.com/posts/futino?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-futino" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=421147&theme=dark" alt="Futino - Website&#0032;Design&#0044;&#0032;Development&#0044;&#0032;and&#0032;Hosting&#0046; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

### SonarCloud

[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=Futino_futino&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=Futino_futino) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Futino_futino&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=Futino_futino) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=Futino_futino&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=Futino_futino) [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=Futino_futino&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=Futino_futino) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Futino_futino&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Futino_futino) [![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=Futino_futino&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=Futino_futino) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Futino_futino&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Futino_futino) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=Futino_futino&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=Futino_futino) [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=Futino_futino&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=Futino_futino) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Futino_futino&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=Futino_futino) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Futino_futino&metric=bugs)](https://sonarcloud.io/summary/new_code?id=Futino_futino)

### Apps and Packages

- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is made with [TypeScript](https://www.typescriptlang.org/).

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```sh
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```sh
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```sh
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```sh
pnpm dlx turbo link
```

## Useful Links

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
