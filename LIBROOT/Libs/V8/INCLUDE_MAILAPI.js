/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_MAILAPI.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: YTITI
| Created at	: 12/10/2016 15:26:20
|
/------------------------------------------------------------------------------------------------------*/
System.require("Utils");
var MailAPI = {};
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
MailAPI.send = function(arrTo, arrCC, arrBcc, title, content, arrMessageAttachmentModel) {
	if (!Utils.isJSArray(arrTo)) {
		arrTo = [];
	}
	if (!Utils.isJSArray(arrCC)) {
		arrCC = [];
	}
	if (!Utils.isJSArray(arrBcc)) {
		arrBcc = [];
	}
	if (arrTo.length + arrCC.length + arrBcc.length == 0) {
		throw "ERROR: send email requires at least one recipient in the to, CC or BCC ";
	}
	if (arrMessageAttachmentModel && !Utils.isJavaArray(arrMessageAttachmentModel)) {
		throw "ERROR: the provided message attachment models must be an array list";
	}

	var emailsArr = arrTo.map(function(obj) {
		return [ obj, 'TO' ];
	});
	emailsArr = emailsArr.concat(arrCC.map(function(obj) {
		return [ obj, 'CC' ];
	}));
	emailsArr = emailsArr.concat(arrBcc.map(function(obj) {
		return [ obj, 'BCC' ];
	}));

	var contactMessageModels = aa.communication.getContactList(emailsArr, 'EMAIL').getOutput();

	var messageModel = aa.communication.getEmailMessageScriptModel().getOutput();

	// Non-English titles will appear as artifacts if not encoded
	title = Utils.base64Encode(title);
	messageModel.setTitle("=?utf-8?b?" + title + "?=");
	messageModel.setContent(content);
	messageModel.setContacts(contactMessageModels);
	if (arrMessageAttachmentModel && !arrMessageAttachmentModel.isEmpty()) {
		messageModel.setAttachments(arrMessageAttachmentModel);
	}

	var result = aa.communication.sendMessage(messageModel);

	if (!result.getSuccess()) {
		throw "ERROR: failed to send email; " + result.getErrorMessage();
	}
}