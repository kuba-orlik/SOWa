var React = require("react");
var $ = require("jquery");

var ResourceListHeader = React.createClass({
	render: function() {
		var column_elements = this.props.columns.map(function(column){
			if(typeof column == "string"){
				return(
					<th>{column}</th>
				)
			}else if(typeof column == "object"){
				return <th>{column.display_name}</th>
			}
		})
		return (
			<tr>
				{column_elements}
			</tr>
		)
	}
});


module.exports = ResourceListHeader;