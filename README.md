# :rocket: generator-addon-firebase

> ngX-Rocket Firebase deploy add-on

This add-on was created from [ngX-Rocket add-on generator](https://github.com/ngx-rocket/generator-ngx-rocket-addon/)
version 1.1.2.

# Requirements

A valid [Firebase account](https://firebase.google.com) is needed to use this add-on.

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

2. Login to Firebase (if needed)
   ```sh
   firebase login
   ```
   
3. Deploy your app
   ```sh
   npm run deploy
   ```

See [ngX-Rocket CLI](https://github.com/ngx-rocket/cli) for more information.
