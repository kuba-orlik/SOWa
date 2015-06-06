var React = require("react");

var ResourceListRow = React.createClass({
	render: function() {
		var resource = this.props.resource;
		var cells = this.props.columns.map(function(column){
			if(typeof column == "string"){
				return (
					<td>
						<a href={this.props.single_view_url + resource.id}>{resource.body[column]}</a>
					</td>
				)
			}else if(typeof column=="object"){
				if(column.getter){
					try{
						return (
							<td>
								<a href={this.props.single_view_url + resource.id}>{column.getter(resource)}</a>
							</td>
						)					
					}catch(error){
						//console.error("Error in getter for " + column.name + ":", error);
					}					
				}else{
					try{
						var attribute_path = column.attribute.split(".");
						var value_to_display = resource;
						while(attribute_path.length>0){
							var attribute_name = attribute_path.splice(0,1)[0];
							value_to_display = value_to_display[attribute_name];
						}	
						return (
							<td>
								<a href={this.props.single_view_url + resource.id}>{value_to_display}</a>
							</td>
						)						
					}catch(e){
						//console.error("Attribute ", column.attribute, "not defined");
					}
				}
			}
		}.bind(this));
		return (		
			<tr>
				{cells}
			</tr>
		);
	}
});


module.exports = ResourceListRow;