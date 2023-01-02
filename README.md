# yuchi-twitter

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=plastic)
![Next.js](https://img.shields.io/badge/-Next.js-000000?logo=Next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=TypeScript&logoColor=white)

[![Netlify Status](https://api.netlify.com/api/v1/badges/ceb39b98-5158-4e91-92c7-50ec87c9f434/deploy-status)](https://app.netlify.com/sites/yuchi-twitter/deploys)

a website modeled after Twitter, created by React, Next.js, TailwindCSS, TypeScript and deploy on Netlify.  
use [Next-Auth](https://next-auth.js.org/) for Twitter OAuth  
just for practice, if you want to use real twitter, go to [Twitter](https://twitter.com/) :)

## Quick Start

add `.evn.local` in root directory, and write down

```env
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_BASE_URL=
NEXTAUTH_URL=
NEXTAUTH_SECRET=

SANITY_API_TOKEN=

TWITTER_CLIENT_ID=
TWITTER_CLIENT_SECRET=
```

you can run this project by

```bash
yarn install

yarn dev
```

then open browser and go to http://127.0.0.1:3000/

## Create SANITY client

if you want to create a SANITY client, you must first confirm that you are on the main branch and there is an `yuchi-twitter-sanity` folder in the root directory.

```bash
cd yuchi-twitter-sanity

yarn install

yarn dev
```

## Deploy

```bash
yarn build

yarn start
```
