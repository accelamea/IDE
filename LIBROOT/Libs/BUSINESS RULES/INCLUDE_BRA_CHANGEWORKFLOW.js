/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_CHANGEWORKFLOW.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JONATHAN
| Created at	: 29/11/2016 17:58:51
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function CHANGEWORKFLOW() {
	BRA.call(this, "CHANGEWORKFLOW", "Change Workflow");
}
CHANGEWORKFLOW.prototype = Object.create(BRA.prototype);
CHANGEWORKFLOW.prototype.constructor = CHANGEWORKFLOW;
CHANGEWORKFLOW.prototype.getAuthor = function() {
	return "Jonathan Xu";
}
CHANGEWORKFLOW.prototype.getDescription = function() {
	return "this action change the workflow";
}
CHANGEWORKFLOW.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];
	var strQry = "select R1_PROCESS_CODE from SPROCESS_GROUP where SERV_PROV_CODE = ?";
	var dba = com.accela.aa.datautil.AADBAccessor.getInstance();
	var result = dba.select(strQry, [ aa.getServiceProviderCode() ]);
	var fields = result.toArray()
	for ( var x in fields) {
		var field = fields[x];
		var obj = {};
		obj.text = String(field[0])
		obj.value = String(field[0])
		jsonArray.push(obj)
	}

	return jsonArray;
}

CHANGEWORKFLOW.prototype.validateParams = function(params) {
	if (!params.workflowcode) {
		throw "Workflow Code is required";
	}
}

CHANGEWORKFLOW.prototype.getParams = function() {
	return {
		source : {
			workflowcode : ""
		},
		config : {
			workflowcode : {
				help : "the workflow group code",
				displayName : String("Workflow Code"),
				editor : this.buildCombo("workflowcode")
			}
		}
	}
}

CHANGEWORKFLOW.prototype.run = function(record, params, context) {
	var workFlowService = com.accela.aa.emse.dom.service.CachedService.getInstance().getWorkflowService();
	record.completeWorkflow();

	workFlowService.deleteAndAssignWorkflow(record.capId, params.workflowcode, true, "admin", params.workflowcode);

}