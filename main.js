var path = require("path");

var Sealious = require("sealious");

/*
var mode = process.argv[2]==undefined? "local": "distibuted";
var layer_name = process.argv[2];
*/

Sealious.init();

var www_server = Sealious.ChipManager.get_chip("channel", "www_server");

require("./lib/schema/schema.js");

var form_entry = new Sealious.ChipTypes.ResourceType("form_entry");	

form_entry.add_fields([
	{name: "first-name", type: "text", required: true, human_readable_name: "Imię"},
	{name: "last-name", type: "text", required: true, human_readable_name: "Nazwisko"},
	{name: "PESEL", type: "pesel", required: true,},
	{name: "kolor_stoiska", type: "color", required: true, human_readable_name: "Kolor stoiska"},
	//{name: "kolor_stoiska2", type: "color", required: true, human_readable_name: "Kolor stoiska"},
	{name: "Rok", type: "int", required: true},
])

var rest = Sealious.ChipManager.get_chip("channel", "rest");

rest.add_path("/api/v1/form_entry", "form_entry");

www_server.static_route(path.resolve( __dirname, "./public"), "");

Sealious.start();

