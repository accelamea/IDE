/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_ESCALTECURRENTTASK.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JASON
| Created at	: 07/05/2017 10:40:05
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
if (typeof ORG === "undefined") {
	eval(getScriptText("INCLUDE_ORG"));
}
function ESCALTECURRENTTASK() {
	BRA.call(this, "ESCALTECURRENTTASK", "Escalate Current Task");
}
ESCALTECURRENTTASK.prototype = Object.create(BRA.prototype);
ESCALTECURRENTTASK.prototype.constructor = ESCALTECURRENTTASK;
BRA.prototype.getAuthor = function() {
	return "Jason Yang";
}
ESCALTECURRENTTASK.prototype.getDescription = function() {
	return "this action escalte current task to upper levels. please make sure you configured the organization";
}
ESCALTECURRENTTASK.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];
	if (paramName == "OnError") {
		jsonArray.push({
			text : String("Throw error"),
			value : String("Throw error")
		});
		jsonArray.push({
			text : String("Assgin To Default Department"),
			value : String("Assgin To Default Department")
		});
		jsonArray.push({
			text : String("Do Nothing"),
			value : String("Do Nothing")
		});
	}
	return jsonArray;
}
ESCALTECURRENTTASK.prototype.getParams = function() {
	return {
		source : {
			Level : 1,
			OnError : "",
			DefaultDepartment : ""
		},
		config : {
			DefaultDepartment : {
				help : "the default Department to assign task in case of failure in escalation",
				displayName : String("Default Department"),
				editor : {
					xtype : 'expfield'
				}
			},
			Level : {
				help : "the level you want to escalte the task",
				displayName : String("Level"),
				editor : {
					xtype : 'numberfield',
					minValue : 1
				}
			},
			OnError : {
				help : "whatever you want if no department found",
				displayName : String("OnError"),
				editor : this.buildCombo("OnError")
			}
		}
	}
}
ESCALTECURRENTTASK.prototype.validateParams = function(params) {
	var CopyFrom = params.CopyFrom;
	if (!params.Level) {
		throw "Level can't be empty.";
	}
	if (params.OnError == "Assgin To Default Department" && !params.DefaultDepartment) {
		throw "Default Department can't be empty.";
	}
}
/**
 * get department by department name
 * 
 * @param dpName, department display name
 * @returns department
 */
ESCALTECURRENTTASK.getDepartmentByName = function(dpName) {
	var getAllDepartments = aa.people.getDepartmentList("ADMIN");
	if (!getAllDepartments.getSuccess()) {
		throw "ERROR: failed to get departments:" + getAllDepartments.getErrorMessage();
	}
	var allDepartments = getAllDepartments.getOutput();
	for ( var i in allDepartments) {
		if (allDepartments[i].getDeptName() == dpName) {
			return allDepartments[i].toString();
		}
	}
}
ESCALTECURRENTTASK.prototype.run = function(record, params, context) {
	var Level = params.Level;
	var currentTask = params.TaskName;
	var wfTasks = record.getCurrentWorkflowTasks()
	for ( var i in wfTasks) {
		var wfTask = wfTasks[i]
		var stepNumber = wfTask.getStepNumber();
		var taskUserObj = wfTask.getTaskItem().getAssignedUser();
		var OldTaskDep = taskUserObj.getDeptOfUser();
		var org = new ORG();
		var newDepartment = "";
		try {
			var parentDepartment = org.getParentLevel(OldTaskDep, Level);
		} catch (e) {
			//continue without throw
		}
		if (parentDepartment && String(parentDepartment).length > 0) {
			newDepartment = parentDepartment;
		} else {
			var OnError = params.OnError;
			if (OnError == "Throw error") {
				throw "ERROR: cannot find parent department"
			} else if (OnError == "Assgin To Default Department") {
				newDepartment = ESCALTECURRENTTASK.getDepartmentByName(params.DefaultDepartment);

			} else if (OnError == "Do Nothing") {
				//do nothing
			}
		}

		if (newDepartment && String(newDepartment).length > 0) {
			taskUserObj.setDeptOfUser(newDepartment);
			taskUserObj.setFirstName("");
			taskUserObj.setMiddleName("");
			taskUserObj.setLastName("");
			taskUserObj.setUserID("");
			wfTask.setAssignedUser(taskUserObj);
			var adjustResult = aa.workflow.assignTask(wfTask.getTaskItem());
			if (!adjustResult.getSuccess()) {
				throw "ERROR: failed to assign department on " + wfTask.getTaskDescription() + " - " + newDepartment + ":" + adjustResult.getErrorMessage();
			}
			context.debug("department=" + newDepartment + " changed for task " + wfTask.getTaskDescription());
		}
	}
}