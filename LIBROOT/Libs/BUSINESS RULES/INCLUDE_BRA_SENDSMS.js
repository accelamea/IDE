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
SENDSMS.prototype.getAuthor = function() {
	return "Jonathan Xu";
}
SENDSMS.prototype.getDescription = function() {
	return "this action send a SMS";
}
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
			SMSParameterName1 : String(""),
			SMSParameterValue1 : String(""),
			SMSParameterName2 : String(""),
			SMSParameterValue2 : String(""),
			SMSParameterName3 : String(""),
			SMSParameterValue3 : String(""),
			SMSParameterName4 : String(""),
			SMSParameterValue4 : String(""),
			SMSParameterName5 : String(""),					
			SMSParameterValue5 : String("")
		},
		config : {
			PhoneNumber : {
				help : "the phone number that SMS send to",
				displayName : String("Phone Number"),
				editor : {
					xtype : 'expfield'
					//vtype:'email'
				}
			},
			SMSTemplate : {
				help : "the SMS template",
				displayName : String("SMS Template"),
				editor : this.buildCombo("SMSTemplate")
			},
			SMSParameterName1 : {
				help : "the SMS parameter name",
				displayName : String("SMS Parameter Name1"),
				editor : {
					xtype : 'textfield'
				}
			},
			SMSParameterName2 : {
				help : "the SMS parameter name",
				displayName : String("SMS Parameter Name2"),
				editor : {
					xtype : 'textfield'
				}
			},
			SMSParameterName3 : {
				help : "the SMS parameter name",
				displayName : String("SMS Parameter Name3"),
				editor : {
					xtype : 'textfield'
				}
			},
			SMSParameterName4 : {
				help : "the SMS parameter name",
				displayName : String("SMS Parameter Name4"),
				editor : {
					xtype : 'textfield'
				}
			},
			SMSParameterName5 : {
				help : "the SMS parameter name",
				displayName : String("SMS Parameter Name5"),
				editor : {
					xtype : 'textfield'
				}
			},
			SMSParameterValue1 : {
				help : "the SMS parameter value",
				displayName : String("SMS Parameter Value1"),
				editor : {
					xtype : 'textfield'
				}
			},
			SMSParameterValue2 : {
				help : "the SMS parameter value",
				displayName : String("SMS Parameter Value2"),
				editor : {
					xtype : 'textfield'
				}
			},
			SMSParameterValue3 : {
				help : "the SMS parameter Value",
				displayName : String("SMS Parameter Value3"),
				editor : {
					xtype : 'textfield'
				}
			},
			SMSParameterValue4 : {
				help : "the SMS parameter value",
				displayName : String("SMS Parameter Value4"),
				editor : {
					xtype : 'textfield'
				}
			},
			SMSParameterValue5 : {
				help : "the SMS parameter value",
				displayName : String("SMS Parameter Value5"),
				editor : {
					xtype : 'textfield'
				}
			}
		}
	}
}

SENDSMS.prototype.run = function(record, params, context) {
	function formContacts(pContactArr){
	    var contacts = aa.communication.getContactList(pContactArr, 'SMS').getOutput();
	    return contacts;
	}

	function addParameter(pamaremeters, key, value){
	  if(key != null && key.toUpperCase() !="$$ALTID$$" && key.toUpperCase() !="$$SERVICENAME$$"){
	    if(value == null){
	      value = "";
	    }
	    pamaremeters.put(key, value);
	  }
	}

	var notfyTemp = params.SMSTemplate
	var smsParameters = aa.util.newHashtable();
	addParameter(smsParameters, "$$altid$$", record.getCustomID());
	addParameter(smsParameters, "$$SERVICENAME$$", record.getCap().getCapModel().getAppTypeAlias());
	if(params.smsParameterName1 && params.smsParameterValue1){  
	  addParameter(smsParameters, "$$"+params.smsParameterName1+"$$", params.smsParameterValue1);
	}
	if(params.smsParameterName2 && params.smsParameterValue2){  
	  addParameter(smsParameters, "$$"+params.smsParameterName2+"$$", params.smsParameterValue2);
	}
	if(params.smsParameterName3 && params.smsParameterValue3){  
	  addParameter(smsParameters, "$$"+params.smsParameterName3+"$$", params.smsParameterValue3);
	}
	if(params.smsParameterName4 && params.smsParameterValue4){  
	  addParameter(smsParameters, "$$"+params.smsParameterName4+"$$", params.smsParameterValue4);
	}
	if(params.smsParameterName5 && params.smsParameterValue5){  
	  addParameter(smsParameters, "$$"+params.smsParameterName5+"$$", params.smsParameterValue5);
	}

	var PhoneNumber = params.PhoneNumber;
	var templateResult = aa.communication.getNotificationTemplate(notfyTemp).getOutput();
	var CommunicationHelper = aa.proxyInvoker.newInstance("com.accela.aa.communication.CommunicationHelper").getOutput();
	CommunicationHelper.replaceVariables(templateResult, smsParameters);
	var smsTempModel = templateResult.getSmsTemplateModel();
	var contactsArray = [];
	if (PhoneNumber) {
		contactsArray.push([[PhoneNumber],["SMS"]]);
	}

	var smsContacts = formContacts(contactsArray);
	var messageModel = aa.communication.getSMSMessageScriptModel().getOutput();
	messageModel.setContent(smsTempModel.getContent());
	messageModel.setContacts(smsContacts);
	messageModel.setTriggerEvent('From EMSE script');
	context.info("Start to send SMS");
	var result = aa.communication.sendMessage(messageModel);
	context.debug("Send SMS Result:"+result.getSuccess());
}