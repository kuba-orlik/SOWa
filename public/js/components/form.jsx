var React = require("react");
var $ = require("jquery");

var FormRow = require("./form_row.jsx");

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
	        signature: []
	    };
	},
	getData: function(){
		var data = $(this.refs.form.getDOMNode()).serializeArray().reduce(function(obj, item) {
		    obj[item.name] = item.value;
		    return obj;
		}, {});
		return data;		
	},
	submit: function(e){
 		e.preventDefault();
 		console.log(this.getData());
		$.ajax({
			method: "POST",
			url: this.props.resource_url,
			data: this.getData()
		})
	},
	render: function() {
		var row_nodes = this.state.signature.map(function(field_description){
			return <FormRow field_description={field_description}/>
		})
		return (
			<div className="commentBox">
				<h2>{this.props.title}</h2>
				<form action={this.props.resource_url} method="POST" ref="form" /*onSubmit={this.submit}*/>
					{row_nodes}
					<input type="submit" />
				</form>
			</div>
			);
	}
});


module.exports = Form;