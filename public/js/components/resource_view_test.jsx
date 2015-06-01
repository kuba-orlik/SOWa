var React = require("react")

var ResourceView = require("./resource_view.jsx");
var ResourceViewTemplate = require("./resource_view_template.jsx");

var TestowaTemplatka = new ResourceViewTemplate(
	<div>
		wewnątrz templatki
	</div>
);

var ResourceViewTest = React.createClass({
	getInitialState: function(){
		return {
			name: "Andżelika",
		}
	},
	render: function(){
		return (
			<ResourceView data={this.state} template={TestowaTemplatka}/>
		)
	}
});

module.exports = ResourceViewTest;