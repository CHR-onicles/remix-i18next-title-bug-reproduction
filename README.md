# Remix-i18next title bug reproduction

This does NOT use the `i18next-fs-backend` package. Translations are loaded server side.


## Issue

Locally, the title is not translated. Same applies when deployed to Vercel. It just displays the translation key, even though the rest of the app is translated normally.

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```
