var React = require("react");
var RouteHandler = require("react-router").RouteHandler;
var $ = require("jquery");

var ResourceView = require("../resource_view/resource_view.jsx");


var SimplePatch = React.createClass({
	handleClick: function(){
		$.ajax({
            method: "PATCH",
            url: this.props.url,
            data: this.props.values,
        }).done(function(){
        	this.props.success_callback && this.props.success_callback();
        }.bind(this));
	},
	render: function(){
		return (
			<div className="sealious-form">
				<button onClick={this.handleClick}> {this.props.text}</button>
			</div>
		)
	}
})


var ZgłoszenieTemplatka = React.createClass({
	render: function(){
		var zgloszenie = this.props.resource;

		var nazwa_stoiska = zgloszenie.body.stoisko && zgloszenie.body.stoisko.body.nazwa;
		var nazwa_podmiotu;
		if(zgloszenie.body.podmiot){
			if(zgloszenie.body.podmiot.type=="osoba_fizyczna"){
				nazwa_podmiotu = zgloszenie.body.podmiot.body.imie + " " + zgloszenie.body.podmiot.body.nazwisko;
			}
		}

		var opis_stoiska = [];
		if(zgloszenie.body.stoisko){
			var stoisko = zgloszenie.body.stoisko.body;
			for(var i in stoisko){
				opis_stoiska.push(<tr><td>{i}</td><td>{stoisko[i]}</td></tr>);
			}
		}

		var nastepne_stany = (zgloszenie.body && zgloszenie.body.next_possible_states && zgloszenie.body.next_possible_states[zgloszenie.body.stan]) || [];
		var nastepne_stany_buttons = [];
		for(var i in nastepne_stany){
			var stan = nastepne_stany[i];
			var button = (
				<SimplePatch values={{stan: stan}} url={this.props.resource_url} text={stan} success_callback={function(){document.location.reload()}}/>
			);
			nastepne_stany_buttons.push(button);
		}
		console.log(nastepne_stany_buttons);

		return (
			<div>
				<h2>Widok zgłoszenia o stoisko {nazwa_stoiska}</h2>
				<h3>Podmiot: {nazwa_podmiotu}</h3>
				<h3>Status: {zgloszenie.body.stan}</h3>
				<h3>Zmień status: </h3>
				{nastepne_stany_buttons}
				<h3>Opis Stoiska: </h3>
				<table>
					<tbody>
						{opis_stoiska}
					</tbody>
				</table>
			</div>
		)
	}
})


var ZgłoszenieWidok = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},

	render: function(){
		var zgłoszenie_id = this.context.router.getCurrentParams().zgloszenie_id;
		return (
			<div>
				<ResourceView template={ZgłoszenieTemplatka} resource_url={"/api/v1/form_entry/"+zgłoszenie_id}/>
			</div>
		)
	}
});

module.exports = ZgłoszenieWidok;