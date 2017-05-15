/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_ACTIVATETASK.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 07/12/2016 17:26:46
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function ACTIVATETASK() {
	BRA.call(this, "ACTIVATETASK", "Activate Task");
}
ACTIVATETASK.prototype = Object.create(BRA.prototype);
ACTIVATETASK.prototype.constructor = ACTIVATETASK;

ACTIVATETASK.prototype.getParamValues = function(recordType, paramName) {

}
ACTIVATETASK.prototype.getAuthor = function() {
	return "Sleiman KOZAIZAN";
}
ACTIVATETASK.prototype.getDescription = function() {
	return "this action activate a specific task in the workflow";
}
ACTIVATETASK.prototype.validateParams = function(params) {
	var TaskName = params.TaskName;

	if (!TaskName) {
		throw "Task Name cant be empty!"
	}
}

ACTIVATETASK.prototype.getParams = function() {
	return {
		source : {
			TaskName : String(""),
			DeactivateCurrent : true
		},
		config : {
			TaskName : {
				help : "the task you want to activate",
				displayName : String("Task Name"),
				editor : {
					xtype : 'expfield'
				}
			},
			DeactivateCurrent : {
				help : "control if you want to deactivate the current task",
				displayName : String("Deactivate Current"),
				editor : {
					xtype : 'checkboxfield'
				}
			}
		}
	}
}

ACTIVATETASK.prototype.run = function(record, params, context) {
	var taskName = params.TaskName;
	var deactivate = params.DeactivateCurrent;
	logDebug(" activateTask called on " + record + " for task " + taskName)
	record.activateTask(taskName, deactivate);
}