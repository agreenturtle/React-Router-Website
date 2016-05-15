var React = require('react');
var Section = require('../../Section/section.jsx');
var Index = React.createClass({
  render: function(){
    return (
      <div className="container">
        <Section title="Welcome to My Web Site" text={["Per primis antiopam et. At erat labore eleifend eum. An mel meliore recusabo. Veri nominavi principes has ne, in nulla honestatis mei. Tation periculis voluptatum no sea, ut elit hendrerit assentior eos. Id commune detracto mea."]} />
      </div>
    );
  }
});

module.exports = Index;