'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const Router = require('react-router').Router
const Route = require('react-router').Route
const IndexRoute = require('react-router').IndexRoute
const History = require('react-router').browserHistory

const Nav = require('./Components/Nav').default
const Footer = require('./Components/Footer').default
const Home = require('./Pages/Home').default
const About = require('./Pages/About').default
const Contact = require('./Pages/Contact').default

const App = React.createClass({
  render: function () {
    return (
      <div>
        <header id='header'>
          <Nav />
        </header>
        <main>
          {this.props.children}
        </main>
        <footer id='footer'>
          <Footer />
        </footer>
      </div>
    )
  }
})

ReactDOM.render((
  <Router history={History}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='contact' component={Contact} />
    </Route>
  </Router>
), document.getElementById('Webview'))
