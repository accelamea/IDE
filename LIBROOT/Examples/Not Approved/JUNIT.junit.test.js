eval(getScriptText("INCLUDE_JUNIT"));

try {
	var tests=JUNIT.execute();
	for(var x in tests){
		tests[x].dumpLogs();
	}
} catch (e) {
	aa.print("ERROR:" + e)
}