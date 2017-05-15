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

BRA.prototype.getAuthor = function() {
	return "Accela";
}
BRA.prototype.getDescription = function() {
	return "";
}
BRA.prototype.getHelp = function() {
	var help = [];
	help.push("<b>" + this.name + "</b><br>");
	help.push(this.getDescription() + "<hr>");

	var params = this.getParams();

	help.push("<b>Parameters:</b><br>");
	var table = "<table width='100%' cellspacing=2 class='x-panel-body-default'>";
	var hasParams = false;
	if (params) {
		if (params.source) {

			for ( var x in params.source) {
				hasParams = true;
				var label = x;
				var paramHelp = "";
				if (params.config && params.config[x]) {
					if (params.config[x].displayName) {
						label = params.config[x].displayName
					}
					if (params.config[x].help) {
						paramHelp = "<i>" + params.config[x].help + "</i>";
					}

				}

				table += "<tr ><td >" + label + "</td><td >" + paramHelp + "</td></tr>";

			}
		}
	}
	table += "</table>"
	if (!hasParams) {
		table = "There is no parameters for this action";
	}
	help.push(table)
	var ctctx = this.hasReturn() ? "Yes" : "No";
	help.push("<br><b>Update Context:</b> " + ctctx + "<br>");

	help.push("<br><b>Author:</b> " + this.getAuthor() + "<br>");
	return help.join("\n")
}
BRA.prototype.getAllParams = function() {
	var params = this.getParams();
	if (!params) {
		params = {};
	}
	if (!params.source) {
		params.source = {};
	}
	if (!params.config) {
		params.config = {};
	}
	params.source.ID = String(this.id);
	params.source.CMD = String(this.name);
	params.source.STOPONERROR = true;
	params.source.CANCELEVENT = true;
	params.config.ID = {
		displayName : String("Command Id"),
		editor : {
			xtype : 'displayfield'
		}
	};

	params.config.CMD = {
		displayName : String("Command Name"),
		editor : {
			xtype : 'textfield'
		}
	};
	params.config.STOPONERROR = {
		displayName : String("Stop On Error"),
		editor : {
			xtype : 'checkboxfield'
		}
	};
	params.config.CANCELEVENT = {
		displayName : String("Cancel On Error"),
		editor : {
			xtype : 'checkboxfield'
		}
	};
	return params;
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
BRA.prototype.contributeVariables = function(context, params) {

}
BRA.prototype.toJsonObject = function() {
	var ret = {};
	ret.value = String(this.getID());
	ret.text = String(this.getName());
	ret.params = String(JSON.stringify([ this.getAllParams() ], null, 2));
	ret.help = String(this.getHelp());
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
		displayField : 'text',
		valueField : 'value',
		queryMode : 'local',
		emptyText : "Please select " + paramName,
		store : {
			remoteFilter : false,
			remoteSort : false,
			autoLoad : true,
			mode : 'local',
			proxy : {
				type : 'ajax',
				url : 'ADS?action=execscriptbycode&SCRIPT=EXT_BRE_HANDLEEVENTS&CMD=getParamValues&PARAM=' + paramName + '&ID=' + this.id,
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
		"SERV_PROV_CODE" : aa.getServiceProviderCode()
	}, null, true, null);
	var arrActions = [];
	for ( var xx in ret) {
		try {
			var rowx = ret[xx];
			var scriptName = rowx["SCRIPT_CODE"]
			var className = scriptName.substring("INCLUDE_BRA_".length)
			eval(getScriptText(scriptName));

			eval("arrActions.push(new " + className + "() );")
		} catch (e) {
			logDebug("ERROR adding action from script " + scriptName + " : " + e)
		}

	}
	return arrActions;
}