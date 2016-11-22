/*------------------------------------------------------------------------------------------------------/
| Program		: ACA_PRCR_RENEWAL_INFORMATION_PAGEFLOW.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 08/11/2016 13:47:49
|
/------------------------------------------------------------------------------------------------------*/

function getScriptText(vScriptName) {
	var servProvCode = aa.getServiceProviderCode();
	vScriptName = vScriptName.toUpperCase();
	var emseBiz = aa.proxyInvoker.newInstance("com.accela.aa.emse.emse.EMSEBusiness").getOutput();
	try {
		var emseScript = emseBiz.getScriptByPK(servProvCode, vScriptName, "ADMIN");
		return emseScript.getScriptText() + "";
	} catch (err) {
		return "";
	}
}
eval(getScriptText("INCLUDE_ACABASE"));

ACABASE.prototype.execute = function() {
	System.require("PRCS");
	try {
		var capModel = this.getCapModel();
		var prcs = new PRCS(capModel.getParentCapID());
		var certificateId = prcs.getCertificate().getCustomID();
		this.editAppSpecific("Certificate ID", certificateId);
	} catch (e) {
		this.showMessage("ERROR:", e + "");
	}

}

run();