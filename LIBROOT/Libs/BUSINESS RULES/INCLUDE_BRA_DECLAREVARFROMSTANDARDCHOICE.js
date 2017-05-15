/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_DECLAREVARFROMSTANDARDCHOICE.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JASON
| Created at	: 04/05/2017 10:09:41
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}

function DECLAREVARFROMSTANDARDCHOICE() {
	BRA.call(this, "DECLAREVARFROMSTANDARDCHOICE", "Declare Variable from standard choice");
}
DECLAREVARFROMSTANDARDCHOICE.prototype = Object.create(BRA.prototype);
DECLAREVARFROMSTANDARDCHOICE.prototype.constructor = DECLAREVARFROMSTANDARDCHOICE;
DECLAREVARFROMSTANDARDCHOICE.prototype.getAuthor = function() {
	return "Jason Yang";
}
DECLAREVARFROMSTANDARDCHOICE.prototype.getDescription = function() {
	return "this action declare a variable from a standard choice";
}
DECLAREVARFROMSTANDARDCHOICE.prototype.validateParams = function(params) {

	if (!params.StandardChoiceName) {
		throw "Standard Choice Name can't be empty!"
	}
	if (!params.StandardChoiceValue) {
		throw "Standard Choice Value can't be empty!"
	}
	if (!params.ReturnType) {
		throw "Return Type Value can't be empty!"
	}
	if (!params.PreferLanguage) {
		throw "Prefer Language Value can't be empty!"
	}
}
DECLAREVARFROMSTANDARDCHOICE.getAccessName = function(name) {
	if (isNaN(name)) {
		return (/^[a-z0-9][a-z0-9_]*$/.test(name)) ? "." + name : "['" + name + "']";
	} else {
		return "[" + name + "]"
	}
}

DECLAREVARFROMSTANDARDCHOICE.prototype.contributeVariables = function(context, params) {
	var varName = params.RuntimeVarName;
	if (!varName) {
		varName = "StandardChoiceResult";
	}
	var operation = params.Operation;

	context.Runtime[varName] = "this.Runtime" + DECLAREVARFROMSTANDARDCHOICE.getAccessName(varName);

}
DECLAREVARFROMSTANDARDCHOICE.prototype.getParams = function() {
	return {
		source : {
			StandardChoiceName : String(""),
			StandardChoiceValue : String(""),
			ReturnType : String(""),
			PreferLanguage : String("System"),
			RuntimeVarName : String("StandardChoiceResult"),
		},
		config : {
			StandardChoiceName : {
				help : "the standard choice name",
				displayName : String("Key"),
				editor : {
					xtype : 'textfield'

				}
			},
			StandardChoiceValue : {
				help : "the standard choice value",
				displayName : String("Default Value"),
				editor : {
					xtype : 'textfield'

				}
			},

			ReturnType : {
				help : "choose to return standard choice display value or description",
				displayName : String("Return"),
				editor : this.buildCombo("ReturnType")
			},
			PreferLanguage : {
				help : "the preferred language",
				displayName : String("Preferred Language"),
				editor : this.buildCombo("PreferLanguage")
			},
			RuntimeVarName : {
				help : "the varibale name that will appear in the context under runtime folder",
				displayName : String("Runtime variable name"),
				editor : {
					xtype : 'textfield'

				}
			}
		}
	}
}
DECLAREVARFROMSTANDARDCHOICE.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];
	if (paramName == "PreferLanguage") {
		jsonArray.push({
			text : "System",
			value : "System"
		});
		jsonArray.push({
			text : "English",
			value : "en_US"
		});
		jsonArray.push({
			text : "Arabic",
			value : "ar_AE"
		});
	} else if (paramName == "ReturnType") {
		jsonArray.push({
			text : "Display Value",
			value : "DisplayValue"
		});
		jsonArray.push({
			text : "Description",
			value : "Description"
		});
	}

	return jsonArray;
}
DECLAREVARFROMSTANDARDCHOICE.prototype.hasReturn = function() {
	return true;
}

