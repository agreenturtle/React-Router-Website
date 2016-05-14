var React = require('react');

var MessageField = React.createClass({
  getInitialState: function(){
    return({value:""});
  },
  onChange: function(e){
    this.setState({value:e.target.value});
  },
  clear: function(){
    this.setState({value:""});
  },
  render: function(){
    textareaStyle = {
      width: "100%"
    };
    return(
      <div className="form-group">
        <textarea value={this.state.value} style={textareaStyle} id="message-field" placeholder="Send me a message!" onChange={this.onChange} />
      </div>
    )
  }
});

module.exports = MessageField;