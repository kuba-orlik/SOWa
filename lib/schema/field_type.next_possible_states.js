var Promise = require("bluebird");

var next_possible_states = new Sealious.ChipTypes.FieldType("next_possible_states");	

next_possible_states.prototype.decode = function(value_in_db){
	var path = this.params.for_field.split(".");
	var resource_type_name = path[0];
	var field_name = path[1];
	var resource_type_object = Sealious.ChipManager.get_chip("resource_type", resource_type_name);
	var field_type = resource_type_object.fields[field_name].type;
	return field_type.obj;
}


