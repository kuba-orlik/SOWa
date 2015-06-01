var React = require("react");

var FormLabel = require("./form_label.jsx");
var FormInput = require("./form_input.jsx");
var FormInputReference = require("./form_input_reference.jsx");

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
		var field_description = this.props.field_description;
		var status = this.props.status || {};
		var field_name = this.props.field_description.name;
		var invalid_fields = status.data && status.data.invalid_fields || {};

		var input;
		var wide;
		if(field_description.type=="reference"){
			wide = true;
			input = <FormInputReference field_description={this.props.field_description} status={this.props.status} prefix={this.props.prefix}/>
		}else{
			input = <FormInput field_description={this.props.field_description} onFocus={this.setActive} onBlur={this.setInactive} prefix={this.props.prefix}/>
		}
		return (
			<div className={"form-row" + (this.state.is_active?" active":" inactive") + (invalid_fields[field_name]? " error" : "") + (wide? " wide" : "")}>
				<FormLabel field_description={this.props.field_description}/>
				{input}
			</div>
		)			
	}
});

module.exports = FormRow;