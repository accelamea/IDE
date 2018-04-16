/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_BRA_DEBUG.js
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: ADMIN
| Created at	: 25/01/2018 10:30:55
|
/------------------------------------------------------------------------------------------------------*/
if (typeof Record === "undefined") {
	eval(getScriptText("INCLUDE_BRA"));
}
function DEBUG() {
	BRA.call(this, "DEBUG", "Debug something");
}
DEBUG.prototype = Object.create(BRA.prototype);
DEBUG.prototype.constructor = DEBUG;
DEBUG.prototype.getAuthor = function() {
	return "Sleiman KOZAIZAN";
}
DEBUG.prototype.getDescription = function() {
	return "this action debug a variable value";
}
DEBUG.prototype.getParams = function() {
	return {
		source : {
			message : String("")

		},
		config : {
			message : {
				help : "the message you want to debug",
				displayName : String('Message'),
				editor : {
					xtype : 'expfield'
				}
			}
		}
	}
}
DEBUG.prototype.run = function(record, params, context) {
	aa.debug("CTXDEBUG", params.message)
	context.debug(params.message)
}