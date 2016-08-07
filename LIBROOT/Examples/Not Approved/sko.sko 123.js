var variable0 = expression.getValue("ASI::GENERAL::Terms And Conditions Agreement CAB");
var variable1 = expression.getValue("ASI::FORM");

var PlzAccept = "<div class='tooltip_outer' style='margin: 10px 520px;width: 190px'><div class='tooltip_arrow'></div><div class='tooltip_txt'>" + "Unless you accept the Terms and Condition this application cannot continue" + "</div></div>";

var msg = variable0.message.replace(PlzAccept,"");

if((variable0.value != null && (variable0.value.equalsIgnoreCase('NO') || variable0.value.equalsIgnoreCase('N') || variable0.value.equalsIgnoreCase('UNCHECKED') || variable0.value.equalsIgnoreCase('UNSELECTED') || variable0.value.equalsIgnoreCase('FALSE') || variable0.value.equalsIgnoreCase('OFF'))))
{
   variable1.blockSubmit = true;
   expression.setReturn(variable1);
   
   variable0.message = msg + PlzAccept;
}
else
{
   variable0.message = msg;
}

expression.setReturn(variable0);