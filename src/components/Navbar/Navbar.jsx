var React = require('react');
var NavbarItem = require('./NavbarItem.jsx');
var Link = require('react-router').Link

var Navbar = React.createClass({
  render: function(){
      return (
        <header>
          <Link className="header-title" to="/"> <img src="/images/logo.png" /> </Link>
          <NavbarItem path="/about" name="About" />
          <NavbarItem path="/resume" name="Resume" />
          <NavbarItem path="/contact" name="Contact" />
        </header>
      );
  }
});

module.exports = Navbar;
