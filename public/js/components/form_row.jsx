var React = require("react");

var FormLabel = require("./form_label.jsx");
var FormInput = require("./form_input.jsx");

var FormRow = React.createClass({
	setActive: function(){
		this.setState({
			is_active: true
		})
	},
	setInactive: function(){
		this.setState({
			is_active: false
		})
	},
	getInitialState: function(){
		return {
			is_active: false
		}
	},
	render: function(){
		return (
			<div className={"form-row " + (this.state.is_active?"active":"inactive")}>
				<FormLabel field_description={this.props.field_description}/>
				<FormInput field_description={this.props.field_description} onFocus={this.setActive} onBlur={this.setInactive}/>
			</div>
		)
	}
});

module.exports = FormRow;