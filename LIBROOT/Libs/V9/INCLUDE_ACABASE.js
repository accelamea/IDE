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
/*-USER-----------DATE----------------COMMENTS----------------------------------------------------------/
 | SALIM           25/05/2016 15:28:46   Adding new methods [setCapModel,setLicenseProfessional]
 /-----END CHANGE LOG-----------------------------------------------------------------------------------*/

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
	this.asitGroups = null;
	this.capModel = null;
}

/**
 * cancel the event and set the message
 * 
 * @param message
 *            the message to set
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
 * 
 * @param message
 *            the message to show
 */
ACABASE.prototype.showMessage = function(message) {
	this.bshowMessage = true;
	this.tmessage = message;
}
/**
 * this is the main function for the execution, it should be defined in the page
 * flow script
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
 * @param CapModel :
 *            the updated capModel sets the environment CapModel
 */
ACABASE.prototype.setCapModel = function(capModel) {
	if (capModel == null) {
		aa.env.setValue("CapModel", this.getCapModel());
	} else {
		aa.env.setValue("CapModel", capModel);
	}
}
/**
 * 
 * @returns gets the ASI field value
 */
ACABASE.prototype.getAppSpecific = function(itemName) {
	return this.getFieldValue(itemName);
}
/**
 * 
 * @returns sets the ASI field value
 */
ACABASE.prototype.editAppSpecific = function(fieldName, value) {
	this.setFieldValue(fieldName, value);
}
/**
 * 
 * @param lp:
 *            license Professional
 * @result : license Professional attached to the CapModel
 */
ACABASE.prototype.setLicenseProfessional = function(lp) {
	var thisCapModel = this.getCapModel();
	thisCapModel.setLicenseProfessionalModel(lp);
}

/**
 * 
 * @returns gets the ASI field value from App Specific Info Groups
 */
ACABASE.prototype.getFieldValue = function(fieldName) {
	var val = null;
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
					val = field.getChecklistComment();
					break;
				}
			}
		}
	}
	return val;
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
 * 
 * @returns the ASIT groups of the CapModel of this page flow
 */
ACABASE.prototype.getAsitGroups = function() {
	if (this.asitGroups == null) {
		this.asitGroups = this.getCapModel().getAppSpecificTableGroupModel();
	}
	return this.asitGroups;
}
/**
 * set ASI field value
 * 
 * @param fieldName
 *            the asi field name
 * @param value
 *            the value to set
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
					break;
				}
			}
		}
	}
	this.asiGroups = asiGroups;
	return asiGroups;
}

/**
 * set ASI drop down field values ( this one is useful in case you have a
 * dynamic dropdown list);
 * 
 * @param fieldName
 *            the drop down field name
 * @param objValues
 *            the object of values. ex: var obj={}. obj["key"]="value";
 */
ACABASE.prototype.setDropdownValues = function(fieldName, objValues) {

	var value = aa.util.newArrayList();
	for ( var val in objValues) {
		var model = aa.proxyInvoker.newInstance("com.accela.aa.aamain.cap.RefAppSpecInfoDropDownModel").getOutput();
		model.setAttrValue(objValues[val]);
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
 * Gets the ASI Tables on the record in a hashmap with the table name as the key
 * and the table value array as the value
 */
ACABASE.prototype.getASITables = function() {

	var tableMap = aa.util.newHashMap();
	var gm = this.getAsitGroups();

	var ta = gm.getTablesMap();
	var tai = ta.values().iterator();
	while (tai.hasNext()) {
		var tsm = tai.next();

		if (tsm.rowIndex.isEmpty())
			continue;
		var tempObject = new Array;
		var tempArray = new Array;
		var tn = tsm.getTableName();

		var tsmfldi = tsm.getTableField().iterator();
		var tsmcoli = tsm.getColumns().iterator();
		var numrows = 1;
		while (tsmfldi.hasNext()) {
			if (!tsmcoli.hasNext()) {
				var tsmcoli = tsm.getColumns().iterator();
				tempArray.push(tempObject);
				var tempObject = new Array;
				numrows++
			}
			var tcol = tsmcoli.next();
			var tval = tsmfldi.next();
			tempObject[tcol.getColumnName()] = tval
		}
		tempArray.push(tempObject);
		tableMap.put(tn, tempArray);
	}

	return tableMap;
}
/**
 * 
 * @returns the Contact group of the CapModel of this page flow
 */
ACABASE.prototype.getContacts = function() {
	return this.getCapModel().getContactsGroup();
}

/**
 * 
 * add contact to the pageflow contacts
 */
ACABASE.prototype.addContact = function(contact) {
	var contacts = this.getContacts();
	
	contact.setCapID(this.getCapModel().getCapID());
	contact.setComponentName("Applicant");
	
	contacts.add(contact);
}

/**
 * internal function to be executed after the execution
 */
ACABASE.prototype.afterExecute = function() {
	var capModel = this.getCapModel();
	capModel.setAppSpecificInfoGroups(this.getAsiGroups());
	capModel.setAppSpecificTableGroupModel(this.getAsitGroups());
	//capModel.setContactsGroup(this.getContacts());
	
	aa.env.setValue("CapModel", capModel);

	if (this.tdebug.indexOf("**ERROR") > 0) {
		aa.env.setValue("ErrorCode", "1");
		aa.env.setValue("ErrorMessage", this.tdebug);
	} else {
		if (this.bcancel) {
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
 * internal function, should be called after the implementation in the page flow
 * script
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