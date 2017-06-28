# Kenosha Parks

An Express application that exposes an API that wraps around [Google Calendar API](https://developers.google.com/google-apps/calendar/).

# API

Refer to the API doc.

## Google APIs

This project using the following APIs from Google:

* Google Drive API
* Google Calendar API

These APIs require authentication and you can do this by place the Firebase Admin service account credentials in the `.env`. The Express app will read these credntials, authorize Firebase Admin and the [Google Node.js Client Library](https://github.com/google/google-api-nodejs-client).

You must also enable the above Google APIs through the [developer console](https://console.developers.google.com/apis/dashboard).


## Development Setup

Ensure you have at minimum:

* Node.js >= 7.6

``` bash
# Install dependencies
npm install

# If you have Yarn
yarn
```

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

All requests not relating to `/api` will be redirected to City of Kenosha's website.

## Production

### Heroku/Dokku

Ensure you have set the environment variables via `config:set`.

#### Important

The `PRIVATE_KEY` value _needs_ to contain literal double quotes in the value. Refer to [this](https://stackoverflow.com/questions/44360792/unable-to-set-rsa-private-key-as-config-var/44396402#44396402) Stack Overflow answer for more information.

#### Deployment

Simply push to `heroku/dokku` and if all is well, the app _should_ start up.
