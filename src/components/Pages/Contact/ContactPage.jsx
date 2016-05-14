var React = require('react');
var LeadCapture = require('../../LeadCapture/LeadCapture.jsx');

var Contact = React.createClass({
  render: function(){
    return (
      <div>
        <LeadCapture size="col-sm-6 col-sm-offset-3"/>
      </div>
    );
  }
});

module.exports = Contact;
