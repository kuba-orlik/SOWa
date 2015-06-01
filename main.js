var path = require("path");

var Sealious = require("sealious");

/*
var mode = process.argv[2]==undefined? "local": "distibuted";
var layer_name = process.argv[2];
*/

Sealious.init();

var www_server = Sealious.ChipManager.get_chip("channel", "www_server");

require("./lib/schema/schema.js");

var osoba_fizyczna = new Sealious.ChipTypes.ResourceType("osoba_fizyczna", {
	fields:[
		{name: "imie", type: "text", human_readable_name: "Imię", required: true},
		{name: "nazwisko", type: "text", human_readable_name: "Nazwisko", required: true},
		{name: "pesel", type: "pesel", human_readable_name: "PESEL", required: true},
		{name: "adres", type: "text", human_readable_name: "Adres korespondencyjny", required: true},
		{name: "email", type: "email", human_readable_name: "Adres email", required: true},
		{name: "telefon", type: "text", human_readable_name: "Numer telefonu", required: true},
		{name: "uwagi", type: "text", human_readable_name: "Uwagi"},
	],
	acess_strategy: {
		retrieve: "noone",
	},
});

var firma = new Sealious.ChipTypes.ResourceType("firma", {
	fields:[
		{name: "nazwa", type: "text", human_readable_name: "Nazwa", required: true},
		{name: "adres-siedziby", type: "text", human_readable_name: "Adres siedziby", required: true},
		{name: "nip", type: "text", human_readable_name: "NIP", required: true},
		{name: "podpisuje-umowy", type: "email", human_readable_name: "Kto może podpisywać umowy", required: true},

		{name: "os-kontaktowa-imie", type: "text", human_readable_name: "Osoba odpowiedzialna za kontakt z Pyrkonem - Imię", required: true},
		{name: "os-kontaktowa-nazwisko", type: "text", human_readable_name: "Osoba odpowiedzialna za kontakt z Pyrkonem - Nazwisko", required: true},
		{name: "os-kontaktowa-email", type: "email", human_readable_name: "Osoba odpowiedzialna za kontakt z Pyrkonem - Adres email", required: true},
		{name: "os-kontaktowa-telefon", type: "text", human_readable_name: "Osoba odpowiedzialna za kontakt z Pyrkonem - Numer telefonu", required: true},
		{name: "adres-korespondencyjny", type: "text", human_readable_name: "Adres korespondencyjny (jeżeli inny niż siedziby)", required: false},
		

		{name: "jest-platnikie-vat", type: "text", human_readable_name: "Czy jest płatnikiem VAT (TAK/NIE) ", required: true},
		{name: "telefon", type: "text", human_readable_name: "Numer telefonu", required: true},
		{name: "uwagi", type: "email", human_readable_name: "Adres email", required: true},
	],
	acess_strategy: "public",
});


var stoisko = new Sealious.ChipTypes.ResourceType("stoisko", {
	fields: [
		{name: "nazwa", type: "text", human_readable_name: "Nazwa stoiska", required: true},
		{name: "tematyka", type: "text", human_readable_name: "Tematyka stoiska", required: true}, // docelowo do wyboru z lity rozwijanej
		{name: "opis", type: "text", human_readable_name: "Opis stoiska", required: true},
		{name: "www", type: "text", human_readable_name: "Strona www", required: false},
		{name: "specyfikacja", type: "text", human_readable_name: "Jaki rodzaj stoiska chcą Państwo wykupić", required: false},
		{name: "hala", type: "text", human_readable_name: "Hala", required: false}, //docelowo lista wyboru
	],
})

var form_entry = new Sealious.ChipTypes.ResourceType("form_entry", {
	fields: [
		{name: "podmiot", type: "reference", params:{allowed_types:["osoba_fizyczna", "firma"]}},
		{name: "stoisko", type: "reference", params:{allowed_types:["stoisko"]}},
		{name: "komentarz", type: "text"},
	],
	access_strategy: {
		retrieve: "public",
	},
});	


var rest = Sealious.ChipManager.get_chip("channel", "rest");

rest.set_url_base("/api/v1");

www_server.static_route(path.resolve( __dirname, "./public"), "");

Sealious.start();

