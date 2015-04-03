var path = require("path");

var Sealious = require("sealious");

/*
var mode = process.argv[2]==undefined? "local": "distibuted";
var layer_name = process.argv[2];
*/

var app = new Sealious.App(__dirname+"/package.json"/*, mode, layer_name*/);

var www_server = app.ChipManager.get_chip("channel", "www_server");

var form_entry = new Sealious.ChipTypes.ResourceType("form_entry");	

form_entry.add_fields([
	{name: "first-name", type: "text", required: true},
	{name: "last-name", type: "text", required: true},
	{name: "PESEL", type: "text", required: true}
])

var rest = app.ChipManager.get_chip("channel", "rest");

rest.add_path("/api/v1/form_entry", "form_entry");

www_server.static_route(path.resolve( __dirname, "./public"), "");

app.start();

