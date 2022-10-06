# Wesolowski.dev ![language](https://img.shields.io/badge/language-TypeScript-blue.svg)

## :books: Table of Contents

- [Info](#info)
- [Installation](#package-installation)
- [Usage](#rocket-how-to-use)
- [Sponsor](#sponsor)

## :briefcase: Info
Personal blog about me.

Next.js Blog using [DatoCMS](https://www.datocms.com/) as the data source. It fully supports [Preview Mode](https://www.datocms.com/docs/next-js/setting-up-next-js-preview-mode) with [DatoCMS real-time updates](https://www.datocms.com/docs/next-js/real-time-updates).

## :package: Installation

### Local setup

Once the setup of the project and repo is done, clone the repo locally.

#### Set up environment variables

In your DatoCMS' project, go to the **Settings** menu at the top and click **API tokens**.

Then click **Read-only API token** and copy the token.

Next, copy the `.env.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.example .env
```

Then set each variable on `.env`:

- `NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN` should be the API token you just copied.
- `NEXT_EXAMPLE_CMS_DATOCMS_PREVIEW_SECRET` can be any random string (but avoid spaces), like `MY_SECRET` - this is used for the Preview Mode](https://www.datocms.com/docs/next-js/setting-up-next-js-preview-mode).

Your `.env` file should look like this:

```bash
NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN=...
NEXT_EXAMPLE_CMS_DATOCMS_PREVIEW_SECRET=...
```


### Install project with package manager

```sh
yarn install
```

## :rocket: How to use

#### Run your project locally

- Work on **develop** mode

```bash
yarn dev
```

- Preview **production** on local

```bash
yarn start
```

#### Try preview mode

On DatoCMS, go to one of the posts you've created and:

- **Update the title**. For example, you can add `[Draft]` in front of the title.
- Click **Save**, but **DO NOT** click **Publish**. By doing this, the post will be in the draft state.

(If it doesn't become draft, you need to go to the model settings for `Post`, go to **Additional Settings**, and turn on **Enable draft/published system**.)

Now, if you go to the post page on localhost, you won't see the updated title. However, if you use the **Preview Mode**, you'll be able to see the change ([Documentation](https://www.datocms.com/docs/next-js/setting-up-next-js-preview-mode)).

To enable the Preview Mode, go to this URL:

```
http://localhost:3000/api/preview?secret=<secret>
```

- `<secret>` should be the string you entered for `NEXT_EXAMPLE_CMS_DATOCMS_PREVIEW_SECRET`.
- `<slug>` should be the post's `slug` attribute (you can check on DatoCMS).

You should now be able to see the updated title. To exit the preview mode, you can click **Click here to exit preview mode** at the top.

## Sponsor

<a href="https://wesolowski.dev"><img src="./readme-img/wesolowski.dev_logo.svg" alt="Link to blog wesolowski.dev" width="200" height="200"></a>

I am a person who loves art and enjoys every pretty sight. At the same time I love the order and automation of processes. If you are interested in such a connection, I invite you to my personal blog [wesolowski.dev](wesolowski.dev)


Your blog should be up and running on [http://localhost:3000](http://localhost:3000)
