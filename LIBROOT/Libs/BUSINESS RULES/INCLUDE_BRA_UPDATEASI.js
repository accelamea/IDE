/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_UPDATEASI.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 28/11/2016 09:22:47
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function UPDATEASI() {
	BRA.call(this, "UPDATEASI", "Update ASI");
}
UPDATEASI.prototype = Object.create(BRA.prototype);
UPDATEASI.prototype.constructor = UPDATEASI;
UPDATEASI.prototype.getAuthor = function() {
	return "Sleiman KOZAIZAN";
}
UPDATEASI.prototype.getDescription = function() {
	return "this action update an application specific info field with the provided value";
}

UPDATEASI.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];
	if (paramName == "FieldName") {

		var service = com.accela.aa.emse.dom.service.CachedService.getInstance().getAppSpecificInfoService();
		var capTypeService = com.accela.aa.emse.dom.service.CachedService.getInstance().getCapTypeService();
		var capList = new Array();

		var splited = recordType.split("/");
		if (splited.length == 4) {
			var capModel = aa.cap.getCapModel().getOutput();
			var capType = capModel.getCapType();
			capType.setGroup(splited[0]);
			capType.setType(splited[1]);
			capType.setSubType(splited[2]);
			capType.setCategory(splited[3]);
			capType.setServiceProviderCode(aa.getServiceProviderCode())

			var res = capTypeService.getCapTypeByPK(capType)

			var group = service.getRefAppSpecInfoWithFieldList(aa.getServiceProviderCode(), res.getSpecInfoCode(), aa.getAuditID())
			var fields = group.getFieldList().toArray();

			for ( var x in fields) {
				var field = fields[x];
				var subGroup = field.getCheckboxType();
				var obj = new Object();
				obj.text = String(subGroup + "::" + field.getFieldLabel());
				obj.value = String(subGroup + "::" + field.getFieldLabel());
				jsonArray.push(obj);
			}
		}
	}
	jsonArray = jsonArray.sort(function(a, b) {
		var ret = 0
		if (a < b) {
			ret = -1;
		}
		if (a > b) {
			ret = 1;
		}
		return ret;
	})
	return jsonArray;
}

UPDATEASI.prototype.validateParams = function(params) {
	var FieldName = params.FieldName;
	if (!FieldName) {
		throw "Field Name can't be empty."
	}
}

UPDATEASI.prototype.getParams = function() {
	return {
		source : {
			FieldName : String(""),
			Value : String("")

		},
		config : {
			Value : {
				help : "the value to set",
				editor : {
					xtype : 'expfield'
				}
			},
			FieldName : {
				help : "the application specific info field",
				displayName : String("Field Name"),
				editor : this.buildCombo("FieldName")

			}
		}
	}
}

UPDATEASI.prototype.run = function(record, params, context) {
	var strArray = String(params.FieldName).split("::");
	context.info(params.FieldName)
	if (strArray.length == 2) {
		var subGroup = strArray[0];
		var fieldName = strArray[1];
		record.editASI(subGroup, fieldName, params.Value);
	}
}