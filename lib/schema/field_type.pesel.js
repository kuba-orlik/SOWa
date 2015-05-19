var pesel_check = require("identification-numbers").pesel;
var Promise = require("bluebird");

var pesel = new Sealious.ChipTypes.FieldType("pesel");	

pesel.prototype.isProperValue = function(value_in_code){
	return new Promise(function(resolve, reject){
		if(pesel_check(value_in_code).isValid()){
			resolve();
		}else{
			reject("'"+value_in_code+"' is not a valid PESEL number.");
		}
	})
}


