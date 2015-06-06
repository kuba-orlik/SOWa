var React = require("react");


var ResourceViewTemplate = function(template){
	return React.createClass({
		render: function(){
			console.log("template: ", template);
			return (
				<div>
					{template}
				</div>
			)
		}
	})
}

module.exports = ResourceViewTemplate;