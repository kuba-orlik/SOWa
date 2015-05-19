var React = require("react");

var FormFooter = React.createClass({
	render: function(){
		var formStatus = this.props.formStatus;
		var message;
		console.log(this.props.formStatus.status_name);
		switch(this.props.formStatus.status_name){
			case "authorization":
				message = "Musisz się zalogować.";
			break;
			case "validation":
				message = "Sprawdź wprowadzone dane.";
			break;
			case "success":
				message = "OK!";
			break;
		}
		var message_class = "status-message " + formStatus.status_name;
		if(formStatus.is_error){
			message_class += " error";
		}
		var message_element = <span className={message_class}>{message}</span>;
		return (
			<div className="footer">
				{message_element}
				<input type="submit" />
			</div>
		)
	}
});

module.exports = FormFooter;