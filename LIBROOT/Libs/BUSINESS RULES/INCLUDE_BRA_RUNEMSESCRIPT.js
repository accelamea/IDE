/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_RUNEMSESCRIPTSCRIPT.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 16/01/2017 16:01:02
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function RUNEMSESCRIPT() {
	BRA.call(this, "RUNEMSESCRIPT", "Run EMSE Script");
}
RUNEMSESCRIPT.prototype = Object.create(BRA.prototype);
RUNEMSESCRIPT.prototype.constructor = RUNEMSESCRIPT;

RUNEMSESCRIPT.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];
	if (paramName == "ScriptName") {
		var fields = new DAO("REVT_AGENCY_SCRIPT").execQuery();

		for ( var x in fields) {
			var field = fields[x];
			var obj = new Object();
			obj.text = String(field["SCRIPT_CODE"]);
			obj.value = String(field["SCRIPT_CODE"]);
			jsonArray.push(obj);
		}

	}
	return jsonArray;
}

RUNEMSESCRIPT.prototype.validateParams = function(params) {
	var ScriptName = params.ScriptName;
	if (!ScriptName) {
		throw "ScriptName can't be empty!"
	}
}

RUNEMSESCRIPT.prototype.getParams = function() {
	return {
		source : {
			ScriptName : String(""),
			Param1 : String(""),
			Param2 : String(""),
			Param3 : String(""),
			Param4 : String(""),
			Param5 : String("")

		},
		config : {

			ScriptName : {
				displayName : String("Script Name"),
				editor : this.buildCombo("ScriptName")

			},
			Param1 : {
				editor : {
					xtype : 'expfield'
				}
			},
			Param2 : {
				editor : {
					xtype : 'expfield'
				}
			},
			Param3 : {
				editor : {
					xtype : 'expfield'
				}
			},
			Param4 : {
				editor : {
					xtype : 'expfield'
				}
			},
			Param5 : {
				editor : {
					xtype : 'expfield'
				}
			}
		}
	}
}

RUNEMSESCRIPT.prototype.run = function(record, params, context) {
	var scriptID = params.ScriptName;
	var paramTable = aa.util.newHashtable();
	//
	var scriptRoot = com.accela.aa.emse.dom.service.CachedService.getInstance().getScriptRootService();
	scriptRoot.runSubScript(scriptID, aa.getServiceProviderCode(), paramTable, aa.getAuditID());
}