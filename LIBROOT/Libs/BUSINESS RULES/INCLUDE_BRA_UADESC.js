/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_UADESC.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 28/11/2016 09:28:38
|
/------------------------------------------------------------------------------------------------------*/

if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function UADESC() {
	BRA.call(this, "UADESC", "Update Application Name");
}
UADESC.prototype = Object.create(BRA.prototype);
UADESC.prototype.constructor = UADESC;
UADESC.prototype.getAuthor = function() {
	return "Sleiman KOZAIZAN";
}
UADESC.prototype.getDescription = function() {
	return "this action update application name";
}
UADESC.prototype.getParams = function() {
	return {
		source : {
			ApplicationName : String("")

		},
		config : {
			ApplicationName : {
				help : "the application name",
				displayName : String('Application Name'),
				editor : {
					xtype : 'expfield'
				}
			}
		}
	}
}
UADESC.prototype.validateParams = function(params) {

	var appName = params.ApplicationName;
	if (!appName) {
		throw "Application Name can't be empty.[" + appName + "]"
	}
}

UADESC.prototype.run = function(record, params, context) {
	record.setApplicationName(params.ApplicationName);
}