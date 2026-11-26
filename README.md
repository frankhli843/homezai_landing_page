# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Mobile TRY NOW regression

After `npm ci` and `npm run build`, run `npm run test:browser`. This starts the built preview at port 4321 and checks Chromium's computed accessible names, 44px targets, hit areas, keyboard focus and all five step transitions at 390px. It also checks the roster-first entry choices and absence of credential inputs. Third-party requests are blocked.

The test uses `/usr/bin/google-chrome` when installed, or Playwright's installed Chromium. Set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` for another local Chrome binary. To review a separately running build, set `HOMEZAI_REVIEW_URL` to its origin. Run with one worker inside the host's normal resource limits.
