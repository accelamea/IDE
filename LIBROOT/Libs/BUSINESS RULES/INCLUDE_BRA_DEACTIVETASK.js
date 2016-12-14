/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_DEACTIVETASK.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JONATHAN
| Created at	: 29/11/2016 17:00:56
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function DEACTIVETASK() {
	BRA.call(this, "DEACTIVETASK", "Deactive Task");
}
DEACTIVETASK.prototype = Object.create(BRA.prototype);
DEACTIVETASK.prototype.constructor = DEACTIVETASK;

DEACTIVETASK.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];
	return jsonArray;
}

DEACTIVETASK.prototype.validateParams = function(params) {
	var TaskName = params.TaskName;
	if(!TaskName){
		throw "Task Name can't be empty!"
	}
}

DEACTIVETASK.prototype.getParams = function() {
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


DEACTIVETASK.prototype.run = function(record, params, context) {
	var taskName = params.TaskName;
	var capId = record.capId;
	var task = aa.workflow.getTask(capId, taskName).getOutput();
	if(task != null){
		var stepNumber = task.getStepNumber();
		if (task.getActiveFlag().equals("Y")) {
			var completeFlag = task.getCompleteFlag();
			aa.workflow.adjustTask(capId, stepNumber, "N", completeFlag, null, null);
		}
	}

}