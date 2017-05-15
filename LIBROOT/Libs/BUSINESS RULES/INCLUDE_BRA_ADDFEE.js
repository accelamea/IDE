/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_ADDFEE.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JONATHAN
| Created at	: 29/11/2016 16:03:41
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function ADDFEE() {
	BRA.call(this, "ADDFEE", "Add Fee");
}
ADDFEE.prototype = Object.create(BRA.prototype);
ADDFEE.prototype.constructor = ADDFEE;

ADDFEE.prototype.getAuthor = function() {
    return "Jonathan Xu";
}

ADDFEE.prototype.getDescription = function() {
	return "this action add a fee item to the record";
}

ADDFEE.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = []
	if (paramName == "FeeItemCode") {
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

			var capTypeModel = capTypeService.getCapTypeByPK(capType);
			var feeSchedule = capTypeModel.getFeeCode();
			var schedule = Record.getScheduleFees(feeSchedule);
			if (schedule) {
				schedule = schedule.toArray()
				for ( var x in schedule) {
					var fee = schedule[x]

					var obj = new Object();
					obj.text = String(fee.getFeeCod());
					obj.value = String(fee.getFeeCod());
					jsonArray.push(obj);
				}
			}
		}

	}

	return jsonArray;
}

ADDFEE.prototype.validateParams = function(params) {
	var FeeItemCode = params.FeeItemCode;
	var Quantity = params.Quantity;
	if (!Quantity) {
		throw "Quantity can't be empty!"
	} else if (!FeeItemCode) {
		throw "Fee Item can't be empty!"
	}
}

ADDFEE.prototype.getParams = function() {
	return {
		source : {

			FeeItemCode : String(""),
			Quantity : String(""),
			AutoInvoice : String("true")
		},
		config : {
			FeeItemCode : {
				help : "the fee item code",
				displayName : String("Fee Item"),
				editor : this.buildCombo("FeeItemCode")
			},
			Quantity : {
				help : "the fee quantity",
				displayName : String("Quantity"),
				editor : {
					xtype : 'expfield'
				}
			},
			AutoInvoice : {
				help : "auto invoice or not",
				displayName : String("Auto Invoice"),
				editor : {
					xtype : 'checkbox'
				}
			}
		}
	}
}

ADDFEE.prototype.run = function(record, params, context) {
	var capTypeService = com.accela.aa.emse.dom.service.CachedService.getInstance().getCapTypeService();

	var capTypeModel = capTypeService.getCapTypeByPK(record.getCapType());
	var FeeScheduleCode = capTypeModel.getFeeCode();

	var FeeItemCode = params.FeeItemCode;
	var Quantity = parseInt(params.Quantity, 10);
	var isAutoInvoice = params.AutoInvoice;
	var capId = record.capId;
	var feeSeq = aa.finance.createFeeItem(capId, FeeScheduleCode, FeeItemCode, 'FINAL', Number(Quantity)).getOutput();
	if (isAutoInvoice == 'true') {
		var invPaymentPeriodList = new Array();
		invPaymentPeriodList.push("FINAL");
		aa.finance.createInvoice(capId, feeSeq, invPaymentPeriodList);
	}
}