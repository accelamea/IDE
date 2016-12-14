/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_CALLSOAPWEBSERVICE.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JONATHAN
| Created at	: 29/11/2016 12:39:47
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}

if (typeof SOAPAPI === "undefined") {
	eval(getScriptText("INCLUDE_SOAPAPI"));
}

function CALLSOAPWEBSERVICE() {
	BRA.call(this, "CALLSOAPWEBSERVICE", "Call Soap WebService");
}
CALLSOAPWEBSERVICE.prototype = Object.create(BRA.prototype);
CALLSOAPWEBSERVICE.prototype.constructor = CALLSOAPWEBSERVICE;

CALLSOAPWEBSERVICE.prototype.validateParams = function(params) {

	if (!params.Operation) {
		throw "Operation can't be empty!"
	}
}

CALLSOAPWEBSERVICE.prototype.addOperationParam = function(parentObj, param, path) {
	if (param.children) {
		parentObj[param.name] = {};
		for ( var y in param.children) {
			this.addOperationParam(parentObj[param.name], param.children[y], path + "." + param.name + "")
		}
	} else {
		parentObj[param.name] = path + "." + param.name + ""

	}
}
CALLSOAPWEBSERVICE.prototype.contributeVariables = function(context, params) {
	var varName = params.RuntineVarName;
	if (!varName) {
		varName = "SoapResult";
	}
	var operation = params.Operation;
	eval("var settings=" + operation)
	context.Runtime[varName] = "this.Runtime['" + varName + "']";
	if (settings.retparams && settings.retparams.length > 0) {
		var root = settings.retparams[0];
		if (root.children) {
			context.Runtime[varName] = {};
			for ( var f in root.children) {
				this.addOperationParam(context.Runtime[varName], root.children[f], "this.Runtime['" + varName + "']")
			}
		}
	}

}
CALLSOAPWEBSERVICE.prototype.getParams = function() {
	return {
		source : {
			Operation : String(""),
			UserName : String(""),
			Password : String(""),
			RuntineVarName : String("SoapResult")
		},
		config : {
			Operation : {
				displayName : String("Operation"),
				editor : {
					xtype : 'soapfield'

				}
			},
			RuntineVarName : {
				displayName : String("Runtine variable name"),
				editor : {
					xtype : 'textfield'

				}
			},
			UserName : {
				displayName : String("User Name")
			},
			Password : {
				displayName : String("Password"),
				editor : {
					xtype : 'textfield'

				}
			}
		}
	}
}

CALLSOAPWEBSERVICE.prototype.hasReturn = function() {
	return true;
}
CALLSOAPWEBSERVICE.prototype.getOutputName = function() {
	return this.getID() + "Response"
}

CALLSOAPWEBSERVICE.prototype.run = function(record, params, context) {
	var operation = params.Operation;
	eval("var settings=" + operation)
	var url = settings.url;
	context.debug("url:" + url);
	var soapMessage = settings.input;
	context.debug("soapMessage:" + soapMessage);
	var mapping = settings.mapping;
	for ( var x in mapping) {
		if (mapping[x] && mapping[x] != "") {
			mapping[x] = String(context.evaluateSolo(mapping[x]))
		}

	}
	context.debug("mapping:" + JSON.stringify(mapping));
	var soapAction = settings.action;
	context.debug("soapAction:" + soapAction);
	var username = params.UserName;
	context.debug("username:" + username);
	var password = params.Password;
	context.debug("password:" + password);
	context.info("CALLING " + url);
	var runtimeVar = params.RuntineVarName;
	var soapi = new SOAPAPI(url, soapAction, username, password)

	var ret = soapi.sendRequestGetOBJ(soapMessage, mapping)
	context.info("CALL RETURNED:" + JSON.stringify(ret));
	context.Runtime[runtimeVar] = ret;
	return ret;
}