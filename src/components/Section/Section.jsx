var React = require('react');
var SectionParagraph = require('./SectionParagraph.jsx');

var Section = React.createClass({
  render: function(){
    var createParagraph = function(text, index){
      return <SectionParagraph key={text + index} text={text} />
    }
    return (
      <div>
        <h4 className="section-title"> {this.props.title} </h4>
        {this.props.text.map(createParagraph)}
      </div>
    );
  }
});

module.exports = Section