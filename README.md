**SpaceX Launch Programs**

A front-end application which would help users list and browse all launches by SpaceX
program.

**Application URL** 

The code is deployed to Heroku

https://spacex-swati.herokuapp.com/

**Prerequisites**

Install Node JS

Refer to https://nodejs.org/en/ to install nodejs

git clone my repo 

Install create-react-app

```
npx create-react-app  spacex
cd spacex
```
tested with `npm start` to see app display on the browser.

step 1) setting up client-side 
- In `src/index.js`, used ReactDOM's hydrate method instead of render to indicate to the 
  DOM renderer that we’re rehydrating the app after a server-side render.
- In `src/App.js` file, rendered the `<Home>` component
- created `src/component` directory which has `<Home>` component file `Home.js` 
  install Axios to work with APIs. Axios library is used to make HTTP Calls.
  ```npm install axios```
  
- created `css` files as per the design
  For Responsive Design and other UI elements, wrote custom media query (no framework used) 
  
  Installed React Loader 
  
  ```npm install react-page-loading```
  
step 2) setting up Server-side 
Instead of just boilerplate to implement server-side rendering, 
I followed the tutorial at: https://www.digitalocean.com/community/tutorials/react-server-side-rendering

run the following to build the client-side app, bundle and transpile the server code, and start up the server on `:3006`
`npm run dev`

With this in place, my local url http://localhost:3006/


Fixed Issues
- while setting up server-side, webpack version had a mismatch and threw errors with
  instructions. Followed the instruction and updated the webpack
- There was a loader error for `.css` files (module not recognized), installed a loader for css `css-loader`
  and added following code in `./webpack.server.js`
  
```
{
        test: /\.css$/,
        use: 'css-loader'
}

npm install --save-dev css-loader
```

install react-router-dom

```
npm install react-router-dom
```

**ESLint for Static code quality check**

ESLint is default with react.
I've tested by omitting `useEffect` dependecies which shows error message:

```
src/component/Home.js
  Line 42:4:  React Hook useEffect has missing dependencies: 'launchYear', 'successLand', and 'successLaunch'. Either include them or remove the dependency array  react-hooks/exhaustive-deps

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

```

**Performance metrics**

using `reportWebVitals` to report the performance metrics in console
`reportWebVitals(console.log);`

https://create-react-app.dev/docs/measuring-performance/

https://github.com/GoogleChrome/web-vitals/




