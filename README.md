# JavaScript - ReactJS & Express SSR setup

Supports:

- CSR - see [React SPA](https://www.bloomreach.com/en/blog/2018/07/what-is-a-single-page-application.html).
- SSR - see [React SSR](https://medium.com/@swazza85/ssr-with-react-9cb197cfe380).
- CSS & CSS MODULES. (autoprefixer)
- ESLint & Prettier.
- Static assets in `/public `. (will NOT go through webpack)
- Allowed asset types for imports: png, svg, jpg, jpeg, gif. (will go through webpack)

## Available scripts

`yarn start` - Runs development mode.

`yarn build` - Builds project for production.

## SSR page data

Fetches data from serverless function hosted on [napkin.io](https://www.napkin.io/).

> #### Napkin
> Backend in the Browser.
>
> Build production-ready API endpoints.
> No infra. No boilerplate. Just code.

## Caveats

This setup is fine for smaller projects as it uses webpack [watch mode](https://webpack.js.org/configuration/watch/). In development, webpack will recompile on changes and write to `build` directory. This might be slow for larger scale apps.

Possible issues:

- Production optimization might not have been done right (i did my best).
- Development might get slower as project grows (due to watch mode).

TODO:

- Optimize server build (I am not sure if it's required).
- [HMR](https://webpack.js.org/concepts/hot-module-replacement/) and [React Refresh](https://github.com/facebook/react/issues/16604) for client and server side code.

Check out [React Hot Loader](https://github.com/gaearon/react-hot-loader) for details.
