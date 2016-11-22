/*------------------------------------------------------------------------------------------------------/
| Program		: EXAMPLE WITH INCLUDE_BASEBATCH LIB.js
| Event			: 
|
| Usage			: 
| Notes			:  
| Created by	: 
| Created at	: 
|
/------------------------------------------------------------------------------------------------------*/
var publicUser = "";
var useAppSpecificGroupName = false;
var currentUserID = aa.getAuditID();
var br = "\n";
function getScriptText(vScriptName) {
	var servProvCode = aa.getServiceProviderCode();
	if (arguments.length > 1)
		servProvCode = arguments[1]; // use different serv prov code
	vScriptName = vScriptName.toUpperCase();
	var emseBiz = aa.proxyInvoker.newInstance("com.accela.aa.emse.emse.EMSEBusiness").getOutput();
	try {
		var emseScript = emseBiz.getScriptByPK(servProvCode, vScriptName, "ADMIN");
		return emseScript.getScriptText() + "";
	} catch (err) {
		return "";
	}
}
eval(getScriptText("INCLUDE_BASEBATCH"));

Batch.prototype.execute = function() {
	try {
		// TODO: write your code here
	} catch (e) {
		this.log("ERROR:", e + "");
	}

}

run();