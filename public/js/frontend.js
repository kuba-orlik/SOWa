var React = require("react");
var Router = require("react-router");
var Sowa = require("./components/all.jsx");  

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route handler={Sowa.App} path="/">
  	<DefaultRoute name="home" handler={Sowa.Home}/>
  	<Route name="zgloszenie" handler={Sowa.Zgloszenie}/>
  	//dodać new, view
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});