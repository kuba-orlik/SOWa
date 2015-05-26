var React = require("react");


var FormInputReference = React.createClass({
	getInitialState: function(){
		return {
			chosen_type_name: "",
		}
	},
	selectType: function(event){
		this.setState({chosen_type_name: event.target.value});
	},
	componentDidMount: function(){
		var default_type = Object.keys(this.props.field_description.params.allowed_types)[0];
		this.setState({chosen_type_name: default_type});
	},
	render: function(){
		var field_name = this.props.field_description.name;
		var reference_params = this.props.field_description.params;
		var FormBody = require("./form_body.jsx");
		var allowed_type_names = Object.keys(reference_params.allowed_types);
		var allowed_type_options = allowed_type_names.map(function(type_name){
			return (<option value={type_name}>{type_name}</option>);
		})

		var form_body;
		if(this.state.chosen_type_name==""){
			form_body = <div></div>;
		}else{
			var substatus = {};
			if(this.props.status.invalid_fields!==null){
				substatus.invalid_fields = this.props.status.invalid_fields[field_name];				
			}
			form_body = <FormBody fields={reference_params.allowed_types[this.state.chosen_type_name]}  status={substatus} prefix={this.props.prefix + field_name + "[data]"}/>;
		}

		var select = null;
		if(allowed_type_names.length>1){
			select = (<select onChange={this.selectType}>
				{allowed_type_options}
			</select>)
		}
		return (
			<div>
				<input type="hidden" name={this.props.prefix + field_name + "[type]"} value={this.state.chosen_type_name}/>
				{select}
				{form_body}
			</div>
		)
	}
});

module.exports = FormInputReference;