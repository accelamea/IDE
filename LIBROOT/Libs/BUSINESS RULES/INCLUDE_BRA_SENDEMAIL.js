/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_SENDEMAIL.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: JONATHAN
| Created at	: 29/11/2016 12:43:49
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function SENDEMAIL() {
	BRA.call(this, "SENDEMAIL", "Send Email");
}
SENDEMAIL.prototype = Object.create(BRA.prototype);
SENDEMAIL.prototype.constructor = SENDEMAIL;

SENDEMAIL.prototype.getParamValues = function(recordType, paramName) {
	var jsonArray = [];
	var sql = "SELECT TEMPLATE_NAME FROM RNOTIFICATION_TEMPLATE ";
	sql += "WHERE SERV_PROV_CODE = ? AND REC_STATUS = 'A' ";
	var param = [];
	param.push(aa.getServiceProviderCode());
	if (paramName == "EmailTemplate") {
		var fields = new DAO("RNOTIFICATION_TEMPLATE").execSimpleQuery(sql, param);
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

SENDEMAIL.prototype.validateParams = function(params) {
	var to = params.to;
	var cc = params.cc;
	var bcc = params.bcc;
	var template = params.EmailTemplate;
	var body = params.body;
	var subject = params.subject;
	var bodyfound = false;
	if (template) {
		if (body || subject) {
			throw "you cannot specify custom subject and email body if you select template"
		}
		
	} else {
		if (!body) {
			throw "Please specify template or write body"
		}
		if (!subject) {
			throw "Please specify subject"
		}
	}

	if (!to) {
		throw "Please specify at least one recipient"
	}

}

SENDEMAIL.prototype.validateEmail = function(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

SENDEMAIL.prototype.getParams = function() {
	return {
		source : {
			to : String(""),
			cc : String(""),
			bcc : String(""),
			body : String(""),
			subject : String(""),
			EmailTemplate : String(""),
		},
		config : {
			to : {
				displayName : String("to"),
				editor : {
					xtype : 'expfield'

				}
			},
			subject : {
				displayName : String("Subject"),
				editor : {
					xtype : 'textfield'

				}
			},
			body : {
				displayName : String("Body"),
				editor : {
					xtype : 'htmlfield'

				}
			},
			cc : {
				displayName : String("cc"),
				editor : {
					xtype : 'expfield'
				}
			},
			bcc : {
				displayName : String("bcc"),
				editor : {
					xtype : 'expfield'
				}
			},
			EmailTemplate : {
				displayName : String("Email Template"),
				editor : this.buildCombo("EmailTemplate")
			}
		}
	}
}

SENDEMAIL.prototype.run = function(record, params, context) {
	var to = params.to;
	var cc = params.cc;
	var bcc = params.bcc;
	var body = params.body
	var subject = params.subject
	var EmailTemplate = params.EmailTemplate;

	var contactsArray = [];
	this.validateEmail(to)
	contactsArray.push([ to, 'TO' ]);
	if (cc) {
		this.validateEmail(cc)
		contactsArray.push([ cc, 'CC' ]);
	}
	if (bcc) {
		this.validateEmail(bcc)
		contactsArray.push([ bcc, 'BCC' ]);
	}
	var pTitle = "";
	var pContent = "";
	if (body) {
		pTitle = subject;
		pContent = body;
	} else {
		var templateModel = aa.communication.getNotificationTemplate(EmailTemplate).getOutput();
		var emailTempModel = templateModel.getEmailTemplateModel();
		pTitle = emailTempModel.getTitle();
		pContent = emailTempModel.getContentText();
	}

	var contacts = aa.communication.getContactList(contactsArray, 'EMAIL').getOutput();

	var messageModel = aa.communication.getEmailMessageScriptModel().getOutput();
	messageModel.setTitle("=?utf-8?B?" + pTitle + "?=");
	messageModel.setContent(pContent);
	messageModel.setContacts(contacts);
	messageModel.setTriggerEvent('EMSE Script');
	var result = aa.communication.sendMessage(messageModel);
	if (!result.getSuccess()) {
		throw result.getErrorMessage();
	}
	var result = aa.communication.associateEnities(result.getOutput(), record.capId, 'RECORD');
	if (!result.getSuccess()) {
		throw result.getErrorMessage();
	}
}