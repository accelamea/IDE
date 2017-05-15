/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_COMMUNICATION.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 09/10/2016 11:37:56
|
/------------------------------------------------------------------------------------------------------*/
System.require("SMSAPI");
System.require("MailAPI");
System.require("Utils");
/**
 * Communication constructor
 * 
 * @constructor
 */
function Communication() {
	this.validator = new Validator();
	if (typeof SMSAPI == "undefined") {
		this.smsApi = null;
		logDebug("WARN: SMS NOTIFICATION IS NOT IMPLEMENTED, please create INCLUDE_SMSAPI script")

	} else {
		this.sms = new SMSAPI();
		if (!this.sms.sendSMS) {
			logDebug("WARN: SMS NOTIFICATION IS NOT IMPLEMENTED CORRECTLY, please create INCLUDE_SMSAPI script with sendSMS function")
			this.sms = null;
		}
	}

}

/**
 * Send SMS to multiple recipients
 * 
 * @param {array}
 *            recipientArr - an array of recipients mobile numbers.
 * @param {string}
 *            message - the SMS message body.
 * @param {array}
 *            recipientNameArr - an array of recipients names.
 */
Communication.prototype.sendMultipleSMS = function(recipientArr, message, recipientNameArr) {
	for ( var x in recipientArr) {
		var recipient = recipientArr[x];
		var recipientName = "";
		if (Utils.isArray(recipientNameArr) && x < recipientNameArr.length) {
			recipientName = recipientNameArr[x];
		}
		this.sendSMS(recipient, message, recipientName);
	}
}

/**
 * Send SMS to multiple recipients using predefined template
 * 
 * @param {array}
 *            recipientArr - an array of recipients mobile numbers.
 * @param {string}
 *            templateName - the template name as defined in Accela.
 * @param {string}
 *            language - the qualified language name for the template (i.e en_US, ar_AE).
 * @param {object}
 *            params - the template parameters in key-value format i.e { '$$InviterName$$': 'John' }
 * @param {array}
 *            recipientNameArr - an array of recipients names.
 */
Communication.prototype.sendMultipleSMS = function(recipientArr, templateName, language, params, recipientNameArr) {
	for ( var x in recipientArr) {
		var recipient = recipientArr[x];
		var recipientName = "";
		if (Utils.isArray(recipientNameArr) && x < recipientNameArr.length) {
			recipientName = recipientNameArr[x];
		}
		this.sendSMSByTemplate(recipient, templateName, language, params, recipientName);
	}
}

/**
 * Send SMS to specified recipient using predefined template
 * 
 * @param {string}
 *            recipient - the mobile number of the recipient.
 * @param {string}
 *            templateName - the template name as defined in Accela.
 * @param {string}
 *            language - the qualified language name for the template (i.e en_US, ar_AE).
 * @param {object}
 *            params - the template parameters in key-value format i.e { '$$InviterName$$': 'John' }
 * @param {string}
 *            recipientName - the name of the recipient.
 */
Communication.prototype.sendSMSByTemplate = function(recipient, templateName, language, params, recipientName) {
	if (this.sms != null) {
		var templateObj = this.getSMSTemplate(templateName, language, params);
		this.sms.sendSMS(recipient, templateObj.content, recipientName);
	}
}

/**
 * Send SMS to specified recipient
 * 
 * @param {string}
 *            recipient - the mobile number of the recipient.
 * @param {string}
 *            message - the SMS message body.
 * @param {string}
 *            recipientName - the name of the recipient.
 */
Communication.prototype.sendSMS = function(recipient, message, recipientName) {
	if (this.sms != null) {
		this.sms.sendSMS(recipient, message, recipientName);
	}
}

/**
 * Send a separate email for each recipient.
 * 
 * @param {array}
 *            arrTo - the email addresses of the recipients.
 * @param {array}
 *            arrCC - the email addresses in the CC.
 * @param {array}
 *            arrBcc - the email addresses in the BCC.
 * @param {string}
 *            title - the email title.
 * @param {string}
 *            content - the email content.
 * @param {ArrayList}
 *            arrMessageAttachmentModel - optional - array list of MessageAttachmentModels.
 */
Communication.prototype.sendEmailSeparate = function(arrTo, arrCC, arrBcc, title, content, arrMessageAttachmentModel) {
	for ( var i in arrTo) {
		this.sendEmail([ arrTo[i] ], arrCC, arrBcc, title, content, arrMessageAttachmentModel);
	}
}

