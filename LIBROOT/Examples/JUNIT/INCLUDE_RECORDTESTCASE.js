/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_RECORDTESTCASE.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 14/05/2017 11:37:40
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_RECORD"));
}
function RECORDTESTCASE() {
	JUNIT.call(this);
	this.record = null;
}

RECORDTESTCASE.prototype = Object.create(JUNIT.prototype);
RECORDTESTCASE.prototype.constructor = RECORDTESTCASE;

RECORDTESTCASE.prototype.createRecord = function() {
	if (this.record == null) {

		var recId = Record.createNew("Building/Financial/Loan/BFLO", "test record");

		JUNIT.assertNotNull(recId, "could not create record of type Building/Financial/Loan/BFLO");
		this.record = new Record(recId)
		this.record = new Record(recId.customID);
	}
	return this.record;

}
RECORDTESTCASE.prototype.createNewWithAltIDTest = function() {

	var id = "TEST" + new Date().getTime();

	var recId = Record.createNewWithAltID("Building/Financial/Loan/BFLO", "test record", id);

	JUNIT.assertNotNull(recId, "could not create record with alt id of type Building/Financial/Loan/BFLO");
	record = new Record(id)

}
RECORDTESTCASE.prototype.getASITest = function() {
	var rec = this.createRecord();
	rec.editASI("LOAN DETAILS", "BMI", "33")
	var asi = rec.getASI("LOAN DETAILS", "BMI", "-1")
	JUNIT.assertEquals(asi, "33", "problem with EDIT ASI or GET ASI ")
}
RECORDTESTCASE.prototype.getAndSetCapClassTest = function() {
	var rec = this.createRecord();
	rec.setCapClass("COMPLETE");
	var capClass = rec.getCapClass();
	JUNIT.assertEquals(capClass, "COMPLETE", "problem with set and get app class")
}
RECORDTESTCASE.prototype.getAndSetCreatedByTest = function() {
	var rec = this.createRecord();
	rec.setCreatedBy("SLEIMAN");
	var cb = rec.getCreatedBy();
	JUNIT.assertEquals(cb, "SLEIMAN", "problem with set and get created by")
}
RECORDTESTCASE.prototype.getAndSetCustomIDTest = function() {
	var rec = this.createRecord();
	oldid = rec.getCustomID();
	JUNIT.assertNotNull(oldid, "record custom ID is null");
	var id = "T" + new Date().getTime();
	rec.updateCustomID(id);
	rec = new Record(id);
	var cb = rec.getCustomID();
	rec.updateCustomID(oldid);
	JUNIT.assertEquals(cb, id, "problem with set and get custom ID")
}
RECORDTESTCASE.prototype.getCreationDateTest = function() {
	var rec = this.createRecord();
	rec.getScheduledDate()

	JUNIT.assertNotNull(rec.getCreationDate(), "getCreationDate is null");

}