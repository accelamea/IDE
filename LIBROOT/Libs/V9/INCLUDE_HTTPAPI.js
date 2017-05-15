/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_HTTPAPI.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: YTITI
| Created at	: 21/11/2016 14:10:05
|
/------------------------------------------------------------------------------------------------------*/
function HTTPAPI() {
}

HTTPAPI.post = function(url, body, headers) {
	return HTTPAPI.send("POST", url, body, headers);
}

HTTPAPI.get = function(url, headers) {
	return HTTPAPI.send("GET", url, "", headers);
}

HTTPAPI.send = function(operation, url, body, headers) {
	var output = {};
	var conn = null;
	if (HTTPAPI.isBlankOrNull(url)) {
		throw "Failed to send HTTP request, url is missing";
	}
	
	if (HTTPAPI.isBlankOrNull(operation)) {
		throw "Failed to send HTTP request, operation type is missing";
	}
	
	if (HTTPAPI.isBlankOrNull(body)) {
		body = "";
	}

	try {
		conn = new Packages.java.net.URL(url).openConnection();
		conn.setRequestMethod(operation);

		if (headers) {
			for ( var key in headers) {
				if (headers.hasOwnProperty(key)) {
					conn.setRequestProperty(key, headers[key]);
				}
			}
		}

		if (operation === "POST" || operation === "PUT") {
			conn.setDoOutput(true);
			var input = new Packages.java.lang.String(body);
			var os = conn.getOutputStream();
			os.write(input.getBytes());
			os.flush();
		}

		output["status"] = conn.getResponseCode();
		var br = new Packages.java.io.BufferedReader(new Packages.java.io.InputStreamReader((conn.getInputStream())));
		var response = "";
		var line;
		while ((line = br.readLine()) != null) {
			response += line;
		}
		output["response"] = response;
	} catch (e) {
		throw e;
	} finally {
		conn.disconnect();
	}

	return output;

}

HTTPAPI.isBlankOrNull = function(object) {
	return (object == null || object == "");
}