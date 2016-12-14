/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 28/11/2016 09:23:06
|
/------------------------------------------------------------------------------------------------------*/
var GLOBAL_EVAL = eval;
if (typeof DAO === "undefined") {
	eval(getScriptText("INCLUDE_DAO"));
}
function BRA(id, name) {
	this.id = id;
	this.name = name;
}
BRA.prototype.getID = function() {
	return this.id;
}
BRA.prototype.toString = function() {
	return "ACTION:" + this.id;
}
BRA.prototype.getName = function() {
	return this.name;
}
BRA.prototype.getParamValues = function(recordType, paramName) {
	return [];
}
BRA.prototype.validateParams = function(params, context) {
	//tho

}
BRA.prototype.getParams = function() {
	logDebug("not implemented yet")
	return {};
}
BRA.prototype.run = function(record, params, context) {
	context.warn("not implemented yet")
}

BRA.prototype.hasReturn = function() {
	return false;
}
BRA.prototype.contributeVariables = function(context,params) {

}
BRA.prototype.toJsonObject = function() {
	var ret = {};
	ret.value = String(this.getID());
	ret.text = String(this.getName());
	return ret;
}
BRA.prototype.buildCombo = function(paramName) {
	return {
		allowBlank : false,
		readOnly : false,
		typeAhead : true,
		triggerAction : "all",
		forceSelection : true,
		xtype : "combo",
		
		queryMode : 'local',
		emptyText : "Please select " + paramName,
		store : {
			remoteFilter : false,
			remoteSort : false,
			autoLoad : true,
			mode : 'local',
			proxy : {
				type : 'ajax',
				url : 'ADS?action=execscriptbycode&SCRIPT=EXT_GRBR_HANDLEEVENTS&CMD=getParamValues&PARAM=' + paramName + '&ID=' + this.id,
				reader : {
					type : 'json',
					root : 'values'
				}

			},

			model : 'STDChoice'
		}

	};
}
BRA.getActionByID = function(id) {
	var className = id;
	var scriptName = "INCLUDE_BRA_" + id
	eval(getScriptText(scriptName));

	eval("var action = new " + className + "() ;")
	return action;
}
BRA.listAll = function() {
	var ret = new DAO("REVT_AGENCY_SCRIPT").execQuery({
		"SCRIPT_CODE" : "INCLUDE_BRA_%",
		"SERV_PROV_CODE":aa.getServiceProviderCode()
	}, null, true, null);
	var arrActions = [];
	for ( var xx in ret) {
		var rowx = ret[xx];
		var scriptName = rowx["SCRIPT_CODE"]
		var className = scriptName.substring("INCLUDE_BRA_".length)
		eval(getScriptText(scriptName));

		eval("arrActions.push(new " + className + "() );")
	}
	return arrActions;
}