/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_ACABASE.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 07/02/2016 11:26:47
|
/------------------------------------------------------------------------------------------------------*/

SCRIPT_VERSION = "3.0";
eval(getScriptText("INCLUDES_ACCELA_FUNCTIONS"));
eval(getScriptText("INCLUDES_CUSTOM"));
eval(getScriptText("INCLUDES_ACCELA_GLOBALS"));
var globalEval = eval;

/**
 * constructor for the base page
 */
function ACABASE() {
	this.bshowMessage = true;
	this.bshowDebug = true;
	this.bcancel = false;
	this.tdebug = "";
	this.tmessage = "";
	this.asiGroups = null;
	this.capModel = null;
}

/**
 * cancel the event and set the message
 * @param message the message to set
 */
ACABASE.prototype.cancel = function(message) {
	this.bcancel = true;
	this.tmessage = message;
}
/**
 * show debug log
 */
ACABASE.prototype.showDebug = function() {
	this.bshowDebug = true;
}

/**
 * show message
 * @param message the message to show
 */
ACABASE.prototype.showMessage = function(message) {
	this.bshowMessage = true;
	this.tmessage = message;
}
/**
 * this is the main function for the execution, it should be defined in the page flow script
 */
ACABASE.prototype.execute = function() {
	throw "Execute not implemented in base page"
}
/**
 * 
 * @returns the CapModel environment variable
 */
ACABASE.prototype.getCapModel = function() {
	if (this.capModel == null) {
		this.capModel = aa.env.getValue("CapModel");
	}
	return this.capModel;
}

/**
 * 
 * @returns the ASI groups of the CapModel of this page flow
 */
ACABASE.prototype.getAsiGroups = function() {
	if (this.asiGroups == null) {
		this.asiGroups = this.getCapModel().getAppSpecificInfoGroups();
	}
	return this.asiGroups;
}
/**
 * set ASI field value
 * @param fieldName the asi field name
 * @param value the value to set
 */
ACABASE.prototype.setFieldValue = function(fieldName, value) {

	var asiGroups = this.getAsiGroups();

	var iteGroups = asiGroups.iterator();
	while (iteGroups.hasNext()) {
		var group = iteGroups.next();
		var fields = group.getFields();
		if (fields != null) {
			var iteFields = fields.iterator();
			while (iteFields.hasNext()) {
				var field = iteFields.next();
				if (fieldName == field.getCheckboxDesc()) {

					field.setChecklistComment(value);
					group.setFields(fields);
				}
			}
		}
	}
	this.asiGroups = asiGroups;
}

/**
 * set ASI drop down field values ( this one is useful in case you have a dynamic dropdown list);
 * @param fieldName the drop down field name
 * @param objValues the object of values. ex: var obj={}. obj["key"]="value";
 */
ACABASE.prototype.setDropdownValues = function(fieldName, objValues) {

	var value = aa.util.newArrayList();
	for ( var val in objValues) {
		var model = aa.proxyInvoker.newInstance("com.accela.aa.aamain.cap.RefAppSpecInfoDropDownModel").getOutput();
		model.setAttrValue(val);
		model.setResAttrValue(objValues[val]);
		model.setFieldLabel(fieldName);
		value.add(model);
	}

	var asiGroups = this.getAsiGroups();

	var iteGroups = asiGroups.iterator();
	while (iteGroups.hasNext()) {
		var group = iteGroups.next();
		var fields = group.getFields();
		if (fields != null) {
			var iteFields = fields.iterator();
			while (iteFields.hasNext()) {
				var field = iteFields.next();
				if (fieldName == field.getCheckboxDesc()) {
					field.setValueList(value);
					group.setFields(fields);
				}
			}
		}
	}
	this.asiGroups = asiGroups;

}

/**
 * internal function to be executed after the execution
 */
ACABASE.prototype.afterExecute = function() {
	var capModel = this.getCapModel();
	capModel.setAppSpecificInfoGroups(this.getAsiGroups());
	aa.env.setValue("CapModel", capModel);

	if (this.tdebug.indexOf("**ERROR") > 0) {
		aa.env.setValue("ErrorCode", "1");
		aa.env.setValue("ErrorMessage", this.tdebug);
	} else {
		if (this.cancel) {
			aa.env.setValue("ErrorCode", "-2");
			if (this.bshowMessage)
				aa.env.setValue("ErrorMessage", this.tmessage);
			if (this.bshowDebug)
				aa.env.setValue("ErrorMessage", this.tdebug);
		} else {
			aa.env.setValue("ErrorCode", "0");
			if (this.bshowMessage)
				aa.env.setValue("ErrorMessage", this.tmessage);
			if (this.bshowDebug)
				aa.env.setValue("ErrorMessage", this.tdebug);
		}
	}
}

/**
 * internal function, should be called after the implementation in the page flow script
 */
function run() {
	try {
		var pfs = new ACABASE();
		pfs.execute();
		pfs.afterExecute();

	} catch (e) {
		aa.env.setValue("ErrorCode", "1");
		aa.env.setValue("ErrorMessage", e + "");
	}
}