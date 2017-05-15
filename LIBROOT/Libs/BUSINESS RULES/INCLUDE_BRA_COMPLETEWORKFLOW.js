/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_COMPLETEWORKFLOW.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 29/11/2016 10:20:13
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function COMPLETEWORKFLOW() {
	BRA.call(this, "COMPLETEWORKFLOW", "Complete Workflow");
}
COMPLETEWORKFLOW.prototype = Object.create(BRA.prototype);
COMPLETEWORKFLOW.prototype.constructor = COMPLETEWORKFLOW;
COMPLETEWORKFLOW.prototype.getAuthor = function() {
	return "Sleiman KOZAIZAN";
}
COMPLETEWORKFLOW.prototype.getDescription = function() {
	return "this action complete the remain the workflow tasks";
}
COMPLETEWORKFLOW.prototype.getParams = function() {
	return {
		source : {

		},
		config : {

		}
	}
}

COMPLETEWORKFLOW.prototype.run = function(record, params) {
	record.completeWorkflow();
}