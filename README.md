# :rocket: generator-addon-firebase

[![NPM version](https://img.shields.io/npm/v/generator-addon-firebase.svg)](https://www.npmjs.com/package/generator-addon-firebase)
[![Build status](https://img.shields.io/travis/ngx-rocket/addon-firebase/master.svg)](https://travis-ci.org/ngx-rocket/addon-firebase)
![Node version](https://img.shields.io/node/v/generator-addon-firebase.svg)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> Add Firebase deployment to ngX-Rocket apps

This add-on configures Firebase and adds a `deploy` script to deploy your application using Firebase hosting.

# Requirements

A valid [Firebase account](https://firebase.google.com) is needed to use this add-on.
You also have to create a Firebase project to deploy your application.

# Installation

Install [ngX-Rocket CLI](https://github.com/ngx-rocket/cli), [Firebase CLI](https://github.com/firebase/firebase-tools) and this add-on:

```sh
npm install -g @ngx-rocket/cli firebase-tools generator-addon-firebase
```

# Usage

1. Generate a new project and follow instructions:
   ```sh
   ngx new
   ```

2. Deploy your app
   ```sh
   npm run deploy
   ```

See [ngX-Rocket CLI](https://github.com/ngx-rocket/cli) for more information.

# License

[MIT](LICENSE)
