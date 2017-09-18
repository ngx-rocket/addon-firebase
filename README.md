# :rocket: generator-addon-firebase

> ngX-Rocket Firebase deploy add-on

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
