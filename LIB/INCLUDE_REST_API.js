function RestAPI(url) {

	if (this.isBlankOrNull(url)) {
		throw "URL is mandatory";
	}
	url = url.replace(/ /g, '%20');
	this.url = new Packages.java.net.URL(url); 
}

RestAPI.prototype.callMethod = function(operationType, body, userName,password , contentType) {
	var output = "";
        var conn = null;
	var userpass = new Packages.java.lang.String(userName + ":" + password);
		
	var basicAuth = "Basic " + Packages.javax.xml.bind.DatatypeConverter.printBase64Binary(userpass.getBytes());

	try {
		if (!contentType) {
			//contentType = "application/json";
			contentType = "text/plain";
		}

		conn = this.url.openConnection();
		conn.setRequestMethod(operationType);
		
		//conn.setRequestProperty("Accept", contentType);
		//conn.setRequestProperty( "Content-type", contentType );
		
		conn.setRequestProperty("Accept", "text/plain");
		conn.setRequestProperty( "Content-type", "application/json" );
	    conn.setRequestProperty ("Authorization", basicAuth);

		if (operationType == "POST" || operationType == "PUT") {

			conn.setDoOutput(true);
			var input = new Packages.java.lang.String(body);
			var os = conn.getOutputStream();
			os.write(input.getBytes());
			os.flush();
		}

		var status = conn.getResponseCode();
		var br = new Packages.java.io.BufferedReader(new Packages.java.io.InputStreamReader((conn.getInputStream())));
		var output = "";
		var line;
		while ((line = br.readLine()) != null) {
			output += line;
		}
	} finally {
	    conn.disconnect();
	}

	return output;

}

RestAPI.prototype.isBlankOrNull = function(object) {
	return (object == null || object == "");

}