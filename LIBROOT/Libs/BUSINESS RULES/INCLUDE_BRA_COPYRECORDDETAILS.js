/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_COPYRECORDDETAILS.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JASON
| Created at	: 02/05/2017 15:41:27
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function COPYRECORDDETAILS() {
	BRA.call(this, "COPYRECORDDETAILS", "Copy Record Details");
}
COPYRECORDDETAILS.prototype = Object.create(BRA.prototype);
COPYRECORDDETAILS.prototype.constructor = COPYRECORDDETAILS;
BRA.prototype.getAuthor = function() {
	return "Jason Yang";
}
COPYRECORDDETAILS.prototype.getDescription = function() {
	return "this action copy record details from parent, child or specific record";
}
COPYRECORDDETAILS.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];
	if (paramName == "CopyFrom") {
		jsonArray.push({text:"Parent", value:"Parent"});
		jsonArray.push({text:"Child", value:"Child"});
		jsonArray.push({text:"Custom ID", value:"Others"});
	}else if (paramName == "RelationShip") {
		jsonArray.push({text:"Normal", value:"R"});
		jsonArray.push({text:"Renewal", value:"Renewal"});
		jsonArray.push({text:"Amendment", value:"Amendment"});
		jsonArray.push({text:"Associated Forms", value:"AssoForm"});
		jsonArray.push({text:"EST", value:"EST"});
	}else if (paramName == "ParentChildRecordType") {
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
COPYRECORDDETAILS.prototype.getParams = function() {
	return {
		source : {
			CopyFrom : String(""),
			OtherField : String(""),
			ParentChildRecordType : String(""),
			RelationShip : String("R"),
			CopyParcel : false,
			CopyContact : false,
			CopyAddress : false,
			CopyOwner : false,
			CopyLicense : false,		
			CopyCustomFields : false,
			CopyCustomList : false
		},
		config : {
			CopyFrom : {
				help : "the record details where are you want to copy from (Parent, Child or Custom ID)",
				displayName : String("Copy From"),
				editor : this.buildCombo("CopyFrom")

			},
			OtherField : {
				help : "Record custom ID (you can hard code a record custom id or get it from specifical ASI value)",
				displayName : String("Custom ID"),
				editor : {
					xtype : 'expfield'
				}
			},
			RelationShip : {
				help : "the relation ship between parent record and child record",
				displayName : String("Relation Ship"),
				editor : this.buildCombo("RelationShip")

			},
			ParentChildRecordType : {
				help : "the prent/ child record type",
				displayName : String("Parent/ Child Record Type"),
				help : "the value to set parent or child record type",
				editor : this.buildCombo("ParentChildRecordType")

			},			
			CopyContact : {
				help : "the value to set copy contact",
				displayName : String("Copy Contact"),
				editor : {
					xtype : 'checkbox'
				}
			},
			CopyAddress : {
				help : "the value to set copy address",
				displayName : String("Copy Address"),
				editor : {
					xtype : 'checkbox'
				}
			},
			CopyOwner : {
				help : "the value to set copy owner",
				displayName : String("Copy Owner"),
				editor : {
					xtype : 'checkbox'
				}
			},
			CopyLicense : {
				help : "the value to set copy license",
				displayName : String("Copy License"),
				editor : {
					xtype : 'checkbox'
				}
			},
			CopyParcel : {
				help : "the value to set copy parcel",
				displayName : String("Copy Parcel"),
				editor : {
					xtype : 'checkbox'
				}
			},
			CopyCustomFields : {
				help : "the value to set copy custom fields",
				displayName : String("Copy Custom Fields"),
				editor : {
					xtype : 'checkbox'
				}
			},
			CopyCustomList : {
				help : "the value to set copy custom list",
				displayName : String("Copy Custom List"),
				editor : {
					xtype : 'checkbox'
				}
			}
		}
	}
}
COPYRECORDDETAILS.prototype.validateParams = function(params) {
	var CopyFrom = params.CopyFrom;
	if (!CopyFrom) {
		throw "Copy From can't be empty.";
	}else if(CopyFrom == String("Others")){
		if(!params.OtherField){
			throw "Other Field can't be empty.";
		}
	}	
}
/**
 * gets asit table names
 * 
 * @param capId , capId
 * @returns table names
 */
COPYRECORDDETAILS.getTableNames = function(capId) {
    var tableName = null;
    var result = aa.appSpecificTableScript.getAppSpecificGroupTableNames(capId);
    if (result.getSuccess()) {
        tableName = result.getOutput();       
    }else{
    	throw "**ERROR get asit table names return error:" + result.getErrorMessage();
    }
    return tableName;
}
/**
 * gets record asit model
 * 
 * @param capId , capId
 * @param tableName , asit tableName
 * @returns record asit model
 */
COPYRECORDDETAILS.getAppSpecificTable = function(capId, tableName) {
    appSpecificTable = null;
    var result = aa.appSpecificTableScript.getAppSpecificTableModel(capId, tableName);
    if (result.getSuccess()) {
        appSpecificTable = result.getOutput();        
    } else {
        appSpecificTable = null;
        throw "**ERROR get asit table return error:" + result.getErrorMessage();
    }
    return appSpecificTable;
}
/**
 * gets record asi model
 * 
 * @param capId , capId
 * @returns record asi model
 */
COPYRECORDDETAILS.getAppSpecificInfo = function(capId) {
    capAppSpecificInfo = null;
    var s_result = aa.appSpecificInfo.getByCapID(capId);
    if (s_result.getSuccess()) {
        capAppSpecificInfo = s_result.getOutput();
        if (capAppSpecificInfo == null || capAppSpecificInfo.length == 0) {
        	capAppSpecificInfo = null;       
        }
    } else {
    	throw("ERROR: Failed to get appSpecificInfo: " + s_result.getErrorMessage());
        capAppSpecificInfo = null;
    }
    return capAppSpecificInfo;
}
/**
 * copy people from source record to target record
 * 
 * @param srcCapId , source capId
 * @param targetCapId , target capId
 * @returns 
 */
COPYRECORDDETAILS.copyPeople = function(srcCapId, targetCapId) {
    // 1. Get people with source CAPID.
    var capPeoples = COPYRECORDDETAILS.getPeople(srcCapId);
    if (capPeoples == null || capPeoples.length == 0) {
        return;
    }
    // 2. Get people with target CAPID.
    var targetPeople = COPYRECORDDETAILS.getPeople(targetCapId);
    // 3. Check to see which people is matched in both source and target.
    for (loopk in capPeoples) {
        sourcePeopleModel = capPeoples[loopk];
        // 3.1 Set target CAPID to source people.
        sourcePeopleModel.getCapContactModel().setCapID(targetCapId);
        targetPeopleModel = null;
        // 3.2 Check to see if sourcePeople exist.
        if (targetPeople != null && targetPeople.length > 0) {
            for (loop2 in targetPeople) {
                if (COPYRECORDDETAILS.isMatchPeople(sourcePeopleModel, targetPeople[loop2])) {
                    targetPeopleModel = targetPeople[loop2];
                    break;
                }
            }
        }
        // 3.3 It is a matched people model.
        if (targetPeopleModel != null) {
            // 3.3.1 Copy information from source to target.
            aa.people.copyCapContactModel(sourcePeopleModel
                    .getCapContactModel(), targetPeopleModel
                    .getCapContactModel());

            // 3.3.2 Copy contact address from source to target.
            if (targetPeopleModel.getCapContactModel().getPeople() != null
                    && sourcePeopleModel.getCapContactModel().getPeople()) {
                targetPeopleModel.getCapContactModel().getPeople()
                        .setContactAddressList(
                                sourcePeopleModel.getCapContactModel()
                                        .getPeople().getContactAddressList());
            }

            // 3.3.3 Edit People with source People information.
            aa.people.editCapContactWithAttribute(targetPeopleModel
                    .getCapContactModel());
        }
        // 3.4 It is new People model.
        else {
            // 3.4.1 Create new people.
            aa.people.createCapContactWithAttribute(sourcePeopleModel
                    .getCapContactModel());
        }
    }
}
/**
 * match two people model
 * 
 * @param CapContactScriptModel, cap contact model 1
 * @param capContactScriptModel2, cap contact model 2
 * @returns boolean
 */
COPYRECORDDETAILS.isMatchPeople = function(capContactScriptModel, capContactScriptModel2) {
	var ret = true;
    if (capContactScriptModel == null || capContactScriptModel2 == null) {
    	ret = false;
    }else{
	    var contactType1 = capContactScriptModel.getCapContactModel().getPeople().getContactType();
	    var contactType2 = capContactScriptModel2.getCapContactModel().getPeople().getContactType();
	    var firstName1 = capContactScriptModel.getCapContactModel().getPeople().getFirstName();
	    var firstName2 = capContactScriptModel2.getCapContactModel().getPeople().getFirstName();
	    var lastName1 = capContactScriptModel.getCapContactModel().getPeople().getLastName();
	    var lastName2 = capContactScriptModel2.getCapContactModel().getPeople().getLastName();
	    var fullName1 = capContactScriptModel.getCapContactModel().getPeople().getFullName();
	    var fullName2 = capContactScriptModel2.getCapContactModel().getPeople().getFullName();
	    if ((contactType1 == null && contactType2 != null) || (contactType1 != null && contactType2 == null)) {
	    	ret = false;
	    }else if (contactType1 != null && !contactType1.equals(contactType2)) {
	    	ret = false;
	    }else if ((firstName1 == null && firstName2 != null)|| (firstName1 != null && firstName2 == null)) {
	    	ret = false;
	    }else if (firstName1 != null && !firstName1.equals(firstName2)) {
	    	ret = false;
	    }else if ((lastName1 == null && lastName2 != null)|| (lastName1 != null && lastName2 == null)) {
	    	ret = false;
	    }else if (lastName1 != null && !lastName1.equals(lastName2)) {
	    	ret = false;
	    }else if ((fullName1 == null && fullName2 != null)|| (fullName1 != null && fullName2 == null)) {
	    	ret = false;
	    }else if (fullName1 != null && !fullName1.equals(fullName2)) {
	    	ret = false;
	    }
    }
    return ret;
}
/**
 * get people list by capId
 * 
 * @param capId, capId
 * @returns people list
 */
COPYRECORDDETAILS.getPeople = function(capId) {
    capPeopleArr = null;
    var s_result = aa.people.getCapContactByCapID(capId);
    if (s_result.getSuccess()) {
        capPeopleArr = s_result.getOutput();
        if (capPeopleArr != null || capPeopleArr.length > 0) {
            for (loopk in capPeopleArr) {
                var capContactScriptModel = capPeopleArr[loopk];
                var capContactModel = capContactScriptModel
                        .getCapContactModel();
                var peopleModel = capContactScriptModel.getPeople();
                var contactAddressrs = aa.address
                        .getContactAddressListByCapContact(capContactModel);
                if (contactAddressrs.getSuccess()) {
                    var contactAddressModelArr = COPYRECORDDETAILS.convertContactAddressModelArr(contactAddressrs
                                    .getOutput());
                    peopleModel.setContactAddressList(contactAddressModelArr);
                }
            }
        } else {
        	capPeopleArr = null;        	        
        }
    } else {
    	capPeopleArr = null;
    	throw("ERROR: Failed to get People: " + s_result.getErrorMessage());        
    }
    return capPeopleArr;
}
/**
 * convert contact addresses
 * 
 * @param contactAddressScriptModelArr, contact address model list
 * @returns contact address model list
 */
COPYRECORDDETAILS.convertContactAddressModelArr = function(contactAddressScriptModelArr) {
    var contactAddressModelArr = null;
    if (contactAddressScriptModelArr != null
            && contactAddressScriptModelArr.length > 0) {
        contactAddressModelArr = aa.util.newArrayList();
        for (loopk in contactAddressScriptModelArr) {
            contactAddressModelArr.add(contactAddressScriptModelArr[loopk]
                    .getContactAddressModel());
        }
    }
    return contactAddressModelArr;
}
/**
 * get people by capId
 * 
 * @param srcCapId, capId
 * @param targetCapId, capId
 * @returns void
 */
COPYRECORDDETAILS.copyAddress = function(srcCapId, targetCapId) {
    // 1. Get address with source CAPID.
    var capAddresses = COPYRECORDDETAILS.getAddress(srcCapId);
    if (capAddresses == null || capAddresses.length == 0) {
        return;
    }
    // 2. Get addresses with target CAPID.
    var targetAddresses = COPYRECORDDETAILS.getAddress(targetCapId);
    // 3. Check to see which address is matched in both source and target.
    for (loopk in capAddresses) {
        sourceAddressfModel = capAddresses[loopk];
        // 3.1 Set target CAPID to source address.
        sourceAddressfModel.setCapID(targetCapId);
        targetAddressfModel = null;
        // 3.2 Check to see if sourceAddress exist.
        if (targetAddresses != null && targetAddresses.length > 0) {
            for (loop2 in targetAddresses) {
                if (COPYRECORDDETAILS.isMatchAddress(sourceAddressfModel, targetAddresses[loop2])) {
                    targetAddressfModel = targetAddresses[loop2];
                    break;
                }
            }
        }
        // 3.3 It is a matched address model.
        if (targetAddressfModel != null) {
            // 3.3.1 Copy information from source to target.
            aa.address.copyAddressModel(sourceAddressfModel, targetAddressfModel);
            // 3.3.2 Edit address with source address information.
            aa.address.editAddressWithAPOAttribute(targetCapId, targetAddressfModel);
        }
        // 3.4 It is new address model.
        else {
            // 3.4.1 Create new address.
            aa.address.createAddressWithAPOAttribute(targetCapId, sourceAddressfModel);
        }
    }
}
/**
 * match two source address model
 * 
 * @param addressScriptModel1 , address model
 * @param addressScriptModel2 , address model
 * @returns boolean
 */
COPYRECORDDETAILS.isMatchAddress = function(addressScriptModel1,addressScriptModel2) {
	var ret = true;
    if (addressScriptModel1 == null || addressScriptModel2 == null) {
    	ret = false;
    }else{
	    var streetName1 = addressScriptModel1.getStreetName();
	    var streetName2 = addressScriptModel2.getStreetName();
	    if ((streetName1 == null && streetName2 != null)
	            || (streetName1 != null && streetName2 == null)) {
	    	ret = false;
	    }
	    if (streetName1 != null && !streetName1.equals(streetName2)) {
	    	ret = false;
	    }
    }
    return ret;
}
/**
 * get address list by capId
 * 
 * @param capId, capId
 * @returns address list
 */
COPYRECORDDETAILS.getAddress = function(capId) {
    capAddresses = null;
    var s_result = aa.address.getAddressByCapId(capId);
    if (s_result.getSuccess()) {
        capAddresses = s_result.getOutput();
        if (capAddresses == null || capAddresses.length == 0) {
        	capAddresses = null;        	      
        }
    } else {
    	capAddresses = null;
    	throw("ERROR: Failed to get address: " + s_result.getErrorMessage());        
    }
    return capAddresses;
}
/**
 * copy license professional from source record to target record
 * 
 * @param srcCapId, source capId
 * @param targetCapId, target capId
 * @returns void
 */
COPYRECORDDETAILS.copyLicenseProfessional = function(srcCapId, targetCapId) {
    // 1. Get license professionals with source CAPID.
    var capLicenses = COPYRECORDDETAILS.getLicenseProfessional(srcCapId);
    if (capLicenses == null || capLicenses.length == 0) {
        return;
    }
    // 2. Get license professionals with target CAPID.
    var targetLicenses = COPYRECORDDETAILS.getLicenseProfessional(targetCapId);
    // 3. Check to see which licProf is matched in both source and target.
    for (loopk in capLicenses) {
        sourcelicProfModel = capLicenses[loopk];
        // 3.1 Set target CAPID to source lic prof.
        sourcelicProfModel.setCapID(targetCapId);
        targetLicProfModel = null;
        // 3.2 Check to see if sourceLicProf exist.
        if (targetLicenses != null && targetLicenses.length > 0) {
            for (loop2 in targetLicenses) {
                if (COPYRECORDDETAILS.isMatchLicenseProfessional(sourcelicProfModel,
                        targetLicenses[loop2])) {
                    targetLicProfModel = targetLicenses[loop2];
                    break;
                }
            }
        }
        // 3.3 It is a matched licProf model.
        if (targetLicProfModel != null) {
            // 3.3.1 Copy information from source to target.
            aa.licenseProfessional.copyLicenseProfessionalScriptModel(
                    sourcelicProfModel, targetLicProfModel);
            // 3.3.2 Edit licProf with source licProf information.
            aa.licenseProfessional.editLicensedProfessional(targetLicProfModel);
        }
        // 3.4 It is new licProf model.
        else {
            // 3.4.1 Create new license professional.
            aa.licenseProfessional
                    .createLicensedProfessional(sourcelicProfModel);
        }
    }
}
/**
 * match two license professional model
 * 
 * @param licProfScriptModel1, record LP
 * @param licProfScriptModel2, record LP
 * @returns bollean
 */
COPYRECORDDETAILS.isMatchLicenseProfessional = function(licProfScriptModel1,licProfScriptModel2) {
	var ret = true;
    if (licProfScriptModel1 == null || licProfScriptModel2 == null) {
    	ret = false;
    }else{
	    if (licProfScriptModel1.getLicenseType().equals(
	            licProfScriptModel2.getLicenseType())
	            && licProfScriptModel1.getLicenseNbr().equals(
	                    licProfScriptModel2.getLicenseNbr())) {
	    	ret = true;
	    }
    }
    return ret;
}
/**
 * get license professional by capId
 * 
 * @param capId, capId
 * @returns license professional list
 */
COPYRECORDDETAILS.getLicenseProfessional = function(capId) {
    capLicenseArr = null;
    var s_result = aa.licenseProfessional.getLicenseProf(capId);
    if (s_result.getSuccess()) {
        capLicenseArr = s_result.getOutput();
        if (capLicenseArr == null || capLicenseArr.length == 0) {
            capLicenseArr = null;
        }
    } else {
        throw("ERROR: Failed to license professional: " + s_result.getErrorMessage());
        capLicenseArr = null;
    }
    return capLicenseArr;
}
/**
 * copy owner from source record to target record
 * 
 * @param srcCapId, source cap id
 * @param targetCapId, target cap id
 * @returns void
 */
COPYRECORDDETAILS.copyOwner = function(srcCapId, targetCapId){
    //1. Get Owners with source CAPID.
    var capOwners = COPYRECORDDETAILS.getOwner(srcCapId);
    if (capOwners == null || capOwners.length == 0){
        return;
    }
    //2. Get Owners with target CAPID.
    var targetOwners = COPYRECORDDETAILS.getOwner(targetCapId);
    //3. Check to see which owner is matched in both source and target.
    for (loopk in capOwners){
        sourceOwnerModel = capOwners[loopk];
        //3.1 Set target CAPID to source Owner.
        sourceOwnerModel.setCapID(targetCapId);
        targetOwnerModel = null;
        //3.2 Check to see if sourceOwner exist.
        if (targetOwners != null && targetOwners.length > 0){
            for (loop2 in targetOwners){
                if (COPYRECORDDETAILS.isMatchOwner(sourceOwnerModel, targetOwners[loop2])){
                    targetOwnerModel = targetOwners[loop2];
                    break;
                }
            }
        }
        //3.3 It is a matched owner model.
        if (targetOwnerModel != null){
            //3.3.1 Copy information from source to target.
            aa.owner.copyCapOwnerModel(sourceOwnerModel, targetOwnerModel);
            //3.3.2 Edit owner with source owner information. 
            aa.owner.updateDailyOwnerWithAPOAttribute(targetOwnerModel);
        }
        //3.4 It is new owner model.
        else{
            //3.4.1 Create new Owner.
            aa.owner.createCapOwnerWithAPOAttribute(sourceOwnerModel);
        }
    }
}
/**
 * match two owner model
 * 
 * @param ownerScriptModel1, owner model 1
 * @param ownerScriptModel2, owner model 2
 * @returns boolean
 */
COPYRECORDDETAILS.isMatchOwner=function(ownerScriptModel1, ownerScriptModel2){
	var ret = true;
    if (ownerScriptModel1 == null || ownerScriptModel2 == null){
    	ret = false;
    }else{
	    var fullName1 = ownerScriptModel1.getOwnerFullName();
	    var fullName2 = ownerScriptModel2.getOwnerFullName();
	    if ((fullName1 == null && fullName2 != null) 
	        || (fullName1 != null && fullName2 == null)){
	    	ret = false;
	    }else if (fullName1 != null && !fullName1.equals(fullName2)){
	    	ret = false;
	    }
    }
    return ret;
}
/**
 * get owner list by capId
 * 
 * @param capId, capId
 * @returns owner list
 */
COPYRECORDDETAILS.getOwner=function(capId){
    capOwnerArr = null;
    var s_result = aa.owner.getOwnerByCapId(capId);
    if(s_result.getSuccess()){
        capOwnerArr = s_result.getOutput();
        if (capOwnerArr == null || capOwnerArr.length == 0){
            capOwnerArr = null;
        }
    }else{
        throw("ERROR: Failed to get Owner: " + s_result.getErrorMessage());
        capOwnerArr = null; 
    }
    return capOwnerArr;
}
/**
 * copy parcel from source record to target record
 * 
 * @param srcCapId, source capId
 * @param targetCapId, target capId
 * @returns void
 */
COPYRECORDDETAILS.copyParcel=function(srcCapId, targetCapId){
    //1. Get parcels with source CAPID.
    var copyParcels = COPYRECORDDETAILS.getParcel(srcCapId);
    if (copyParcels == null || copyParcels.length == 0){
        return;
    }
    //2. Get parcel with target CAPID.
    var targetParcels = COPYRECORDDETAILS.getParcel(targetCapId);
    //3. Check to see which parcel is matched in both source and target.
    for (i = 0; i < copyParcels.size(); i++){
        sourceParcelModel = copyParcels.get(i);
        //3.1 Set target CAPID to source parcel.
        sourceParcelModel.setCapID(targetCapId);
        targetParcelModel = null;
        //3.2 Check to see if sourceParcel exist.
        if (targetParcels != null && targetParcels.size() > 0){
            for (j = 0; j < targetParcels.size(); j++){
                if (COPYRECORDDETAILS.isMatchParcel(sourceParcelModel, targetParcels.get(j))){
                    targetParcelModel = targetParcels.get(j);
                    break;
                }
            }
        }
        //3.3 It is a matched parcel model.
        if (targetParcelModel != null){
            //3.3.1 Copy information from source to target.
            var tempCapSourceParcel = aa.parcel.warpCapIdParcelModel2CapParcelModel(targetCapId, sourceParcelModel).getOutput();
            var tempCapTargetParcel = aa.parcel.warpCapIdParcelModel2CapParcelModel(targetCapId, targetParcelModel).getOutput();
            aa.parcel.copyCapParcelModel(tempCapSourceParcel, tempCapTargetParcel);
            //3.3.2 Edit parcel with sourceparcel. 
            aa.parcel.updateDailyParcelWithAPOAttribute(tempCapTargetParcel);
        }
        //3.4 It is new parcel model.
        else{
            //3.4.1 Create new parcel.
            aa.parcel.createCapParcelWithAPOAttribute(aa.parcel.warpCapIdParcelModel2CapParcelModel(targetCapId, sourceParcelModel).getOutput());
        }
    }
}
/**
 * match two parcel model
 * 
 * @param parcelScriptModel1, parcelScriptModel 1
 * @param parcelScriptModel2, parcelScriptModel 2
 * @returns boolean
 */
COPYRECORDDETAILS.isMatchParcel = function(parcelScriptModel1, parcelScriptModel2){
	var ret = false;
    if (parcelScriptModel1 == null || parcelScriptModel2 == null){
    	ret = false;
    }else if (parcelScriptModel1.getParcelNumber().equals(parcelScriptModel2.getParcelNumber())){
    	ret = true;
    }
    
    return  ret;
}
/**
 * get parcel list by capId
 * 
 * @param capId, capId
 * @returns parcel list
 */
COPYRECORDDETAILS.getParcel = function(capId){
    capParcelArr = null;
    var s_result = aa.parcel.getParcelandAttribute(capId, null);
    if(s_result.getSuccess()){
        capParcelArr = s_result.getOutput();
        if (capParcelArr == null || capParcelArr.length == 0){
            capParcelArr = null;
        }
    }
    else{
        throw("ERROR: Failed to get parcel: " + s_result.getErrorMessage());
        capParcelArr = null;    
    }
    return capParcelArr;
}
COPYRECORDDETAILS.prototype.run = function(record, params, context) {
		context.info("Copy record Details");
		var capId = record.getCapID();
		var CopyFrom = params.CopyFrom;
		var RelationShip = params.RelationShip;
		var ParentChildRecordType = params.ParentChildRecordType;
		var OtherField = params.OtherField;
		var CopyContact = params.CopyContact;
		var CopyOwner = params.CopyOwner;
		var CopyAddress = params.CopyAddress;
		var CopyLicense = params.CopyLicense;
		var CopyParcel = params.CopyParcel;
		var CopyCustomFields = params.CopyCustomFields;
		var CopyCustomList = params.CopyCustomList;
		var relatedRelatedRecordIDs = [];
		if(CopyFrom == "Parent"){
			var parentRecordIDs = record.getParents(ParentChildRecordType, null, RelationShip);
			for(var p in parentRecordIDs){
				relatedRelatedRecordIDs.push(parentRecordIDs[p].getCapID());
			}
		}else if(CopyFrom == "Child"){
			var children = record.getChildren(ParentChildRecordType, null);
			for(var c in parentRecordIDs){
				relatedRelatedRecordIDs.push(parentRecordIDs[c].getCapID());
			}
		}else if(CopyFrom == "Others"){ 
			var getRelatedCapID = aa.cap.getCapID(OtherField);
			if(getRelatedCapID.getSuccess()){
				relatedRelatedRecordIDs.push(getRelatedCapID.getOutput());
			}		
		} 
		context.debug("relatedRelatedRecordIDs:" + relatedRelatedRecordIDs);
		if(relatedRelatedRecordIDs && relatedRelatedRecordIDs.length>0){
			for(var x in relatedRelatedRecordIDs){
				var sourceRecord = new Record(relatedRelatedRecordIDs[x]);
				// Clone LP
				if (CopyLicense == "true") {
					COPYRECORDDETAILS.copyLicenseProfessional(sourceRecord.capId,capId);
				}
				// Clone Contact
				if (CopyContact == "true") {					
					COPYRECORDDETAILS.copyPeople(sourceRecord.capId,capId);
				}
				// Clone Address
				if (CopyAddress == "true") {
					COPYRECORDDETAILS.copyAddress(sourceRecord.capId,capId);
				}
				// Clone Parcel
				if (CopyParcel == "true") {
					COPYRECORDDETAILS.copyParcel(sourceRecord.capId,capId);
				}
	
				//Clone Owner
				if (CopyOwner == "true") {
					COPYRECORDDETAILS.copyOwner(sourceRecord.capId,capId);
				}
				
				//Clone ASI
				if(CopyCustomFields== "true"){
					// 1. Get Application Specific Information with source CAPID.
				    var appSpecificInfo = COPYRECORDDETAILS.getAppSpecificInfo(sourceRecord.capId);
				    if (appSpecificInfo == null || appSpecificInfo.length == 0) {
				        return;
				    }
				    // 2. Set target CAPID to source Specific Information.
				    for (loopk in appSpecificInfo) {
				        var sourceAppSpecificInfoModel = appSpecificInfo[loopk];
	
				        sourceAppSpecificInfoModel.setPermitID1(capId.getID1());
				        sourceAppSpecificInfoModel.setPermitID2(capId.getID2());
				        sourceAppSpecificInfoModel.setPermitID3(capId.getID3());
				        // 3. Edit ASI on target CAP (Copy info from source to target)
				        aa.appSpecificInfo.editAppSpecInfoValue(sourceAppSpecificInfoModel);
				    }
				}
				
				//Clone ASIT
				if(CopyCustomList == "true"){
					var tableNameArray = COPYRECORDDETAILS.getTableNames(sourceRecord.capId);
				    if (tableNameArray == null) {
				        return;
				    }
				    for (loopk in tableNameArray) {
				        var tableName = tableNameArray[loopk];
				        // 1. Get appSpecificTableModel with source CAPID
				        var targetAppSpecificTable = COPYRECORDDETAILS.getAppSpecificTable(sourceRecord.capId, tableName);
	
				        // 2. Edit AppSpecificTableInfos with target CAPID
				        var aSTableModel = null;
				        if (targetAppSpecificTable == null) {
				            return;
				        } else {
				            aSTableModel = targetAppSpecificTable.getAppSpecificTableModel();
				        }
				        aa.appSpecificTableScript.editAppSpecificTableInfos(aSTableModel, capId, null);
				    }
				}
			}
		}	
}