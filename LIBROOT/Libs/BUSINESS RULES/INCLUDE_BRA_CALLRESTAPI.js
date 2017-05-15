/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_CALLRESTAPI.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JONATHAN
| Created at	: 30/11/2016 10:47:52
|
/------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_CALLRESTAPI.js
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
	eval(getScriptText("INCLUDE_HTTPAPI"));
}

function CALLRESTAPI() {
	BRA.call(this, "CALLRESTAPI", "Call Rest API");
}
CALLRESTAPI.prototype = Object.create(BRA.prototype);
CALLRESTAPI.prototype.constructor = CALLRESTAPI;

CALLRESTAPI.prototype.getAuthor = function() {
	return "Sleiman KOZAIZAN";
}
CALLRESTAPI.prototype.getDescription = function() {
	return "this action call a rest api and return a response in order to be used in other actions";
}

CALLRESTAPI.prototype.validateParams = function(params) {

	if (!params.Operation) {
		throw "Operation can't be empty!"
	}
}
CALLRESTAPI.getAccessName = function(name) {
	if (isNaN(name)) {
		return (/^[a-z0-9][a-z0-9_]*$/.test(name)) ? "." + name : "['" + name + "']";
	} else {
		return "[" + name + "]"
	}
}
CALLRESTAPI.prototype.addOperationParam = function(parentObj, name, param, path) {
	if (typeof param == "object") {
		parentObj[name] = {};
		for ( var y in param) {
			this.addOperationParam(parentObj[name], y, param[y], path + CALLRESTAPI.getAccessName(name))
		}
	} else {
		parentObj[name] = path + CALLRESTAPI.getAccessName(name)

	}
}
CALLRESTAPI.prototype.contributeVariables = function(context, params) {
	var varName = params.RuntineVarName;
	if (!varName) {
		varName = "RestResult";
	}
	var operation = params.Operation;
	eval("var settings=" + operation)
	context.Runtime[varName] = "this.Runtime" + CALLRESTAPI.getAccessName(varName);
	if (typeof settings.RESPONSE == "object") {
		context.Runtime[varName] = {};
		for ( var x in settings.RESPONSE) {
			this.addOperationParam(context.Runtime[varName], x, settings.RESPONSE[x], "this.Runtime" + CALLRESTAPI.getAccessName(varName))
		}
	}

}
CALLRESTAPI.prototype.getParams = function() {
	return {
		source : {
			Operation : String(""),
			UserName : String(""),
			Password : String(""),
			RuntineVarName : String("RestResult")
		},
		config : {
			Operation : {
				help : "the web request configuration. it has the url, the body, the headers,...",
				displayName : String("Operation"),
				editor : {
					xtype : 'restfield'

				}
			},
			RuntineVarName : {
				help : "the varibale name that will appear in the context under runtime folder",
				displayName : String("Runtine variable name"),
				editor : {
					xtype : 'textfield'

				}
			},
			UserName : {
				help : "the user name",
				displayName : String("User Name")
			},
			Password : {
				help : "the password",
				displayName : String("Password"),
				editor : {
					xtype : 'textfield'

				}
			}
		}
	}
}

CALLRESTAPI.prototype.hasReturn = function() {
	return true;
}
CALLRESTAPI.prototype.evaluateObject = function(obj, context) {
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
CALLRESTAPI.prototype.run = function(record, params, context) {

	var operation = params.Operation;
	eval("var settings=" + operation)
	var url = settings.URL;
	context.debug("url:" + url);
	var method = settings.METHOD;
	context.debug("method:" + method);
	var body = "";
	if (method != "GET" && method != "HEAD") {
		var bodyObj = settings.BODY;
		if (bodyObj != "") {
			this.evaluateObject(bodyObj, context)
			body = JSON.stringify(bodyObj);
		}
	}
	context.debug("body:" + body);
	var headersArr = settings.HEADERS;
	var headers = {};
	for ( var x in headersArr) {
		var h = headersArr[x];
		headers[h.key] = String(context.tryEvaluateSolo(h.value));
	}
	var urlParams = settings.PARAMS;
	if (url.indexOf("?") < 0) {
		url += "?"
	}

	for ( var x in urlParams) {
		var p = urlParams[x];
		var key = p.key;
		key = java.net.URLEncoder.encode(key, "UTF-8");
		var value = String(context.tryEvaluateSolo(p.value));

		value = java.net.URLEncoder.encode(value, "UTF-8");
		url += "&" + key + "=" + value

	}
	var username = params.UserName;
	context.debug("username:" + username);
	var password = params.Password;
	context.debug("password:" + password);
	if (username != "") {
		var userpass = new Packages.java.lang.String(userName + ":" + password);

		var basicAuth = "Basic " + Packages.javax.xml.bind.DatatypeConverter.printBase64Binary(userpass.getBytes());
		headers[Authorization] = basicAuth;
	}
	context.info("CALLING " + url);

	var output = HTTPAPI.send(method, url, body, headers)
	var response = output["response"];
	var ret = response;
	context.info("CALL RETURNED:" + ret);
	try {
		eval("ret=" + response);
	} catch (e) {
		context.warn("could not parse response as json:" + e)
	}
	var varName = params.RuntineVarName;
	if (!varName) {
		varName = "RestResult";
	}
	context.debug("adding " + varName + " to context.Runtime")
	context.Runtime[varName] = ret;
	return ret;
}