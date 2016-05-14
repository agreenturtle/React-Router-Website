var React = require('react');

var Resume = React.createClass({
  render: function(){
    return (
      <div>
        <h1> Resume </h1>
         <a href="/pdf/JamesChen_Resume.pdf" target="_blank">Download</a>
      </div>
    );
  }
});

module.exports = Resume;
