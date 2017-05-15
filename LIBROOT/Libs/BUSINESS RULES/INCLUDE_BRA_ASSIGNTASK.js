/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_ASSIGNTASK.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 09/12/2016 22:04:08
|
/------------------------------------------------------------------------------------------------------*/

if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function ASSIGNTASK() {
	BRA.call(this, "ASSIGNTASK", "Assign Task");
}
ASSIGNTASK.prototype = Object.create(BRA.prototype);
ASSIGNTASK.prototype.constructor = ASSIGNTASK;
ASSIGNTASK.prototype.getAuthor = function() {
	return "Sleiman KOZAIZAN";
}
ASSIGNTASK.prototype.getDescription = function() {
	return "this action assign task to special department";
}

ASSIGNTASK.prototype.validateParams = function(params) {
	var TaskName = params.TaskName;
	var Department = params.Department
	if (!TaskName || !Department) {
		throw "Task Name,Department can't be empty!"
	}
}

ASSIGNTASK.prototype.getParams = function() {
	return {
		source : {
			TaskName : String(""),
			Department : String("")
		},
		config : {
			TaskName : {
				help : "the task name",
				displayName : String("Task Name"),
				editor : {
					xtype : 'expfield'
				}
			},
			Department : {
				help : "the department you want to assign",
				displayName : String("Department"),
				editor : {
					xtype : 'expfield'
				}
			}
		}
	}
}

ASSIGNTASK.prototype.run = function(record, params, context) {
	var taskName = params.TaskName;
	var Department = params.Department;
	var r = aa.workflow.getTaskItems(record.capId, "", "", null, null, null);
	if (!r.getSuccess()) {
		throw "**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage();
	}
	var s = r.getOutput();
	for (i in s) {
		var wfTask = s[i];
		var stepNumber = wfTask.getStepNumber();
		var taskUserObj = wfTask.getTaskItem().getAssignedUser();
		var OldTaskDep = taskUserObj.getDeptOfUser();

		if (s[i].getCompleteFlag() != "N") {
			context.debug("task is already completed " + wfTask.getTaskDescription());
			continue;
		}
		if (s[i].getTaskDescription().toUpperCase().equals(taskName.toUpperCase())) {
			taskUserObj.setDeptOfUser(Department);

			s[i].setAssignedUser(taskUserObj);
			// s[i].setAssignmentDate(aa.util.newDate());
			var taskItem = s[i].getTaskItem();

			var adjustResult = aa.workflow.assignTask(taskItem);
			if (!adjustResult.getSuccess()) {
				throw "ERROR: failed to assign department on " + wfTask.getTaskDescription() + " - " + NewDep + ":" + adjustResult.getErrorMessage();
			}
			context.debug("department=" + NewDep + " changed for task " + wfTask.getTaskDescription());

			break;
		}

	}
}