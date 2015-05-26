var React = require("react");
var Router = require("react-router");
var Sowa = require("./components/all.jsx");  

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route handler={Sowa.App} path="/">
  	<DefaultRoute name="home" handler={Sowa.Home}/>
  	<Route path="/zgloszenia">
  		<DefaultRoute handler={Sowa.ListaZgłoszeń}/>
  		<Route path="/zgloszenia/nowe" handler={Sowa.NoweZgłoszenie}/>
  		<Route path="/zgloszenia/nowe/sukces!" handler={Sowa.ZgłoszenieSuccess}/>
  		<Route path="/zgloszenia/:zgloszenie_id" handler={Sowa.ZgłoszenieWidok}/>
  	</Route>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});