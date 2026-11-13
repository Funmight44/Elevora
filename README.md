# Elevora

A responsive career growth studio SPA built with React, Vite, React Router, Context API, Lucide React, and CSS.

## Run locally

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy the `dist` folder to Netlify or Vercel. Netlify route fallback is configured in `public/_redirects`. For Vercel, create `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`.

The contact form validates fields in the browser and displays an on-page success state. Connect the submit handler to a form service or API to deliver messages. Contact information and external photography are illustrative placeholders.
