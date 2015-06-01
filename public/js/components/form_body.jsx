var React = require("react");

var FormRow = require("./form_row.jsx");

var FormBody = React.createClass({
	render: function(){
		var field_descriptions = this.props.fields;
		var rows = [];
		console.log("formbody received status:", this.props.status);
		for(var i in field_descriptions){
			rows.push(
				<FormRow status={this.props.status} field_description={field_descriptions[i]} prefix={this.props.prefix}/>
			)			
		}
		return (
			<div>
				{rows}
			</div>
		);
	}
});

module.exports = FormBody;