/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_SCHEDULEINSPECTION.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JONATHAN
| Created at	: 29/11/2016 11:07:01
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function SCHEDULEINSPECTION() {
	BRA.call(this, "SCHEDULEINSPECTION", "Schedule Inspection");
}
SCHEDULEINSPECTION.prototype = Object.create(BRA.prototype);
SCHEDULEINSPECTION.prototype.constructor = SCHEDULEINSPECTION;

SCHEDULEINSPECTION.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];
	var capTypeService = com.accela.aa.emse.dom.service.CachedService.getInstance().getCapTypeService();
	var splited = recordType.split("/");
	if (splited.length == 4) {
		var capModel = aa.cap.getCapModel().getOutput();
		var capType = capModel.getCapType();
		capType.setGroup(splited[0]);
		capType.setType(splited[1]);
		capType.setSubType(splited[2]);
		capType.setCategory(splited[3]);
		capType.setServiceProviderCode(aa.getServiceProviderCode())

		var capTypeDeatilModel = aa.cap.getCapTypeDetailByPK(capType).getOutput();
		var groupCode = capTypeDeatilModel.getInspectionCode();
		if(groupCode != null){
			if (paramName == "InspectionGroup") {
				var obj = new Object();
				obj.text = String(groupCode);
				obj.value = String(groupCode);
				jsonArray.push(obj);
			} else if (paramName == "InspectionType") {
				
				var types = aa.inspection.getInspectionType(groupCode,"").getOutput();
				if(types != null && types.length > 0){
					for(var i in types){
						var type = types[i].getType();
						var obj = new Object();
						obj.text = String(type);
						obj.value = String(type);
						jsonArray.push(obj);
					}
				}
			}
			
		}
		if(paramName == "AutoAssign"){
			var obj = new Object();
			obj.text = "Yes";
			obj.value = "Yes";
			jsonArray.push(obj);
			var obj = new Object();
			obj.text = "No";
			obj.value = "No";
			jsonArray.push(obj);
		}
	}

	return jsonArray;
}

SCHEDULEINSPECTION.prototype.validateParams = function(params) {
	var type= params.InspectionType;
	var date= params.InspectionDate;
	if(!type || !date){
		throw "Inspection Type and Inspection Date can't be empty!"
	}
}

SCHEDULEINSPECTION.prototype.getParams = function() {
	return {
		source : {
			InspectionType : String(""),
			InspectionDate : String(""),
			Units : String(""),
			Inspector : String(""),
			AutoAssign : String("Yes")
		},
		config : {
			InspectionType : {
				displayName : String("Inspection Type"),
				editor : this.buildCombo("InspectionType")
			},
			InspectionDate : {
				displayName : String("Inspection Date"),
				editor : {
					xtype:'expfield'
				}
			},
			Units : {
				displayName : String("Units"),
				editor : {
					xtype:'numberfield'
				}
				
			},
			Inspector : {
				displayName : String("Inspector"),
				editor : {
					xtype:'expfield'
				}
			},
			AutoAssign : {
				displayName : String("Auto Assign"),
				editor : {
					xtype : 'checkbox'
				}
			}
		}
	}
}

SCHEDULEINSPECTION.prototype.run = function(record, params, context) {
	var capTypeModel = aa.cap.getCapTypeModelByCapID(record.capId).getOutput();
	var capTypeDeatilModel = aa.cap.getCapTypeDetailByPK(capTypeModel).getOutput();
	var group = capTypeDeatilModel.getInspectionCode();
	//var group = params.InspectionGroup;
	var type= params.InspectionType;
	var date= params.InspectionDate;
	var unit= params.Units;
	var inspector= params.Inspector;
	var autoAssi = params.autoAssign;
	var isAutoAssign = false;
	if(autoAssi == "true"){
		isAutoAssign = true;
	}
	record.scheduleInspection(group,type,date,isAutoAssign, unit, inspector);
}