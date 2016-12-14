/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_REMOVETASK.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JONATHAN
| Created at	: 30/11/2016 09:54:39
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function REMOVETASK() {
	BRA.call(this, "REMOVETASK", "Remove Task");
}
REMOVETASK.prototype = Object.create(BRA.prototype);
REMOVETASK.prototype.constructor = REMOVETASK;

REMOVETASK.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];
	return jsonArray;
}

REMOVETASK.prototype.validateParams = function(params) {
	var TaskName = params.TaskName;
	if(!TaskName){
		throw "Task Name can't be empty!"
	}
}

REMOVETASK.prototype.getParams = function() {
	return {
		source : {
			TaskName : String("")
		},
		config : {
			TaskName : {
				displayName : String("Task Name"),
				editor : {
					xtype : 'expfield'
				}
			}
		}
	}
}


REMOVETASK.prototype.run = function(record, params, context) {
	var taskName = params.TaskName;
	var capId = record.capId;
	var task = aa.workflow.getTask(capId, taskName).getOutput();
	if(task != null){
		aa.workflow.removeTask(task);
	}	
}