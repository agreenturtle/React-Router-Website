var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var CreateHistory =  require('history/lib/createHashHistory');

var History = new CreateHistory({
  queryKey: false
});

var Home = require('./components/Pages/Home/HomePage.jsx');
var About = require('./components/Pages/About/AboutPage.jsx');
var Resume = require('./components/Pages/Resume/ResumePage.jsx');
var Contact = require('./components/Pages/Contact/ContactPage.jsx');

var Routes = (
  <Router history={History}>
    <Route path="/" component={Home}>
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
);

module.exports = Routes;
