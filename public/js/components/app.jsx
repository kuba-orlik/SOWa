var React = require("react");
var RouteHandler = require("react-router").RouteHandler;

var App = React.createClass({
	render: function(){
		return (
			<div>
				<h1>
					<a href="#/">SOWa</a>
				</h1>
				<RouteHandler/>
			</div>
		)
	}
});

module.exports = App;