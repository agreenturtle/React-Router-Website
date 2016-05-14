var React = require('react');
var NameField = require('./NameField.jsx');
var EmailField = require('./EmailField.jsx');
var MessageField = require('./MessageField.jsx');

var LeadCapture = React.createClass({
  onSubmit: function(e){
    if(this.refs.emailField.state.valid && this.refs.nameField.state.valid){
      var myMessage = {
        name: this.refs.nameField.state.value,
        email: this.refs.emailField.state.value,
        message: this.refs.messageField.state.value
      };
      console.log("Submited: ", myMessage);
      this.refs.nameField.clear();
      this.refs.emailField.clear();
      this.refs.messageField.clear();
    }
    else{
      alert("Please complete all fields before submitting");
    }
  },
  render: function(){
    return(
      <div className={this.props.size}>
        <div className="panel panel-default panel-transparent">
          <div className="panel-body">
            <NameField ref="nameField" />
            <EmailField ref="emailField" />
            <MessageField ref="messageField" />
            <button className="btn btn-primary" onClick={this.onSubmit}> Submit </button> 
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;