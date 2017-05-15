/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_JUNIT.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 14/05/2017 10:28:09
|
/------------------------------------------------------------------------------------------------------*/
if (typeof DAO === "undefined") {
	eval(getScriptText("INCLUDE_DAO"));
}
function JUNIT() {
	this.logs = [];
	this.failed = false;
}
JUNIT.execute = function() {

	var ret = new DAO("REVT_AGENCY_SCRIPT").execQuery({
		"SCRIPT_CODE" : "INCLUDE_%_TESTCASE",
		"SERV_PROV_CODE" : aa.getServiceProviderCode()
	}, null, true, null);
	var arrTests = [];
	for ( var xx in ret) {
		try {
			var rowx = ret[xx];
			var scriptName = rowx["SCRIPT_CODE"]
			var className = scriptName.substring("INCLUDE_".length)

			eval(getScriptText(scriptName));

			eval("arrTests.push(new " + className + "() );")
		} catch (e) {
			logDebug("ERROR adding action from script " + scriptName + " : " + e)
		}

	}

	for ( var testIndex in arrTests) {
		var testCase = arrTests[testIndex];
		testCase.run()

	}
	return arrTests;
}
JUNIT.prototype.log = function(level, message) {
	this.logs.push({
		level : level,
		message : message
	});
}
JUNIT.prototype.info = function(message) {
	this.logs.push({
		level : "INFO",
		message : message
	});
}
JUNIT.prototype.debug = function(message) {
	this.logs.push({
		level : "DEBUG",
		message : message
	});
}
JUNIT.prototype.warn = function(message) {
	this.logs.push({
		level : "WARN",
		message : message
	});
}
JUNIT.prototype.error = function(message) {
	this.failed = true;
	this.logs.push({
		level : "ERROR",
		message : message
	});
}
JUNIT.prototype.dumpLogs = function() {
	if (this.failed) {
		logDebug("FAIL   :JUNIT " + this + " EXECUTION LOGS")
	} else {
		logDebug("SUCCESS:JUNIT " + this + " EXECUTION LOGS")
	}

	logDebug("------------------------------------------------------")
	logDebug("LEVEL\tMESSAGE")
	for ( var x in this.logs) {
		var log = this.logs[x];
		logDebug(log.level + "\t" + log.message)
	}
	logDebug("------------------------------------------------------")
}
JUNIT.prototype.toString = function() {
	return this.constructor.name;
}
JUNIT.prototype.run = function() {
	var prototype = Object.getPrototypeOf(this);
	for ( var x in prototype) {

		if (prototype.hasOwnProperty(x) && prototype[x] instanceof Function) {
			var fnName = x;
			if (fnName == "constructor") {
				continue;
			}
			var fn = prototype[x]

			if (fn.name) {
				fnName = fn.name;
			}
			fnName += "";
			if (new java.lang.String(fnName).toLowerCase().endsWith("test")) {

				try {
					fn.call(this)
					this.log("SUCCESS", this + "." + fnName)
				} catch (e) {
					this.log("FAIL", this + "." + fnName + ": " + e)
				}

			}

		}
	}
}
JUNIT.fail = function(message) {
	throw "AssertionError:" + (message == null ? "" : message);
}
JUNIT.assertTrue = function(a, message) {
	if (a != true) {
		JUNIT.fail(message)
	}
}
JUNIT.assertFalse = function(a, message) {
	if (a != false) {
		JUNIT.fail(message)
	}
}
JUNIT.assertEquals = function(a, b, message) {
	if (a != b) {
		JUNIT.fail(message)
	}
}
JUNIT.assertNotEquals = function(a, b, message) {
	if (a == b) {
		JUNIT.fail(message)
	}
}
JUNIT.assertNotNull = function(a, message) {
	JUNIT.assertTrue(a != null && a != undefined, message)
}
JUNIT.assertNull = function(a, message) {
	JUNIT.assertTrue(a == null || a == undefined, message)
}