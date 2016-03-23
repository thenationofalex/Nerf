'use strict'

const React = require('react')

const HomeContent = React.createClass({
  render: function () {
    return (
      <div>
        <h1>N.E.R.F (Node/Express/React/Fun)</h1>
        <p>
          <img src='https://img.shields.io/badge/Version-0.0.0-brightgreen.svg?style=flat-square' alt='Version 0.0.0' />
          <img src='https://img.shields.io/badge/Author-Alex%20Best-blue.svg?style=flat-square' alt='Author Alex Best' />
        </p>
        <h3>
          Description
        </h3>
        <p>
          N.E.R.F is an example of how to build a website running Express and React using a componentized application structure.
        </p>
        <h3>Built Using</h3>
        <ul>
          <li><a href='https://nodejs.org/en/'>NodeJS 4.4.0 LTS</a></li>
          <li><a href='http://expressjs.com'>ExpressJS Framework</a></li>
          <li><a href='http://jade-lang.com/'>Jade Templates</a></li>
          <li><a href='https://facebook.github.io/react/'>ReactJS</a></li>
          <li><a href='https://github.com/reactjs/react-router'>React Router</a></li>
          <li><a href='http://browserify.org/'>Browserify</a></li>
        </ul>
        <h3>Browser Support</h3>
        <p>Evergreen browsers.</p>
        <h3>Structure</h3>
        <p>A breakdown on the application structure is as follows.</p>
        <ul>
          <li><strong>nerf.js</strong> Starts the App, manages routes etc.</li>
          <li>
            <strong>app</strong> Top level containing all the application logic.
            <ul>
              <li>
                <strong>Server</strong>
                <ul>
                  <li><strong>Routes</strong> Application Routes and logic</li>
                </ul>
              </li>
              <li>
                <strong>Webviews</strong>
                <ul>
                  <li><strong>index.js</strong> React Router for Website</li>
                  <li><strong>Components</strong> Shared react components</li>
                  <li><strong>Pages</strong> Pages for the website</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>public</strong> Front end assets</li>
          <li><strong>views</strong>
            <ul>
              <li><strong>webviews</strong> Jade templates for web views</li>
            </ul>
          </li>
        </ul>
        <h3>Development</h3>
        <p>
        Gulp has been setup with the following tasks: <br />
        <code>gulp server</code> Starts the App<br />
        <code>gulp watch</code> Watches <code>./app/Webviews/index.js</code> and rebuilds on change.
        </p>
        <h3>Setup and Deployment</h3>
        <p>
          Install all Dependencies via NPM &nbsp;<code>npm install</code><br />
          Run server with &nbsp;<code>node nerf.js</code>
        </p>
      </div>
    )
  }
})

module.exports.default = React.createClass({
  render: function () {
    return (
      <div>
        <HomeContent />
      </div>
    )
  }
})
