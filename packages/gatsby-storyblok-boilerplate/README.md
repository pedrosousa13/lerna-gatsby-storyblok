# Introduction

This repo is a Gatsby [Storyblok](https://www.storyblok.com) starter template used in following tutorial:
[www.storyblok.com/tp/gatsby-multilanguage-website-tutorial](https://www.storyblok.com/tp/gatsby-multilanguage-website-tutorial)

## Requirements

To use this project you have to have a Storyblok account. If you don't have one yet you can register at [www.storyblok.com](https://www.storyblok.com).

## Getting started

1. Get the source code and install dependencies.
~~~
git clone git@github.com:marckraw/gatsby-storyblok-boilerplate.git
cd gatsby-storyblok-boilerplate
npm install
~~~

2. Exchange the `accessToken` in `gatsby-config.js` with the preview token of a new empty Storyblok space which you can find on the space settings page.

3. Create an .env file in the root with your [storyblok oauth token](https://www.storyblok.com/docs/management-api/authentication) and the space ID you would like to use, e.g.:
~~~
STORYBLOK_OAUTH_TOKEN=xdfkuwy3woyrewoufiuwyfew9-12345-abdfequhyrrwekukhfe
STORYBLOK_SPACE_ID=12345
GATSBY_STORYBLOK_ACCESS_TOKEN=jnlsfd3lkdnsf23r234
~~~

4. Remove all the default components from your Storyblok space.

5. Create components schema in storyblok space
~~~
npx sb-mig --sync-all 
~~~
or use selective syncing only component you like:
~~~
npx sb-mig --sync card video-card column row fullbleed nav-item settings text-block section page
~~~
 
6. Start the project with `gatsby develop` and set the preview domain in Storyblok to `http://localhost:8000/editor?path=`

## Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

### `gatsby develop`
Run in the project locally for development.

### `gatsby build`
Run a production build into ./public. The result is ready to be put on any static hosting you prefer.

### `gatsby deploy`
Run a production build into ./public and publish the site to GitHub pages.

---

### Accessing settings
To access settings in any component use the context consumer:
```JSX
import SettingsContext from "../../helpers/settingsContext";
...

<SettingsContext.Consumer>
    {({ settings }) =>
        // Wrap your content with consumer
        <div>
            ...
            {settings.whateverSetting}
            ...
        </div>
    }
</SettingsContext.Consumer>
```
