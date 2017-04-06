/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_DEMO.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 06/04/2017 11:39:39
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function DEMO() {
	BRA.call(this, "DEMO", "Demo Action");
}
DEMO.prototype = Object.create(BRA.prototype);
DEMO.prototype.constructor = DEMO;
DEMO.prototype.getParams = function() {
	return {
		source : {
			param1 : String(""),
			param2 : String("")

		},
		config : {
			param1 : {
				editor : {
					xtype : 'expfield'
				}
			},
			param2 : {
				displayName : String("parameter 2"),
				editor :"checkboxfield"

			}
		}
	}
}

DEMO.prototype.getParamValues = function(recordType, paramName) {}

DEMO.prototype.validateParams = function(params) {
	var p = params.param1;
	if (!p) {
		throw "param1 can't be empty."
	}
}


DEMO.prototype.run = function(record, params, context) {
	
	context.info("Hello World:"+params.param1)
	
}