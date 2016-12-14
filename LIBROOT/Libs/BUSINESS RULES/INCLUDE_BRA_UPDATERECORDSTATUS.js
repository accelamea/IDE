/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_UPDATERECORDSTATUS.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JONATHAN
| Created at	: 30/11/2016 10:05:37
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function UPDATERECORDSTATUS() {
	BRA.call(this, "UPDATERECORDSTATUS", "Update Record Status");
}
UPDATERECORDSTATUS.prototype = Object.create(BRA.prototype);
UPDATERECORDSTATUS.prototype.constructor = UPDATERECORDSTATUS;

UPDATERECORDSTATUS.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];
	return jsonArray;
}

UPDATERECORDSTATUS.prototype.validateParams = function(params) {
	var Status = params.Status;
	if (!Status) {
		throw "Status can't be empty!"
	}
}

UPDATERECORDSTATUS.prototype.getParams = function() {
	return {
		source : {
			Status : String("")
		},
		config : {
			Status : {
				displayName : String("Status"),
				editor : {
					xtype : 'expfield'
				}
			}
		}
	}
}

UPDATERECORDSTATUS.prototype.run = function(record, params, context) {
	record.updateStatus(params.Status, "")
}