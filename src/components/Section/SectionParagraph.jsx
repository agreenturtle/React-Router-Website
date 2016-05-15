var React = require('react');

var SectionParagraph = React.createClass({
  render: function(){
    return(
      <div>
        <p> {this.props.text} </p>
      </div>
    );
  }
});

module.exports = SectionParagraph;