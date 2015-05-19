var React = require("react");
var $ = require("jquery");

var FormRow = require("./form_row.jsx");
var FormFooter = require("./form_footer.jsx");

var Form = React.createClass({
	getSignatureLink: function(){
		var ret = this.props.resource_url;
		if(this.props.resource_url.substr(-1)!=="/"){
			ret= ret + "/";
		}
		ret = ret + "signature";
		return ret;
	},
	componentDidMount: function () {
	    $.get(this.getSignatureLink(), function(signature){
	    	this.setState({signature:signature});
	    }.bind(this))
	},
	getInitialState: function () {
	    return {
	        signature: [],
	        status: {
	        	is_error: null,
	        	status_name: null, //tutaj ma wylądować "error.type" jeżeli od serwera przyjdzie błąd
	        	invalid_fields: null,
	        }
	    };
	},
	getData: function(){
		var data = $(this.refs.form.getDOMNode()).serializeArray().reduce(function(obj, item) {
		    obj[item.name] = item.value;
		    return obj;
		}, {});
		return data;		
	},
	handleServerErrorResponse: function(response){
		this.setState({
			status:{
				is_erorr: response.is_error,
				status_name: response.type,
				invalid_fields: response.data.invalid_fields || {} ,
			}
		})
	},
	submit: function(e){
 		e.preventDefault();
 		console.log(this.getData());
		$.ajax({
			method: "POST",
			url: this.props.resource_url,
			data: this.getData()
		}).fail(function(response){
			this.handleServerErrorResponse(response.responseJSON);
		}.bind(this))
		.success(function(data){
			this.setState({
				status:{
					is_error: false,
					status_name: "success",
					invalid_fields: null,
				}
			})
			if(this.props.onSuccess){
				this.props.onSuccess(data);
			}
		}.bind(this));
	}, 
	render: function() {
		var row_nodes = this.state.signature.map(function(field_description){
			return <FormRow formStatus={this.state.status} field_description={field_description}/>
		}.bind(this))
		return (
			<div>
				<h2>{this.props.title}</h2>
				<form action={this.props.resource_url} method="POST" ref="form" onSubmit={this.submit} className="sealious-form">
					{row_nodes}
					<FormFooter formStatus={this.state.status}/>
				</form>
			</div>
			);
	}
});


module.exports = Form;