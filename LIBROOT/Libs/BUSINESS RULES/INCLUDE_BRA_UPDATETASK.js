/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_UPDATETASK.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JONATHAN
| Created at	: 30/11/2016 12:10:01
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function UPDATETASK() {
	BRA.call(this, "UPDATETASK", "Update Task");
}
UPDATETASK.prototype = Object.create(BRA.prototype);
UPDATETASK.prototype.constructor = UPDATETASK;

UPDATETASK.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];
	return jsonArray;
}

UPDATETASK.prototype.validateParams = function(params) {
	var TaskName = params.TaskName;
	var Status = params.Status;
	if(!Status){
		throw "Task Name,Status can't be empty!"
	}
}

UPDATETASK.prototype.getParams = function() {
	return {
		source : {
			TaskName : String(""),
			Status : String("")
		},
		config : {
			TaskName : {
				displayName : String("Task Name"),
				editor : {
					xtype : 'expfield'
				}
			},
			Status : {
				displayName : String("Status"),
				editor : {
					xtype : 'expfield'
				}
			}
		}
	}
}


UPDATETASK.prototype.run = function(record, params, context) {
	var taskName = params.TaskName;
	var status = params.Status;
	record.updateTaskAndHandleDisposition(taskName,status);
}