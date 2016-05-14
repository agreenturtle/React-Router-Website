var React = require('react');

var NameField = React.createClass({
  getInitialState: function(){
    return ({value: "", valid:true});
  },
  onChange: function(e){
    if(e.target.value.trim() != "")
      this.setState({value: e.target.value, valid:true});
    else
      this.setState({value: e.target.value, valid:false});
  },
  clear: function(){
    this.setState({value:"", valid:true});
  },
  render: function(){
    var formClass = this.state.valid ? "form-group" : "form-group has-error";
    return(
      <div className={formClass}>
        <input className="form-control" placeholder="Full Name" value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
});

module.exports = NameField;