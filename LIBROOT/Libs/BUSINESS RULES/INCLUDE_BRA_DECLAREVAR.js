/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_DECLAREVAR.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 26/03/2017 15:46:36
|
/------------------------------------------------------------------------------------------------------*/

if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}

function DECLAREVAR() {
	BRA.call(this, "DECLAREVAR", "Declare Variable");
}
DECLAREVAR.prototype = Object.create(BRA.prototype);
DECLAREVAR.prototype.constructor = DECLAREVAR;
DECLAREVAR.prototype.getAuthor = function() {
	return "Sleiman KOZAIZAN";
}
DECLAREVAR.prototype.getDescription = function() {
	return "this action declare a variables";
}
DECLAREVAR.prototype.validateParams = function(params) {

	if (!params.Value) {
		throw "Value can't be empty!"
	}
}
DECLAREVAR.getAccessName = function(name) {
	if (isNaN(name)) {
		return (/^[a-z0-9][a-z0-9_]*$/.test(name)) ? "." + name : "['" + name + "']";
	} else {
		return "[" + name + "]"
	}
}

DECLAREVAR.prototype.contributeVariables = function(context, params) {
	var varName = params.RuntineVarName;
	if (!varName) {
		varName = "Var";
	}
	var operation = params.Operation;

	context.Runtime[varName] = "this.Runtime" + DECLAREVAR.getAccessName(varName);

}
DECLAREVAR.prototype.getParams = function() {
	return {
		source : {
			Value : String(""),
			RuntineVarName : String("VAR1")
		},
		config : {
			Value : {
				help : "the variables value",
				displayName : String("Value"),
				editor : {
					xtype : 'expfield'

				}
			},
			RuntineVarName : {
				help : "the varibale name that will appear in the context under runtime folder",
				displayName : String("Runtine variable name"),
				editor : {
					xtype : 'textfield'

				}
			}

		}
	}
}

DECLAREVAR.prototype.hasReturn = function() {
	return true;
}
DECLAREVAR.prototype.evaluateObject = function(obj, context) {
	for ( var x in obj) {
		if (typeof obj[x] == "string") {
			if (obj[x] != "") {
				obj[x] = String(context.tryEvaluateSolo(obj[x]))
			}
		} else {
			this.evaluateObject(obj[x], context)
		}
	}
}
DECLAREVAR.prototype.run = function(record, params, context) {

	var value = params.Value;
	if (value != "") {
		value = String(context.tryEvaluateSolo(value))
	}

	var varName = params.RuntineVarName;
	if (!varName) {
		varName = "RestResult";
	}
	context.debug("adding " + varName + " to context.Runtime")
	context.Runtime[varName] = value;

}