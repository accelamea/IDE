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
//TODO: add contact type, phone1 and email
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function ADDCONTACT() {
	BRA.call(this, "ADDCONTACT", "Add Contact");
}
ADDCONTACT.prototype = Object.create(BRA.prototype);
ADDCONTACT.prototype.constructor = ADDCONTACT;
ADDCONTACT.prototype.getAuthor = function() {
	return "Jonathan Xu";
}
ADDCONTACT.prototype.getDescription = function() {
	return "this action add a contact to record";
}
ADDCONTACT.prototype.validateParams = function(params) {
	if(!params.FirstName){
		throw "First Name cannot be empty!";
	}
	if(!params.ContactType){
		throw "Contact Type cannot be empty!";
	}
	if(!params.Email){
		throw "Email cannot be empty!";
	}else if(!ADDCONTACT.validateEmail(params.Email)){
		throw "Invalid Email address!";
	}
	if(!params.Phone){
		throw "Phone cannot be empty!";
	}
}
ADDCONTACT.prototype.getParams = function() {
	return {
		source : {
			ContactType : String(""),
			FirstName : String(""),
			MiddleName : String(""),
			LastName : String(""),
			Email : String(""),
			Phone : String(""),
			AsReference : true
		},
		config : {
			ContactType : {
				help : "contact type",
				displayName : String("Contact Type"),
				editor : this.buildCombo("ContactType")
			},
			FirstName : {
				help : "contact first name",
				displayName : String("First Name"),
				editor : {
					xtype : 'expfield'
				}
			},
			MiddleName : {
				help : "contact middle name",
				displayName : String("Middle Name"),
				editor : {
					xtype : 'expfield'
				}
			},
			LastName : {
				help : "contact last name",
				displayName : String("Last Name"),
				editor : {
					xtype : 'expfield'
				}
			},
			Email : {
				help : "contact email",
				displayName : String("Email"),
				editor : {
					xtype : 'expfield'
				}
			},
			Phone : {
				help : "contact phone number",
				displayName : String("Phone"),
				editor : {
					xtype : 'expfield'
				}
			},
			AsReference : {
				help : "Create as reference contact",
				displayName : String("Create as Reference"),
				editor : {
					xtype : 'checkboxfield'
				}
			}
		}
	}
}
ADDCONTACT.validateEmail = function(email) {
	var ret = false;
	if(email.indexOf("this.Record")!=-1 || email.indexOf("this.User") !=-1){
		ret = true;
	}else{
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		ret = re.test(email);
	}
	return ret;
}
ADDCONTACT.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];
	if (paramName == "ContactType") {
		var getContactTypesResult = aa.people.getContactTypeAll(aa.util.newQueryFormat());
		if(getContactTypesResult.getSuccess()){
		  var contactTypes = getContactTypesResult.getOutput();
		  for(var x in contactTypes){
		    var ctValue = contactTypes[x].getBizdomainValue();
		    jsonArray.push({
		      text : String(ctValue),
		      value : String(ctValue)
		    });
		  }
		}else{
		  throw "**ERROR get contact types:" + getContactTypesResult.getErrorMessage();
		}
	}
	return jsonArray;
}
/**
 * create reference contact after add record contact
 * 
 * @param record , Record object
 * @returns 
 */
ADDCONTACT.onContactAddAfter = function(record) {
    var contacts = record.getContacts();
    for ( var x in contacts) {
         var c = contacts[x];
         var p = c.getPeople();
         var cm = c.getCapContactModel()
         var ref = cm.getRefContactNumber();

         cm.setFullName(cm.getFirstName() + " " + cm.getLastName());

         if (ref == null) {
              // if contact is not reference, create and link to reference
              var capcontactid = cm.getContactSeqNumber();
              var ser = com.accela.aa.emse.dom.service.CachedService.getInstance().getPeopleService()
              // create reference contact
              var id = ser.createPeople(p, aa.getAuditID())

              cm.setRefContactNumber(id)
              cm.setContactSeqNumber(capcontactid)
              cm.setInternalUserFlag(null);
              cm.setStartDate(null);
              // update reference on contact
              var cpser = com.accela.aa.emse.dom.service.CachedService.getInstance().getCapContactService()
              cpser.editCapContact(cm, aa.getAuditID(), false)

              var sync = com.accela.aa.emse.dom.service.CachedService.getInstance().getContactSynchronizerService();
              cm.setSyncFlag("N");
              sync.manualSyncToReferenceByStopSync(cm)
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
	var ContactType = params.ContactType;
	var Email = params.Email;
	var Phone = params.Phone;
	var people = aa.people.getPeopleByFMLName(FirstName,MiddleName,LastName).getOutput();
	if(people != null && people.length != 0){
		var peopleModel = people[0];
		peopleModel.setContactType(ContactType);
		aa.people.createCapContactWithRefPeopleModel(record.capId,peopleModel);
	}else{		
		var peopleScriptModel = aa.people.createPeopleModel().getOutput();
		var peopleModel = peopleScriptModel.getPeopleModel();
		peopleModel.setContactType(ContactType);
		peopleModel.setFirstName(FirstName);
		peopleModel.setMiddleName(MiddleName);
		peopleModel.setLastName(LastName);
		peopleModel.setEmail(Email);
		peopleModel.setPhone1(Phone);
		peopleModel.setContactType(ContactType);
		peopleModel.setAuditStatus("Active");
		peopleModel.setServiceProviderCode(aa.getServiceProviderCode());
		var createPeopleResult = aa.people.createPeople(peopleModel);
		if (createPeopleResult.getSuccess()) {
		    var createCapContactResult = aa.people.createCapContactWithRefPeopleModel(record.capId, peopleModel);
		    if(!createCapContactResult.getSuccess()){
		      throw "**ERROR create people:" + createCapContactResult.getErrorMessage();
		    }
		}else{
		  throw "**ERROR create people:" + createPeopleResult.getErrorMessage();
		}
	}
	if(params.AsReference == "true"){
		ADDCONTACT.onContactAddAfter(record);
	}
}