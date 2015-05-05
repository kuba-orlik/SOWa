var React = require("react");

var FormRow = React.createClass({
	render: function(){
		return(
			<label>{this.props.field_description.human_readable_name || this.props.field_description.name}</label>
		)
	}
});

module.exports = FormRow;