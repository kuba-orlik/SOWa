var React = require("react");
var $ = require("jquery");

var ResourceListRow = require("./resource_list_row.jsx");
var ResourceListHeader = require("./resource_list_header.jsx");

var ResourceList = React.createClass({
	getInitialState: function(){
		return {
			resources: [],
			schema: {},
		}
	},
	componentDidMount: function(){
		$.get(this.props.resource_url)
		.success(function(resources){
			this.setState({resources:resources})
		}.bind(this))
	},
	render: function() {
		var resources = this.state.resources.map(function(resource){
			return <ResourceListRow resource={resource} columns={this.props.columns} single_view_url={this.props.single_view_url}/>
		}.bind(this));

		if(resources.length==0){
			return(
				<div className="resource-list">
					<h2>{this.props.title? this.props.title : "Lista zasobów"}</h2>
					{this.props.no_entries_message}
				</div>
			);
		}

		return (		
			<div className="resource-list">
				<h2>{this.props.title? this.props.title : "Lista zasobów"}</h2>
				<table>
					<tbody>
						<ResourceListHeader columns={this.props.columns}/>
						{resources}
					</tbody>
				</table>
			</div>
		);
	}
});


module.exports = ResourceList;