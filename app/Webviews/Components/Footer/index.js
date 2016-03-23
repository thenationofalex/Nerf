'use strict'

const React = require('react')

const FooterContent = React.createClass({
  render: function () {
    return (
      <a href='http://thenationofalex.com' target='_blank'>The Nation of Alex</a>
    )
  }
})

module.exports.default = React.createClass({
  render: function () {
    return (
      <div>
        <FooterContent />
      </div>
    )
  }
})
