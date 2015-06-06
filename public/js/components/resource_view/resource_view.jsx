var React = require("react");
var $ = require("jquery");


var ResourceViewTemplate = require("./resource_view_template.jsx");

var ResourceView = React.createClass({
	
	getInitialState: function(){
		return {
			resource: {
				body:{}
			}
		}
	},

	componentDidMount: function(){
		$.get(this.props.resource_url)
		.success(function(response){
			this.setState({resource: response})
		}.bind(this))
	},

	render: function(){
		return (
			<div>
				<this.props.template resource={this.state.resource} resource_url={this.props.resource_url} />
			</div>
		)
	}
})

module.exports = ResourceView;