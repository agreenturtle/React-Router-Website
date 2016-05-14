var React = require('react');
var validator = require('email-validator');

var EmailField = React.createClass({
  getInitialState: function(){
    return({value:"", valid:true});
  },
  onChange: function(e){
    if(validator.validate(e.target.value)){
      this.setState({value: e.target.value, valid:true});
    }
    else{
      this.setState({value: e.target.value, valid:false});
    }
  },
  clear: function(){
    this.setState({value:"", valid:true});
  },
  render: function(){
    var formClass = this.state.valid ? "form-group" : "form-group has-error";
    return (
      <div className={formClass}>
        <input className="form-control" placeholder="Email" value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
});

module.exports = EmailField;