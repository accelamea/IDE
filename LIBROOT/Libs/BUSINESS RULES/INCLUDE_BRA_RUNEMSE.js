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
	BRA.call(this, "RUNEMSE", "Run EMSE Script");
}
RUNEMSE.prototype = Object.create(BRA.prototype);
RUNEMSE.prototype.constructor = RUNEMSE;

RUNEMSE.prototype.getParamValues = function(recordType, paramName) {
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

RUNEMSE.prototype.validateParams = function(params) {
	var ScriptName = params.ScriptName;
	if(!ScriptName){
		throw "ScriptName can't be empty!"
	}
}


RUNEMSE.prototype.getParams = function() {
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

RUNEMSE.prototype.run = function(record, params, context) {
	var scriptID = params.ScriptName;
	var paramTable = aa.util.newHashtable();
	//
	var scriptRoot = com.accela.aa.emse.dom.service.CachedService.getInstance().getScriptRootService();
	scriptRoot.runSubScript(scriptID,aa.getServiceProviderCode(),paramTable,aa.getAuditID());
}