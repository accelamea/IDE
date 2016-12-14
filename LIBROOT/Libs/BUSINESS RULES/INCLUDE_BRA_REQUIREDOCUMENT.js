/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_REQUIREDOCUMENT.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JONATHAN
| Created at	: 30/11/2016 10:50:23
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}


function REQUIREDOCUMENT() {
	BRA.call(this, "REQUIREDOCUMENT", "Require Document");
}
REQUIREDOCUMENT.prototype = Object.create(BRA.prototype);
REQUIREDOCUMENT.prototype.constructor = REQUIREDOCUMENT;

REQUIREDOCUMENT.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];
	return jsonArray;
}

REQUIREDOCUMENT.prototype.getParams = function() {
	return {
		source : {
			FileName : String("")
		},
		config : {
			FileName : {
				displayName : String("File Name")
			}
		}
	}
}

REQUIREDOCUMENT.prototype.run = function(record, params, context) {
	//

}