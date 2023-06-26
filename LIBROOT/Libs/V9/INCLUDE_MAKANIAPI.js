/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_MAKANIAPI.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: YTITI
| Created at	: 22/04/2019 13:30:15
|
/------------------------------------------------------------------------------------------------------*/
aa.includeScript("INCLUDE_SOAPAPI");

function MAKANIAPI() {
}

MAKANIAPI.makaniServiceUrl = "http://www.makani.ae/MakaniPublicDataService/MakaniPublic.svc/basic";

/**
 * Returns Makani details including latlng
 * 
 * @param {string}
 *            makani id - the makani id you needs details for.
 * 
 * Response Structure:
 * {
 *     "MAKANI": "13270 74915",
 *     "MAKANI_INFO": [
 *         {
 *             "COMMUNITY_E": "AL THANYAH FIFTH - 393",
 *             "COMMUNITY_A": "الثنيه الخامسة - 393",
 *             "ENT_NAME_E": "",
 *             "ENT_NAME_A": "",
 *             "ENT_NO": " ",
 *             "BLDG_NAME_E": " ",
 *             "BLDG_NAME_A": " ",
 *             "EMIRATE_E": "DUBAI",
 *             "EMIRATE_A": "دبي",
 *             "LATLNG": "25.07846,55.14856",
 *             "SHORT_URL": "http://www.makani.ae/q?l=E&amp;m=13270 74915"
 *         }
 *     ]
 * }
*/
MAKANIAPI.getMakaniDetails = function(makaniId) {
	var msg = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:tem=\"http://tempuri.org/\">" +
	"   <soapenv:Header/>" +
	"   <soapenv:Body>" +
	"      <tem:GetMakaniDetails>" +
	"         <tem:makanino>${MAKANI_ID}</tem:makanino>" +
	"         <tem:remarks></tem:remarks>" +
	"      </tem:GetMakaniDetails>" +
	"   </soapenv:Body>" +
	"</soapenv:Envelope>";

	try {
		var soap = new SOAPAPI(MAKANIAPI.makaniServiceUrl, "http://tempuri.org/IMakaniPublic/GetMakaniDetails");

		var res = soap.sendRequestGetFields(msg, {"MAKANI_ID": makaniId}, ["GetMakaniDetailsResult"]);
		var details = res["GetMakaniDetailsResult"];
		return JSON.parse(details);
	} catch (e) {
		aa.debug("MAKANIAPI", e)
		return null;
	}
}

/**
 * Returns Makani QR Code
 * 
 * @param {string}
 *            makani id - the makani id you need QR Code for.
 * 
 * Response Structure:
 * {
 *     "MAKANI": "13270 74915",
 *     "QRCODES": [
 *         {
 *             "QRCODE_URL": "http://www.makani.ae/QRCodeFiles/DUBAI_13270 74915.jpg",
 *             "EMIRATE_E": "DUBAI",
 *             "EMIRATE_A": "دبي"
 *         }
 *     ]
 * }
*/
MAKANIAPI.getQRCodeForMakani = function(makaniId) {
	var msg = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:tem=\"http://tempuri.org/\">" +
	"   <soapenv:Header/>" +
	"   <soapenv:Body>" +
	"      <tem:GetQRCodeForMakani>" +
	"         <tem:makanino>${MAKANI_ID}</tem:makanino>" +
	"         <tem:remarks></tem:remarks>" +
	"      </tem:GetQRCodeForMakani>" +
	"   </soapenv:Body>" +
	"</soapenv:Envelope>";

	try {
		var soap = new SOAPAPI(MAKANIAPI.makaniServiceUrl, "http://tempuri.org/IMakaniPublic/GetQRCodeForMakani");

		var res = soap.sendRequestGetFields(msg, {"MAKANI_ID": makaniId}, ["GetQRCodeForMakaniResult"]);
		var details = res["GetQRCodeForMakaniResult"];
		return JSON.parse(details);
	} catch (e) {
		aa.debug("MAKANIAPI", e)
		return null;
	}
}

/**
 * Returns if a Makani id is valid
 * 
 * @param {string}
 *            makani id - the makani id you need to validate.
 * 
 * Response Structure:
 * {
 *     "MAKANI": "13270 74915",
 *     "IS_VALID": "true",
 *     "VALID": [
 *         {
 *             "EMIRATE_E": "DUBAI",
 *             "EMIRATE_A": "دبي"
 *         }
 *     ]
 * }
*/
MAKANIAPI.isValidMakani = function(makaniId) {
	var msg = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:tem=\"http://tempuri.org/\">" +
	"   <soapenv:Header/>" +
	"   <soapenv:Body>" +
	"      <tem:IsValidMakani>" +
	"         <tem:makanino>${MAKANI_ID}</tem:makanino>" +
	"         <tem:remarks></tem:remarks>" +
	"      </tem:IsValidMakani>" +
	"   </soapenv:Body>" +
	"</soapenv:Envelope>";

	try {
		var soap = new SOAPAPI(MAKANIAPI.makaniServiceUrl, "http://tempuri.org/IMakaniPublic/IsValidMakani");

		var res = soap.sendRequestGetFields(msg, {"MAKANI_ID": makaniId}, ["IsValidMakaniResult"]);
		var details = res["IsValidMakaniResult"];
		return JSON.parse(details);
	} catch (e) {
		aa.debug("MAKANIAPI", e)
		return null;
	}
}

/**
 * Returns if a Makani id is valid
 * 
 * @param {string}
 *            makani id - the makani id you need to validate.
 * 
 * Response Structure:
 * {
 *     "COMMUNITY_E": "AL THANYAH FIFTH - 393",
 *     "COMMUNITY_A": "الثنيه الخامسة - 393",
 *     "BLDG_NAME_E": " ",
 *     "BLDG_NAME_A": " ",
 *     "EMIRATE_E": "DUBAI",
 *     "EMIRATE_A": "دبي",
 *     "MAKANI_INFO": [
 *         {
 *             "MAKANI": "13270 74915",
 *             "LATLNG": "25.07846,55.14856",
 *             "ENT_NAME_E": "",
 *             "ENT_NAME_A": "",
 *             "ENT_NO": " ",
 *             "SHORT_URL": "http://www.makani.ae/q?l=E&amp;m=13270 74915"
 *         }
 *     ]
 * }
*/
MAKANIAPI.getMakaniInfoFromCoord = function(lat, lng) {
	var msg = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:tem=\"http://tempuri.org/\">" +
	"   <soapenv:Header/>" +
	"   <soapenv:Body>" +
	"      <tem:GetMakaniInfoFromCoord>" +
	"         <tem:latitude>${LAT}</tem:latitude>" +
	"         <tem:longitude>${LNG}</tem:longitude>" +
	"         <tem:remarks></tem:remarks>" +
	"      </tem:GetMakaniInfoFromCoord>" +
	"   </soapenv:Body>" +
	"</soapenv:Envelope>";

	try {
		var soap = new SOAPAPI(MAKANIAPI.makaniServiceUrl, "http://tempuri.org/IMakaniPublic/GetMakaniInfoFromCoord");

		var res = soap.sendRequestGetFields(msg, {"LAT": lat, "LNG": lng}, ["GetMakaniInfoFromCoordResult"]);
		var details = res["GetMakaniInfoFromCoordResult"];
		return JSON.parse(details);
	} catch (e) {
		aa.debug("MAKANIAPI", e)
		return null;
	}
}
