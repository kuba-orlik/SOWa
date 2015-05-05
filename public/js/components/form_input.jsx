var React = require("react");

var FormRow = React.createClass({
	render: function(){
		return (
			<input type="text" name={this.props.field_description.name} onFocus={this.props.onFocus} onBlur={this.props.onBlur}/>
		)
	}
});

module.exports = FormRow;