/**
 * Send a separate email for each recipient using a predefined template.
 * 
 * @param {array}
 *            arrTo - the email addresses of the recipients.
 * @param {array}
 *            arrCC - the email addresses in the CC.
 * @param {array}
 *            arrBcc - the email addresses in the BCC.
 * @param {string}
 *            templateName - the template name as defined in Accela.
 * @param {string}
 *            language - the qualified language name for the template (i.e en_US, ar_AE).
 * @param {object}
 *            params - the template parameters in key-value format i.e { '$$InviterName$$': 'John' }
 * @param {ArrayList}
 *            arrMessageAttachmentModel - optional - array list of MessageAttachmentModels.
 */
Communication.prototype.sendEmailSeparateByTemplate = function(arrTo, arrCC, arrBcc, templateName, language, params, arrMessageAttachmentModel) {
	for ( var i in arrTo) {
		this.sendEmailByTemplate([ arrTo[i] ], arrCC, arrBcc, templateName, language, params, arrMessageAttachmentModel);
	}
}

/**
 * Send an email for all recipients using a predefined template.
 * 
 * @param {array}
 *            arrTo - the email addresses of the recipients.
 * @param {array}
 *            arrCC - the email addresses in the CC.
 * @param {array}
 *            arrBcc - the email addresses in the BCC.
 * @param {string}
 *            templateName - the template name as defined in Accela.
 * @param {string}
 *            language - the qualified language name for the template (i.e en_US, ar_AE).
 * @param {object}
 *            params - the template parameters in key-value format i.e { '$$InviterName$$': 'John' }
 * @param {ArrayList}
 *            arrMessageAttachmentModel - optional - array list of MessageAttachmentModels.
 */
Communication.prototype.sendEmailByTemplate = function(arrTo, arrCC, arrBcc, templateName, language, params, arrMessageAttachmentModel) {
	var templateObj = this.getTemplate(templateName, language, params);
	this.sendEmail(arrTo, arrCC, arrBcc, templateObj.title, templateObj.content, arrMessageAttachmentModel);
}

/**
 * Send an email for all recipients.
 * 
 * @param {array}
 *            arrTo - the email addresses of the recipients.
 * @param {array}
 *            arrCC - the email addresses in the CC.
 * @param {array}
 *            arrBcc - the email addresses in the BCC.
 * @param {string}
 *            title - the email title.
 * @param {string}
 *            content - the email content.
 * @param {ArrayList}
 *            arrMessageAttachmentModel - optional - array list of MessageAttachmentModels.
 */
Communication.prototype.sendEmail = function(arrTo, arrCC, arrBcc, title, content, arrMessageAttachmentModel) {
	logDebug("SENDING email to "+arrTo)
	MailAPI.send(arrTo, arrCC, arrBcc, title, content, arrMessageAttachmentModel);
}

/**
 * Get Email template by name and language.
 * 
 * @param {string}
 *            templateName - the template name as defined in Accela.
 * @param {string}
 *            language - the qualified language name for the template (i.e en_US, ar_AE).
 * @param {object}
 *            params - the template parameters in key-value format i.e { '$$InviterName$$': 'John' }
 */
Communication.prototype.getEmailTemplate = function(templateName, language, params) {
	return this.getTemplate(templateName, language, params, "Email");
}

/**
 * Get SMS template by name and language.
 * 
 * @param {string}
 *            templateName - the template name as defined in Accela.
 * @param {string}
 *            language - the qualified language name for the template (i.e en_US, ar_AE).
 * @param {object}
 *            params - the template parameters in key-value format i.e { '$$InviterName$$': 'John' }
 */
Communication.prototype.getSMSTemplate = function(templateName, language, params, templateType) {
	return this.getTemplate(templateName, language, params, "SMS");
}

/**
 * Get template by name and language.
 * 
 * @param {string}
 *            templateName - the template name as defined in Accela.
 * @param {string}
 *            language - the qualified language name for the template (i.e en_US, ar_AE).
 * @param {object}
 *            params - the template parameters in key-value format i.e { '$$InviterName$$': 'John' }
 * @param {string}
 *            templateType - the template Email or SMS
 * @returns {object} the object contains title and content properties.
 */
