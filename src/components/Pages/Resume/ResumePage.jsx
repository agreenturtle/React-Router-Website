var React = require('react');
var Section = require('../../Section/Section.jsx');
var LeadCapture = require('../../LeadCapture/LeadCapture.jsx');

var Resume = React.createClass({
  render: function(){
    var bottomRightStyle = {
      'margin-top': '10px'
    };
    return (
      <div>
        <div className="left-panel">
          <h3> Experience </h3>
          <ul>
            <li><Section title="Position, Company 1" text={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]} /></li>
            <li><Section title="Position, Company 2" text={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]} /></li>
            <li><Section title="Position, Company 3" text={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]} /></li>
          </ul>
          
          <h3> Education </h3>
          <ul>
            <li><Section title="Major Degree, College, Year" text={["Ego vero isti, inquam, permitto. Duo Reges: constructio interrete. Huius, Lyco, oratione locuples, rebus ipsis ielunior."]} /></li>
          </ul>
        </div>
        <div className="right-panel">
          <p className="highlight">Quid turpius quam sapientis vitam ex insipientium sermone pendere? Philosophi autem in suis lectulis plerumque moriuntur. Nunc omni virtuti vitium contrario nomine opponitur. Beatus sibi videtur esse moriens. Habent enim et bene longam et satis litigiosam disputationem. </p>
          <a className="link" href="/pdf/JamesChen_Resume.pdf" target="_blank"> Download Resume --> </a>
        </div>
        <div className="right-panel" style={bottomRightStyle}>
          <Section title="Contact Me" text={[""]} />
          <LeadCapture size="col-sm-12" />
        </div>

      </div>
    );
  }
});

module.exports = Resume;
