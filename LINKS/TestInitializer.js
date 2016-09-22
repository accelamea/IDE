eval(getScriptText("INCLUDES_ACCELA_FUNCTIONS"));
eval(getScriptText("INCLUDES_CUSTOM"));

if (logDebug) {
	logDebug = function(x) {
		aa.print("DEBUG: " + x)
	}
}
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
useAppSpecificGroupName = true;
var showDebug = true;
function logConsole(msg) {
	aa.print("DEBUG: " + msg)
}
function debug(msg) {
	aa.print(msg);
}
function printObject(obj) {

	if (obj.getClass) {
		aa.print("------------------START JAVA OBJECT: " + obj.getClass().getName() + " ----------------")
		var methods = obj.getClass().getMethods();
		for ( var x in methods) {
			var method = methods[x];
			var str = "";
			str += methods[x].getName();
			var types = methods[x].getParameterTypes();
			str += "(";
			if (types.length > 0) {

				for ( var y in types) {
					if (y > 0) {
						str += ", ";
					}
					var type = types[y];
					str += type.getName();

				}

			}
			str += ")";
			var ret = method.getReturnType().getName();
			ret = (ret == "void") ? "" : " RETURN " + ret;

			aa.print(str + ret)

		}
	} else {
		if (obj.length) {
			aa.print("------------------START JS ARRAY DEBUG----------------")
			for ( var x in obj) {
				aa.print("Array[" + x + "]=" + obj[x]);
			}
		} else {
			aa.print("------------------START JS OBJECT DEBUG----------------")
			for ( var i in obj) {
				aa.print(i + "=" + obj[i])
			}
		}
	}
	aa.print("-------------------------------------------")
}

var br = "\n";
var currentUserID = aa.getAuditID();