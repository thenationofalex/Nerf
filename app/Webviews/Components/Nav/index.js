'use strict'

const React = require('react')

const navData = [
  {'id': 1, 'title': 'Home', 'url': '/'},
  {'id': 2, 'title': 'About', 'url': '/about'},
  {'id': 3, 'title': 'Contact', 'url': '/contact'}
]

const SiteLinks = React.createClass({
  render: function () {
    var navNodes = navData.map(function (sitelink) {
      return (
      <sitelink key={sitelink.id}>
        <li>
          <a href={sitelink.url} title={sitelink.title}>
            {sitelink.title}
          </a>
        </li>
      </sitelink>
      )
    })
    return (
    <ul className='wombat'>
      {navNodes}
    </ul>
    )
  }
})

const SiteNav = React.createClass({
  render: function () {
    return (
      <div className='holder'>
        <nav>
          <SiteLinks data={navData} />
        </nav>
      </div>
    )
  }
})

module.exports.default = SiteNav
