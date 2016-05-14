var React = require('react');

var Section = React.createClass({
  render: function(){
    return (
      <div>
        <h4 className="section-title"> {this.props.title} </h4>
        <p> {this.props.text} </p>
      </div>
    );
  }
});

module.exports = Section