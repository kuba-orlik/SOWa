var React = require("react");

var FormRow = React.createClass({
	render: function(){
		var field_name = this.props.field_description.name;
		return (
			<input id = {field_name} type="text" name={field_name} onFocus={this.props.onFocus} onBlur={this.props.onBlur}/>
		)
	}
});

module.exports = FormRow;