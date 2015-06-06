var pesel_check = require("identification-numbers").pesel;
var Promise = require("bluebird");

var pesel = new Sealious.ChipTypes.FieldType("pesel");	

pesel.prototype.isProperValue = function(value_in_code){
	console.log("zwracam promisa");
	return new Promise(function(resolve, reject){
		console.log(pesel_check(value_in_code).isValid());
		if(pesel_check(value_in_code).isValid()){
			console.log("resolving!");
			resolve();
		}else{
			console.log("rejecting!");
			reject("'"+value_in_code+"' is not a valid PESEL number.");
		}		
	})
}


