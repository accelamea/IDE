/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_SOAPAPI.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: YTITI
| Created at	: 09/10/2016 15:13:21
|
/------------------------------------------------------------------------------------------------------*/

/**
 * initialize a SOAP request that can be called multiple times with different input
 * 
 * @param {string}
 *            url - the SOAP request URL
 * @param {string}
 *            soapAction - the SOAP request soapAction
 * @param {string}
 *            username - the username for the SOAP request
 * @param {string}
 *            password - the password for the SOAP request
 */
aa.includeScript("INCLUDE_UTILS");
/**
 * SOAP request bound to specific SOAP action.
 * 
 * @constructor
 * @param {string}
 *            url - the url for the soap service.
 * @param {string}
 *            soapAction - the soap action for the request.
 * @param {string}
 *            username - the username for the request.
 * @param {string}
 *            password - the password for the request.
 */
function SOAPAPI(url, soapAction, username, password) {
	if (Utils.isBlankOrNull(url)) {
		throw "ERROR: Failed to initialize SOAP API, the URL is required";
	}
	if (Utils.isBlankOrNull(soapAction)) {
		//throw "ERROR: Failed to initialize SOAP API, the SOAP action is required";
	}
	this.url = url;
	this.soapAction = soapAction;

	if (Utils.isBlankOrNull(username)) {
		this.username = "";
	} else {
		this.username = username;
	}

	if (Utils.isBlankOrNull(password)) {
		this.password = "";
	} else {
		this.password = password;
	}
}

/**
 * Send a SOAP request
 * 
 * @param {string}
 *            soapMessage - the body of the SOAP request, with ${PARAM} used for parameters.
 * @param {object}
 *            parameters optional - key-value object of the soap parameters as configured in soapMessage i.e { 'USERNAME': 'John' }.
 * @returns {string} the response body.
 */
SOAPAPI.prototype.sendRequest = function(soapMessage, parameters) {

	if (parameters) {
		if (typeof parameters != "object") {
			throw "ERROR: the provided parameters variable must be an object in the key-value format i.e { 'USERNAME': 'John' }";
		}
		// update the soap message with the paramters
		soapMessage = SOAPAPI.prepareMessageParameters(soapMessage, parameters);
	}

	var resultObj = aa.util.httpPostToSoapWebService(this.url, soapMessage, this.username, this.password, this.soapAction);

	if (!resultObj.getSuccess()) {
		throw "ERROR: SOAP request returned " + resultObj.getErrorMessage();
	}

	return resultObj.getOutput();
}

/**
 * Send a SOAP request and get specific fields
 * 
 * @param {string}
 *            soapMessage - the body of the SOAP request
 * @param {object}
 *            parameters - key-value object of the soap parameters as configured in the soapMessage i.e { '@firstName': 'John' }
 * @param {array}
 *            returnFields - specify which fields you want returned from the response
 * @returns {object} an object with the field name and field value mapping.
 */
SOAPAPI.prototype.sendRequestGetFields = function(soapMessage, parameters, returnFields) {
	var responseBody = this.sendRequest(soapMessage, parameters);
	var fields = {};

	for ( var i in returnFields) {
		var value = aa.util.getValueFromXML(returnFields[i], responseBody);
		if (!Utils.isBlankOrNull(value)) {
			fields[returnFields[i]] = value;
		}
	}
	return fields;
}

/**
 * Sets the parameters for the specified soap message body
 * 
 * @param {string}
 *            soapMessage - the body of the SOAP request
 * @param {object}
 *            parameters - key-value object of the soap parameters as configured in the soapMessage i.e { '@firstName': 'John' }
 * @returns {string} soapMessage with the parameters set.
 */
SOAPAPI.prepareMessageParameters = function(soapMessage, parameters) {
	for ( var key in parameters) {
		if (parameters.hasOwnProperty(key)) {
			if (soapMessage.indexOf(key) == -1) {
				continue;
			}

			var value = parameters[key];

			// Using Java String.replace with an undefined or null values results in an exception
			if (Utils.isBlankOrNull(value)) {
				value = "";
			}

			soapMessage = soapMessage.replace("${" + key + "}", Utils.encodeXML(value));
		}
	}

	// Check if there are any parameters not replaced in soapMessage
	var regex = />\$\{(\w*)\}</g;
	var match = regex.exec(soapMessage);
	var missingParams = [];
	while (match != null) {
		// match[1] is the first capturing group
		missingParams.push(match[1]);
		match = regex.exec(soapMessage);
	}
	if (missingParams.length > 0) {
		aa.debug("SOAPAPI", "WARN: The following parameters [" + missingParams.join(",") + "] were not set in the soap message " + soapMessage);
	}
	return soapMessage;
}
SOAPAPI.prototype.sendRequestGetOBJ = function(soapMessage, parameters) {

	var responseBody = this.sendRequest(soapMessage, parameters);

	return new SOAPResult(responseBody).toJson()
}

function SOAPResult(res) {
	var sreader = new java.io.StringReader(res)
	var builder = new org.jdom.input.SAXBuilder();
	this.doc = builder.build(sreader)
	this.references = aa.util.newHashMap();

}
SOAPResult.prototype.parseParam = function(eltParam) {
	var ret = {};
	var name = eltParam.getName();
	var href = eltParam.getAttributeValue("href");
	if (href) {
		eltParam = this.references.get(href);
	}
	ret.name = String(name);
	ret.obj = {};
	var subparams = eltParam.getChildren();
	if (subparams.size() > 0) {
		subparams = subparams.toArray();
		for ( var x in subparams) {
			var pchild = subparams[x]
			var pc = this.parseParam(pchild);
			if (ret.obj[pc.name] != null) {
				var prev = ret.obj[pc.name];
				ret.obj = [ prev ];
			}
			if (Array.isArray(ret.obj)) {
				ret.obj.push(pc.obj)
			} else {
				ret.obj[pc.name] = pc.obj;
			}
		}
	} else {
		ret.obj = String(eltParam.getText());
	}
	return ret;
}
SOAPResult.prototype.parse = function(params) {
	var ret = {};
	if (params.size() > 0) {
		var eltParam = params.get(0);
		var obj = this.parseParam(eltParam)
		ret = obj.obj
	}
	return ret;
}

SOAPResult.prototype.toJson = function() {
	var ret = {};
	var eltMsg = this.doc.getRootElement();
	var ns = eltMsg.getNamespace();
	var eltBody = eltMsg.getChild("Body", ns);
	var bodyContent = eltBody.getChildren();
	var eltres = bodyContent.get(0);
	var params = eltres.getChildren();

	for (i = 1; i < bodyContent.size(); i++) {
		var elt = bodyContent.get(i)
		if (elt.getName().equalsIgnoreCase("multiRef")) {
			var id = elt.getAttributeValue("id");
			this.references.put("#" + id, elt)
		}
	}

	ret = this.parse(params);
	return ret;
}