/**
 * gets bizdomain description
 * 
 * @param sdName ,
 *            name of standard choice
 * @param sdValue ,
 *            value to be trandlated
 * @returns
 */
DECLAREVARFROMSTANDARDCHOICE.getStandardChoiceDescByLanguage = function(sdName, sdValue, language) {

	var sql = "select VALUE_DESC from " + dbObjectPrefix + "RBIZDOMAIN_VALUE_I18N where RES_ID in (";
	sql += " select RES_ID from " + dbObjectPrefix + "RBIZDOMAIN_VALUE where BIZDOMAIN='" + sdName + "'";
	sql += " and BIZDOMAIN_VALUE='" + sdValue + "')";
	sql += " and LANG_ID = '" + language + "'";

	return DECLAREVARFROMSTANDARDCHOICE.execScalar(sql)
}

/**
 * gets bizdomain description
 * 
 * @param sdName ,
 *            name of standard choice
 * @param sdValue ,
 *            value to be trandlated
 * @returns
 */
DECLAREVARFROMSTANDARDCHOICE.getStandardChoiceValueByLanguage = function(sdName, sdValue, language) {
	var sql = "select BIZDOMAIN_VALUE from " + dbObjectPrefix + "RBIZDOMAIN_VALUE_I18N where RES_ID in (";
	sql += " select RES_ID from " + dbObjectPrefix + "RBIZDOMAIN_VALUE where BIZDOMAIN='" + sdName + "'";
	sql += " and BIZDOMAIN_VALUE='" + sdValue + "')";
	sql += " and LANG_ID = '" + language + "'";
	return DECLAREVARFROMSTANDARDCHOICE.execScalar(sql)
}
/**
 * execute query and return the first value of the first row
 * @param sql
 * @returns {String}
 */
DECLAREVARFROMSTANDARDCHOICE.execScalar = function(sql) {
	var ret = "";
	var aadba = com.accela.aa.datautil.AADBAccessor.getInstance();
	var result = aadba.select(sql, null);
	if (result.size() > 0 && result.get(0)) {
		ret = completeCapResult.get(0)[0];
	}
	return ret;
}

DECLAREVARFROMSTANDARDCHOICE.prototype.run = function(record, params, context) {
	var StandardChoiceName = params.StandardChoiceName;
	var StandardChoiceValue = params.StandardChoiceValue;
	var varName = params.RuntimeVarName;
	if (!varName) {
		varName = "StandardChoiceResult";
	}

	var returnValue = "";
	var PreferLanguage = params.PreferLanguage;
	if(PreferLanguage == "English"){
		PreferLanguage = "en_US";
	}else if(PreferLanguage == "Arabic"){
		PreferLanguage = "ar_AE";
	}
	if (params.ReturnType == "DisplayValue") {
		if (params.PreferLanguage == "System") {
			var getBizDomain = aa.bizDomain.getBizDomainByValue(StandardChoiceName, StandardChoiceValue);
			if (getBizDomain.getSuccess()) {
				var vizDomainModel = getBizDomain.getOutput()
				returnValue = vizDomainModel.getBizdomainValue();
			}
		} else {
			returnValue = DECLAREVARFROMSTANDARDCHOICE.getStandardChoiceValueByLanguage(StandardChoiceName, StandardChoiceValue, PreferLanguage);
		}
	} else if (params.ReturnType == "Description") {
		if (params.PreferLanguage == "System") {
			var getBizDomain = aa.bizDomain.getBizDomainByValue(StandardChoiceName, StandardChoiceValue);
			if (getBizDomain.getSuccess()) {
				var vizDomainModel = getBizDomain.getOutput()
				returnValue = vizDomainModel.getDescription();
			}
		} else {
			returnValue = DECLAREVARFROMSTANDARDCHOICE.getStandardChoiceDescByLanguage(StandardChoiceName, StandardChoiceValue, PreferLanguage)
		}
	}

	context.debug("adding " + varName + " to context.Runtime");
	context.debug("runtime value:" + returnValue);
	context.Runtime[varName] = returnValue;
}