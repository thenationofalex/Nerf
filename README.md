# NERF (Node/Express/React/Fun)

![Version 0.0.0](https://img.shields.io/badge/Version-0.0.0-brightgreen.svg?style=flat-square)
![Author Alex Best](https://img.shields.io/badge/Author-Alex%20Best-blue.svg?style=flat-square)

### Description

N.E.R.F is an example of how to build a website running Express and React using a componentized application structure.

### Built Using

- [NodeJS 4.4.0 LTS](https://nodejs.org/en/)
- [ExpressJS Framework](http://expressjs.com)
- [Jade Templates](http://jade-lang.com/)
- [ReactJS](https://facebook.github.io/react/)
- [React Router](https://github.com/reactjs/react-router)
- [Browserify](http://browserify.org/)

### Browser Support

Evergreen browsers.

### Structure

A breakdown on the application structure is as follows.

- **nerf.js** Starts the App, manages routes etc.
- **app** Top level containing all the application logic.
    - **Server**
        - **Routes** Application Routes and logic
    - **Webviews**
      - **index.js** React Router for Website
      - **Components** Shared react components
      - **Pages** Pages for the website
- **public** Front end assets
- **views**
    - **webviews** Jade templates for web views

### Development

Gulp has been setup with the following tasks:

`gulp server` Starts the App
`gulp watch` Watches `./app/Webviews/index.js` and rebuilds on change.

### Setup and Deployment

Install all Dependencies via NPM `npm install`
Run server with `node nerf.js`
