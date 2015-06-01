var React = require("react");

var ResourceViewTemplate = require("./resource_view_template.jsx");

var ResourceView = React.createClass({
	render: function(){
		console.log("render resourceview", this.props);
		return (
			<div>
			<h2>Jestę ResourceView</h2>
			<h3>Templatka: </h3>
				<this.props.template kupa="dupa" data={this.props.data}/>
			</div>
		)
	}
})

module.exports = ResourceView;