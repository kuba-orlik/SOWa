var React = require("react");
var RouteHandler = require("react-router").RouteHandler;
var ResourceList = require("../resource_view/resource_list.jsx");

var ZgloszenieLista = React.createClass({
	render: function(){
		return (
			<div>
				<ResourceList 
					resource_url="/api/v1/form_entry" 
					title="Lista zgłoszeń" 
					columns={
						[	
							{
								display_name: "Podmiot",
								getter: function(row){
									return row.body.podmiot.body.nazwa || row.body.podmiot.body.imie + " " + row.body.podmiot.body.nazwisko;
								}
							},
							{
								display_name: "Stoisko",
								attribute: "body.stoisko.body.nazwa",
							},
							"stan"
						]
					}
					no_entries_message="Lista zgłoszeń jest pusta."
					single_view_url="#/zgloszenia/"
				/>
			</div>
		)
	}
});

module.exports = ZgloszenieLista;