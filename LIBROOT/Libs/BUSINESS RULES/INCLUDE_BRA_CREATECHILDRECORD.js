/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_CREATECHILDRECORD.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JONATHAN
| Created at	: 29/11/2016 14:58:03
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function CREATECHILDRECORD() {
	BRA.call(this, "CREATECHILDRECORD", "Create Child Record");
}
CREATECHILDRECORD.prototype = Object.create(BRA.prototype);
CREATECHILDRECORD.prototype.constructor = CREATECHILDRECORD;
CREATECHILDRECORD.prototype.getAuthor = function() {
	return "Jonathan Xu";
}
CREATECHILDRECORD.prototype.getDescription = function() {
	return "this action create child record";
}
CREATECHILDRECORD.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];
	if (paramName == "RecordType") {
		var capTypes = aa.cap.getCapTypeList(null).getOutput();
		if (capTypes != null) {
			for ( var i in capTypes) {
				var capType = capTypes[i].getCapType().toString();
				var obj = new Object();
				obj.text = String(capType);
				obj.value = String(capType);
				jsonArray.push(obj);
			}
		}
	}

	return jsonArray;
}
CREATECHILDRECORD.getAccessName = function(name) {
	if (isNaN(name)) {
		return (/^[a-z0-9][a-z0-9_]*$/.test(name)) ? "." + name : "['" + name + "']";
	} else {
		return "[" + name + "]"
	}
}
CREATECHILDRECORD.prototype.contributeVariables = function(context, params) {
	var varName = params.RuntineVarName;
	if (!varName) {
		varName = "Var";
	}
	var operation = params.Operation;

	context.Runtime[varName] = "this.Runtime" + CREATECHILDRECORD.getAccessName(varName);

}
CREATECHILDRECORD.prototype.hasReturn = function() {
	return true;
}
CREATECHILDRECORD.prototype.getParams = function() {
	return {
		source : {
			RuntineVarName : String("NewRecord"),
			RecordType : String(""),
			ApplicationName : String(""),
			CloneContact : String("false"),
			CloneLP : String("false"),
			CloneAddress : String("false"),
			CloneParcel : String("false"),
			CloneOwner : String("false")
		},
		config : {
			RecordType : {
				help : "the record type",
				displayName : String("Record Type"),
				editor : this.buildCombo("RecordType")
			},
			RuntineVarName : {
				help : "the varibale name that will appear in the context under runtime folder",
				displayName : String("Runtine variable name"),
				editor : {
					xtype : 'textfield'

				}
			},
			ApplicationName : {
				help : "the application name",
				displayName : String("Application Name"),
				editor : {
					xtype : 'expfield'
				}
			},
			CloneContact : {
				help : "clone the contact from parent",
				displayName : String("Clone Contact"),
				editor : {
					xtype : 'checkbox'
				}
			},
			CloneLP : {
				help : "clone the license professional from parent",
				displayName : String("Clone LP"),
				editor : {
					xtype : 'checkbox'
				}
			},
			CloneAddress : {
				help : "clone the address from parent",
				displayName : String("Clone Address"),
				editor : {
					xtype : 'checkbox'
				}
			},
			CloneParcel : {
				help : "clone the parcel from parent",
				displayName : String("Clone Parcel"),
				editor : {
					xtype : 'checkbox'
				}
			},
			CloneOwner : {
				help : "clone the owner from parent",
				displayName : String("Clone Owner"),
				editor : {
					xtype : 'checkbox'
				}
			}
		}
	}
}

CREATECHILDRECORD.prototype.run = function(record, params, context) {
	var RecordType = params.RecordType;
	var ApplicationName = params.ApplicationName;
	var CloneContact = params.CloneContact;
	var CloneLP = params.CloneLP;
	var CloneAddress = params.CloneAddress;
	var CloneParcel = params.CloneParcel;
	var CloneOwner = params.CloneOwner;
	var splited = String(RecordType).split("/");
	if (splited.length == 4) {
		var capId = record.getCapID();
		var newID = Record.createNew(RecordType, ApplicationName);
		var newRecord = new Record(newID);
		// Clone LP
		if (CloneLP == "true") {
			var licenses = record.getLicenses();
			if (licenses != null) {
				for ( var i in licenses) {
					var licenseNum = licenses[i].getLicenseNbr();
					newRecord.addLicense(licenseNum);
				}
			}
		}
		// Clone Contact
		if (CloneContact == "true") {
			var capContacts = aa.people.getCapContactByCapID(capId).getOutput();
			if (capContacts != null) {
				for ( var i in capContacts) {
					var capContact = capContacts[i].getCapContactModel();
					if (capContact != null) {
						capContact.setCapID(newRecord.capId);
						aa.people.createCapContact(capContact);
					}
				}
			}
		}
		// Clone Address
		if (CloneAddress == "true") {
			var addresses = record.getAddressesCaps();
			if (addresses != null) {
				for ( var index in addresses) {
					var address = addresses[index];
					address.setCapID(newRecord.capId);
					aa.address.createAddress(address);
				}
			}
		}
		// Clone Parcel
		if (CloneParcel == "true") {
			var parcels = aa.parcel.getParcelDailyByCapID(capId.getID1(), capId.getID2(), capId.getID3()).getOutput();
			if (parcels != null) {
				for ( var i in parcels) {
					var parcel = parcels[i];
					parcel.setCapIDModel(newRecord.capId);
					aa.parcel.createCapParcel(parcel);
				}
			}
		}

		//Clone Owner
		if (CloneOwner == "true") {
			var owners = aa.owner.getOwnerByCapId(capId).getOutput();
			if (owners != null) {
				for ( var i in owners) {
					var owner = owners[i];
					owner.setCapID(newRecord.capId);
					aa.owner.createCapOwnerWithAPOAttribute(owner);
				}
			}
		}

		aa.cap.createAppHierarchy(capId, newID);
		var varName = params.RuntineVarName;
		if (!varName) {
			varName = "NewRecord";
		}
		context.debug("adding " + varName + " to context.Runtime")
		context.Runtime[varName] = newID.getCustomID();
	}
}