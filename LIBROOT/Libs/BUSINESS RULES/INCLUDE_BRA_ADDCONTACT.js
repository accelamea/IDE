/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_ADDCONTACT.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JONATHAN
| Created at	: 30/11/2016 16:39:23
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function ADDCONTACT() {
	BRA.call(this, "ADDCONTACT", "Add Contact");
}
ADDCONTACT.prototype = Object.create(BRA.prototype);
ADDCONTACT.prototype.constructor = ADDCONTACT;

ADDCONTACT.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];

	return jsonArray;
}

ADDCONTACT.prototype.validateParams = function(params) {
	var FirstName = params.FirstName;
	if(!FirstName){
		throw "FirstName can't be empty!"
	}
}

ADDCONTACT.prototype.getParams = function() {
	return {
		source : {
			FirstName : String(""),
			MiddleName : String(""),
			LastName : String("")
		},
		config : {
			FirstName : {
				displayName : String("First Name"),
				editor : {
					xtype : 'expfield'
				}
			},
			MiddleName : {
				displayName : String("Middle Name"),
				editor : {
					xtype : 'expfield'
				}
			},
			LastName : {
				displayName : String("Last Name"),
				editor : {
					xtype : 'expfield'
				}
			}
		}
	}
}

ADDCONTACT.prototype.run = function(record, params, context) {
	var FirstName = params.FirstName;
	var MiddleName = params.MiddleName;
	if(!MiddleName){
		MiddleName = "";
	}
	
	var LastName = params.LastName;
	var people = aa.people.getPeopleByFMLName(FirstName,MiddleName,LastName).getOutput();
	if(people != null & people.length != 0){
		var peopleModel = people[0];
		aa.people.createCapContactWithRefPeopleModel(record.capId,peopleModel);
	}
}