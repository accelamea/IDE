/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_CANCEL.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 01/12/2016 12:13:24
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function CANCEL() {
	BRA.call(this, "CANCEL", "Cancel Event Execution");
}
CANCEL.prototype = Object.create(BRA.prototype);
CANCEL.prototype.constructor = CANCEL;
CANCEL.prototype.getAuthor = function() {
	return "Sleiman KOZAIZAN";
}
CANCEL.prototype.getDescription = function() {
	return "this action cancel the process";
}
CANCEL.prototype.getParams = function() {
	return {
		source : {
			message : String("")

		},
		config : {
			message : {
				help : "the error message you want to display",
				displayName : String('Error Message'),
				editor : {
					xtype : 'expfield'
				}
			}
		}
	}
}
CANCEL.prototype.run = function(record, params, context) {

	context.cancel(params.message)
}