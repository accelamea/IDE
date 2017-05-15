/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_SMSAPI.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: YTITI
| Created at	: 12/10/2016 16:09:55
|
/------------------------------------------------------------------------------------------------------*/
System.require("Utils");
System.require("SOAPAPI");
SMSAPI.configurationStd = "CONFIG_SMS";
/**
 * SMS API
 * 
 * @constructor
 */
function SMSAPI() {
	this.validator = new Validator();
	var standardChoices = aa.bizDomain.getBizDomain(SMSAPI.configurationStd);
	if (!standardChoices.getSuccess()) {
		throw "ERROR: Failed to initialize SMS service, " + standardChoices.getErrorMessage();
	}

	// Read the standard choices and set them in settings object
	standardChoices = standardChoices.getOutput().toArray();
	this.settings = {};
	for ( var i in standardChoices) {
		this.settings[standardChoices[i].getBizdomainValue()] = standardChoices[i].getDescription();
	}
	this.wsUrl = this.settings["SOAP_URL"];
	this.soapAction = this.settings["SOAP_SENDSMS2_ActionHeader"];
	this.soapMessage = this.settings["SOAP_SENDSMS2_XMLBody"];
	this.smsEnabled = this.settings["SMS_ENABLED"] == "true";
	this.soapApi = new SOAPAPI(this.wsUrl, this.soapAction);
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
SMSAPI.prototype.sendSMS = function(recipient, message, recipientName) {
	if (!this.smsEnabled) {
		throw "Failed to send SMS. SMS is disabled in the SMS configuration Standard Choice " + SMSAPI.configurationStd;
	}
	if (Utils.isBlankOrNull(recipient)) {
		throw "Error while sending SMS, the number is empty";
	}

	var soapParameters = Utils.shallowClone(this.settings);
	soapParameters["TO_MOBILE"] = recipient;
	soapParameters["RECIPIENT_NAME"] = !Utils.isBlankOrNull(recipientName) ? recipientName : '';
	soapParameters["SMS_TEXT"] = message;

	var fields = this.soapApi.sendRequestGetFields(this.soapMessage, soapParameters, [ "SendSMS2Result" ]);
	var resultCode = fields["SendSMS2Result"];

	// Possible result codes are:
	// OK, InvalidUser, ExceedQuota, ErrorInInsert, InvalidGroup, ExceedDivisionQuota, InvalidBatch, InvalidMobileNo
	if (resultCode == "InvalidUser") {
		throw "ERROR: Failed to send SMS, the configured Username is invalid. Please check the SMS configuration Standard Choice " + SMSAPI.configurationStd;
	} else if (resultCode == "InvalidMobileNo") {
		throw "ERROR: Failed to send SMS, the recipient mobile number " + recipient + " is invalid";
	} else if (resultCode != "OK") {
		throw "ERROR: Failed to send SMS, the service returned code " + resultCode + ". Please check the SMS configuration Standard Choice " + SMSAPI.configurationStd;
	}
}