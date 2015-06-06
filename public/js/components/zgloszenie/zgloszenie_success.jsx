var React = require("react");
var RouteHandler = require("react-router").RouteHandler;
var Form = require("../form/form.jsx");

var ZgloszenieSuccess = React.createClass({
	render: function(){
		return (
			<div>
				<h2>Gratulacje!</h2>
				Twoje zgłoszenie zostało wysłane poprawnie.
			</div>
		)
	}
});

module.exports = ZgloszenieSuccess;