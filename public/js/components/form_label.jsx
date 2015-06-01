var React = require("react");

var FormRow = React.createClass({
	render: function(){
		var field_name = this.props.field_description.name;
		return(
			<label htmlFor={field_name}>{this.props.field_description.human_readable_name || field_name}</label>
		)
	}
});

module.exports = FormRow;