Communication.prototype.getTemplate = function(templateName, language, params, templateType) {
	if (!templateType) {
		templateType = "Email";
	}

	var primaryLanguage = com.accela.i18n.I18NContext.getPrimaryLanguage();
	if (Utils.isBlankOrNull(language)) {
		language = primaryLanguage
	}
	var templateResult;
	var initialLanguage = System.getLanguage();
	var initialClientType = System.getClientType();
	try {
		if (language != primaryLanguage) {
			System.changeLanguage(language);
			System.setClientType(com.accela.i18n.I18NContext.getI18NModel().CLIENT_V360);
		}
		templateResult = aa.communication.getNotificationTemplate(templateName);
	} catch (e) {
		throw "Failed to get template " + templateName + "; " + e;
	} finally {
		System.changeLanguage(initialLanguage);
		System.setClientType(initialClientType);
	}

	if (!templateResult.getSuccess()) {
		throw "Failed to get template; " + templateResult.getErrorMessage();
	}

	templateResult = templateResult.getOutput();

	if (!templateResult || templateResult == null) {
		throw "ERROR: template " + templateName + " not found";
	}
	params = Utils.objectToHashtable(params);

	var templateObj = {};

	if (templateType == "Email") {
		if (language != primaryLanguage) {
			// CommunicationHelper.replaceVariablesI18N requires a hashtable that contains the language and a hashtable with the parameters as the value
			var paramsObj = {};
			paramsObj[language] = params;
			var i18nParams = Utils.objectToHashtable(paramsObj);

			// We have to set the i18nTemplateModel language and add it to the emailTemplateI18NModels list
			var i18nEmailTemplateModel = templateResult.getEmailTemplateModel().getI18NModel();
			i18nEmailTemplateModel.setLangId(language);

			var list = aa.util.newArrayList();
			list.add(i18nEmailTemplateModel);
			templateResult.getEmailTemplateModel().setEmailTemplateI18NModels(list);

			com.accela.aa.communication.CommunicationHelper.replaceVariablesI18N(templateResult, i18nParams);
			var emailTemplateModel = templateResult.getEmailTemplateModel().getEmailTemplateI18NModels().get(0);

			templateObj["title"] = emailTemplateModel.getTitle();
			templateObj["content"] = emailTemplateModel.getContentText();

		} else {
			com.accela.aa.communication.CommunicationHelper.replaceVariables(templateResult, params);
			var emailTemplateModel = templateResult.getEmailTemplateModel();

			templateObj["title"] = emailTemplateModel.getTitle();
			templateObj["content"] = emailTemplateModel.getContentText();
		}
	} else if (templateType == "SMS") {
		com.accela.aa.communication.CommunicationHelper.replaceVariables(templateResult, params);
		var smsTemplateModel = templateResult.getSmsTemplateModel();
		templateObj["content"] = smsTemplateModel.getContent();
	}
	return templateObj;
}

/**
 * Send an email and SMS to all record contacts of the specified type
 * 
 * @param {Record}
 *            record - an instance of Record.
 * @param {string}
 *            contactType - the contact type.
 * @param {string}
 *            template - the template used for SMS and Email
 * @param {object}
 *            params - the template parameters in key-value format i.e { '$$InviterName$$': 'John' }
 */
Communication.prototype.notifyRecordContactsByType = function(record, contactType, template, params) {
	var templateParams = {};
	templateParams["$$ALTID$$"] = record.getCustomID();
	templateParams["$$CAPID$$"] = record.getCapID();

	var asi = record.getAllASI();

	for ( var asiLabel in asi) {
		templateParams["$$" + asiLabel + "$$"] = asi[asiLabel];
	}

	// merge params with templateParams, anything in params overrides templateParams
	if (params) {
		for ( var i in params) {
			templateParams[i] = params[i];
		}
	}

	var validator = new Validator();

	// TODO: Determine where to read the contact preferred language from
	var contactsArr = record.getContacts();
	for ( var i in contactsArr) {
		var contact = contactsArr[i];

		if (Utils.isBlankOrNull(contactType) || contact.getCapContactModel().getContactType() == contactType) {
			try {
				var mobileNumber = this.formatPhoneNumber(contact.getPeople().getPhone2CountryCode(), contact.getPeople().getPhone2());
				if (!Utils.isBlankOrNull(mobileNumber)) {
					this.sendSMSByTemplate(mobileNumber, template, "en_US", templateParams);
				}
			} catch (e) {
				logDebug("ERROR: SEND SMS FAILED >>:" + e);
			}

			try {
				var email = contact.getPeople().getEmail();
				if (this.validator.isValidEmail(email)) {
					this.sendEmailByTemplate([ email ], [], [], template, "en_US", templateParams);
				}
			} catch (e) {
				logDebug("ERROR: SEND EMAIL FAILED >>:" + e);
			}
		}
	}
}

/**
 * formats the phone number to prepend 0s based on the inputs
 * 
 * @param {string}
 *            countryCode - the country code.
 * @param {string}
 *            number - the phone number
 * @returns {string} the formatted phone number.
 */
Communication.prototype.formatPhoneNumber = function(countryCode, number) {
	if (Utils.isBlankOrNull(number)) {
		return null;
	}
	if (!Utils.isBlankOrNull(countryCode)) {
		if (countryCode.indexOf("00") != 0) {
			countryCode = "00" + countryCode;
		}
	} else {
		countryCode = "";
		if (number.indexOf("0") != 0) {
			number = "0" + number;
		}
	}
	return countryCode + number;
}