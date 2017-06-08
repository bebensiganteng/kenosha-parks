# Kenosha Parks

This project is split into two parts:

* `client/` - A Vue.js app solely responsible for sending push notifications.
* `server/` - An Express app that exposes an API that wraps around [Google Calendar](https://developers.google.com/apis-explorer/#search/calendar/calendar/v3/)'s API by utilizing [Google APIs Node.js Client](https://github.com/google/google-api-nodejs-client).

The server uses Firebase to send push notifications via the [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup). As a result this project requires a Firebase service account which can be retrieved [here](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk).

# API

Refer to the API doc.


## Development Setup

Firebase is used to send push notifications and the server exposes an API for the Vue client to `POST` a notification to. In order to use 
Ensure you have at minimum:

* Node.js >= 7.x

``` bash
# Install dependencies
npm install

# If you have Yarn
yarn
```

The dev server uses webpack middleware for hot reloading of the client source.

### Environment Variables

Create a copy of `.env.example` named `.env`. Populate the values with the  Firebase service account values.

`PRIVATE_KEY` must be wrapped in quotes:

```
PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

All other values can remain `KEY=value` format.

#### Launch Dev Server

Once you have the environment variables set, simply launch the dev server:

```bash
# npm
npm run dev

# Yarn
yarn dev
```

## Production

Before deploying, be sure to run the `build` script to bundle the client source:

```bash
# npm
npm run build

# Yarn
yarn build
```

This is done locally as we don't want to install dev dependencies on the server; waste of space/time.

### Heroku/Dokku

Ensure you have set the environment variables via `config:set`.

#### Important

The `PRIVATE_KEY` value _needs_ to contain literal double quotes in the value. Refer to [this](https://stackoverflow.com/questions/44360792/unable-to-set-rsa-private-key-as-config-var/44396402#44396402) Stack Overflow answer for more information.

#### Deployment

Simply push to `heroku/dokku` and if all is well, the app _should_ start up.
