/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_SENDSMS.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JONATHAN
| Created at	: 29/11/2016 17:51:51
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function SENDSMS() {
	BRA.call(this, "SENDSMS", "Send SMS");
}
SENDSMS.prototype = Object.create(BRA.prototype);
SENDSMS.prototype.constructor = SENDSMS;

SENDSMS.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];
	var sql = "SELECT TEMPLATE_NAME FROM RNOTIFICATION_TEMPLATE ";
	sql +="WHERE SERV_PROV_CODE = ? AND REC_STATUS = 'A' ";
	var param = [];
	param.push(aa.getServiceProviderCode());
	if (paramName == "SMSTemplate"){
		var fields = new DAO("RNOTIFICATION_TEMPLATE").execSimpleQuery(sql,param);
		for ( var x in fields) {
			var field = fields[x];
			var obj = new Object();
			obj.text = String(field["TEMPLATE_NAME"]);
			obj.value = String(field["TEMPLATE_NAME"]);
			jsonArray.push(obj);
		}
	}
	
	return jsonArray;
}

SENDSMS.prototype.getParams = function() {
	return {
		source : {
			PhoneNumber : String(""),
			SMSTemplate : String(""),
		},
		config : {
			PhoneNumber : {
				displayName : String("Phone Number"),
				editor : {
					xtype : 'expfield'
					//vtype:'email'
				}
			},
			SMSTemplate : {
				displayName : String("SMS Template"),
				editor : this.buildCombo("SMSTemplate")
			}
		}
	}
}

SENDSMS.prototype.run = function(record, params, context) {
	//todo
}