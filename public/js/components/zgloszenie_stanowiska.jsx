var React = require("react");
var RouteHandler = require("react-router").RouteHandler;
var Form = require("./form.jsx");

var Zgloszenie = React.createClass({
	render: function(){
		return (
			<div>
				<Form resource_url="/api/v1/form_entry" title="Wniosek o stanowisko"/>
			</div>
		)
	}
});

module.exports = Zgloszenie;