var React = require("react");
var RouteHandler = require("react-router").RouteHandler;
var Form = require("./form.jsx");

var Home = React.createClass({
	render: function(){
		return (
			<div>
				<h2>home</h2>
				<a href="#/zgloszenie">Złoż wniosek o stanowisko</a>
			</div>
		)
	}
});

module.exports = Home;