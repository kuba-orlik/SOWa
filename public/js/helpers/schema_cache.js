var Promise = require("bluebird");
var $ = require("jquery");


var SchemaCache = new function(){

	var cached_schemas = {};

	var download_schema = function(resource_type_url){
		return new Promise(function(resolve, reject){
			$.get(resource_type_url + "/signature")
			.success(function(response){
				console.log(response);
			});
		})
	}

	this.get_schema = function(resource_type_url){
		if(this.cached_schemas[resource_type_url]){
			return Promise.resolve(this.cached_schemas[resource_type_url]);
		}else{
			return 
		}
	}	
}

module.exports = SchemaCache;