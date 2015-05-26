var React = require("react");
var RouteHandler = require("react-router").RouteHandler;
var Form = require("./form.jsx");

var Zgloszenie = React.createClass({
	go_to_success_page: function(data){
		document.location.hash = "#/zgloszenia/nowe/sukces!";
	},
	render: function(){
		return (
			<div>
				<Form 
					resource_url="/api/v1/form_entry" 
					title="Wniosek o stanowisko" 
					onSuccess={this.go_to_success_page}
				/>
			</div>
		)
	}
});

module.exports = Zgloszenie;