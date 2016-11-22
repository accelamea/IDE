/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BASEBATCH.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 09/03/2016 10:44:24
|
/------------------------------------------------------------------------------------------------------*/
var globalEval = eval;
var showDebug = true;
var capId = null;
var message = "";
var debug = "";
var showMessage = true;
var showDebug = true;
var br = "<BR>";
eval(getScriptText("INCLUDES_ACCELA_FUNCTIONS"));
eval(getScriptText("INCLUDES_CUSTOM"));
function Batch() {
	this.name = aa.env.getValue("BatchJobName") + "";
	this.showDebug = true;
	this.maxSeconds = 5 * 60;
	this.batchJobID = aa.batchJob.getJobID().getOutput();
	this.systemUserObj = aa.person.getUser("ADMIN").getOutput();

}
Batch.prototype.include = function(vScriptName) {

	globalEval(getScriptText(vScriptName))

}
Batch.prototype.log = function(etype, edesc, createEventLog) {
	if (createEventLog) {
		//		var sysDate = aa.date.getCurrentDate();
		//		aa.eventLog.createEventLog(etype, "Batch Process", this.name, sysDate, sysDate, "", edesc, this.batchJobID);
	}
	var msg = etype + " : " + edesc;
	if (etype == "ERROR") {
		msg = "<font color='red' size=2>" + msg + "</font><BR>"
	} else {
		msg = "<font color='green' size=2>" + msg + "</font><BR>"
	}
	if (etype == "DEBUG") {
		if (this.showDebug) {
			aa.print(msg);
		}

	} else {
		aa.print(msg);
	}
}
Batch.prototype.execute = function() {
	throw "Execute not implemented in base page"
}

function run() {
	try {
		var batch = new Batch();
		logDebug = function(e) {
			batch.log("DEBUG", e)
		}
		batch.log("DEBUG", "Start of Job", false)
		var startDate = new Date();
		batch.execute();
		var endDate = new Date();
		var elapsed = (endDate - startDate) / 1000;
		batch.log("DEBUG", "End of Job: Elapsed Time : " + elapsed + " Seconds", false)
		aa.env.setValue("ErrorCode", "0");

	} catch (e) {
		aa.print("ERROR:" + e)
		batch.log("ERROR", e, true);
		aa.env.setValue("ErrorCode", "1");
		aa.env.setValue("ErrorMessage", e + "");
	}
}