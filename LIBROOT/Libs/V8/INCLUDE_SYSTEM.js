/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_SYSTEM.js
| Event			: 
|
| Usage			: 
| Notes			: System functionalities 
| Created by	: SLEIMAN
| Created at	: 12/10/2016 10:50:03
|
/------------------------------------------------------------------------------------------------------*/
var GLOBAL_EVAL = eval;
var System = {};

System.require = function(serviceName, scriptName) {
	var type = eval("typeof " + serviceName);
	if (type == "undefined") {
		if (scriptName == null || scriptName == "") {
			scriptName = "INCLUDE_" + serviceName.toUpperCase();
		}
		System.include(scriptName);
	}
}
System.include = function(scriptName) {
	var serviceJs = getScriptText(scriptName);
	if (serviceJs == null || serviceJs == "") {
		logDebug("WARN: SCRIPT [" + scriptName + "] not Found or empty")
	} else {
		logDebug("INCLUDING " + scriptName)
		GLOBAL_EVAL(serviceJs);
	}
}
System.getLanguage = function() {
	return com.accela.i18n.I18NContext.getI18NModel().getLanguage();
}
System.changeLanguage = function(lang) {
	com.accela.i18n.I18NContext.getI18NModel().setLanguage(lang);
}
System.getClientType = function() {
	return com.accela.i18n.I18NContext.getI18NModel().getClientType();
}
System.setClientType = function(clientType) {
	com.accela.i18n.I18NContext.getI18NModel().setClientType(clientType);
}
Date.prototype.toString = function(format) {
	return aa.util.formatDate(this, format);
}