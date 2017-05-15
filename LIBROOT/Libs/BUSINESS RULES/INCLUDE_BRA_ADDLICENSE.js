/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_ADDLICENSE.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JONATHAN
| Created at	: 30/11/2016 17:01:19
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function ADDLICENSE() {
	BRA.call(this, "ADDLICENSE", "Add License");
}
ADDLICENSE.prototype = Object.create(BRA.prototype);
ADDLICENSE.prototype.constructor = ADDLICENSE;
ADDLICENSE.prototype.getAuthor = function() {
	return "Jonathan Xu";
}
ADDLICENSE.prototype.getDescription = function() {
	return "this action add a license to the record";
}
ADDLICENSE.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];

	return jsonArray;
}

ADDLICENSE.prototype.validateParams = function(params) {
	var LicenseID = params.LicenseID;
	if(!LicenseID){
		throw "LicenseID can't be empty!"
	}
}

ADDLICENSE.prototype.getParams = function() {
	return {
		source : {
			LicenseID : String("")
		},
		config : {
			LicenseID : {
				help : "the license number",
				displayName : String("License ID"),
				editor : {
					xtype : 'expfield'
				}
			}
		}
	}
}

ADDLICENSE.prototype.run = function(record, params, context) {
	var LicenseID = params.LicenseID;
	record.addLicense(LicenseID);
}