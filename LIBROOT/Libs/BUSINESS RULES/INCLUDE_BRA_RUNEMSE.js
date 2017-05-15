/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_RUNEMSE.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 28/11/2016 11:58:31
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function RUNEMSE() {
	BRA.call(this, "RUNEMSE", "Run EMSE");
}
RUNEMSE.prototype = Object.create(BRA.prototype);
RUNEMSE.prototype.constructor = RUNEMSE;

RUNEMSE.prototype.getParamValues = function(recordType, paramName) {

}

RUNEMSE.prototype.validateParams = function(params) {
	var script = params.script;
	if (!script) {
		throw "script can't be empty!"
	}
	if (!params.RuntineVarName) {
		throw "Runtime variable name cant be empty";
	}
}
RUNEMSE.prototype.hasReturn = function() {
	return true;
}
RUNEMSE.prototype.contributeVariables = function(context, params) {
	var varName = params.RuntineVarName;
	if (!varName) {
		varName = "ScriptResult";
	}
	logDebug("RUNEMSE CONTRIBUTING")
	context.Runtime[varName] = "this.Runtime['" + varName + "']";

}
RUNEMSE.prototype.getParams = function() {
	return {
		source : {
			script : String(""),
			RuntineVarName : "ScriptResult"

		},
		config : {
			script : {
				displayName : String("Script"),
				editor : {
					xtype : 'expfield'
				}
			},
			RuntineVarName : {
				displayName : String("Runtine variable name"),
				editor : {
					xtype : 'textfield'

				}
			},
		}
	}
}

RUNEMSE.prototype.run = function(record, params, context) {
	var script = params.script;
	var ret = context.evaluate(script);
	var varName = params.RuntineVarName;
	if (!varName) {
		varName = "ScriptResult";
	}
	context.Runtime[varName] = ret;
	return ret;
}