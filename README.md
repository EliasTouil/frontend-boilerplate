<p align='center'>
  <img src='https://i.imgur.com/HjdAaVq.jpeg' alt='Vite Shadcn-ui boilerplate'/>
</p>

## Motivation

The js ecosystem is wild and it can be hard to decide where to look and what to pick. This opiniated boilerplate is meant to move fast and safely when building a small scale project, api-base app, or prototype.

## Tooling

- ⚛️ [React 18](https://beta.reactjs.org/)
- 🟦 [Typescript](https://www.typescriptlang.org/) - readability at scale
- ⚡️ [Vite](https://vitejs.dev/) - fast building and bundling
- 🖌️ [Tailwind with JIT](https://tailwindcss.com/) - common css classes we can agree on
- 🎨 [Shadcn-ui](https://ui.shadcn.com/) - A11y Components based on radix-ui
- 😃 [Hero icons](https://heroicons.com/)
- ⚗️ [Vitest](https://vitest.dev/) - Testing framework powered by vite with ...
- 🧪 [Jest](https://jestjs.io/) and [Testing Library (react)](https://testing-library.com/docs/react-testing-library/intro/)
- 👨🏽‍🔬 [Cypress](https://www.cypress.io/) to test user behavior and see it
- 📐 [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - style is enforced
- 🚄 [Husky](https://typicode.github.io/husky/) Pre-commit hooks that validate style, tests, and [Commit lint](https://github.com/conventional-changelog/commitlint).
- ☁️ Deploy on Netlify, zero-config

## Usage

### Setup

```bash
# installs packages
# initializes husky
pnpm install
```

### Development

Just run and visit http://localhost:3000/

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.
