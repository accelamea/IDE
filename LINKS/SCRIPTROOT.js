/**
* class aa
*/
function aa(){
}
aa.messageResources= new EMSETextMessageResourcesScript();
aa.set= new SetScript();
aa.batchJob= new BatchJobScript();
aa.env= new ScriptEnvironment();
aa.cap= new CapScript();
aa.person= new PersonScript();
aa.workflow= new WorkflowScript();
aa.fee= new FeeScript();
aa.smartNotice= new SmartNoticeScript();
aa.inspection= new InspectionScript();
aa.capCondition= new CapConditionScript();
aa.parcel= new ParcelScript();
aa.parcelCondition= new ParcelConditionScript();
aa.date= new ScriptDateTimeUtil();
aa.cashier= new CashierScript();
aa.eventLog= new EventLogScript();
aa.appSpecificInfo= new AppSpecificInfoScript();
aa.taskSpecificInfo= new TaskSpecificInfoScript();
aa.people= new PeopleScript();
aa.serviceProvider= new ServiceProviderScript();
aa.userright= new UserRightScript();
aa.calendar= new CalendarScript();
aa.meeting= new MeetingScript();
aa.alert= new AlertScript();
aa.genericQuery= new GenericQueryScript();
aa.gis= new GISScript();
aa.addressCondition= new AddressConditionScript();
aa.caeCondition= new CAEConditionScript();
aa.address= new AddressScript();
aa.invoice= new InvoiceScript();
aa.finance= new FinanceScript();
aa.additionalInfo= new AdditionalInfoScript();
aa.expiration= new ExpirationScript();
aa.licenseScript= new LicenseScript();
aa.owner= new OwnerScript();
aa.bizDomain= new BizDomainScript();
aa.util= new UtilScript();
aa.m_licenseProfessional= new LicenseProfessionalScript();
aa.licenseProfessional= new LicenseProfessionalScript();
aa.bStructure= new BStructureScript();
aa.gStructure= new GStructureScript();
aa.trustAccount= new TrustAccountScript();
aa.appSpecificTableScript= new AppSpecificTableScript();
aa.exchange= new ExchangeScript();
aa.ePayment= new EPaymentScript();
aa.reportManager= new RunReportScript();
aa.activitySpecInfo= new ActivitySpecInfoScript();
aa.asset= new AssetScript();
aa.communication= new CommunicationScript();
aa.assetCA= new AssetCAScript();
aa.partTransaction= new PartTransactionScript();
aa.timeAccounting= new TimeAccountingScript();
aa.publicUser= new PublicUserScript();
aa.proxyInvoker= new ProxyInvoker();
aa.httpClient= new HttpClientScript();
aa.oAuthClient= new OAuthClientScript();
aa.ratingFormula= new RatingFormulaScript();
aa.structEstabScript= new StructureEstablishmentScript();
aa.contractorLicense= new ContractorLicenseScript();
aa.specialSearch= new SpecialSearchScript();
aa.reconciliationScript= new ReconciliationScript();
aa.shoppingCart= new ShoppingCartScript();
aa.globalSearch= new GlobalSearchScript();
aa.commonCondition= new CommonConditionScript();
aa.education= new EducationScript();
aa.continuingEducation= new ContinuingEducationScript();
aa.examination= new ExaminationScript();
aa.wsConsumer= new WSConsumerScript();
aa.document= new DocumentScript();
aa.workOrder= new WorkOrderScript();
aa.genericTemplate= new GenericTemplateScript();
aa.condition= new ConditionScript();
aa.ownerCondition= new OwnerConditionScript();
aa.activity= new ActivityScript();
aa.acaPageFlow= new ACAPageFlowScript();
aa.guidesheet= new GuidesheetScript();
aa.messageService= new MessageScript();
aa.failureDocument= new FailureDocumentScript();
aa.asiDrillDown= new ASIDrillDownScript();
/**
*@param String: java.lang.String
*@return: void
*/
aa.log=function(String){}

/**
*@param String: java.lang.String
*@param Object: java.lang.Object
*@return: void
*/
aa.debug=function(String, Object){}

/**
*@param long: long
*@return: void
*/
aa.sleep=function(long){}

/**
*@param String: java.lang.String
*@return: void
*/
aa.print=function(String){}

/**
*@param String: java.lang.String
*@return: void
*/
aa.setDelegateAgencyCode=function(String){}

/**
*@return: void
*/
aa.resetDelegateAgencyCode=function(){}

/**
*@param String: java.lang.String
*@param HashMap: java.util.HashMap
*@return: void
*/
aa.runAsyncScript=function(String, HashMap){}

/**
*@param String: java.lang.String
*@return: void
*/
aa.timerStart=function(String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
aa.includeScript=function(String){}

/**
*@return: void
*/
aa.abortScript=function(){}

/**
*@param String: java.lang.String
*@return: void
*/
aa.timerEnd=function(String){}

/**
*@return: String
*/
aa.getServiceProviderCode=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param Hashtable: java.util.Hashtable
*@param String: java.lang.String
*@return: ScriptResult
*/
aa.runOracleReport=function(String, String, String, Hashtable, String){}

/**
*@param String: java.lang.String
*@return: void
*/
aa.runScriptInNewTransaction=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param StringArray: [Ljava.lang.String;
*@return: ScriptResult
*/
aa.sendEmailWithAttachedFiles=function(String, String, String, String, String, StringArray){}

/**
*@return: String
*/
aa.getDebugOutput=function(){}

/**
*@return: String
*/
aa.getAuditID=function(){}

/**
*@param String: java.lang.String
*@return: void
*/
aa.runScript=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
aa.getHashtable=function(String, String){}

/**
*@param String: java.lang.String
*@param Hashtable: java.util.Hashtable
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
aa.runAdHoc=function(String, Hashtable, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
aa.sendMail=function(String, String, String, String, String){}

/**
*@param Context: org.mozilla.javascript.Context
*@param Scriptable: org.mozilla.javascript.Scriptable
*@return: void
*/
aa.initEnv=function(Context, Scriptable){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
aa.sendEmail=function(String, String, String, String, String, String){}

/**
*@return: void
*/
aa.cleanEvn=function(){}

/**
*@param long: long
*@param int: int
*@return: void
*/
aa.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
aa.wait=function(long){}

/**
*@return: void
*/
aa.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
aa.equals=function(Object){}

/**
*@return: String
*/
aa.toString=function(){}

/**
*@return: int
*/
aa.hashCode=function(){}

/**
*@return: Class
*/
aa.getClass=function(){}

/**
*@return: void
*/
aa.notify=function(){}

/**
*@return: void
*/
aa.notifyAll=function(){}

/**
* class EMSETextMessageResourcesScript
*/
function EMSETextMessageResourcesScript(){
}
/**
*@param String: java.lang.String
*@return: String
*/
EMSETextMessageResourcesScript.prototype.getLocalMessage=function(String){}

/**
*@param String: java.lang.String
*@param ObjectArray: [Ljava.lang.Object;
*@return: String
*/
EMSETextMessageResourcesScript.prototype.getLocalMessage=function(String, ObjectArray){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
EMSETextMessageResourcesScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
EMSETextMessageResourcesScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
EMSETextMessageResourcesScript.prototype.wait=function(long){}

/**
*@return: void
*/
EMSETextMessageResourcesScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
EMSETextMessageResourcesScript.prototype.equals=function(Object){}

/**
*@return: String
*/
EMSETextMessageResourcesScript.prototype.toString=function(){}

/**
*@return: int
*/
EMSETextMessageResourcesScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
EMSETextMessageResourcesScript.prototype.getClass=function(){}

/**
*@return: void
*/
EMSETextMessageResourcesScript.prototype.notify=function(){}

/**
*@return: void
*/
EMSETextMessageResourcesScript.prototype.notifyAll=function(){}

/**
* class SetScript
*/
function SetScript(){
}
/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
SetScript.prototype.add=function(String, String, CapIDModel, String){}

/**
*@param String: java.lang.String
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
SetScript.prototype.add=function(String, CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param double: double
*@return: ScriptResult
*/
SetScript.prototype.createSet4RandomAudit=function(String, String, String, String, double){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param RandomAuditRuleScriptModel: com.accela.aa.emse.dom.RandomAuditRuleScriptModel
*@return: ScriptResult
*/
SetScript.prototype.createSet4RandomAudit=function(String, String, String, RandomAuditRuleScriptModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
SetScript.prototype.getCAPSetMembersByPK=function(String){}

/**
*@return: ScriptResult
*/
SetScript.prototype.getNewRandomAuditRuleModel=function(){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
SetScript.prototype.getParcelSetMembersByPK=function(String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
SetScript.prototype.getAddressSetMembersByPK=function(String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
SetScript.prototype.getSetSetMembersByPK=function(String){}

/**
*@param SetHeaderScriptModel: com.accela.aa.emse.dom.SetHeaderScriptModel
*@return: ScriptResult
*/
SetScript.prototype.createSetHeader=function(SetHeaderScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
SetScript.prototype.addSetofSetMember=function(String, String){}

/**
*@param SetDetailsScriptModel: com.accela.aa.emse.dom.SetDetailsScriptModel
*@return: ScriptResult
*/
SetScript.prototype.getSetBySetMember=function(SetDetailsScriptModel){}

/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: ScriptResult
*/
SetScript.prototype.removeSetHeadersListByLP=function(String, Long){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
SetScript.prototype.getSetHeadersListByLP=function(Long){}

/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: ScriptResult
*/
SetScript.prototype.addLPSetMember=function(String, Long){}

/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: ScriptResult
*/
SetScript.prototype.addAddressSetMember=function(String, Long){}

/**
*@param SetHeaderScriptModel: com.accela.aa.emse.dom.SetHeaderScriptModel
*@return: ScriptResult
*/
SetScript.prototype.updateSetHeader=function(SetHeaderScriptModel){}

/**
*@param List: java.util.List
*@return: ScriptResult
*/
SetScript.prototype.addRecordSetMembers=function(List){}

/**
*@param String: java.lang.String
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
SetScript.prototype.removeSetHeadersListByCap=function(String, CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
SetScript.prototype.removeSetHeadersListByChild=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
SetScript.prototype.addParcelSetMember=function(String, String){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
SetScript.prototype.getSetHeadersListByAddress=function(Long){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
SetScript.prototype.getSetHeadersListByParcel=function(String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
SetScript.prototype.removeSetHeader=function(String){}

/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: ScriptResult
*/
SetScript.prototype.removeSetHeadersListByAddress=function(String, Long){}

/**
*@return: ScriptResult
*/
SetScript.prototype.getSetDetailsScriptModel=function(){}

/**
*@return: ScriptResult
*/
SetScript.prototype.getSetHeaderScriptModel=function(){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
SetScript.prototype.getSetHeadersListByChildSet=function(String){}

/**
*@param String: java.lang.String
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
SetScript.prototype.addCapSetMember=function(String, CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
SetScript.prototype.getSetHeadersListByMember=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
SetScript.prototype.removeSetHeadersListByParcel=function(String, String){}

/**
*@param SetHeaderScriptModel: com.accela.aa.emse.dom.SetHeaderScriptModel
*@return: ScriptResult
*/
SetScript.prototype.getSetHeaderListByModel=function(SetHeaderScriptModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
SetScript.prototype.getLPSetMembersByPK=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
SetScript.prototype.createSet=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
SetScript.prototype.createSet=function(String, String, String, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
SetScript.prototype.getSetByPK=function(String){}

/**
*@param SetDetailsScriptModel: com.accela.aa.emse.dom.SetDetailsScriptModel
*@return: ScriptResult
*/
SetScript.prototype.updateSetMemberStatus=function(SetDetailsScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
SetScript.prototype.updateSet=function(String, String, String){}

/**
*@param SetDetailsScriptModel: com.accela.aa.emse.dom.SetDetailsScriptModel
*@return: ScriptResult
*/
SetScript.prototype.getSetMembers=function(SetDetailsScriptModel){}

/**
*@param SetDetailsScriptModel: com.accela.aa.emse.dom.SetDetailsScriptModel
*@return: ScriptResult
*/
SetScript.prototype.deleteSetMembers=function(SetDetailsScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
SetScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
SetScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
SetScript.prototype.wait=function(long){}

/**
*@return: void
*/
SetScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
SetScript.prototype.equals=function(Object){}

/**
*@return: String
*/
SetScript.prototype.toString=function(){}

/**
*@return: int
*/
SetScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
SetScript.prototype.getClass=function(){}

/**
*@return: void
*/
SetScript.prototype.notify=function(){}

/**
*@return: void
*/
SetScript.prototype.notifyAll=function(){}

/**
* class BatchJobScript
*/
function BatchJobScript(){
}
/**
*@param int: int
*@return: ScriptResult
*/
BatchJobScript.prototype.beginTransaction=function(int){}

/**
*@return: ScriptResult
*/
BatchJobScript.prototype.commitTransaction=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
BatchJobScript.prototype.editBatchJobStatus=function(String, String){}

/**
*@return: ScriptResult
*/
BatchJobScript.prototype.getJobID=function(){}

/**
*@return: ScriptResult
*/
BatchJobScript.prototype.rollbackTransaction=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
BatchJobScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
BatchJobScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
BatchJobScript.prototype.wait=function(long){}

/**
*@return: void
*/
BatchJobScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
BatchJobScript.prototype.equals=function(Object){}

/**
*@return: String
*/
BatchJobScript.prototype.toString=function(){}

/**
*@return: int
*/
BatchJobScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
BatchJobScript.prototype.getClass=function(){}

/**
*@return: void
*/
BatchJobScript.prototype.notify=function(){}

/**
*@return: void
*/
BatchJobScript.prototype.notifyAll=function(){}

/**
* class ScriptEnvironment
*/
function ScriptEnvironment(){
}
/**
*@param String: java.lang.String
*@return: Object
*/
ScriptEnvironment.prototype.getValue=function(String){}

/**
*@param String: java.lang.String
*@param Object: java.lang.Object
*@return: void
*/
ScriptEnvironment.prototype.setValue=function(String, Object){}

/**
*@param Hashtable: java.util.Hashtable
*@return: void
*/
ScriptEnvironment.prototype.setParamValues=function(Hashtable){}

/**
*@return: Hashtable
*/
ScriptEnvironment.prototype.getParamValues=function(){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ScriptEnvironment.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ScriptEnvironment.prototype.wait=function(long){}

/**
*@return: void
*/
ScriptEnvironment.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ScriptEnvironment.prototype.equals=function(Object){}

/**
*@return: String
*/
ScriptEnvironment.prototype.toString=function(){}

/**
*@return: int
*/
ScriptEnvironment.prototype.hashCode=function(){}

/**
*@return: Class
*/
ScriptEnvironment.prototype.getClass=function(){}

/**
*@return: void
*/
ScriptEnvironment.prototype.notify=function(){}

/**
*@return: void
*/
ScriptEnvironment.prototype.notifyAll=function(){}

/**
* class CapScript
*/
function CapScript(){
}
/**
*@param CommentModel: com.accela.aa.aamain.cap.CommentModel
*@return: ScriptResult
*/
CapScript.prototype.createComment=function(CommentModel){}

/**
*@return: CapCommentScriptModel
*/
CapScript.prototype.createCapCommentScriptModel=function(){}

/**
*@param Date: java.util.Date
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.combineDateTime=function(Date, String){}

/**
*@return: ScriptResult
*/
CapScript.prototype.removeExpiredIncompleteCAP=function(){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@return: ScriptResult
*/
CapScript.prototype.getProjectChildren=function(CapIDModel, int){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.addProjectChild=function(CapIDModel, CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.removeProjectChild=function(CapIDModel, CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.createAppHierarchy=function(CapIDModel, CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@return: ScriptResult
*/
CapScript.prototype.getProjectParents=function(CapIDModel, int){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.removeAppHierarchy=function(CapIDModel, CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.getChildByMasterID=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param boolean: boolean
*@return: ScriptResult
*/
CapScript.prototype.createAmendmentCap=function(CapIDModel, CapIDModel, boolean){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.updateRenewalCapStatus=function(CapIDModel, CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param boolean: boolean
*@return: ScriptResult
*/
CapScript.prototype.createRenewalCap=function(CapIDModel, CapIDModel, boolean){}

/**
*@param CapWorkDesModel: com.accela.aa.aamain.cap.CapWorkDesModel
*@return: ScriptResult
*/
CapScript.prototype.editCapWorkDes=function(CapWorkDesModel){}

/**
*@param StatusHistoryModel: com.accela.aa.aamain.cap.StatusHistoryModel
*@return: ScriptResult
*/
CapScript.prototype.createStatusHistory=function(StatusHistoryModel){}

/**
*@param CapWorkDesModel: com.accela.aa.aamain.cap.CapWorkDesModel
*@return: ScriptResult
*/
CapScript.prototype.createCapWorkDes=function(CapWorkDesModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
CapScript.prototype.getStatusHistoryByCap=function(CapIDModel, String, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.removeCapWorkDes=function(CapIDModel){}

/**
*@return: ScriptResult
*/
CapScript.prototype.getCapTypeModel=function(){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.runEMSEScriptAfterCreateRealCap=function(CapModel, CapIDModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: ScriptResult
*/
CapScript.prototype.convertAppSpecTableField2Value4ACA=function(CapModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.runEMSEScriptBeforeCreateRealCap=function(CapModel, CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param boolean: boolean
*@return: ScriptResult
*/
CapScript.prototype.transferRenewCapDocument=function(CapIDModel, CapIDModel, boolean){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.transferRenewCapDocument=function(CapIDModel, CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.checkAppTypeStatus=function(String, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.deletePartialCAP=function(CapIDModel){}

/**
*@return: ScriptResult
*/
CapScript.prototype.newCapScriptModel=function(){}

/**
*@param CapTypeModel: com.accela.aa.aamain.cap.CapTypeModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.createSimplePartialRecord=function(CapTypeModel, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.isRenewalInProgess=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getPrimaryTrustAccountByCapID=function(CapIDModel, String){}

/**
*@param CapScriptModel: com.accela.aa.emse.dom.CapScriptModel
*@return: ScriptResult
*/
CapScript.prototype.updateAppWithModel=function(CapScriptModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapTypeModel: com.accela.aa.aamain.cap.CapTypeModel
*@return: ScriptResult
*/
CapScript.prototype.getChildrenCaps=function(CapIDModel, CapTypeModel){}

/**
*@param CapScriptModel: com.accela.aa.emse.dom.CapScriptModel
*@return: ScriptResult
*/
CapScript.prototype.createAppWithModel=function(CapScriptModel){}

/**
*@param CapTypeModel: com.accela.aa.aamain.cap.CapTypeModel
*@return: ScriptResult
*/
CapScript.prototype.getCapTypeDetailByPK=function(CapTypeModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: ScriptResult
*/
CapScript.prototype.getCapIDListByCapModel=function(CapModel){}

/**
*@param CapIDScriptModel: com.accela.aa.emse.dom.CapIDScriptModel
*@return: ScriptResult
*/
CapScript.prototype.getCapPrimaryContact=function(CapIDScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getStaffByUser=function(String, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.getChildCapByParentCapId=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param List: java.util.List
*@param List: java.util.List
*@return: ScriptResult
*/
CapScript.prototype.batchCreateChildRecords=function(CapIDModel, List, List){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.copyRenewCapDocument=function(CapIDModel, CapIDModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.isPendingValidationRecord=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getProjectByMasterID=function(CapIDModel, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getTrustAccountsByCapID=function(CapIDModel, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getCapIDsByAPOAttribute=function(String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.getCapViewByID=function(CapIDModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: ScriptResult
*/
CapScript.prototype.getCapScriptModel=function(CapModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.getBValuatn4AddtInfo=function(CapIDModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: ScriptResult
*/
CapScript.prototype.createPartialRecord=function(CapModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.createRenewalRecord=function(CapIDModel){}

/**
*@param CapIDScriptModelArray: [Lcom.accela.aa.emse.dom.CapIDScriptModel;
*@return: ScriptResult
*/
CapScript.prototype.getSimpleCapsByCapIDs=function(CapIDScriptModelArray){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: void
*/
CapScript.prototype.sendMailForUpdateRecord=function(CapIDModel, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.parseStr2Double=function(String){}

/**
*@param ACAModel: com.accela.aa.finance.cashier.onlinePayment.util.ACAModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.transferCapDoc4EMSEPay=function(ACAModel, CapIDModel, CapIDModel){}

/**
*@param CapScriptModel: com.accela.aa.emse.dom.CapScriptModel
*@param CapScriptModel: com.accela.aa.emse.dom.CapScriptModel
*@return: ScriptResult
*/
CapScript.prototype.copyOwner=function(CapScriptModel, CapScriptModel){}

/**
*@param CapScriptModel: com.accela.aa.emse.dom.CapScriptModel
*@param CapScriptModel: com.accela.aa.emse.dom.CapScriptModel
*@return: ScriptResult
*/
CapScript.prototype.copyAddress=function(CapScriptModel, CapScriptModel){}

/**
*@param CapScriptModel: com.accela.aa.emse.dom.CapScriptModel
*@param CapScriptModel: com.accela.aa.emse.dom.CapScriptModel
*@return: ScriptResult
*/
CapScript.prototype.copyComments=function(CapScriptModel, CapScriptModel){}

/**
*@param CapDetailScriptModel: com.accela.aa.emse.dom.CapDetailScriptModel
*@param BValuatnScriptModel: com.accela.aa.emse.dom.BValuatnScriptModel
*@return: ScriptResult
*/
CapScript.prototype.editAddtInfo=function(CapDetailScriptModel, BValuatnScriptModel){}

/**
*@param CapScriptModel: com.accela.aa.emse.dom.CapScriptModel
*@param CapScriptModel: com.accela.aa.emse.dom.CapScriptModel
*@return: ScriptResult
*/
CapScript.prototype.copyParcel=function(CapScriptModel, CapScriptModel){}

/**
*@param CapScriptModel: com.accela.aa.emse.dom.CapScriptModel
*@param CapScriptModel: com.accela.aa.emse.dom.CapScriptModel
*@return: ScriptResult
*/
CapScript.prototype.copyContact=function(CapScriptModel, CapScriptModel){}

/**
*@param long: long
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
CapScript.prototype.getCAEConditions=function(long, String, QueryFormat){}

/**
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
CapScript.prototype.getStandardComment=function(QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
CapScript.prototype.removeCommentByActivity=function(CapIDModel, long){}

/**
*@param CapCommentModel: com.accela.aa.aamain.cap.CapCommentModel
*@return: ScriptResult
*/
CapScript.prototype.deleteCapComment=function(CapCommentModel){}

/**
*@param long: long
*@return: ScriptResult
*/
CapScript.prototype.getGuideItemComment=function(long){}

/**
*@param CommentModel: com.accela.aa.aamain.cap.CommentModel
*@return: ScriptResult
*/
CapScript.prototype.createGuideItemComment=function(CommentModel){}

/**
*@param CapCommentModel: com.accela.aa.aamain.cap.CapCommentModel
*@return: ScriptResult
*/
CapScript.prototype.createCapComment=function(CapCommentModel){}

/**
*@param CapCommentModel: com.accela.aa.aamain.cap.CapCommentModel
*@return: ScriptResult
*/
CapScript.prototype.editCapComment=function(CapCommentModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: CapIDModel
*/
CapScript.prototype.getTradeNameByTradeLicense=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
CapScript.prototype.getCapTypeList=function(String, QueryFormat){}

/**
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
CapScript.prototype.getCapTypeList=function(QueryFormat){}

/**
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
CapScript.prototype.getCapIDByInspGroup=function(String, QueryFormat){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param GISObjects: com.accela.aa.xml.model.gis.GISObjects
*@return: ScriptResult
*/
CapScript.prototype.getCapListByCollection=function(CapModel, AddressModel, String, ScriptDateTime, ScriptDateTime, QueryFormat, GISObjects){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param GISObjectModelArray: [Lcom.accela.aa.gis.gis.GISObjectModel;
*@return: ScriptResult
*/
CapScript.prototype.getCapListByCollection=function(CapModel, AddressModel, String, ScriptDateTime, ScriptDateTime, QueryFormat, GISObjectModelArray){}

/**
*@param UserTempDataModel: com.accela.aa.aamain.cap.UserTempDataModel
*@return: ScriptResult
*/
CapScript.prototype.getFunctionContentByPK=function(UserTempDataModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.updateCapAltID=function(CapIDModel, String){}

/**
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
CapScript.prototype.getProjectTypeList=function(QueryFormat){}

/**
*@param StatusHistoryModel: com.accela.aa.aamain.cap.StatusHistoryModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.updateAppStatus=function(StatusHistoryModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@return: ScriptResult
*/
CapScript.prototype.updateAppStatus=function(CapIDModel, String, String, ScriptDateTime, String, SysUserModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.requestCreateCap=function(String, String){}

/**
*@param String: java.lang.String
*@param Integer: java.lang.Integer
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
CapScript.prototype.getCapListByDetailAddress=function(String, Integer, String, String, String, QueryFormat){}

/**
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
CapScript.prototype.getCapListByParcelID=function(String, QueryFormat){}

/**
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
CapScript.prototype.getCapTypeListByModule=function(String, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.updateAccessByACA=function(CapIDModel, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param Date: java.util.Date
*@param Date: java.util.Date
*@return: ScriptResult
*/
CapScript.prototype.getCapsByAppTypeDateRange=function(CapModel, Date, Date){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.updateCreatedAccessBy4ACA=function(CapIDModel, String, String, String){}

/**
*@param AppSpecificInfoModel: com.accela.aa.aamain.cap.AppSpecificInfoModel
*@return: ScriptResult
*/
CapScript.prototype.createCheckbox=function(AppSpecificInfoModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param Collection: java.util.Collection
*@return: ScriptResult
*/
CapScript.prototype.getCapsByLicenseProfessionalList=function(String, String, Collection){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getCapIDsByAppSpecificInfoField=function(String, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param PaymentScriptModel: com.accela.aa.emse.dom.PaymentScriptModel
*@return: ScriptResult
*/
CapScript.prototype.runEMSEScriptAfterPaymentReceive=function(CapModel, PaymentScriptModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: ScriptResult
*/
CapScript.prototype.createTemplateAttributes=function(CapModel, CapModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: ScriptResult
*/
CapScript.prototype.getCapWithTemplateAttributes=function(CapModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: CapModel
*/
CapScript.prototype.getCapViewBySingle=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getCapIDByIDValue=function(String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.getCapWorkDesByPK=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: CapModel
*/
CapScript.prototype.getCapViewBySingle4ACA=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param double: double
*@return: ScriptResult
*/
CapScript.prototype.updateTotalFees=function(String, String, String, double){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param double: double
*@return: ScriptResult
*/
CapScript.prototype.updateTotalFees=function(CapIDModel, double){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param double: double
*@return: ScriptResult
*/
CapScript.prototype.updateTotalPayment=function(String, String, String, double){}

/**
*@param long: long
*@param int: int
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getCapsByTaskItem=function(long, int, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param boolean: boolean
*@param boolean: boolean
*@return: ScriptResult
*/
CapScript.prototype.createRegularCapModel4ACA=function(CapModel, String, boolean, boolean){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getAssociatedCapsByOnlineUser=function(String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.getCapTypeModelByCapID=function(CapIDModel){}

/**
*@param CapTypeModel: com.accela.aa.aamain.cap.CapTypeModel
*@return: ScriptResult
*/
CapScript.prototype.getRelatedCapTypes=function(CapTypeModel){}

/**
*@param CapTypeModel: com.accela.aa.aamain.cap.CapTypeModel
*@return: ScriptResult
*/
CapScript.prototype.getCapTypeFilterName=function(CapTypeModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.runEMSEScriptBeforeApplicationSubmit=function(CapModel, CapIDModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.runEMSEScriptAfterApplicationSubmit=function(CapModel, CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param StringBuffer: java.lang.StringBuffer
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.createCap=function(String, String, CapModel, StringBuffer, String){}

/**
*@param CommentModel: com.accela.aa.aamain.cap.CommentModel
*@return: ScriptResult
*/
CapScript.prototype.removeComment=function(CommentModel){}

/**
*@param CapCommentModel: com.accela.aa.aamain.cap.CapCommentModel
*@return: ScriptResult
*/
CapScript.prototype.getCapComment=function(CapCommentModel){}

/**
*@return: ScriptResult
*/
CapScript.prototype.getCapIDList=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getCaps=function(String, String, String, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: ScriptResult
*/
CapScript.prototype.editCapByPK=function(CapModel){}

/**
*@param long: long
*@return: ScriptResult
*/
CapScript.prototype.getCapID=function(long){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@return: ScriptResult
*/
CapScript.prototype.getCapID=function(String, String, String, String, long){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getCapID=function(String, String, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getCapID=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getCapIDModel=function(String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
CapScript.prototype.getCapList=function(CapIDModel, QueryFormat){}

/**
*@return: ScriptResult
*/
CapScript.prototype.getCapModel=function(){}

/**
*@return: ScriptResult
*/
CapScript.prototype.getCapWorkDesModel=function(){}

/**
*@return: ScriptResult
*/
CapScript.prototype.getCapDetailModel=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getCap=function(String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.getCap=function(CapIDModel){}

/**
*@param CapDetailModel: com.accela.aa.aamain.cap.CapDetailModel
*@return: ScriptResult
*/
CapScript.prototype.createCapDetail=function(CapDetailModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getCommentByPK=function(CapIDModel, long, String){}

/**
*@param CapDetailModel: com.accela.aa.aamain.cap.CapDetailModel
*@return: ScriptResult
*/
CapScript.prototype.editCapDetail=function(CapDetailModel){}

/**
*@param CommentModel: com.accela.aa.aamain.cap.CommentModel
*@return: ScriptResult
*/
CapScript.prototype.editComment=function(CommentModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param boolean: boolean
*@return: ScriptResult
*/
CapScript.prototype.getCapByPK=function(CapIDModel, boolean){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: ScriptResult
*/
CapScript.prototype.convertAppSpecificInfoGroups2appSpecificInfos4ACA=function(CapModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param PaymentScriptModel: com.accela.aa.emse.dom.PaymentScriptModel
*@return: ScriptResult
*/
CapScript.prototype.runEMSEScriptBeforePaymentReceive=function(CapModel, PaymentScriptModel){}

/**
*@param ProjectScriptModel: com.accela.aa.emse.dom.ProjectScriptModel
*@return: ScriptResult
*/
CapScript.prototype.updateProject=function(ProjectScriptModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.getCapDetail=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getProjectByChildCapID=function(CapIDModel, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.createAssociatedFormsHierarchy=function(CapIDModel, CapIDModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: ScriptResult
*/
CapScript.prototype.runEMSEScriptBeforeApplicationDetailUpdate=function(CapModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.createAppRegardlessAppTypeStatus=function(String, String, String, String, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: ScriptResult
*/
CapScript.prototype.runEMSEScriptAfterApplicationDetailUpdate=function(CapModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
CapScript.prototype.getCapIDsByAppSpecificInfoDateRange=function(String, String, ScriptDateTime, ScriptDateTime){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
CapScript.prototype.getCapIDsByAPOAttributeDateRange=function(String, String, ScriptDateTime, ScriptDateTime){}

/**
*@param CapTypeModel: com.accela.aa.aamain.cap.CapTypeModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
CapScript.prototype.getCapsByContactAddrValidateFlag=function(CapTypeModel, String, String, String, ScriptDateTime, ScriptDateTime){}

/**
*@param CapTypeModel: com.accela.aa.aamain.cap.CapTypeModel
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
CapScript.prototype.getCapsByContactAddrValidateFlag=function(CapTypeModel, String, ScriptDateTime, ScriptDateTime){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.createApp=function(String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getByAppType=function(String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.getByAppType=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param int: int
*@param int: int
*@return: ScriptResult
*/
CapScript.prototype.getByAppType=function(String, String, String, String, int, int){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.removeRecord=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapScript.prototype.parseStr2Date=function(String, String){}

/**
*@return: ScriptResult
*/
CapScript.prototype.getStaffModel=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: CapIDScriptModel
*/
CapScript.prototype.createCapIDScriptModel=function(String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapScript.prototype.getCapBasicInfo=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: void
*/
CapScript.prototype.copyCapDetailInfo=function(CapIDModel, CapIDModel){}

/**
*@return: CommentScriptModel
*/
CapScript.prototype.createCommentScriptModel=function(){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: void
*/
CapScript.prototype.copyCapWorkDesInfo=function(CapIDModel, CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
CapScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
CapScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
CapScript.prototype.wait=function(long){}

/**
*@return: void
*/
CapScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
CapScript.prototype.equals=function(Object){}

/**
*@return: String
*/
CapScript.prototype.toString=function(){}

/**
*@return: int
*/
CapScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
CapScript.prototype.getClass=function(){}

/**
*@return: void
*/
CapScript.prototype.notify=function(){}

/**
*@return: void
*/
CapScript.prototype.notifyAll=function(){}

/**
* class PersonScript
*/
function PersonScript(){
}
/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PersonScript.prototype.getUser=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
PersonScript.prototype.getUser=function(String, String, String, String, String, String, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
PersonScript.prototype.getUser=function(String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
PersonScript.prototype.getUser=function(String, String, String, String, String, String, String, String, String, String){}

/**
*@return: ScriptResult
*/
PersonScript.prototype.getCurrentUser=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
PersonScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
PersonScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
PersonScript.prototype.wait=function(long){}

/**
*@return: void
*/
PersonScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
PersonScript.prototype.equals=function(Object){}

/**
*@return: String
*/
PersonScript.prototype.toString=function(){}

/**
*@return: int
*/
PersonScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
PersonScript.prototype.getClass=function(){}

/**
*@return: void
*/
PersonScript.prototype.notify=function(){}

/**
*@return: void
*/
PersonScript.prototype.notifyAll=function(){}

/**
* class WorkflowScript
*/
function WorkflowScript(){
}
/**
*@param StringArray: [Ljava.lang.String;
*@return: void
*/
WorkflowScript.prototype.main=function(StringArray){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@return: ScriptResult
*/
WorkflowScript.prototype.getTask=function(CapIDModel, int){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.getTask=function(CapIDModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@param long: long
*@return: ScriptResult
*/
WorkflowScript.prototype.getTask=function(CapIDModel, int, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.getTaskCount=function(CapIDModel, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
WorkflowScript.prototype.getProcess=function(CapIDModel, long){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.findByDescStatus=function(String, String, String, String, String, String){}

/**
*@return: ScriptResult
*/
WorkflowScript.prototype.getCapTypeScriptModel=function(){}

/**
*@return: ScriptResult
*/
WorkflowScript.prototype.handleTimeTracking=function(){}

/**
*@return: ScriptResult
*/
WorkflowScript.prototype.getTaskItemScriptModel=function(){}

/**
*@param TaskStatusScriptModel: com.accela.aa.emse.dom.TaskStatusScriptModel
*@return: ScriptResult
*/
WorkflowScript.prototype.createTaskStatus=function(TaskStatusScriptModel){}

/**
*@return: ScriptResult
*/
WorkflowScript.prototype.getProcessNoteScriptModel=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
WorkflowScript.prototype.findByRebillList=function(String, String, String, ScriptDateTime, ScriptDateTime){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.getTasksDescStatus=function(String, String, String, String, String, String){}

/**
*@param TaskStatusScriptModel: com.accela.aa.emse.dom.TaskStatusScriptModel
*@return: ScriptResult
*/
WorkflowScript.prototype.editTaskStatus=function(TaskStatusScriptModel){}

/**
*@param TaskItemScriptModel: com.accela.aa.emse.dom.TaskItemScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.insertTaskWithResourceData=function(TaskItemScriptModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
WorkflowScript.prototype.getTaskItemWorkflowByCapID=function(CapIDModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@return: ScriptResult
*/
WorkflowScript.prototype.handleUDisposition=function(CapIDModel, int, String, ScriptDateTime, String, String, SysUserModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@param long: long
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@return: ScriptResult
*/
WorkflowScript.prototype.handleUDisposition=function(CapIDModel, int, long, String, ScriptDateTime, String, String, SysUserModel){}

/**
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param DepartmentModel: com.accela.aa.aamain.organization.DepartmentModel
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
WorkflowScript.prototype.getTaskItemForTaskAssign=function(SysUserModel, DepartmentModel, ScriptDateTime, ScriptDateTime){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@return: ScriptResult
*/
WorkflowScript.prototype.handleBDisposition=function(CapIDModel, int, String, ScriptDateTime, String, String, SysUserModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@param long: long
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@return: ScriptResult
*/
WorkflowScript.prototype.handleBDisposition=function(CapIDModel, int, long, String, ScriptDateTime, String, String, SysUserModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.getProcessRelationByPK=function(CapIDModel, int, long, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@param long: long
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@return: ScriptResult
*/
WorkflowScript.prototype.handleDispositionWithFlag=function(CapIDModel, int, long, String, ScriptDateTime, String, String, SysUserModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@return: ScriptResult
*/
WorkflowScript.prototype.handleDispositionWithFlag=function(CapIDModel, int, String, ScriptDateTime, String, String, SysUserModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
WorkflowScript.prototype.getProcessRelationByCapID=function(CapIDModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.getTaskStatusList=function(CapIDModel, String, String){}

/**
*@param TaskItemModel: com.accela.aa.workflow.workflow.TaskItemModel
*@return: ScriptResult
*/
WorkflowScript.prototype.getLayedTaskName=function(TaskItemModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
WorkflowScript.prototype.createCapWorkflow=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@param long: long
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@return: ScriptResult
*/
WorkflowScript.prototype.handleLDisposition=function(CapIDModel, int, long, String, ScriptDateTime, String, String, SysUserModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@return: ScriptResult
*/
WorkflowScript.prototype.handleLDisposition=function(CapIDModel, int, String, ScriptDateTime, String, String, SysUserModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.getTaskAuditByTime=function(CapIDModel, long, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@return: ScriptResult
*/
WorkflowScript.prototype.handleYDisposition=function(CapIDModel, int, String, ScriptDateTime, String, String, SysUserModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@param long: long
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@return: ScriptResult
*/
WorkflowScript.prototype.handleYDisposition=function(CapIDModel, int, long, String, ScriptDateTime, String, String, SysUserModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.clearPrintFlag=function(String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param long: long
*@return: ScriptResult
*/
WorkflowScript.prototype.getTaskItemByTaskDes=function(CapIDModel, String, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
WorkflowScript.prototype.getWorkflowHistory=function(CapIDModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
WorkflowScript.prototype.getWorkflowHistory=function(CapIDModel, String, QueryFormat){}

/**
*@param TaskItemScriptModel: com.accela.aa.emse.dom.TaskItemScriptModel
*@return: ScriptResult
*/
WorkflowScript.prototype.removeSubProcess=function(TaskItemScriptModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param boolean: boolean
*@return: ScriptResult
*/
WorkflowScript.prototype.deleteAndAssignWorkflow=function(CapIDModel, String, boolean){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
WorkflowScript.prototype.getMasterProcess=function(CapIDModel){}

/**
*@param TaskItemScriptModel: com.accela.aa.emse.dom.TaskItemScriptModel
*@param String: java.lang.String
*@param boolean: boolean
*@return: ScriptResult
*/
WorkflowScript.prototype.insertSubProcess=function(TaskItemScriptModel, String, boolean){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
WorkflowScript.prototype.getHistory=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.getTaskItemRebillByTaskDescription=function(CapIDModel, String, String, String){}

/**
*@param TaskItemScriptModel: com.accela.aa.emse.dom.TaskItemScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.getTaskStatus=function(TaskItemScriptModel, String){}

/**
*@param TaskItemScriptModel: com.accela.aa.emse.dom.TaskItemScriptModel
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param CapTypeScriptModel: com.accela.aa.emse.dom.CapTypeScriptModel
*@param StringArray: [Ljava.lang.String;
*@return: ScriptResult
*/
WorkflowScript.prototype.getCapIdsByCriteria=function(TaskItemScriptModel, ScriptDateTime, ScriptDateTime, CapTypeScriptModel, StringArray){}

/**
*@param TaskItemScriptModel: com.accela.aa.emse.dom.TaskItemScriptModel
*@return: ScriptResult
*/
WorkflowScript.prototype.updateTaskWithinTSI=function(TaskItemScriptModel){}

/**
*@param TaskItemScriptModel: com.accela.aa.emse.dom.TaskItemScriptModel
*@param TaskItemScriptModel: com.accela.aa.emse.dom.TaskItemScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.copyTask=function(TaskItemScriptModel, TaskItemScriptModel, String){}

/**
*@param TaskItemModel: com.accela.aa.workflow.workflow.TaskItemModel
*@return: ScriptResult
*/
WorkflowScript.prototype.assignTask=function(TaskItemModel){}

/**
*@param TaskItemScriptModel: com.accela.aa.emse.dom.TaskItemScriptModel
*@return: ScriptResult
*/
WorkflowScript.prototype.removeTask=function(TaskItemScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.rebillList=function(String, String, String){}

/**
*@param String: java.lang.String
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
WorkflowScript.prototype.WorkflowBean=function(String, CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.issuePermit=function(String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.getTasks=function(String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.getTasks=function(CapIDModel, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
WorkflowScript.prototype.getTasks=function(String, String, ScriptDateTime, ScriptDateTime){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
WorkflowScript.prototype.getTasks=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
WorkflowScript.prototype.getTasks=function(CapIDModel, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.getTaskItems=function(CapIDModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.getTaskItems=function(CapIDModel, String, String, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
WorkflowScript.prototype.adjustTask=function(CapIDModel, int, long, String, String, ScriptDateTime, ScriptDateTime){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.adjustTask=function(CapIDModel, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
WorkflowScript.prototype.adjustTask=function(CapIDModel, String, String, String, ScriptDateTime, ScriptDateTime){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
WorkflowScript.prototype.adjustTask=function(CapIDModel, int, String, String, ScriptDateTime, ScriptDateTime){}

/**
*@param TaskItemModel: com.accela.aa.workflow.workflow.TaskItemModel
*@return: ScriptResult
*/
WorkflowScript.prototype.adjustTask=function(TaskItemModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
WorkflowScript.prototype.getTaskItemByCapID=function(String, String, String, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
WorkflowScript.prototype.getTaskItemByCapID=function(CapIDModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@param long: long
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.handleDisposition=function(CapIDModel, int, long, String, ScriptDateTime, String, String, SysUserModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param int: int
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.handleDisposition=function(CapIDModel, int, String, ScriptDateTime, String, String, SysUserModel, String){}

/**
*@param TaskItemModel: com.accela.aa.workflow.workflow.TaskItemModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
WorkflowScript.prototype.handleDisposition=function(TaskItemModel, CapIDModel){}

/**
*@param TaskItemModel: com.accela.aa.workflow.workflow.TaskItemModel
*@return: ScriptResult
*/
WorkflowScript.prototype.adjustTaskWithNoAudit=function(TaskItemModel){}

/**
*@param TaskItemScriptModel: com.accela.aa.emse.dom.TaskItemScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.insertTask=function(TaskItemScriptModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.getAdHocTask=function(CapIDModel, String){}

/**
*@param TaskItemModel: com.accela.aa.workflow.workflow.TaskItemModel
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.editTask=function(TaskItemModel, String){}

/**
*@param TaskItemScriptModel: com.accela.aa.emse.dom.TaskItemScriptModel
*@return: ScriptResult
*/
WorkflowScript.prototype.editTask=function(TaskItemScriptModel){}

/**
*@param TaskItemScriptModel: com.accela.aa.emse.dom.TaskItemScriptModel
*@return: ScriptResult
*/
WorkflowScript.prototype.getMessageForWorkflowTaskUpdated=function(TaskItemScriptModel){}

/**
*@param TaskStatusScriptModel: com.accela.aa.emse.dom.TaskStatusScriptModel
*@return: ScriptResult
*/
WorkflowScript.prototype.createTaskStatusWithResourceData=function(TaskStatusScriptModel){}

/**
*@param TaskItemScriptModel: com.accela.aa.emse.dom.TaskItemScriptModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
WorkflowScript.prototype.sendEmailForWorkflowTaskUpdated=function(TaskItemScriptModel, String, String, String){}

/**
*@param TaskItemScriptModel: com.accela.aa.emse.dom.TaskItemScriptModel
*@return: ScriptResult
*/
WorkflowScript.prototype.getProcessNoteScriptModelByTaskItem=function(TaskItemScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
WorkflowScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
WorkflowScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
WorkflowScript.prototype.wait=function(long){}

/**
*@return: void
*/
WorkflowScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
WorkflowScript.prototype.equals=function(Object){}

/**
*@return: String
*/
WorkflowScript.prototype.toString=function(){}

/**
*@return: int
*/
WorkflowScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
WorkflowScript.prototype.getClass=function(){}

/**
*@return: void
*/
WorkflowScript.prototype.notify=function(){}

/**
*@return: void
*/
WorkflowScript.prototype.notifyAll=function(){}

/**
* class FeeScript
*/
function FeeScript(){
}
/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
FeeScript.prototype.isFullPaid4Renewal=function(CapIDModel){}

/**
*@return: F4FeeItemScriptModel
*/
FeeScript.prototype.createF4FeeItemScriptModel=function(){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param double: double
*@param String: java.lang.String
*@param double: double
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FeeScript.prototype.getScriptF4FeeItemModel=function(CapIDModel, String, String, String, String, String, String, String, String, double, String, double, ScriptDateTime, ScriptDateTime, ScriptDateTime, String, String, String, String, String, String, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param double: double
*@param String: java.lang.String
*@param double: double
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param Double: java.lang.Double
*@param Double: java.lang.Double
*@param Double: java.lang.Double
*@return: ScriptResult
*/
FeeScript.prototype.getScriptF4FeeItemModel=function(CapIDModel, String, String, String, String, String, String, String, String, double, String, double, ScriptDateTime, ScriptDateTime, ScriptDateTime, String, String, String, String, String, String, String, String, String, String, Double, Double, Double){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
FeeScript.prototype.getFeeItemByPK=function(CapIDModel, long){}

/**
*@param Collection: java.util.Collection
*@return: ScriptResult
*/
FeeScript.prototype.addFeeItem=function(Collection){}

/**
*@param FeeItemScriptModel: com.accela.aa.emse.dom.FeeItemScriptModel
*@return: ScriptResult
*/
FeeScript.prototype.addFeeItem=function(FeeItemScriptModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param double: double
*@param String: java.lang.String
*@param double: double
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FeeScript.prototype.addFeeItem=function(CapIDModel, String, String, String, String, String, String, String, String, double, String, double, ScriptDateTime, ScriptDateTime, ScriptDateTime, String, String, String, String, String, String, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
FeeScript.prototype.getFeeTotal=function(CapIDModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
FeeScript.prototype.getFeeTotal=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FeeScript.prototype.getFeeItems=function(CapIDModel, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
FeeScript.prototype.getFeeItems=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
FeeScript.prototype.getRefFeeItemByFeeCodeVersion=function(String, String, String, String, ScriptDateTime){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
FeeScript.prototype.getFeeItemOfInvoicedByCapID=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
FeeScript.prototype.getRefFeeItemByFeeCode=function(String, String, String, ScriptDateTime){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param long: long
*@return: ScriptResult
*/
FeeScript.prototype.editFeeNotes=function(CapIDModel, String, long){}

/**
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
FeeScript.prototype.getRefFeeScheduleVersionsByDate=function(String, ScriptDateTime){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
FeeScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
FeeScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
FeeScript.prototype.wait=function(long){}

/**
*@return: void
*/
FeeScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
FeeScript.prototype.equals=function(Object){}

/**
*@return: String
*/
FeeScript.prototype.toString=function(){}

/**
*@return: int
*/
FeeScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
FeeScript.prototype.getClass=function(){}

/**
*@return: void
*/
FeeScript.prototype.notify=function(){}

/**
*@return: void
*/
FeeScript.prototype.notifyAll=function(){}

/**
* class SmartNoticeScript
*/
function SmartNoticeScript(){
}
/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
SmartNoticeScript.prototype.addNotice=function(String, String, String, String, String, ScriptDateTime){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
SmartNoticeScript.prototype.addNotice=function(String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
SmartNoticeScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
SmartNoticeScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
SmartNoticeScript.prototype.wait=function(long){}

/**
*@return: void
*/
SmartNoticeScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
SmartNoticeScript.prototype.equals=function(Object){}

/**
*@return: String
*/
SmartNoticeScript.prototype.toString=function(){}

/**
*@return: int
*/
SmartNoticeScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
SmartNoticeScript.prototype.getClass=function(){}

/**
*@return: void
*/
SmartNoticeScript.prototype.notify=function(){}

/**
*@return: void
*/
SmartNoticeScript.prototype.notifyAll=function(){}

/**
* class InspectionScript
*/
function InspectionScript(){
}
/**
*@param InspectionModel: com.accela.aa.inspection.inspection.InspectionModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@return: ScriptResult
*/
InspectionScript.prototype.reScheduleInspection=function(InspectionModel, SysUserModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.getWorkflowCalendarEvents=function(String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param CalendarEventModel: com.accela.aa.calendar.calendar.CalendarEventModel
*@return: ScriptResult
*/
InspectionScript.prototype.assignAppForEvent=function(String, String, String, CalendarEventModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.assignAppForEvent=function(String, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.getInspectionListForSchedule=function(String, String, String){}

/**
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.findByInspectorDateRange=function(SysUserModel, String, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.getInspectionDiscipline=function(String){}

/**
*@return: ScriptResult
*/
InspectionScript.prototype.getInspectionScriptModel=function(){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.updateInspectionType=function(long, String, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.deleteInspectionDiscipline=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param CalendarEventModel: com.accela.aa.calendar.calendar.CalendarEventModel
*@return: ScriptResult
*/
InspectionScript.prototype.checkAssignAppForEvent=function(String, String, String, CalendarEventModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.checkAssignAppForEvent=function(String, String, String, String, String, String){}

/**
*@param InspectionModel: com.accela.aa.inspection.inspection.InspectionModel
*@return: ScriptResult
*/
InspectionScript.prototype.updateInspectionForSuperVisor=function(InspectionModel){}

/**
*@param longArray: [J
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
InspectionScript.prototype.getNextAvailableTime=function(longArray, ScriptDateTime){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param longArray: [J
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
InspectionScript.prototype.getNextAvailableTime=function(String, String, String, longArray, ScriptDateTime){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param longArray: [J
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
InspectionScript.prototype.checkAvailableTime=function(String, String, String, longArray, ScriptDateTime){}

/**
*@param longArray: [J
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
InspectionScript.prototype.checkAvailableTime=function(longArray, ScriptDateTime){}

/**
*@param longArray: [J
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
InspectionScript.prototype.getInspectorsWorkload=function(longArray, CapIDModel, ScriptDateTime){}

/**
*@param GInspProcessModelArray: [Lcom.accela.aa.inspection.flow.GInspProcessModel;
*@return: ScriptResult
*/
InspectionScript.prototype.updateInspectionMilestone=function(GInspProcessModelArray){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
InspectionScript.prototype.getInspMilestoneByCapID=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
InspectionScript.prototype.deleteRecurrings=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.addInspectionDiscipline=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: InspectionScriptModel
*/
InspectionScript.prototype.newInspectionScriptModel=function(String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.carryOverGSItems=function(CapIDModel, String){}

/**
*@param InspectionModel: com.accela.aa.inspection.inspection.InspectionModel
*@return: ScriptResult
*/
InspectionScript.prototype.pendingInspection=function(InspectionModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.sendAnnouncement=function(String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.autoAssignInspector=function(String, String, String, long, String){}

/**
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.findByInspectorDaily=function(SysUserModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.scheduleInspection=function(CapIDModel, SysUserModel, ScriptDateTime, String, String, String){}

/**
*@param InspectionModel: com.accela.aa.inspection.inspection.InspectionModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@return: ScriptResult
*/
InspectionScript.prototype.scheduleInspection=function(InspectionModel, SysUserModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
InspectionScript.prototype.cancelInspection=function(CapIDModel, long){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.getDiscipline=function(String){}

/**
*@param InspectionScriptModel: com.accela.aa.emse.dom.InspectionScriptModel
*@return: ScriptResult
*/
InspectionScript.prototype.reschedule=function(InspectionScriptModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.reschedule=function(CapIDModel, long, SysUserModel, ScriptDateTime, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.validateFailGuidesheetItems=function(CapIDModel, String, String, String, String){}

/**
*@param List: java.util.List
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.saveCarryOverItems=function(List, CapIDModel, String){}

/**
*@param InspectionIDModel: com.accela.aa.inspection.inspection.InspectionIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.createInspectionRelation=function(InspectionIDModel, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.getInspections=function(String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
InspectionScript.prototype.getInspections=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.resultInspection=function(CapIDModel, long, String, String, String, String){}

/**
*@param InspectionScriptModel: com.accela.aa.emse.dom.InspectionScriptModel
*@return: ScriptResult
*/
InspectionScript.prototype.editInspection=function(InspectionScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.getUnassignedInspections=function(String, String){}

/**
*@return: ScriptResult
*/
InspectionScript.prototype.getUnassignedInspections=function(){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
InspectionScript.prototype.getInspection=function(CapIDModel, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param InspectionModel: com.accela.aa.inspection.inspection.InspectionModel
*@return: ScriptResult
*/
InspectionScript.prototype.copyInspectionWithGuideSheet=function(CapIDModel, CapIDModel, InspectionModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.getInspectionType=function(String, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.batchResultInspByCSV=function(String){}

/**
*@param InspectionScriptModel: com.accela.aa.emse.dom.InspectionScriptModel
*@return: ScriptResult
*/
InspectionScript.prototype.needDDA=function(InspectionScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.getInspectionListForReschedule=function(String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param longArray: [J
*@param String: java.lang.String
*@return: ScriptResult
*/
InspectionScript.prototype.autoAssignInspectorForMultiInspection=function(String, String, String, longArray, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
InspectionScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
InspectionScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
InspectionScript.prototype.wait=function(long){}

/**
*@return: void
*/
InspectionScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
InspectionScript.prototype.equals=function(Object){}

/**
*@return: String
*/
InspectionScript.prototype.toString=function(){}

/**
*@return: int
*/
InspectionScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
InspectionScript.prototype.getClass=function(){}

/**
*@return: void
*/
InspectionScript.prototype.notify=function(){}

/**
*@return: void
*/
InspectionScript.prototype.notifyAll=function(){}

/**
* class CapConditionScript
*/
function CapConditionScript(){
}
/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
CapConditionScript.prototype.getCapCondition=function(CapIDModel, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CapConditionScript.prototype.getCapConditionByStdConditionNum=function(CapIDModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param RefStdConditionScriptModel: com.accela.aa.emse.dom.RefStdConditionScriptModel
*@return: ScriptResult
*/
CapConditionScript.prototype.createCapConditionFromStdCondition=function(CapIDModel, RefStdConditionScriptModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CapConditionScript.prototype.createCapConditionFromStdCondition=function(CapIDModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapConditionScript.prototype.cloneCapCondition=function(CapIDModel, CapIDModel){}

/**
*@param CapConditionScriptModel: com.accela.aa.emse.dom.CapConditionScriptModel
*@return: ScriptResult
*/
CapConditionScript.prototype.editCapCondition=function(CapConditionScriptModel){}

/**
*@param CapConditionScriptModel: com.accela.aa.emse.dom.CapConditionScriptModel
*@return: ScriptResult
*/
CapConditionScript.prototype.createCapCondition=function(CapConditionScriptModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
CapConditionScript.prototype.deleteCapCondition=function(CapIDModel, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapConditionScript.prototype.isCapLocked=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CapConditionScript.prototype.getCapConditions=function(CapIDModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
CapConditionScript.prototype.getCapConditions=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapConditionScript.prototype.getCapConditions=function(String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CapConditionScript.prototype.getCapConditions=function(CapIDModel, String){}

/**
*@return: ScriptResult
*/
CapConditionScript.prototype.getNewConditionScriptModel=function(){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
CapConditionScript.prototype.getStandardConditionsByGroup=function(String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@return: ScriptResult
*/
CapConditionScript.prototype.addCapCondition=function(CapIDModel, String, String, String, ScriptDateTime, ScriptDateTime, ScriptDateTime, String, String, String, SysUserModel, SysUserModel, String, String, String, String, String, String, String, String, String, String, String, String, String, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param Integer: java.lang.Integer
*@param String: java.lang.String
*@return: ScriptResult
*/
CapConditionScript.prototype.addCapCondition=function(CapIDModel, String, String, String, ScriptDateTime, ScriptDateTime, ScriptDateTime, String, String, String, SysUserModel, SysUserModel, String, String, String, String, String, String, String, String, String, String, String, String, String, long, String, String, String, Integer, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapConditionScript.prototype.addCapCondition=function(CapIDModel, String, String, String, ScriptDateTime, ScriptDateTime, ScriptDateTime, String, String, String, SysUserModel, SysUserModel, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapConditionScript.prototype.addCapCondition=function(CapIDModel, String, String, String, ScriptDateTime, ScriptDateTime, ScriptDateTime, String, String, String, SysUserModel, SysUserModel, String, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapConditionScript.prototype.addCapCondition=function(CapIDModel, String, String, String, ScriptDateTime, ScriptDateTime, ScriptDateTime, String, String, String, SysUserModel, SysUserModel, String, String, String, String, String, String, String, String, String, String, String, String, String, long, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapConditionScript.prototype.getStandardConditions=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CapConditionScript.prototype.getStandardConditions=function(String, String, String){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CapConditionScript.prototype.getCondition=function(ConditionModel, String){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CapConditionScript.prototype.getCondition=function(ConditionScriptModel, String){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
CapConditionScript.prototype.getAssetCondition=function(long, long){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@return: ScriptResult
*/
CapConditionScript.prototype.createCondition=function(ConditionModel){}

/**
*@param ConditionModelArray: [Lcom.accela.aa.condition.condition.ConditionModel;
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@return: ScriptResult
*/
CapConditionScript.prototype.createCondition=function(ConditionModelArray, ConditionModel){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@return: ScriptResult
*/
CapConditionScript.prototype.createCondition=function(ConditionScriptModel){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: ScriptResult
*/
CapConditionScript.prototype.editTableValue4TemplateTable=function(EntityPKModel, GenericTemplateFieldPK, String, Long){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@param String: java.lang.String
*@return: ScriptResult
*/
CapConditionScript.prototype.editField4TemplateForm=function(EntityPKModel, GenericTemplateFieldPK, String){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@return: ScriptResult
*/
CapConditionScript.prototype.getFields4TemplateTable=function(EntityPKModel, GenericTemplateFieldPK){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@return: ScriptResult
*/
CapConditionScript.prototype.getFields4TemplateForm=function(EntityPKModel, GenericTemplateFieldPK){}

/**
*@return: ScriptResult
*/
CapConditionScript.prototype.getNewOwnerConditionScriptModel=function(){}

/**
*@return: ScriptResult
*/
CapConditionScript.prototype.getNewAssetConditionScriptModel=function(){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CapConditionScript.prototype.createConditionFromStdCondition=function(ConditionModel, String){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CapConditionScript.prototype.createConditionFromStdCondition=function(ConditionScriptModel, String){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
CapConditionScript.prototype.getOwnerCondition=function(long, long){}

/**
*@param ConditionScriptModelArray: [Lcom.accela.aa.emse.dom.ConditionScriptModel;
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@return: ScriptResult
*/
CapConditionScript.prototype.createConditionWithMulLangs=function(ConditionScriptModelArray, ConditionScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
CapConditionScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
CapConditionScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
CapConditionScript.prototype.wait=function(long){}

/**
*@return: void
*/
CapConditionScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
CapConditionScript.prototype.equals=function(Object){}

/**
*@return: String
*/
CapConditionScript.prototype.toString=function(){}

/**
*@return: int
*/
CapConditionScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
CapConditionScript.prototype.getClass=function(){}

/**
*@return: void
*/
CapConditionScript.prototype.notify=function(){}

/**
*@return: void
*/
CapConditionScript.prototype.notifyAll=function(){}

/**
* class ParcelScript
*/
function ParcelScript(){
}
/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapTypeModel: com.accela.aa.aamain.cap.CapTypeModel
*@param PersonModel: com.accela.aa.aamain.people.PersonModel
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@param ArrayList: java.util.ArrayList
*@param Date: java.util.Date
*@param Date: java.util.Date
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param GISObjectModelArray: [Lcom.accela.aa.gis.gis.GISObjectModel;
*@return: ScriptResult
*/
ParcelScript.prototype.getParcelListByCollection=function(CapIDModel, CapTypeModel, PersonModel, AddressModel, ArrayList, Date, Date, QueryFormat, GISObjectModelArray){}

/**
*@param CapParcelModel: com.accela.aa.aamain.parcel.CapParcelModel
*@return: ScriptResult
*/
ParcelScript.prototype.createCapParcel=function(CapParcelModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
ParcelScript.prototype.getParcelandAttribute=function(CapIDModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
ParcelScript.prototype.getParcelDailyByCapID=function(CapIDModel, QueryFormat){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelScript.prototype.getParcelDailyByCapID=function(String, String, String){}

/**
*@param ParcelGenealogyModel: com.accela.aa.aamain.parcel.ParcelGenealogyModel
*@return: ScriptResult
*/
ParcelScript.prototype.copyAssociatedObjs2TargetParcel=function(ParcelGenealogyModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelScript.prototype.copyAssociatedObjs2TargetParcel=function(String, String){}

/**
*@param CapParcelModel: com.accela.aa.aamain.parcel.CapParcelModel
*@return: ScriptResult
*/
ParcelScript.prototype.updateDailyParcelWithAPOAttribute=function(CapParcelModel){}

/**
*@param ParcelGenealogyModel: com.accela.aa.aamain.parcel.ParcelGenealogyModel
*@return: ScriptResult
*/
ParcelScript.prototype.moveAssociatedObjs2TargetParcel=function(ParcelGenealogyModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelScript.prototype.moveAssociatedObjs2TargetParcel=function(String, String){}

/**
*@param CapParcelModel: com.accela.aa.aamain.parcel.CapParcelModel
*@return: ScriptResult
*/
ParcelScript.prototype.createCapParcelWithAPOAttribute=function(CapParcelModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelScript.prototype.getParceListForAdmin=function(String, String, String, String, String, String, String, String, String, String, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelScript.prototype.getParceListForAdmin=function(String, String, String, String, String, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelScript.prototype.addParceDistrictForAdmin=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelScript.prototype.deleteParceDistrictForAdmin=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelScript.prototype.getParcelDistrictForDaily=function(String, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapTypeModel: com.accela.aa.aamain.cap.CapTypeModel
*@param PersonModel: com.accela.aa.aamain.people.PersonModel
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@param ArrayList: java.util.ArrayList
*@param Date: java.util.Date
*@param Date: java.util.Date
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param GISObjects: com.accela.aa.xml.model.gis.GISObjects
*@return: ScriptResult
*/
ParcelScript.prototype.getParcelListByGisObject=function(CapIDModel, CapTypeModel, PersonModel, AddressModel, ArrayList, Date, Date, QueryFormat, GISObjects){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
ParcelScript.prototype.getParcelByCapId=function(CapIDModel, QueryFormat){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelScript.prototype.addParceDistrictForDaily=function(String, String, String, String, String){}

/**
*@param CapParcelModel: com.accela.aa.aamain.parcel.CapParcelModel
*@param CapParcelModel: com.accela.aa.aamain.parcel.CapParcelModel
*@return: ScriptResult
*/
ParcelScript.prototype.copyCapParcelModel=function(CapParcelModel, CapParcelModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelScript.prototype.getParceDistrictForAdmin=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelScript.prototype.deleteParceDistrictForDaily=function(String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param Date: java.util.Date
*@param Date: java.util.Date
*@return: ScriptResult
*/
ParcelScript.prototype.getParcelGenealogy=function(String, String, Date, Date){}

/**
*@return: ScriptResult
*/
ParcelScript.prototype.getCapParcelModel=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelScript.prototype.getPrimaryParcelByRefAddressID=function(String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param ParcelModel: com.accela.aa.aamain.parcel.ParcelModel
*@return: ScriptResult
*/
ParcelScript.prototype.warpCapIdParcelModel2CapParcelModel=function(CapIDModel, ParcelModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
ParcelScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ParcelScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ParcelScript.prototype.wait=function(long){}

/**
*@return: void
*/
ParcelScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ParcelScript.prototype.equals=function(Object){}

/**
*@return: String
*/
ParcelScript.prototype.toString=function(){}

/**
*@return: int
*/
ParcelScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
ParcelScript.prototype.getClass=function(){}

/**
*@return: void
*/
ParcelScript.prototype.notify=function(){}

/**
*@return: void
*/
ParcelScript.prototype.notifyAll=function(){}

/**
* class ParcelConditionScript
*/
function ParcelConditionScript(){
}
/**
*@param ParcelConditionScriptModel: com.accela.aa.emse.dom.ParcelConditionScriptModel
*@return: ScriptResult
*/
ParcelConditionScript.prototype.editParcelCondition=function(ParcelConditionScriptModel){}

/**
*@param ParcelConditionScriptModel: com.accela.aa.emse.dom.ParcelConditionScriptModel
*@return: ScriptResult
*/
ParcelConditionScript.prototype.createParcelCondition=function(ParcelConditionScriptModel){}

/**
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelConditionScript.prototype.removeParcelCondition=function(long, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelConditionScript.prototype.addParcelCondition=function(String, String, String, String, String, String, String, String, ScriptDateTime, ScriptDateTime, ScriptDateTime, ScriptDateTime, SysUserModel, SysUserModel, String, String, String, String, String, String, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param Integer: java.lang.Integer
*@return: ScriptResult
*/
ParcelConditionScript.prototype.addParcelCondition=function(String, String, String, String, String, String, String, String, ScriptDateTime, ScriptDateTime, ScriptDateTime, ScriptDateTime, SysUserModel, SysUserModel, String, String, String, String, String, String, String, String, Integer){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param Integer: java.lang.Integer
*@return: ScriptResult
*/
ParcelConditionScript.prototype.addParcelCondition=function(String, String, String, String, String, String, String, String, ScriptDateTime, ScriptDateTime, ScriptDateTime, ScriptDateTime, SysUserModel, SysUserModel, String, String, String, String, String, String, String, String, String, String, String, Integer){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param Integer: java.lang.Integer
*@return: ScriptResult
*/
ParcelConditionScript.prototype.addParcelCondition=function(String, String, String, String, String, String, String, String, ScriptDateTime, ScriptDateTime, ScriptDateTime, ScriptDateTime, SysUserModel, SysUserModel, Integer){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelConditionScript.prototype.addParcelCondition=function(String, String, String, String, String, String, String, String, ScriptDateTime, ScriptDateTime, ScriptDateTime, ScriptDateTime, SysUserModel, SysUserModel, String, String, String, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@return: ScriptResult
*/
ParcelConditionScript.prototype.addParcelCondition=function(String, String, String, String, String, String, String, String, ScriptDateTime, ScriptDateTime, ScriptDateTime, ScriptDateTime, SysUserModel, SysUserModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelConditionScript.prototype.getParcelConditions=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelConditionScript.prototype.getParcelConditions=function(String, String){}

/**
*@param String: java.lang.String
*@param long: long
*@return: ScriptResult
*/
ParcelConditionScript.prototype.getParcelCondition=function(String, long){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelConditionScript.prototype.createParcelConditionFromStdCondition=function(String, String){}

/**
*@return: ScriptResult
*/
ParcelConditionScript.prototype.getNewConditionScriptModel=function(){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelConditionScript.prototype.getCondition=function(ConditionModel, String){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelConditionScript.prototype.getCondition=function(ConditionScriptModel, String){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
ParcelConditionScript.prototype.getAssetCondition=function(long, long){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@return: ScriptResult
*/
ParcelConditionScript.prototype.createCondition=function(ConditionModel){}

/**
*@param ConditionModelArray: [Lcom.accela.aa.condition.condition.ConditionModel;
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@return: ScriptResult
*/
ParcelConditionScript.prototype.createCondition=function(ConditionModelArray, ConditionModel){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@return: ScriptResult
*/
ParcelConditionScript.prototype.createCondition=function(ConditionScriptModel){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: ScriptResult
*/
ParcelConditionScript.prototype.editTableValue4TemplateTable=function(EntityPKModel, GenericTemplateFieldPK, String, Long){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelConditionScript.prototype.editField4TemplateForm=function(EntityPKModel, GenericTemplateFieldPK, String){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@return: ScriptResult
*/
ParcelConditionScript.prototype.getFields4TemplateTable=function(EntityPKModel, GenericTemplateFieldPK){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@return: ScriptResult
*/
ParcelConditionScript.prototype.getFields4TemplateForm=function(EntityPKModel, GenericTemplateFieldPK){}

/**
*@return: ScriptResult
*/
ParcelConditionScript.prototype.getNewOwnerConditionScriptModel=function(){}

/**
*@return: ScriptResult
*/
ParcelConditionScript.prototype.getNewAssetConditionScriptModel=function(){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelConditionScript.prototype.createConditionFromStdCondition=function(ConditionModel, String){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
ParcelConditionScript.prototype.createConditionFromStdCondition=function(ConditionScriptModel, String){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
ParcelConditionScript.prototype.getOwnerCondition=function(long, long){}

/**
*@param ConditionScriptModelArray: [Lcom.accela.aa.emse.dom.ConditionScriptModel;
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@return: ScriptResult
*/
ParcelConditionScript.prototype.createConditionWithMulLangs=function(ConditionScriptModelArray, ConditionScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
ParcelConditionScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ParcelConditionScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ParcelConditionScript.prototype.wait=function(long){}

/**
*@return: void
*/
ParcelConditionScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ParcelConditionScript.prototype.equals=function(Object){}

/**
*@return: String
*/
ParcelConditionScript.prototype.toString=function(){}

/**
*@return: int
*/
ParcelConditionScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
ParcelConditionScript.prototype.getClass=function(){}

/**
*@return: void
*/
ParcelConditionScript.prototype.notify=function(){}

/**
*@return: void
*/
ParcelConditionScript.prototype.notifyAll=function(){}

/**
* class ScriptDateTimeUtil
*/
function ScriptDateTimeUtil(){
}
/**
*@param String: java.lang.String
*@param long: long
*@return: String
*/
ScriptDateTimeUtil.prototype.addDate=function(String, long){}

/**
*@param Date: java.util.Date
*@return: ScriptDateTime
*/
ScriptDateTimeUtil.prototype.getScriptDateTime=function(Date){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: long
*/
ScriptDateTimeUtil.prototype.diffDate=function(String, String){}

/**
*@return: ScriptDateTime
*/
ScriptDateTimeUtil.prototype.getCurrentDate=function(){}

/**
*@param String: java.lang.String
*@return: ScriptDateTime
*/
ScriptDateTimeUtil.prototype.parseISODate=function(String){}

/**
*@param String: java.lang.String
*@return: ScriptDateTime
*/
ScriptDateTimeUtil.prototype.parseDate=function(String){}

/**
*@param long: long
*@return: Date
*/
ScriptDateTimeUtil.prototype.transToJavaUtilDate=function(long){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ScriptDateTimeUtil.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ScriptDateTimeUtil.prototype.wait=function(long){}

/**
*@return: void
*/
ScriptDateTimeUtil.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ScriptDateTimeUtil.prototype.equals=function(Object){}

/**
*@return: String
*/
ScriptDateTimeUtil.prototype.toString=function(){}

/**
*@return: int
*/
ScriptDateTimeUtil.prototype.hashCode=function(){}

/**
*@return: Class
*/
ScriptDateTimeUtil.prototype.getClass=function(){}

/**
*@return: void
*/
ScriptDateTimeUtil.prototype.notify=function(){}

/**
*@return: void
*/
ScriptDateTimeUtil.prototype.notifyAll=function(){}

/**
* class CashierScript
*/
function CashierScript(){
}
/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CashierScript.prototype.getTotalPay=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CashierScript.prototype.createInvoice=function(CapIDModel, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CashierScript.prototype.editPaymentUDFAndReceivedType=function(CapIDModel, String, String, String, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CashierScript.prototype.getSumNotAllocated=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
CashierScript.prototype.getTotalFeeAmount=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param F4InvoiceModel: com.accela.aa.finance.invoice.F4InvoiceModel
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
CashierScript.prototype.editInvoice=function(CapIDModel, F4InvoiceModel, ScriptDateTime){}

/**
*@return: ScriptResult
*/
CashierScript.prototype.invoiceAgeing=function(){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CashierScript.prototype.setInvoiceDueDate=function(CapIDModel, String, String){}

/**
*@param long: long
*@return: ScriptResult
*/
CashierScript.prototype.getCountOfPermits=function(long){}

/**
*@return: ScriptResult
*/
CashierScript.prototype.clrInvoicePrntFlg=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param StringArray: [Ljava.lang.String;
*@return: ScriptResult
*/
CashierScript.prototype.createInvoices=function(String, String, String, StringArray){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
CashierScript.prototype.getInvoice=function(CapIDModel, long){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
CashierScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
CashierScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
CashierScript.prototype.wait=function(long){}

/**
*@return: void
*/
CashierScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
CashierScript.prototype.equals=function(Object){}

/**
*@return: String
*/
CashierScript.prototype.toString=function(){}

/**
*@return: int
*/
CashierScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
CashierScript.prototype.getClass=function(){}

/**
*@return: void
*/
CashierScript.prototype.notify=function(){}

/**
*@return: void
*/
CashierScript.prototype.notifyAll=function(){}

/**
* class EventLogScript
*/
function EventLogScript(){
}
/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@return: ScriptResult
*/
EventLogScript.prototype.createEventLog=function(String, String, String, ScriptDateTime, ScriptDateTime, String, String, long){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
EventLogScript.prototype.createEventLog=function(String, String, String, ScriptDateTime, ScriptDateTime, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
EventLogScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
EventLogScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
EventLogScript.prototype.wait=function(long){}

/**
*@return: void
*/
EventLogScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
EventLogScript.prototype.equals=function(Object){}

/**
*@return: String
*/
EventLogScript.prototype.toString=function(){}

/**
*@return: int
*/
EventLogScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
EventLogScript.prototype.getClass=function(){}

/**
*@return: void
*/
EventLogScript.prototype.notify=function(){}

/**
*@return: void
*/
EventLogScript.prototype.notifyAll=function(){}

/**
* class AppSpecificInfoScript
*/
function AppSpecificInfoScript(){
}
/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.createRefAppSpecDropDown=function(String, String, String, String, String){}

/**
*@param AppSpecificInfoModelArray: [Lcom.accela.aa.aamain.cap.AppSpecificInfoModel;
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.editAppSpecInfos=function(AppSpecificInfoModelArray){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.getRefASISubgroups=function(String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param StringArray: [Ljava.lang.String;
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.copyASISubGroups=function(CapIDModel, CapIDModel, StringArray){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param StringArray: [Ljava.lang.String;
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.removeASISubgroupsFromCAP=function(CapIDModel, StringArray){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.getRefAppSpecDropDownList=function(String, String, String, String){}

/**
*@param String: java.lang.String
*@param StringArray: [Ljava.lang.String;
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.addRefASISubgroupsToCAP=function(String, StringArray, CapIDModel){}

/**
*@param AppSpecificInfoModel: com.accela.aa.aamain.cap.AppSpecificInfoModel
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.editAppSpecInfoValue=function(AppSpecificInfoModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.getAppSpecificInfos=function(CapIDModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.getAppSpecificInfos=function(CapIDModel, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.editSingleAppSpecific=function(CapIDModel, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.getRefAppSpecInfoWithFieldList=function(String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.editSingleAppSpecificNoTransaction=function(CapIDModel, String, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.getByType=function(CapIDModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.getByList=function(CapIDModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.getByCapID=function(CapIDModel){}

/**
*@param AppSpecificInfoModelArray: [Lcom.accela.aa.aamain.cap.AppSpecificInfoModel;
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.editAppSpecificInfo=function(AppSpecificInfoModelArray){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.getCAPASISubgroups=function(CapIDModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.getAppSpecificInfoByCap=function(CapModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param int: int
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.getCheckboxByCapIDAndGroup=function(CapIDModel, long, int, String, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
AppSpecificInfoScript.prototype.getByFeeIndicator=function(CapIDModel, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
AppSpecificInfoScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
AppSpecificInfoScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
AppSpecificInfoScript.prototype.wait=function(long){}

/**
*@return: void
*/
AppSpecificInfoScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
AppSpecificInfoScript.prototype.equals=function(Object){}

/**
*@return: String
*/
AppSpecificInfoScript.prototype.toString=function(){}

/**
*@return: int
*/
AppSpecificInfoScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
AppSpecificInfoScript.prototype.getClass=function(){}

/**
*@return: void
*/
AppSpecificInfoScript.prototype.notify=function(){}

/**
*@return: void
*/
AppSpecificInfoScript.prototype.notifyAll=function(){}

/**
* class TaskSpecificInfoScript
*/
function TaskSpecificInfoScript(){
}
/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param int: int
*@param String: java.lang.String
*@return: ScriptResult
*/
TaskSpecificInfoScript.prototype.getTaskSpecifiInfoByDesc=function(CapIDModel, long, int, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param int: int
*@return: ScriptResult
*/
TaskSpecificInfoScript.prototype.getTaskSpecificInfoByTask=function(CapIDModel, long, int){}

/**
*@param TaskSpecificInfoModelArray: [Lcom.accela.aa.aamain.cap.TaskSpecificInfoModel;
*@return: ScriptResult
*/
TaskSpecificInfoScript.prototype.editTaskSpecInfos=function(TaskSpecificInfoModelArray){}

/**
*@return: ScriptResult
*/
TaskSpecificInfoScript.prototype.getTaskSpecificInfoScriptModel=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
TaskSpecificInfoScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
TaskSpecificInfoScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
TaskSpecificInfoScript.prototype.wait=function(long){}

/**
*@return: void
*/
TaskSpecificInfoScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
TaskSpecificInfoScript.prototype.equals=function(Object){}

/**
*@return: String
*/
TaskSpecificInfoScript.prototype.toString=function(){}

/**
*@return: int
*/
TaskSpecificInfoScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
TaskSpecificInfoScript.prototype.getClass=function(){}

/**
*@return: void
*/
TaskSpecificInfoScript.prototype.notify=function(){}

/**
*@return: void
*/
TaskSpecificInfoScript.prototype.notifyAll=function(){}

/**
* class PeopleScript
*/
function PeopleScript(){
}
/**
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
PeopleScript.prototype.getContactType=function(QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
PeopleScript.prototype.removeCapContact=function(CapIDModel, long){}

/**
*@param CapContactModel: com.accela.aa.aamain.people.CapContactModel
*@return: ScriptResult
*/
PeopleScript.prototype.createCapContact=function(CapContactModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param PeopleModel: com.accela.aa.aamain.people.PeopleModel
*@return: ScriptResult
*/
PeopleScript.prototype.getCapContactByRefPeopleModel=function(CapIDModel, PeopleModel){}

/**
*@param PeopleModel: com.accela.aa.aamain.people.PeopleModel
*@return: ScriptResult
*/
PeopleScript.prototype.editContactByRefContact=function(PeopleModel){}

/**
*@param long: long
*@return: ScriptResult
*/
PeopleScript.prototype.getCapContactByContactID=function(long){}

/**
*@param CapContactModel: com.accela.aa.aamain.people.CapContactModel
*@return: ScriptResult
*/
PeopleScript.prototype.editCapContact=function(CapContactModel){}

/**
*@param CapContactModel: com.accela.aa.aamain.people.CapContactModel
*@return: ScriptResult
*/
PeopleScript.prototype.createCapContactWithAttribute=function(CapContactModel){}

/**
*@param List: java.util.List
*@return: ScriptResult
*/
PeopleScript.prototype.newContactByCapContacts=function(List){}

/**
*@param CapContactModel: com.accela.aa.aamain.people.CapContactModel
*@return: ScriptResult
*/
PeopleScript.prototype.newContactByCapContact=function(CapContactModel){}

/**
*@param List: java.util.List
*@return: ScriptResult
*/
PeopleScript.prototype.editContactByCapContacts=function(List){}

/**
*@param CapContactModel: com.accela.aa.aamain.people.CapContactModel
*@return: ScriptResult
*/
PeopleScript.prototype.editContactByCapContact=function(CapContactModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param PeopleModel: com.accela.aa.aamain.people.PeopleModel
*@return: ScriptResult
*/
PeopleScript.prototype.createCapContactWithRefPeopleModel=function(CapIDModel, PeopleModel){}

/**
*@param CapContactModel: com.accela.aa.aamain.people.CapContactModel
*@return: ScriptResult
*/
PeopleScript.prototype.editOtherContactsWithCurrentContact=function(CapContactModel){}

/**
*@param PeopleScriptModel: com.accela.aa.emse.dom.PeopleScriptModel
*@return: ScriptResult
*/
PeopleScript.prototype.getCapIDsByRefContact=function(PeopleScriptModel){}

/**
*@param CapContactModel: com.accela.aa.aamain.people.CapContactModel
*@param PeopleModel: com.accela.aa.aamain.people.PeopleModel
*@return: ScriptResult
*/
PeopleScript.prototype.syncCapContactToReference=function(CapContactModel, PeopleModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.addUserDistrict=function(String, String){}

/**
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param List: java.util.List
*@param String: java.lang.String
*@param boolean: boolean
*@param boolean: boolean
*@param boolean: boolean
*@param boolean: boolean
*@return: ScriptResult
*/
PeopleScript.prototype.createSystemUser=function(SysUserModel, List, String, boolean, boolean, boolean, boolean){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param Date: java.util.Date
*@param Date: java.util.Date
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.updateRefContactRelationship=function(String, String, String, Date, Date, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getUserAssociatedContact=function(String){}

/**
*@return: ScriptResult
*/
PeopleScript.prototype.getXRefContactEntityModel=function(){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getUserDistricts=function(String){}

/**
*@param List: java.util.List
*@return: ScriptResult
*/
PeopleScript.prototype.createRefContactRelationship=function(List){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.addUserDiscipline=function(String, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getDisciplines=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.updateUserWorkload=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param Hashtable: java.util.Hashtable
*@return: ScriptResult
*/
PeopleScript.prototype.sendEmailAfterApproveContact=function(String, String, String, String, Hashtable){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.deleteUserDiscipline=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param Hashtable: java.util.Hashtable
*@return: ScriptResult
*/
PeopleScript.prototype.sendEmailAfterRejectContact=function(String, String, String, String, Hashtable){}

/**
*@param CapContactModel: com.accela.aa.aamain.people.CapContactModel
*@param PeopleModel: com.accela.aa.aamain.people.PeopleModel
*@return: ScriptResult
*/
PeopleScript.prototype.syncCapContactFromReference=function(CapContactModel, PeopleModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param Hashtable: java.util.Hashtable
*@return: ScriptResult
*/
PeopleScript.prototype.sendEmailAfterCreateContact=function(String, String, String, String, Hashtable){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getPublicUserByUserName=function(String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getPeopleByPhone1=function(String){}

/**
*@param CapContactModel: com.accela.aa.aamain.people.CapContactModel
*@return: ScriptResult
*/
PeopleScript.prototype.editCapContactWithAttribute=function(CapContactModel){}

/**
*@return: ScriptResult
*/
PeopleScript.prototype.createPeopleModel=function(){}

/**
*@return: ScriptResult
*/
PeopleScript.prototype.createPeopleAttributeModel=function(){}

/**
*@param CapContactModel: com.accela.aa.aamain.people.CapContactModel
*@param CapContactModel: com.accela.aa.aamain.people.CapContactModel
*@return: ScriptResult
*/
PeopleScript.prototype.copyCapContactModel=function(CapContactModel, CapContactModel){}

/**
*@param PeopleModel: com.accela.aa.aamain.people.PeopleModel
*@param Collection: java.util.Collection
*@return: ScriptResult
*/
PeopleScript.prototype.editPeopleWithAttribute=function(PeopleModel, Collection){}

/**
*@param PeopleModel: com.accela.aa.aamain.people.PeopleModel
*@return: ScriptResult
*/
PeopleScript.prototype.editPeople=function(PeopleModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.removePeople=function(String){}

/**
*@param PeopleModel: com.accela.aa.aamain.people.PeopleModel
*@return: ScriptResult
*/
PeopleScript.prototype.removePeople=function(PeopleModel){}

/**
*@param PeopleModel: com.accela.aa.aamain.people.PeopleModel
*@return: ScriptResult
*/
PeopleScript.prototype.createPeople=function(PeopleModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getFIDList=function(String, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getUserDisciplines=function(String){}

/**
*@return: SysUserModel
*/
PeopleScript.prototype.getSysUserModel=function(){}

/**
*@param PeopleModel: com.accela.aa.aamain.people.PeopleModel
*@return: ScriptResult
*/
PeopleScript.prototype.getPeopleByPeopleModel=function(PeopleModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getPeopleByFMLName=function(String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getUsersByUserIdAndName=function(String, String, String, String){}

/**
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
PeopleScript.prototype.getContactTypeAll=function(QueryFormat){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getPeopleByAddress=function(String, String, String, String, String){}

/**
*@param CompactAddressModel: com.accela.aa.aamain.address.CompactAddressModel
*@return: ScriptResult
*/
PeopleScript.prototype.getPeopleByAddress=function(CompactAddressModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
PeopleScript.prototype.getPeopleByOthersForDaily=function(String, String, String, String, String, String, String, String, String, QueryFormat){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
PeopleScript.prototype.getPeopleByOthers=function(String, String, String, String, String, String, String, String, String, QueryFormat){}

/**
*@param PeopleModel: com.accela.aa.aamain.people.PeopleModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
PeopleScript.prototype.getPeoplesByAttrs=function(PeopleModel, String, String, QueryFormat){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.deleteUserDistrict=function(String, String){}

/**
*@param PeopleModel: com.accela.aa.aamain.people.PeopleModel
*@return: ScriptResult
*/
PeopleScript.prototype.removePeopleWithAttribute=function(PeopleModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getPeopleByBusinessName=function(String){}

/**
*@param PeopleAttributeModel: com.accela.aa.aamain.people.PeopleAttributeModel
*@return: ScriptResult
*/
PeopleScript.prototype.createPeopleAttribute=function(PeopleAttributeModel){}

/**
*@param PeopleAttributeModel: com.accela.aa.aamain.people.PeopleAttributeModel
*@return: ScriptResult
*/
PeopleScript.prototype.editPeopleAttribute=function(PeopleAttributeModel){}

/**
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getPeopleAttributeByPeople=function(long, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getPeopleByFullName=function(String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getUserModules=function(String){}

/**
*@param PeopleModel: com.accela.aa.aamain.people.PeopleModel
*@param Collection: java.util.Collection
*@return: ScriptResult
*/
PeopleScript.prototype.createPeopleWithAttribute=function(PeopleModel, Collection){}

/**
*@param DepartmentModel: com.accela.aa.aamain.organization.DepartmentModel
*@return: ScriptResult
*/
PeopleScript.prototype.getSysUserListByDepartment=function(DepartmentModel){}

/**
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
PeopleScript.prototype.getSysUserList=function(QueryFormat){}

/**
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@return: ScriptResult
*/
PeopleScript.prototype.updateUserPrifle=function(SysUserModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param List: java.util.List
*@param int: int
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.autoAssignReviewers=function(CapIDModel, List, int, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.disableAgencyUser=function(String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getSysUserListByDiscipline=function(String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param PeopleModel: com.accela.aa.aamain.people.PeopleModel
*@return: ScriptResult
*/
PeopleScript.prototype.isExisted=function(CapIDModel, PeopleModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getSysUserByID=function(String){}

/**
*@param long: long
*@return: ScriptResult
*/
PeopleScript.prototype.getPeople=function(long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
PeopleScript.prototype.getCapContactByPK=function(CapIDModel, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
PeopleScript.prototype.getCapContactByCapID=function(CapIDModel){}

/**
*@return: ScriptResult
*/
PeopleScript.prototype.getUserGroups=function(){}

/**
*@param CapContactModel: com.accela.aa.aamain.people.CapContactModel
*@return: ScriptResult
*/
PeopleScript.prototype.updateCapContactSyncFlag=function(CapContactModel){}

/**
*@return: PeopleModel
*/
PeopleScript.prototype.getPeopleModel=function(){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getDistricts=function(String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getDepartmentBySeqID=function(String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getSysUserListByDepartmentName=function(String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PeopleScript.prototype.getDepartmentList=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
PeopleScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
PeopleScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
PeopleScript.prototype.wait=function(long){}

/**
*@return: void
*/
PeopleScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
PeopleScript.prototype.equals=function(Object){}

/**
*@return: String
*/
PeopleScript.prototype.toString=function(){}

/**
*@return: int
*/
PeopleScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
PeopleScript.prototype.getClass=function(){}

/**
*@return: void
*/
PeopleScript.prototype.notify=function(){}

/**
*@return: void
*/
PeopleScript.prototype.notifyAll=function(){}

/**
* class ServiceProviderScript
*/
function ServiceProviderScript(){
}
/**
*@return: ScriptResult
*/
ServiceProviderScript.prototype.getSpecialHandle=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
ServiceProviderScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ServiceProviderScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ServiceProviderScript.prototype.wait=function(long){}

/**
*@return: void
*/
ServiceProviderScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ServiceProviderScript.prototype.equals=function(Object){}

/**
*@return: String
*/
ServiceProviderScript.prototype.toString=function(){}

/**
*@return: int
*/
ServiceProviderScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
ServiceProviderScript.prototype.getClass=function(){}

/**
*@return: void
*/
ServiceProviderScript.prototype.notify=function(){}

/**
*@return: void
*/
ServiceProviderScript.prototype.notifyAll=function(){}

/**
* class UserRightScript
*/
function UserRightScript(){
}
/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
UserRightScript.prototype.getUserProfileValue=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
UserRightScript.prototype.updateUserProfileValue=function(String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
UserRightScript.prototype.isSupervisor=function(String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
UserRightScript.prototype.getUserRight=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
UserRightScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
UserRightScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
UserRightScript.prototype.wait=function(long){}

/**
*@return: void
*/
UserRightScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
UserRightScript.prototype.equals=function(Object){}

/**
*@return: String
*/
UserRightScript.prototype.toString=function(){}

/**
*@return: int
*/
UserRightScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
UserRightScript.prototype.getClass=function(){}

/**
*@return: void
*/
UserRightScript.prototype.notify=function(){}

/**
*@return: void
*/
UserRightScript.prototype.notifyAll=function(){}

/**
* class CalendarScript
*/
function CalendarScript(){
}
/**
*@param long: long
*@return: ScriptResult
*/
CalendarScript.prototype.getCalendar=function(long){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
CalendarScript.prototype.getEventByEventID=function(long, long){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
CalendarScript.prototype.deleteEventByEventID=function(long, long){}

/**
*@param long: long
*@param int: int
*@param int: int
*@return: ScriptResult
*/
CalendarScript.prototype.getEventSeriesByCalendarID=function(long, int, int){}

/**
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
CalendarScript.prototype.getInspectorCalendars=function(long, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CalendarScript.prototype.scheduleHearing=function(CapIDModel, String, String){}

/**
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
CalendarScript.prototype.getPreviousWorkDay=function(ScriptDateTime){}

/**
*@return: ScriptResult
*/
CalendarScript.prototype.getCalendarNames=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CalendarScript.prototype.getCalendars=function(String, String){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CalendarScript.prototype.addEvent=function(long, String, String, String){}

/**
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
CalendarScript.prototype.getNextWorkDay=function(ScriptDateTime){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param WorkingDayQueryModel: com.accela.aa.inspection.assign.model.WorkingDayQueryModel
*@param Boolean: java.lang.Boolean
*@param Boolean: java.lang.Boolean
*@param Boolean: java.lang.Boolean
*@param Boolean: java.lang.Boolean
*@param Boolean: java.lang.Boolean
*@return: ScriptResult
*/
CalendarScript.prototype.getNextWorkDay=function(CapIDModel, WorkingDayQueryModel, Boolean, Boolean, Boolean, Boolean, Boolean){}

/**
*@return: ScriptResult
*/
CalendarScript.prototype.getNextWorkDay=function(){}

/**
*@param long: long
*@param String: java.lang.String
*@param XGStructureCalendarModel: com.accela.aa.calendar.calendar.XGStructureCalendarModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CalendarScript.prototype.addCalendar=function(long, String, XGStructureCalendarModel, String){}

/**
*@param String: java.lang.String
*@param XGStructureCalendarModel: com.accela.aa.calendar.calendar.XGStructureCalendarModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CalendarScript.prototype.addCalendar=function(String, XGStructureCalendarModel, String){}

/**
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CalendarScript.prototype.updateEvent=function(long, long, String, String, String){}

/**
*@param String: java.lang.String
*@param double: double
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CalendarScript.prototype.getAvailableHearing=function(String, double, String, ScriptDateTime, ScriptDateTime, String, String){}

/**
*@param String: java.lang.String
*@param double: double
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CalendarScript.prototype.getAvailableHearingItem=function(String, double, String, ScriptDateTime, ScriptDateTime, String, String){}

/**
*@param long: long
*@return: ScriptResult
*/
CalendarScript.prototype.deleteInspectorCalendar=function(long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CalendarScript.prototype.scheduleHearing4V360=function(CapIDModel, String, String, String, String, String){}

/**
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CalendarScript.prototype.addInspectorCalendar=function(long, long, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
CalendarScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
CalendarScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
CalendarScript.prototype.wait=function(long){}

/**
*@return: void
*/
CalendarScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
CalendarScript.prototype.equals=function(Object){}

/**
*@return: String
*/
CalendarScript.prototype.toString=function(){}

/**
*@return: int
*/
CalendarScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
CalendarScript.prototype.getClass=function(){}

/**
*@return: void
*/
CalendarScript.prototype.notify=function(){}

/**
*@return: void
*/
CalendarScript.prototype.notifyAll=function(){}

/**
* class MeetingScript
*/
function MeetingScript(){
}
/**
*@param MeetingNotificationModel: com.accela.aa.meeting.meeting.MeetingNotificationModel
*@param List: java.util.List
*@param String: java.lang.String
*@return: ScriptResult
*/
MeetingScript.prototype.sendNotification=function(MeetingNotificationModel, List, String){}

/**
*@return: ScriptResult
*/
MeetingScript.prototype.getAttachmentMaximumSize=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
MeetingScript.prototype.addMeetingCalendar=function(String, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
MeetingScript.prototype.getMeetingCalendars=function(String){}

/**
*@return: ScriptResult
*/
MeetingScript.prototype.getMeetingCalendars=function(){}

/**
*@param Long: java.lang.Long
*@param Long: java.lang.Long
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
MeetingScript.prototype.removeAgendaFromMeeting=function(Long, Long, CapIDModel){}

/**
*@param long: long
*@param int: int
*@param int: int
*@return: ScriptResult
*/
MeetingScript.prototype.getMeetingSeriesByCalendarID=function(long, int, int){}

/**
*@param Long: java.lang.Long
*@param Long: java.lang.Long
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
MeetingScript.prototype.getMeetingNotificationModel=function(Long, Long, String, String){}

/**
*@param Long: java.lang.Long
*@param Long: java.lang.Long
*@return: ScriptResult
*/
MeetingScript.prototype.getMeetingAttendees=function(Long, Long){}

/**
*@param Long: java.lang.Long
*@param Long: java.lang.Long
*@return: ScriptResult
*/
MeetingScript.prototype.getMeetingAgendaItems=function(Long, Long){}

/**
*@param long: long
*@return: ScriptResult
*/
MeetingScript.prototype.getMeetingCalendar=function(long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param boolean: boolean
*@return: ScriptResult
*/
MeetingScript.prototype.getMeetingsByCAP=function(CapIDModel, boolean){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
MeetingScript.prototype.getMeetingAppType=function(String){}

/**
*@param Long: java.lang.Long
*@param Long: java.lang.Long
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
MeetingScript.prototype.createMeetingAttendeeModel=function(Long, Long, CapIDModel, String, String, String){}

/**
*@param Long: java.lang.Long
*@param Long: java.lang.Long
*@param Long: java.lang.Long
*@param List: java.util.List
*@return: ScriptResult
*/
MeetingScript.prototype.moveAgendaToAnotherMeeting=function(Long, Long, Long, List){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
MeetingScript.prototype.deleteMeetingByMeetingID=function(long, long){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
MeetingScript.prototype.getMeetingByMeetingID=function(long, long){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@return: ScriptResult
*/
MeetingScript.prototype.getMeetingsByWorkflow=function(String, String, String, String, ScriptDateTime, ScriptDateTime, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param List: java.util.List
*@return: ScriptResult
*/
MeetingScript.prototype.sendEmail=function(String, String, String, String, String, List){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
MeetingScript.prototype.addMeeting=function(long, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
MeetingScript.prototype.getAvailableMeetingsByWorkflow=function(String, String, String, String, ScriptDateTime, ScriptDateTime, long, String){}

/**
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
MeetingScript.prototype.updateMeeting=function(long, long, String, String, String){}

/**
*@param String: java.lang.String
*@param double: double
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
MeetingScript.prototype.getAvailableMeetings=function(String, double, String, ScriptDateTime, ScriptDateTime, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
MeetingScript.prototype.scheduleMeeting=function(CapIDModel, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
MeetingScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
MeetingScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
MeetingScript.prototype.wait=function(long){}

/**
*@return: void
*/
MeetingScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
MeetingScript.prototype.equals=function(Object){}

/**
*@return: String
*/
MeetingScript.prototype.toString=function(){}

/**
*@return: int
*/
MeetingScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
MeetingScript.prototype.getClass=function(){}

/**
*@return: void
*/
MeetingScript.prototype.notify=function(){}

/**
*@return: void
*/
MeetingScript.prototype.notifyAll=function(){}

/**
* class AlertScript
*/
function AlertScript(){
}
/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AlertScript.prototype.createAlertMessage=function(String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
AlertScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
AlertScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
AlertScript.prototype.wait=function(long){}

/**
*@return: void
*/
AlertScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
AlertScript.prototype.equals=function(Object){}

/**
*@return: String
*/
AlertScript.prototype.toString=function(){}

/**
*@return: int
*/
AlertScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
AlertScript.prototype.getClass=function(){}

/**
*@return: void
*/
AlertScript.prototype.notify=function(){}

/**
*@return: void
*/
AlertScript.prototype.notifyAll=function(){}

/**
* class GenericQueryScript
*/
function GenericQueryScript(){
}
/**
*@param String: java.lang.String
*@param List: java.util.List
*@param int: int
*@param int: int
*@return: ScriptResult
*/
GenericQueryScript.prototype.query=function(String, List, int, int){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GenericQueryScript.prototype.getParameterModel=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
GenericQueryScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
GenericQueryScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
GenericQueryScript.prototype.wait=function(long){}

/**
*@return: void
*/
GenericQueryScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
GenericQueryScript.prototype.equals=function(Object){}

/**
*@return: String
*/
GenericQueryScript.prototype.toString=function(){}

/**
*@return: int
*/
GenericQueryScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
GenericQueryScript.prototype.getClass=function(){}

/**
*@return: void
*/
GenericQueryScript.prototype.notify=function(){}

/**
*@return: void
*/
GenericQueryScript.prototype.notifyAll=function(){}

/**
* class GISScript
*/
function GISScript(){
}
/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
GISScript.prototype.getAssetGISObject=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GISScript.prototype.getGISObjectDetails=function(String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GISScript.prototype.addCapGISObject=function(CapIDModel, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param boolean: boolean
*@return: ScriptResult
*/
GISScript.prototype.addCapGISObject=function(CapIDModel, String, String, String, boolean){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
GISScript.prototype.removeAllCapGISObjects=function(CapIDModel){}

/**
*@param GISTypeScriptModel: com.accela.aa.emse.dom.GISTypeScriptModel
*@param double: double
*@param String: java.lang.String
*@param GISTypeScriptModel: com.accela.aa.emse.dom.GISTypeScriptModel
*@return: ScriptResult
*/
GISScript.prototype.getProximityResultByRadius=function(GISTypeScriptModel, double, String, GISTypeScriptModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
GISScript.prototype.getGISObjectsByFeatures=function(String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
GISScript.prototype.getCapGISObjects=function(CapIDModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
GISScript.prototype.getParcelGISObjects=function(String){}

/**
*@param GISTypeScriptModel: com.accela.aa.emse.dom.GISTypeScriptModel
*@param double: double
*@param String: java.lang.String
*@param GISTypeScriptModel: com.accela.aa.emse.dom.GISTypeScriptModel
*@return: ScriptResult
*/
GISScript.prototype.getBufferByRadius=function(GISTypeScriptModel, double, String, GISTypeScriptModel){}

/**
*@param GISTypeScriptModel: com.accela.aa.emse.dom.GISTypeScriptModel
*@return: ScriptResult
*/
GISScript.prototype.getGISObjectAttributes=function(GISTypeScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GISScript.prototype.getGISType=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
GISScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
GISScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
GISScript.prototype.wait=function(long){}

/**
*@return: void
*/
GISScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
GISScript.prototype.equals=function(Object){}

/**
*@return: String
*/
GISScript.prototype.toString=function(){}

/**
*@return: int
*/
GISScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
GISScript.prototype.getClass=function(){}

/**
*@return: void
*/
GISScript.prototype.notify=function(){}

/**
*@return: void
*/
GISScript.prototype.notifyAll=function(){}

/**
* class AddressConditionScript
*/
function AddressConditionScript(){
}
/**
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressConditionScript.prototype.getAddressConditions=function(String){}

/**
*@param AddressConditionScriptModel: com.accela.aa.emse.dom.AddressConditionScriptModel
*@return: ScriptResult
*/
AddressConditionScript.prototype.createAddressCondition=function(AddressConditionScriptModel){}

/**
*@param AddressConditionScriptModel: com.accela.aa.emse.dom.AddressConditionScriptModel
*@return: ScriptResult
*/
AddressConditionScript.prototype.editAddressCondition=function(AddressConditionScriptModel){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
AddressConditionScript.prototype.removeAddressCondition=function(long, long){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressConditionScript.prototype.createAddressConditionFromStdCondition=function(String, String){}

/**
*@param String: java.lang.String
*@param long: long
*@return: ScriptResult
*/
AddressConditionScript.prototype.getAddressCondition=function(String, long){}

/**
*@return: ScriptResult
*/
AddressConditionScript.prototype.getNewConditionScriptModel=function(){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@return: ScriptResult
*/
AddressConditionScript.prototype.addAddressCondition=function(long, String, String, String, String, String, String, String, ScriptDateTime, ScriptDateTime, ScriptDateTime, ScriptDateTime, SysUserModel, SysUserModel){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressConditionScript.prototype.addAddressCondition=function(long, String, String, String, String, String, String, String, ScriptDateTime, ScriptDateTime, ScriptDateTime, ScriptDateTime, SysUserModel, SysUserModel, String, String, String, String, String, String, String, String, String, String, String){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressConditionScript.prototype.addAddressCondition=function(long, String, String, String, String, String, String, String, ScriptDateTime, ScriptDateTime, ScriptDateTime, ScriptDateTime, SysUserModel, SysUserModel, String, String, String, String, String, String, String, String){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressConditionScript.prototype.getCondition=function(ConditionModel, String){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressConditionScript.prototype.getCondition=function(ConditionScriptModel, String){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
AddressConditionScript.prototype.getAssetCondition=function(long, long){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@return: ScriptResult
*/
AddressConditionScript.prototype.createCondition=function(ConditionModel){}

/**
*@param ConditionModelArray: [Lcom.accela.aa.condition.condition.ConditionModel;
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@return: ScriptResult
*/
AddressConditionScript.prototype.createCondition=function(ConditionModelArray, ConditionModel){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@return: ScriptResult
*/
AddressConditionScript.prototype.createCondition=function(ConditionScriptModel){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: ScriptResult
*/
AddressConditionScript.prototype.editTableValue4TemplateTable=function(EntityPKModel, GenericTemplateFieldPK, String, Long){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressConditionScript.prototype.editField4TemplateForm=function(EntityPKModel, GenericTemplateFieldPK, String){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@return: ScriptResult
*/
AddressConditionScript.prototype.getFields4TemplateTable=function(EntityPKModel, GenericTemplateFieldPK){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@return: ScriptResult
*/
AddressConditionScript.prototype.getFields4TemplateForm=function(EntityPKModel, GenericTemplateFieldPK){}

/**
*@return: ScriptResult
*/
AddressConditionScript.prototype.getNewOwnerConditionScriptModel=function(){}

/**
*@return: ScriptResult
*/
AddressConditionScript.prototype.getNewAssetConditionScriptModel=function(){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressConditionScript.prototype.createConditionFromStdCondition=function(ConditionModel, String){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressConditionScript.prototype.createConditionFromStdCondition=function(ConditionScriptModel, String){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
AddressConditionScript.prototype.getOwnerCondition=function(long, long){}

/**
*@param ConditionScriptModelArray: [Lcom.accela.aa.emse.dom.ConditionScriptModel;
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@return: ScriptResult
*/
AddressConditionScript.prototype.createConditionWithMulLangs=function(ConditionScriptModelArray, ConditionScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
AddressConditionScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
AddressConditionScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
AddressConditionScript.prototype.wait=function(long){}

/**
*@return: void
*/
AddressConditionScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
AddressConditionScript.prototype.equals=function(Object){}

/**
*@return: String
*/
AddressConditionScript.prototype.toString=function(){}

/**
*@return: int
*/
AddressConditionScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
AddressConditionScript.prototype.getClass=function(){}

/**
*@return: void
*/
AddressConditionScript.prototype.notify=function(){}

/**
*@return: void
*/
AddressConditionScript.prototype.notifyAll=function(){}

/**
* class CAEConditionScript
*/
function CAEConditionScript(){
}
/**
*@param CAEConditionScriptModel: com.accela.aa.emse.dom.CAEConditionScriptModel
*@return: ScriptResult
*/
CAEConditionScript.prototype.editCAECondition=function(CAEConditionScriptModel){}

/**
*@param CAEConditionScriptModel: com.accela.aa.emse.dom.CAEConditionScriptModel
*@return: ScriptResult
*/
CAEConditionScript.prototype.createCAECondition=function(CAEConditionScriptModel){}

/**
*@param long: long
*@return: ScriptResult
*/
CAEConditionScript.prototype.getCAEConditions=function(long){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
CAEConditionScript.prototype.removeCAECondition=function(long, long){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CAEConditionScript.prototype.createCAEConditionFromStdCondition=function(String, String){}

/**
*@return: ScriptResult
*/
CAEConditionScript.prototype.getNewConditionScriptModel=function(){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CAEConditionScript.prototype.addCAECondition=function(long, String, String, String, String, String, String, String, ScriptDateTime, ScriptDateTime, ScriptDateTime, ScriptDateTime, SysUserModel, SysUserModel, String, String, String, String, String, String, String, String, String, String, String){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@return: ScriptResult
*/
CAEConditionScript.prototype.addCAECondition=function(long, String, String, String, String, String, String, String, ScriptDateTime, ScriptDateTime, ScriptDateTime, ScriptDateTime, SysUserModel, SysUserModel){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CAEConditionScript.prototype.addCAECondition=function(long, String, String, String, String, String, String, String, ScriptDateTime, ScriptDateTime, ScriptDateTime, ScriptDateTime, SysUserModel, SysUserModel, String, String, String, String, String, String, String, String){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
CAEConditionScript.prototype.getCAECondition=function(long, long){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CAEConditionScript.prototype.getCondition=function(ConditionModel, String){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CAEConditionScript.prototype.getCondition=function(ConditionScriptModel, String){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
CAEConditionScript.prototype.getAssetCondition=function(long, long){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@return: ScriptResult
*/
CAEConditionScript.prototype.createCondition=function(ConditionModel){}

/**
*@param ConditionModelArray: [Lcom.accela.aa.condition.condition.ConditionModel;
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@return: ScriptResult
*/
CAEConditionScript.prototype.createCondition=function(ConditionModelArray, ConditionModel){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@return: ScriptResult
*/
CAEConditionScript.prototype.createCondition=function(ConditionScriptModel){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: ScriptResult
*/
CAEConditionScript.prototype.editTableValue4TemplateTable=function(EntityPKModel, GenericTemplateFieldPK, String, Long){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@param String: java.lang.String
*@return: ScriptResult
*/
CAEConditionScript.prototype.editField4TemplateForm=function(EntityPKModel, GenericTemplateFieldPK, String){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@return: ScriptResult
*/
CAEConditionScript.prototype.getFields4TemplateTable=function(EntityPKModel, GenericTemplateFieldPK){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@return: ScriptResult
*/
CAEConditionScript.prototype.getFields4TemplateForm=function(EntityPKModel, GenericTemplateFieldPK){}

/**
*@return: ScriptResult
*/
CAEConditionScript.prototype.getNewOwnerConditionScriptModel=function(){}

/**
*@return: ScriptResult
*/
CAEConditionScript.prototype.getNewAssetConditionScriptModel=function(){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CAEConditionScript.prototype.createConditionFromStdCondition=function(ConditionModel, String){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CAEConditionScript.prototype.createConditionFromStdCondition=function(ConditionScriptModel, String){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
CAEConditionScript.prototype.getOwnerCondition=function(long, long){}

/**
*@param ConditionScriptModelArray: [Lcom.accela.aa.emse.dom.ConditionScriptModel;
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@return: ScriptResult
*/
CAEConditionScript.prototype.createConditionWithMulLangs=function(ConditionScriptModelArray, ConditionScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
CAEConditionScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
CAEConditionScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
CAEConditionScript.prototype.wait=function(long){}

/**
*@return: void
*/
CAEConditionScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
CAEConditionScript.prototype.equals=function(Object){}

/**
*@return: String
*/
CAEConditionScript.prototype.toString=function(){}

/**
*@return: int
*/
CAEConditionScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
CAEConditionScript.prototype.getClass=function(){}

/**
*@return: void
*/
CAEConditionScript.prototype.notify=function(){}

/**
*@return: void
*/
CAEConditionScript.prototype.notifyAll=function(){}

/**
* class AddressScript
*/
function AddressScript(){
}
/**
*@return: ScriptResult
*/
AddressScript.prototype.createContactAddressModel=function(){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param RefAddressModel: com.accela.aa.aamain.address.RefAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.createAddressWithRefAddressModel=function(CapIDModel, RefAddressModel){}

/**
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
AddressScript.prototype.getAddressByHouseRangeStreetName=function(long, long, String, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param RefAddressModel: com.accela.aa.aamain.address.RefAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.editAddressWithRefAddressModelWithLogic=function(CapIDModel, RefAddressModel){}

/**
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@return: ScriptResult
*/
AddressScript.prototype.createAddress=function(AddressModel){}

/**
*@param CapContactModel: com.accela.aa.aamain.people.CapContactModel
*@return: ScriptResult
*/
AddressScript.prototype.getContactAddressListByCapContact=function(CapContactModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.getAddressWithTypeByCapId=function(CapIDModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param Long: java.lang.Long
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.getAddressWithTypeByPK=function(CapIDModel, Long, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
AddressScript.prototype.removeAddress=function(CapIDModel, long){}

/**
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@return: ScriptResult
*/
AddressScript.prototype.copyAddressModel=function(AddressModel, AddressModel){}

/**
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@return: ScriptResult
*/
AddressScript.prototype.editAddress=function(AddressModel){}

/**
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
AddressScript.prototype.getCityList=function(QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@return: ScriptResult
*/
AddressScript.prototype.isExisted=function(CapIDModel, AddressModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param RefAddressModel: com.accela.aa.aamain.address.RefAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.isExisted=function(CapIDModel, RefAddressModel){}

/**
*@param RefAddressModel: com.accela.aa.aamain.address.RefAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.isExisted=function(RefAddressModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@return: ScriptResult
*/
AddressScript.prototype.editAddressWithLogic=function(CapIDModel, AddressModel){}

/**
*@param long: long
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
AddressScript.prototype.getAddressByAddressId=function(long, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.getPrimaryAddressByCapID=function(CapIDModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@return: ScriptResult
*/
AddressScript.prototype.createAddressWithAPOAttribute=function(CapIDModel, AddressModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@return: ScriptResult
*/
AddressScript.prototype.editAddressWithAPOAttribute=function(CapIDModel, AddressModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
AddressScript.prototype.getAddressByCapId=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
AddressScript.prototype.getAddressByCapId=function(CapIDModel, QueryFormat){}

/**
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@return: ScriptResult
*/
AddressScript.prototype.getCapIdByAddress=function(AddressModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param RefAddressModel: com.accela.aa.aamain.address.RefAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.getAddressByRefAddressModel=function(CapIDModel, RefAddressModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
AddressScript.prototype.getCompactAddress=function(CapIDModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@return: ScriptResult
*/
AddressScript.prototype.createAddressWithLogic=function(CapIDModel, AddressModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.removeAddressWithLogic=function(CapIDModel, String){}

/**
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
AddressScript.prototype.getAddressByStreetName=function(String, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param Long: java.lang.Long
*@return: ScriptResult
*/
AddressScript.prototype.getAddressByPK=function(CapIDModel, Long){}

/**
*@param long: long
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.getRefAddressByHouseRangeStreetName=function(long, long, String){}

/**
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.getRefAddressByHouseNoDirStreetNameSuffix=function(long, long, String, String){}

/**
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.getRefAddressByHouseNoRangeStreetNameSuffix=function(long, long, String, String){}

/**
*@param RefAddressModel: com.accela.aa.aamain.address.RefAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.getRefAddressByServiceProviderRefAddressModel=function(RefAddressModel){}

/**
*@param String: java.lang.String
*@param RefAddressModel: com.accela.aa.aamain.address.RefAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.createRefAddressWithLogic=function(String, RefAddressModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.getRefAddressByPK=function(String){}

/**
*@param RefAddressModel: com.accela.aa.aamain.address.RefAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.createRefAddress=function(RefAddressModel){}

/**
*@param RefAddressModel: com.accela.aa.aamain.address.RefAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.editRefAddress=function(RefAddressModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.getRefAddressByStreetName=function(String){}

/**
*@param long: long
*@param int: int
*@return: ScriptResult
*/
AddressScript.prototype.removeRefAddress=function(long, int){}

/**
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.removeRefAddress=function(long, String){}

/**
*@param String: java.lang.String
*@param RefAddressModel: com.accela.aa.aamain.address.RefAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.editRefAddressWithLogic=function(String, RefAddressModel){}

/**
*@param ContactAddressModel: com.accela.orm.model.address.ContactAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.createContactAddress=function(ContactAddressModel){}

/**
*@param ContactAddressModel: com.accela.orm.model.address.ContactAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.getContactAddressList=function(ContactAddressModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
AddressScript.prototype.getAddressWithAttributeByCapId=function(CapIDModel){}

/**
*@param long: long
*@return: ScriptResult
*/
AddressScript.prototype.getAssignedAddressDistrictForAdmin=function(long){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@return: ScriptResult
*/
AddressScript.prototype.getAssignedAddressDistrictForDaily=function(String, String, String, long){}

/**
*@param long: long
*@return: ScriptResult
*/
AddressScript.prototype.getAddressDistrictForAdmin=function(long){}

/**
*@return: RefAddressScriptModel
*/
AddressScript.prototype.createRefAddressScriptModel=function(){}

/**
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.addAddressDistrictForAdmin=function(long, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.deleteAddressDistrictForDaily=function(String, String, String, long, String){}

/**
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.deleteAddressDistrictForAdmin=function(long, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.addAddressDistrictForDaily=function(String, String, String, long, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.getDailyAddressByCapId=function(String, String, String){}

/**
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@return: ScriptResult
*/
AddressScript.prototype.removeAddressWithType=function(AddressModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.getAddressListForAdmin=function(String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.getAddressListForAdmin=function(String, String, String, String, String, String, String, String, String, String, String, String, String, String){}

/**
*@return: ScriptResult
*/
AddressScript.prototype.createXRefContactAddressModel=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@return: ScriptResult
*/
AddressScript.prototype.getAddressDistrictForDaily=function(String, String, String, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param ContactAddressModel: com.accela.orm.model.address.ContactAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.editCapContactAddress=function(CapIDModel, ContactAddressModel){}

/**
*@param ContactAddressModel: com.accela.orm.model.address.ContactAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.deleteContactAddress=function(ContactAddressModel){}

/**
*@param XRefContactAddressModel: com.accela.orm.model.address.XRefContactAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.createXRefContactAddress=function(XRefContactAddressModel){}

/**
*@param ContactAddressModel: com.accela.orm.model.address.ContactAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.getContactAddressByPK=function(ContactAddressModel){}

/**
*@param ContactAddressModel: com.accela.orm.model.address.ContactAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.editContactAddress=function(ContactAddressModel){}

/**
*@param XRefContactAddressModel: com.accela.orm.model.address.XRefContactAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.editXRefContactAddress=function(XRefContactAddressModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@return: ScriptResult
*/
AddressScript.prototype.deleteCapContactAddress=function(CapIDModel, long, long){}

/**
*@param XRefContactAddressModel: com.accela.orm.model.address.XRefContactAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.deleteXRefContactAddress=function(XRefContactAddressModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
AddressScript.prototype.getCapContactAddressList=function(CapIDModel, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param ContactAddressModel: com.accela.orm.model.address.ContactAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.createCapContactAddress=function(CapIDModel, ContactAddressModel){}

/**
*@param XRefContactAddressModel: com.accela.orm.model.address.XRefContactAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.getXRefContactAddressByPK=function(XRefContactAddressModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.getContactAddressModel=function(CapIDModel, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
AddressScript.prototype.getCapAddressByValidatedFlag=function(String){}

/**
*@param XRefContactAddressModel: com.accela.orm.model.address.XRefContactAddressModel
*@return: ScriptResult
*/
AddressScript.prototype.getXRefContactAddressList=function(XRefContactAddressModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
AddressScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
AddressScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
AddressScript.prototype.wait=function(long){}

/**
*@return: void
*/
AddressScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
AddressScript.prototype.equals=function(Object){}

/**
*@return: String
*/
AddressScript.prototype.toString=function(){}

/**
*@return: int
*/
AddressScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
AddressScript.prototype.getClass=function(){}

/**
*@return: void
*/
AddressScript.prototype.notify=function(){}

/**
*@return: void
*/
AddressScript.prototype.notifyAll=function(){}

/**
* class InvoiceScript
*/
function InvoiceScript(){
}
/**
*@param long: long
*@return: ScriptResult
*/
InvoiceScript.prototype.getFeeItemInvoiceByInvoiceNbr=function(long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
InvoiceScript.prototype.createInvoiceWithEvent=function(CapIDModel, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param F4InvoiceModel: com.accela.aa.finance.invoice.F4InvoiceModel
*@return: ScriptResult
*/
InvoiceScript.prototype.editInvoice=function(CapIDModel, F4InvoiceModel){}

/**
*@return: ScriptResult
*/
InvoiceScript.prototype.getUnpaidInvoices=function(){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
InvoiceScript.prototype.getFeeItemInvoiceByCustomizedNbr=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
InvoiceScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
InvoiceScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
InvoiceScript.prototype.wait=function(long){}

/**
*@return: void
*/
InvoiceScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
InvoiceScript.prototype.equals=function(Object){}

/**
*@return: String
*/
InvoiceScript.prototype.toString=function(){}

/**
*@return: int
*/
InvoiceScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
InvoiceScript.prototype.getClass=function(){}

/**
*@return: void
*/
InvoiceScript.prototype.notify=function(){}

/**
*@return: void
*/
InvoiceScript.prototype.notifyAll=function(){}

/**
* class FinanceScript
*/
function FinanceScript(){
this.capServer= new $Proxy263();
this.merchantAccountService= new MerchantAccountBusiness();
}
/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getContractorSuppliedValuation=function(CapIDModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
FinanceScript.prototype.getValuationCalcMultiplier=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
FinanceScript.prototype.getValuationCalcExtraAmount=function(CapIDModel){}

/**
*@param Date: java.util.Date
*@param Date: java.util.Date
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getPaymentByDate=function(Date, Date, QueryFormat){}

/**
*@param TransactionModel: com.accela.aa.finance.cashier.onlinePayment.TransactionModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getETransaction=function(TransactionModel, QueryFormat){}

/**
*@return: TransactionModel
*/
FinanceScript.prototype.createTransactionScriptModel=function(){}

/**
*@param TransactionModel: com.accela.aa.finance.cashier.onlinePayment.TransactionModel
*@return: ScriptResult
*/
FinanceScript.prototype.updateETransaction=function(TransactionModel){}

/**
*@return: BCalcValuatnScriptModel
*/
FinanceScript.prototype.createBCalcValuatnScriptModel=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param int: int
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param Date: java.util.Date
*@param String: java.lang.String
*@param StringArray: [Ljava.lang.String;
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.getEtisalatRegisterModel=function(String, String, String, String, int, String, String, String, Date, String, StringArray, String){}

/**
*@param CapTypeModel: com.accela.aa.aamain.cap.CapTypeModel
*@return: ScriptResult
*/
FinanceScript.prototype.getMerchantAccInfo=function(CapTypeModel){}

/**
*@return: ScriptResult
*/
FinanceScript.prototype.getCashierSessionFromDB=function(){}

/**
*@return: ACAModel
*/
FinanceScript.prototype.createACAScriptModel=function(){}

/**
*@return: PaymentScriptModel
*/
FinanceScript.prototype.createPaymentScriptModel=function(){}

/**
*@param TransactionModel: com.accela.aa.finance.cashier.onlinePayment.TransactionModel
*@return: ScriptResult
*/
FinanceScript.prototype.updateETransaction4ACA=function(TransactionModel){}

/**
*@param TransactionModel: com.accela.aa.finance.cashier.onlinePayment.TransactionModel
*@return: ScriptResult
*/
FinanceScript.prototype.createETransaction=function(TransactionModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: ScriptResult
*/
FinanceScript.prototype.getACAModel=function(CapModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.editFeeAudit=function(CapIDModel, long, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.getValuation=function(String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getBValuatnByPeriod=function(CapIDModel, String, QueryFormat){}

/**
*@param BCalcValuatnScriptModel: com.accela.aa.emse.dom.BCalcValuatnScriptModel
*@return: ScriptResult
*/
FinanceScript.prototype.createBCalcValuatn=function(BCalcValuatnScriptModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.editBValuatnFlag=function(CapIDModel, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param double: double
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.editBValuatnValue=function(CapIDModel, String, double, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeAuditByPK=function(CapIDModel, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param double: double
*@param String: java.lang.String
*@param double: double
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.createFeeAudit=function(CapIDModel, long, String, String, String, String, String, String, String, String, double, String, double, ScriptDateTime, ScriptDateTime, ScriptDateTime, String, String, String, String, String, String, String, String, String, String){}

/**
*@param F4FeeItemAuditTrailModel: com.accela.aa.finance.fee.F4FeeItemAuditTrailModel
*@return: ScriptResult
*/
FinanceScript.prototype.createFeeAudit=function(F4FeeItemAuditTrailModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param double: double
*@param String: java.lang.String
*@param double: double
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.createFeeAudit=function(String, String, String, long, String, String, String, String, String, String, String, String, double, String, double, ScriptDateTime, ScriptDateTime, ScriptDateTime, String, String, String, String, String, String, String, String, String, String){}

/**
*@param BValuatnModel: com.accela.aa.finance.feeValuation.BValuatnModel
*@return: ScriptResult
*/
FinanceScript.prototype.createBvaluatn=function(BValuatnModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param double: double
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.createBvaluatn=function(CapIDModel, String, double, double, double, String, ScriptDateTime, String){}

/**
*@param BCalcValuatnScriptModel: com.accela.aa.emse.dom.BCalcValuatnScriptModel
*@return: ScriptResult
*/
FinanceScript.prototype.deleteBCalcValuatn=function(BCalcValuatnScriptModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param boolean: boolean
*@return: ScriptResult
*/
FinanceScript.prototype.assignFeeFactor=function(CapIDModel, boolean){}

/**
*@param BCalcValuatnScriptModel: com.accela.aa.emse.dom.BCalcValuatnScriptModel
*@return: ScriptResult
*/
FinanceScript.prototype.editBCalcValuatn=function(BCalcValuatnScriptModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getCalculatedValuation=function(CapIDModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
FinanceScript.prototype.getCalculatedValuation=function(CapIDModel){}

/**
*@param long: long
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getCashierAuditListByTranSeqNbr=function(long, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
FinanceScript.prototype.getInvoiceAmountExceptVoidCredited=function(CapIDModel, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param boolean: boolean
*@return: ScriptResult
*/
FinanceScript.prototype.prepareTransaction4ACA=function(CapIDModel, boolean){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param long: long
*@param long: long
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.createFundTransferAudit=function(CapIDModel, long, long, String, String, String, String, long, long, long, ScriptDateTime, double, double, String, String, long, String, String, long, double, double, String, String, String, String, String, ScriptDateTime, String, String, String, String){}

/**
*@param AccountingAuditTrailModel: com.accela.aa.finance.cashierAudit.AccountingAuditTrailModel
*@return: ScriptResult
*/
FinanceScript.prototype.createFundTransferAudit=function(AccountingAuditTrailModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param PaymentScriptModel: com.accela.aa.emse.dom.PaymentScriptModel
*@param ACAModel: com.accela.aa.finance.cashier.onlinePayment.util.ACAModel
*@return: ScriptResult
*/
FinanceScript.prototype.makePayment4ACA=function(CapIDModel, PaymentScriptModel, ACAModel){}

/**
*@param AccountingAuditTrailModel: com.accela.aa.finance.cashierAudit.AccountingAuditTrailModel
*@return: ScriptResult
*/
FinanceScript.prototype.createInvoicingAudit=function(AccountingAuditTrailModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param long: long
*@param long: long
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.createInvoicingAudit=function(CapIDModel, long, long, String, String, String, String, long, long, long, ScriptDateTime, double, double, String, String, long, String, String, long, double, double, String, String, String, String, String, ScriptDateTime, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getCashierAuditListByCapId=function(CapIDModel, QueryFormat){}

/**
*@param long: long
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getCashierAudit=function(long, QueryFormat){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.getTotalSetFeeInvoiceAmountExceptVoid=function(String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param List: java.util.List
*@return: ScriptResult
*/
FinanceScript.prototype.getValidFeeItemInvoiceListByFeeNbrList=function(CapIDModel, List){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
FinanceScript.prototype.getValidFeeItemInvoiceByFeeNbr=function(CapIDModel, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param PaymentScriptModel: com.accela.aa.emse.dom.PaymentScriptModel
*@param longArray: [J
*@param longArray: [J
*@param doubleArray: [D
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.applyPayment=function(CapIDModel, PaymentScriptModel, longArray, longArray, doubleArray, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param double: double
*@param longArray: [J
*@param longArray: [J
*@param doubleArray: [D
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.applyPayment=function(CapIDModel, long, double, longArray, longArray, doubleArray, ScriptDateTime, String, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param PaymentScriptModel: com.accela.aa.emse.dom.PaymentScriptModel
*@param longArray: [J
*@param longArray: [J
*@param doubleArray: [D
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.applyRefund=function(CapIDModel, PaymentScriptModel, longArray, longArray, doubleArray, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param longArray: [J
*@param longArray: [J
*@param doubleArray: [D
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.applyRefund=function(CapIDModel, longArray, longArray, doubleArray, ScriptDateTime, String, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.voidFeeItem=function(CapIDModel, long, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
FinanceScript.prototype.voidFeeItem=function(CapIDModel, long){}

/**
*@param PaymentScriptModel: com.accela.aa.emse.dom.PaymentScriptModel
*@return: ScriptResult
*/
FinanceScript.prototype.makePayment=function(PaymentScriptModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param double: double
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.makePayment=function(CapIDModel, String, String, String, ScriptDateTime, String, ScriptDateTime, double, double, double, String, String, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.makeRefund=function(CapIDModel, String, String, String, ScriptDateTime, String, ScriptDateTime, double, String, String, String, String, String, String, ScriptDateTime, ScriptDateTime, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.voidPayment=function(CapIDModel, ScriptDateTime, long, String, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param PaymentScriptModel: com.accela.aa.emse.dom.PaymentScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.voidPayment=function(CapIDModel, PaymentScriptModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param double: double
*@return: ScriptResult
*/
FinanceScript.prototype.createFeeItem=function(CapIDModel, String, String, String, double){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param double: double
*@return: ScriptResult
*/
FinanceScript.prototype.createFeeItem=function(CapIDModel, String, String, String, String, double){}

/**
*@param F4FeeItemModel: com.accela.aa.finance.fee.F4FeeItemModel
*@param int: int
*@return: ScriptResult
*/
FinanceScript.prototype.createFeeItem=function(F4FeeItemModel, int){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param double: double
*@param String: java.lang.String
*@param double: double
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.createFeeItem=function(CapIDModel, String, String, String, String, String, String, String, String, double, String, double, ScriptDateTime, ScriptDateTime, ScriptDateTime, String, String, String, String, String, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param F4InvoiceModel: com.accela.aa.finance.invoice.F4InvoiceModel
*@param Collection: java.util.Collection
*@return: ScriptResult
*/
FinanceScript.prototype.createInvoice=function(CapIDModel, F4InvoiceModel, Collection){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param double: double
*@param double: double
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param long: long
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param Collection: java.util.Collection
*@return: ScriptResult
*/
FinanceScript.prototype.createInvoice=function(CapIDModel, long, long, String, ScriptDateTime, double, double, ScriptDateTime, ScriptDateTime, String, long, ScriptDateTime, String, String, String, String, long, ScriptDateTime, String, Collection){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.createInvoice=function(CapIDModel, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param longArray: [J
*@param StringArray: [Ljava.lang.String;
*@return: ScriptResult
*/
FinanceScript.prototype.createInvoice=function(CapIDModel, longArray, StringArray){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getPaymentFeeItems=function(CapIDModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.getPaymentByPK=function(CapIDModel, long, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param longArray: [J
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.generateReceipt=function(CapIDModel, ScriptDateTime, longArray, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.generateReceipt=function(CapIDModel, ScriptDateTime, long, String, String){}

/**
*@param Date: java.util.Date
*@param Date: java.util.Date
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getOnLinePaymentByDate=function(Date, Date, QueryFormat){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.getTotalSetPaid=function(String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getReceiptByCapID=function(CapIDModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getPaymentByCapID=function(CapIDModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
FinanceScript.prototype.getTotalPaidFeeItem=function(CapIDModel, long){}

/**
*@param long: long
*@return: ScriptResult
*/
FinanceScript.prototype.getReceiptByPK=function(long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getPaymentByReceiptNo=function(CapIDModel, long, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
FinanceScript.prototype.getTotalPaidInvoice=function(CapIDModel, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.makeFundTransfer=function(CapIDModel, CapIDModel, String, String, String, ScriptDateTime, ScriptDateTime, String, ScriptDateTime, double, String, String, String, String, ScriptDateTime, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param PaymentScriptModel: com.accela.aa.emse.dom.PaymentScriptModel
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.makeFundTransfer=function(CapIDModel, CapIDModel, PaymentScriptModel, String, ScriptDateTime, ScriptDateTime, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param doubleArray: [D
*@param doubleArray: [D
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param double: double
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.applyPaymentToSet=function(String, String, String, String, doubleArray, doubleArray, String, String, String, ScriptDateTime, String, ScriptDateTime, double, double, double, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param StringArray: [Ljava.lang.String;
*@param StringArray: [Ljava.lang.String;
*@param StringArray: [Ljava.lang.String;
*@param doubleArray: [D
*@param doubleArray: [D
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param double: double
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.applyPaymentToSet=function(String, StringArray, StringArray, StringArray, doubleArray, doubleArray, String, String, String, ScriptDateTime, String, ScriptDateTime, double, double, double, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.getTotalSetPaidByPeriod=function(String, String, String, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.getTotalFullPaidApp=function(String){}

/**
*@param long: long
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getSetPaymentsByReceiptNbr=function(long, QueryFormat){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.getTotalSetApp=function(String){}

/**
*@param long: long
*@return: ScriptResult
*/
FinanceScript.prototype.getPaymentByBatchNumber=function(long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param long: long
*@param long: long
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.createPaymentAudit=function(CapIDModel, long, long, String, String, String, String, long, long, long, ScriptDateTime, double, double, String, String, long, String, String, long, double, double, String, String, String, String, String, ScriptDateTime, String, String, String, String){}

/**
*@param AccountingAuditTrailModel: com.accela.aa.finance.cashierAudit.AccountingAuditTrailModel
*@return: ScriptResult
*/
FinanceScript.prototype.createPaymentAudit=function(AccountingAuditTrailModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param double: double
*@return: ScriptResult
*/
FinanceScript.prototype.getOnlinePaymentInfo=function(CapIDModel, String, String, double){}

/**
*@param Date: java.util.Date
*@param Date: java.util.Date
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getReceiptsByDate=function(Date, Date, QueryFormat){}

/**
*@return: ScriptResult
*/
FinanceScript.prototype.getTranBatchNbr=function(){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeItemByPK=function(CapIDModel, long){}

/**
*@param long: long
*@param double: double
*@param double: double
*@return: ScriptResult
*/
FinanceScript.prototype.editInvoiceBalanceDue=function(long, double, double){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeItemInvoiceByCapID=function(CapIDModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param long: long
*@param long: long
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.createRefundAudit=function(CapIDModel, long, long, String, String, String, String, long, long, long, ScriptDateTime, double, double, String, String, long, String, String, long, double, double, String, String, String, String, String, ScriptDateTime, String){}

/**
*@param AccountingAuditTrailModel: com.accela.aa.finance.cashierAudit.AccountingAuditTrailModel
*@return: ScriptResult
*/
FinanceScript.prototype.createRefundAudit=function(AccountingAuditTrailModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getInvoiceFeeItemBySetID=function(String, String, String, String, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeItemInvoiceByFeeNbr=function(CapIDModel, long, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeItemByCapID=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeItemInvoiceList=function(CapIDModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeItemInvoiceByInvoiceNbr=function(CapIDModel, long, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param long: long
*@param long: long
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.createApplyPaymentAudit=function(CapIDModel, long, long, String, String, String, String, long, long, long, ScriptDateTime, double, double, String, String, long, String, String, long, double, double, String, String, String, String, String, ScriptDateTime, String){}

/**
*@param AccountingAuditTrailModel: com.accela.aa.finance.cashierAudit.AccountingAuditTrailModel
*@return: ScriptResult
*/
FinanceScript.prototype.createApplyPaymentAudit=function(AccountingAuditTrailModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param long: long
*@param long: long
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.createApplyRefundAudit=function(CapIDModel, long, long, String, String, String, String, long, long, long, ScriptDateTime, double, double, String, String, long, String, String, long, double, double, String, String, String, String, String, ScriptDateTime, String){}

/**
*@param AccountingAuditTrailModel: com.accela.aa.finance.cashierAudit.AccountingAuditTrailModel
*@return: ScriptResult
*/
FinanceScript.prototype.createApplyRefundAudit=function(AccountingAuditTrailModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param long: long
*@param long: long
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param double: double
*@param double: double
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.createVoidPaymentAudit=function(CapIDModel, long, long, String, String, String, String, long, long, long, ScriptDateTime, double, double, String, String, long, String, String, long, double, double, String, String, String, String, String, ScriptDateTime, String){}

/**
*@param AccountingAuditTrailModel: com.accela.aa.finance.cashierAudit.AccountingAuditTrailModel
*@return: ScriptResult
*/
FinanceScript.prototype.createVoidPaymentAudit=function(AccountingAuditTrailModel){}

/**
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeItemInvoiceBySetID=function(String, QueryFormat){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.getSetInvoicedPerApp=function(String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param double: double
*@param String: java.lang.String
*@param double: double
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.editFeeItem=function(CapIDModel, long, String, String, String, String, String, String, String, String, double, String, double, ScriptDateTime, ScriptDateTime, ScriptDateTime, String, String, String, String, String, String, String, String){}

/**
*@param F4FeeItemModel: com.accela.aa.finance.fee.F4FeeItemModel
*@param int: int
*@return: ScriptResult
*/
FinanceScript.prototype.editFeeItem=function(F4FeeItemModel, int){}

/**
*@param F4FeeItemModel: com.accela.aa.finance.fee.F4FeeItemModel
*@return: ScriptResult
*/
FinanceScript.prototype.editFeeItem=function(F4FeeItemModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param double: double
*@param double: double
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param long: long
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.editInvoice=function(CapIDModel, long, long, String, ScriptDateTime, double, double, ScriptDateTime, ScriptDateTime, String, long, ScriptDateTime, String, String, String, String, long, ScriptDateTime, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param F4InvoiceModel: com.accela.aa.finance.invoice.F4InvoiceModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.closeInvoice=function(CapIDModel, F4InvoiceModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param double: double
*@param double: double
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param long: long
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.closeInvoice=function(CapIDModel, long, long, String, ScriptDateTime, double, double, ScriptDateTime, ScriptDateTime, String, long, ScriptDateTime, String, String, String, String, long, ScriptDateTime, String, QueryFormat){}

/**
*@param Collection: java.util.Collection
*@return: ScriptResult
*/
FinanceScript.prototype.addFeeItem=function(Collection){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeTotal=function(CapIDModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
FinanceScript.prototype.calculateFees=function(CapIDModel){}

/**
*@param F4FeeItemModel: com.accela.aa.finance.fee.F4FeeItemModel
*@return: ScriptResult
*/
FinanceScript.prototype.removeFeeItem=function(F4FeeItemModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
FinanceScript.prototype.removeFeeItem=function(CapIDModel, long){}

/**
*@param List: java.util.List
*@param Long: java.lang.Long
*@return: ScriptResult
*/
FinanceScript.prototype.createFeeItemsForPosTransaction=function(List, Long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeAuditList=function(CapIDModel, QueryFormat){}

/**
*@param long: long
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeAuditList=function(long, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeUnitByFeeCode=function(CapIDModel, String, String, ScriptDateTime){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeScheduleByCapID=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
FinanceScript.prototype.getRefFeeItemByFeeCodeVersion=function(String, String, String, String, ScriptDateTime){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeItemByFeeCode=function(CapIDModel, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param Long: java.lang.Long
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeItemByPosTransaction=function(CapIDModel, Long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param double: double
*@param long: long
*@return: ScriptResult
*/
FinanceScript.prototype.editFeeItemUnit=function(CapIDModel, double, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.reCalculateFees=function(CapIDModel, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.editFeeItemFlag=function(CapIDModel, long, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.wrkItemFeeTotalBySubGroup=function(CapIDModel, String, String, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.getTotalSetFeeAssessAmount=function(String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.voidFeeItemAddAudit=function(CapIDModel, long, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param boolean: boolean
*@return: ScriptResult
*/
FinanceScript.prototype.getPaymentAmount4ACA=function(CapIDModel, boolean){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeItemsByFeeCodeAndPeriod=function(CapIDModel, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.editFeeitemInvoiceStatus=function(CapIDModel, long, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
FinanceScript.prototype.getRefFeeItemByFeeCode=function(String, String, String, ScriptDateTime){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getInvoiceByCapID=function(CapIDModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeItemList=function(CapIDModel, String, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeItemList=function(CapIDModel, String, String, String, QueryFormat){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.getTotalSetFeeInvoiceAmount=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.editRFeeItemFormulaVariable=function(String, String, String, String, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeScheduleList=function(String){}

/**
*@param X4FeeItemInvoiceModel: com.accela.aa.finance.invoice.X4FeeItemInvoiceModel
*@return: ScriptResult
*/
FinanceScript.prototype.editFeeItemInvoice=function(X4FeeItemInvoiceModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.switchCalcFactor=function(CapIDModel, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
FinanceScript.prototype.getFeeCalcFactor=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
FinanceScript.prototype.updateMultiplierAndExtraAmount=function(CapIDModel, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
FinanceScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
FinanceScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
FinanceScript.prototype.wait=function(long){}

/**
*@return: void
*/
FinanceScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
FinanceScript.prototype.equals=function(Object){}

/**
*@return: String
*/
FinanceScript.prototype.toString=function(){}

/**
*@return: int
*/
FinanceScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
FinanceScript.prototype.getClass=function(){}

/**
*@return: void
*/
FinanceScript.prototype.notify=function(){}

/**
*@return: void
*/
FinanceScript.prototype.notifyAll=function(){}

/**
* class $Proxy263
*/
function $Proxy263(){
}
/**
*@param Object: java.lang.Object
*@return: boolean
*/
$Proxy263.prototype.equals=function(Object){}

/**
*@return: String
*/
$Proxy263.prototype.toString=function(){}

/**
*@return: int
*/
$Proxy263.prototype.hashCode=function(){}

/**
*@param Advice: org.aopalliance.aop.Advice
*@return: int
*/
$Proxy263.prototype.indexOf=function(Advice){}

/**
*@param Advisor: org.springframework.aop.Advisor
*@return: int
*/
$Proxy263.prototype.indexOf=function(Advisor){}

/**
*@return: boolean
*/
$Proxy263.prototype.isFrozen=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: CapModel
*/
$Proxy263.prototype.updateCap4ACA=function(String, String, CapModel, CapModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param Collection: java.util.Collection
*@param String: java.lang.String
*@param boolean: boolean
*@return: void
*/
$Proxy263.prototype.copyFeeItem=function(CapModel, CapModel, Collection, String, boolean){}

/**
*@param String: java.lang.String
*@param Map: java.util.Map
*@param List: java.util.List
*@param Map: java.util.Map
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.cloneRecords=function(String, Map, List, Map, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.copyOwner=function(CapModel, CapModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param boolean: boolean
*@return: String
*/
$Proxy263.prototype.getNextCapId=function(String, String, String, String, String, String, boolean){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param Boolean: java.lang.Boolean
*@return: void
*/
$Proxy263.prototype.copyGISObject=function(CapModel, CapModel, String, Boolean){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.cloneFee=function(CapModel, CapModel, String, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.createCapView=function(CapModel, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.copyAddress=function(CapModel, CapModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.copyComments=function(CapModel, CapModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param Map: java.util.Map
*@return: void
*/
$Proxy263.prototype.copySpecinfo=function(CapModel, CapModel, Map){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param PageFlowGroupModel: com.accela.pa.configpageflow.PageFlowGroupModel
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.clearCapData=function(String, CapModel, PageFlowGroupModel, String){}

/**
*@param CapDetailModel: com.accela.aa.aamain.cap.CapDetailModel
*@param BValuatnModel: com.accela.aa.finance.feeValuation.BValuatnModel
*@return: void
*/
$Proxy263.prototype.editAddtInfo=function(CapDetailModel, BValuatnModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param boolean: boolean
*@param boolean: boolean
*@param boolean: boolean
*@return: String
*/
$Proxy263.prototype.getNextAltId=function(String, String, String, String, String, String, String, String, String, boolean, boolean, boolean){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: AADataPage
*/
$Proxy263.prototype.getCapeDocs=function(CapModel, QueryFormat){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.copyParcel=function(CapModel, CapModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param Map: java.util.Map
*@return: void
*/
$Proxy263.prototype.copyLicense=function(CapModel, CapModel, Map){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param boolean: boolean
*@param boolean: boolean
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.copyCapStatus=function(CapModel, CapModel, SysUserModel, boolean, boolean, String){}

/**
*@param List: java.util.List
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param boolean: boolean
*@return: Map
*/
$Proxy263.prototype.getAddressMap=function(List, CapModel, boolean){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: Collection
*/
$Proxy263.prototype.findapp=function(CapModel, String, String, String, String, String){}

/**
*@param StatusHistoryModel: com.accela.aa.aamain.cap.StatusHistoryModel
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.doCapVoid=function(StatusHistoryModel, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.copyStructure=function(CapModel, CapModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.copyAddtinfo=function(CapModel, CapModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param Map: java.util.Map
*@return: void
*/
$Proxy263.prototype.copyContact=function(CapModel, CapModel, Map){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param Map: java.util.Map
*@param boolean: boolean
*@param boolean: boolean
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.copyCapDetail=function(CapModel, CapModel, Map, boolean, boolean, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.copyWorkFlow=function(CapModel, CapModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: CapIDModel
*/
$Proxy263.prototype.getTradeNameByTradeLicense=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@return: AADataPage
*/
$Proxy263.prototype.getCapTypeList=function(String, QueryFormat, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@return: AADataPage
*/
$Proxy263.prototype.getCapTypeList=function(String, String, QueryFormat, String){}

/**
*@param PeopleModel: com.accela.aa.aamain.people.PeopleModel
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapIDsByInspector=function(PeopleModel, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapsByParcelNbrs=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: List
*/
$Proxy263.prototype.getCapIDByInspGroup=function(String, String, QueryFormat){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@param String: java.lang.String
*@param Date: java.util.Date
*@param Date: java.util.Date
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@param Collection: java.util.Collection
*@param Collection: java.util.Collection
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param List: java.util.List
*@return: AADataPage
*/
$Proxy263.prototype.getCapListByCollection=function(String, CapModel, AddressModel, String, Date, Date, QueryFormat, String, Collection, Collection, CapIDModel, List){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@param String: java.lang.String
*@param Date: java.util.Date
*@param Date: java.util.Date
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@param Collection: java.util.Collection
*@return: AADataPage
*/
$Proxy263.prototype.getCapListByCollection=function(String, CapModel, AddressModel, String, Date, Date, QueryFormat, String, Collection){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@param String: java.lang.String
*@param Date: java.util.Date
*@param Date: java.util.Date
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@param GISObjects: com.accela.aa.xml.model.gis.GISObjects
*@return: AADataPage
*/
$Proxy263.prototype.getCapListByCollection=function(String, CapModel, AddressModel, String, Date, Date, QueryFormat, String, GISObjects){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: Collection
*/
$Proxy263.prototype.getSubTypeByType=function(String, String, String, QueryFormat){}

/**
*@param UserTempDataModel: com.accela.aa.aamain.cap.UserTempDataModel
*@return: String
*/
$Proxy263.prototype.getFunctionContentByPK=function(UserTempDataModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: boolean
*/
$Proxy263.prototype.updateCapAltID=function(String, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: Long
*/
$Proxy263.prototype.getTrackingNbr=function(String, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: Object[]
*/
$Proxy263.prototype.getSqlByCondition=function(CapModel, QueryFormat){}

/**
*@param String: java.lang.String
*@param Collection: java.util.Collection
*@return: List
*/
$Proxy263.prototype.getCapsByCapIDs4Assign=function(String, Collection){}

/**
*@param String: java.lang.String
*@return: Collection
*/
$Proxy263.prototype.getEnabledModuleListByAgency=function(String){}

/**
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@return: AADataPage
*/
$Proxy263.prototype.getProjectTypeList=function(String, QueryFormat, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param boolean: boolean
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.updateReceiptIdSeq=function(String, String, String, String, String, String, boolean, String, String){}

/**
*@param String: java.lang.String
*@return: Collection
*/
$Proxy263.prototype.getEnabledGroupsByAgency=function(String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: String
*/
$Proxy263.prototype.getInitialFeeSchudulebyPK=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: Collection
*/
$Proxy263.prototype.getCapViewListByUser=function(String, String, String, QueryFormat){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: Collection
*/
$Proxy263.prototype.getCategoryBySubType=function(String, String, String, String, QueryFormat){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: Collection
*/
$Proxy263.prototype.getCapViewListByCondition=function(CapModel, QueryFormat){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryInfo: com.accela.paging.QueryInfo
*@param boolean: boolean
*@return: PageObject
*/
$Proxy263.prototype.getCapViewListByCondition=function(CapModel, QueryInfo, boolean){}

/**
*@param StatusHistoryModel: com.accela.aa.aamain.cap.StatusHistoryModel
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.updateAppStatus=function(StatusHistoryModel, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.updateAppStatus=function(CapModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.updateCapStatusGroupCode=function(CapModel, String){}

/**
*@param List: java.util.List
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapsByCapIDs=function(List, String){}

/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: Collection
*/
$Proxy263.prototype.getCapViewListByRefContactID=function(String, Long, String, QueryFormat){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapIDListbyPK=function(String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param double: double
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.updatePercentComplete=function(String, String, String, String, double, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.requestCreateCap=function(String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param Integer: java.lang.Integer
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: List
*/
$Proxy263.prototype.getCapListByDetailAddress=function(String, String, Integer, String, String, String, QueryFormat){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: Collection
*/
$Proxy263.prototype.getAppTypeByGroup=function(String, String, QueryFormat){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: List
*/
$Proxy263.prototype.getCapsByParcelNbr=function(String, String, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: void
*/
$Proxy263.prototype.removeCapDetail=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: boolean
*/
$Proxy263.prototype.checkIVRPublicUserRight=function(CapIDModel, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: AADataPage
*/
$Proxy263.prototype.getCapListByCapModel=function(CapModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.getCapWithAddressByPK=function(CapIDModel, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.updateAppClass=function(CapModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: Collection
*/
$Proxy263.prototype.getCapViewListByRefParcelID=function(String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: CapDetailModel
*/
$Proxy263.prototype.getCapDescByPK=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: String
*/
$Proxy263.prototype.getReceiptIdSeq=function(String, String, String, String, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: CapIDModel
*/
$Proxy263.prototype.getMostRecentDuplicatedSR=function(CapModel, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: CapModel
*/
$Proxy263.prototype.getCompleteCapByAltID=function(CapIDModel){}

/**
*@param String: java.lang.String
*@return: Collection
*/
$Proxy263.prototype.getCapStatusLabelValueBean=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: List
*/
$Proxy263.prototype.getCapListByParcelID=function(String, String, QueryFormat){}

/**
*@param Set: java.util.Set
*@param List: java.util.List
*@param Map: java.util.Map
*@return: Map
*/
$Proxy263.prototype.getCapListByParcelID=function(Set, List, Map){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: Collection
*/
$Proxy263.prototype.getCapViewListByDepartment=function(String, String, String, QueryFormat){}

/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@param String: java.lang.String
*@return: Collection
*/
$Proxy263.prototype.getCapViewListByRefAddressID=function(String, Long, String){}

/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@param String: java.lang.String
*@return: int
*/
$Proxy263.prototype.getCapViewCountByRefAddressID=function(String, Long, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: Collection
*/
$Proxy263.prototype.getCapTypeListByModule=function(String, String, QueryFormat){}

/**
*@param Collection: java.util.Collection
*@return: void
*/
$Proxy263.prototype.removeCapViewList=function(Collection){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: String
*/
$Proxy263.prototype.getReceiptScheme=function(String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param List: java.util.List
*@return: Map
*/
$Proxy263.prototype.batchGetCapsBasicInfoByParcel=function(String, List){}

/**
*@param int: int
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: int
*/
$Proxy263.prototype.updateStatus4DeleteCap=function(int, CapIDModel, String){}

/**
*@param String: java.lang.String
*@param Date: java.util.Date
*@param Date: java.util.Date
*@return: Collection
*/
$Proxy263.prototype.getSimpleCapList=function(String, Date, Date){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: List
*/
$Proxy263.prototype.getCapIDListByContition=function(CapModel){}

/**
*@param List: java.util.List
*@return: Map
*/
$Proxy263.prototype.getCapDetailsByCapIDs=function(List){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: AADataPage
*/
$Proxy263.prototype.getCapNeighbors=function(CapIDModel, QueryFormat){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapsByContact4Clerk=function(String, String, String, String, QueryFormat, String){}

/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@param String: java.lang.String
*@param boolean: boolean
*@param List: java.util.List
*@param boolean: boolean
*@param boolean: boolean
*@return: List
*/
$Proxy263.prototype.getCapListByCollectionId=function(String, Long, String, boolean, List, boolean, boolean){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: void
*/
$Proxy263.prototype.updateCapDetail4ASIGroup=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param ASIType: com.accela.aa.policy.policy.ASISecurityModel$ASIType
*@return: String
*/
$Proxy263.prototype.getCapASIGroupCodeByCAPID=function(CapIDModel, ASIType){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: int
*/
$Proxy263.prototype.updateAccessByACA=function(CapIDModel, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: Collection
*/
$Proxy263.prototype.getCapViewListByAddressUID=function(String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.updatePaymentStatus=function(CapIDModel, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@param int: int
*@param int: int
*@return: Collection
*/
$Proxy263.prototype.getCapByTypeForPageNumber=function(String, String, String, String, String, QueryFormat, String, int, int){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.createSeqNbrForAgency=function(String, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@param Long: java.lang.Long
*@param QueryInfo: com.accela.paging.QueryInfo
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: List
*/
$Proxy263.prototype.getCapListByEventCalendarItem=function(String, Long, Long, QueryInfo, QueryFormat){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param Date: java.util.Date
*@param Date: java.util.Date
*@return: List
*/
$Proxy263.prototype.getCapsByAppTypeDateRange=function(String, CapModel, Date, Date){}

/**
*@param List: java.util.List
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapsWithDetailByCapIDs=function(List, String){}

/**
*@param String: java.lang.String
*@param List: java.util.List
*@return: List
*/
$Proxy263.prototype.getCapIDsByParcelPKs=function(String, List){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapIDListByAcctID=function(String, String, String){}

/**
*@param String: java.lang.String
*@param List: java.util.List
*@return: List
*/
$Proxy263.prototype.getCapIDsByGisAddress=function(String, List){}

/**
*@param String: java.lang.String
*@param int: int
*@return: List
*/
$Proxy263.prototype.getAccessedCapTypes=function(String, int){}

/**
*@param String: java.lang.String
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: boolean
*/
$Proxy263.prototype.passValidationRecord=function(String, CapIDModel, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapIDListByCheckNbr=function(String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getSetCapModuleNameList=function(String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: int
*/
$Proxy263.prototype.updateCreatedAccessBy4ACA=function(CapIDModel, String, String, String){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@return: Collection
*/
$Proxy263.prototype.getCapsByLicenseNbr=function(String, CapModel, String){}

/**
*@param CapTemporaryDataModel: com.accela.orm.model.cap.CapTemporaryDataModel
*@return: int
*/
$Proxy263.prototype.deleteCapTemporaryData=function(CapTemporaryDataModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapIDListByReceiptNbr=function(String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: Collection
*/
$Proxy263.prototype.getCapViewListByParcelUID=function(String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: void
*/
$Proxy263.prototype.deleteCapWithoutRelatedData=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param CapTypeModel: com.accela.aa.aamain.cap.CapTypeModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param Date: java.util.Date
*@param Date: java.util.Date
*@return: List
*/
$Proxy263.prototype.getCapListByContactAddrValidateFlag=function(String, CapTypeModel, String, String, String, Date, Date){}

/**
*@param CapTypeModel: com.accela.aa.aamain.cap.CapTypeModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.updateCapDetail4ChangeASIGroup=function(CapTypeModel, String, String, String, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.createCapViewForMultiRelatedCap=function(CapModel, String){}

/**
*@param String: java.lang.String
*@param List: java.util.List
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getGisSimpleCapModelByCapIDs4ACAGIS=function(String, List, String){}

/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: int
*/
$Proxy263.prototype.getCapViewListSizeByRefStructEstablID=function(String, Long){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.updateCapModelWrapperForMultipleAPO=function(String, CapModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ResultModel
*/
$Proxy263.prototype.deleteCapWithPermitIn3rdDocReview=function(CapIDModel, String){}

/**
*@param StatusHistoryModel: com.accela.aa.aamain.cap.StatusHistoryModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.updateAppStatusAndPMScheduleAndMaintenance=function(StatusHistoryModel, String, String, CapModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.cloneGenericTemplate4SetRecord=function(CapModel, CapModel){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@param String: java.lang.String
*@param boolean: boolean
*@param List: java.util.List
*@param String: java.lang.String
*@param boolean: boolean
*@param List: java.util.List
*@param boolean: boolean
*@param String: java.lang.String
*@param String: java.lang.String
*@param List: java.util.List
*@param ExtCapSearchConditionModel: com.accela.aa.aamain.cap.ExtCapSearchConditionModel
*@param int: int
*@return: List
*/
$Proxy263.prototype.getMyCapsByConditionWithCapStyleForACA=function(String, CapModel, QueryFormat, String, String, boolean, List, String, boolean, List, boolean, String, String, List, ExtCapSearchConditionModel, int){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryInfo: com.accela.paging.QueryInfo
*@param String: java.lang.String
*@param List: java.util.List
*@return: int
*/
$Proxy263.prototype.getCapsByConditionWithCapStyleCount=function(CapModel, QueryInfo, String, List){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.updatePartialCapModelWrapperForMultipleAPO=function(String, CapModel, String){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.updateCapModelWrapperWithAddressType=function(String, CapModel, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryInfo: com.accela.paging.QueryInfo
*@return: List
*/
$Proxy263.prototype.getCapViewListByRefStructEstablID=function(String, String, String, QueryInfo){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param HashMap: java.util.HashMap
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param boolean: boolean
*@param boolean: boolean
*@return: CapModel
*/
$Proxy263.prototype.createCapModelFromFeeEstimate4ACA=function(String, CapModel, String, String, HashMap, CapModel, boolean, boolean){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@param String: java.lang.String
*@param boolean: boolean
*@param List: java.util.List
*@param String: java.lang.String
*@param boolean: boolean
*@param List: java.util.List
*@param boolean: boolean
*@param String: java.lang.String
*@param String: java.lang.String
*@return: SearchResultModel
*/
$Proxy263.prototype.getCapsByConditionWithCapStyleForACA=function(String, CapModel, QueryFormat, String, String, boolean, List, String, boolean, List, boolean, String, String){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@param String: java.lang.String
*@param boolean: boolean
*@param List: java.util.List
*@param String: java.lang.String
*@param boolean: boolean
*@param List: java.util.List
*@param boolean: boolean
*@param String: java.lang.String
*@param String: java.lang.String
*@param boolean: boolean
*@return: SearchResultModel
*/
$Proxy263.prototype.getCapsByConditionWithCapStyleForACA=function(String, CapModel, QueryFormat, String, String, boolean, List, String, boolean, List, boolean, String, String, boolean){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@param String: java.lang.String
*@param boolean: boolean
*@param List: java.util.List
*@param String: java.lang.String
*@param boolean: boolean
*@param List: java.util.List
*@param boolean: boolean
*@param String: java.lang.String
*@param String: java.lang.String
*@param List: java.util.List
*@param ExtCapSearchConditionModel: com.accela.aa.aamain.cap.ExtCapSearchConditionModel
*@return: SearchResultModel
*/
$Proxy263.prototype.getCapsByConditionWithCapStyleForACA=function(String, CapModel, QueryFormat, String, String, boolean, List, String, boolean, List, boolean, String, String, List, ExtCapSearchConditionModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param Collection: java.util.Collection
*@return: List
*/
$Proxy263.prototype.getCapsByLicenseProfessionalList=function(String, String, Collection){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.cloneCapAndServiceRelationship4SetRecord=function(CapIDModel, CapIDModel, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryInfo: com.accela.paging.QueryInfo
*@param String: java.lang.String
*@param List: java.util.List
*@return: PageObject
*/
$Proxy263.prototype.getCapsByCondition4PaymentProcessQQ=function(CapModel, QueryInfo, String, List){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapIDsByAppSpecificInfoField=function(String, String, String){}

/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapList4SnapshotByRefContactID=function(String, Long, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.updateAppClassWithoutStatusLimit=function(CapModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param Date: java.util.Date
*@param Date: java.util.Date
*@return: List
*/
$Proxy263.prototype.getCapsByAppSpecificInfoDateRange=function(String, String, String, Date, Date){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryInfo: com.accela.paging.QueryInfo
*@param String: java.lang.String
*@param List: java.util.List
*@return: PageObject
*/
$Proxy263.prototype.getCapsByConditionWithCapStyle=function(CapModel, QueryInfo, String, List){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@return: Collection
*/
$Proxy263.prototype.getCapsByConditionWithCapStyle=function(CapModel, QueryFormat, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@param List: java.util.List
*@return: Collection
*/
$Proxy263.prototype.getCapsByConditionWithCapStyle=function(CapModel, QueryFormat, String, List){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryInfo: com.accela.paging.QueryInfo
*@param String: java.lang.String
*@return: PageObject
*/
$Proxy263.prototype.getCapsByConditionWithCapStyle=function(CapModel, QueryInfo, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param List: java.util.List
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param boolean: boolean
*@return: List
*/
$Proxy263.prototype.getCapViewListByRefProfessionalIDAndType=function(String, String, String, List, QueryFormat, boolean){}

/**
*@return: TargetSource
*/
$Proxy263.prototype.getTargetSource=function(){}

/**
*@return: Class[]
*/
$Proxy263.prototype.getProxiedInterfaces=function(){}

/**
*@param Advisor: org.springframework.aop.Advisor
*@param Advisor: org.springframework.aop.Advisor
*@return: boolean
*/
$Proxy263.prototype.replaceAdvisor=function(Advisor, Advisor){}

/**
*@param boolean: boolean
*@return: void
*/
$Proxy263.prototype.setExposeProxy=function(boolean){}

/**
*@param Class: java.lang.Class
*@return: boolean
*/
$Proxy263.prototype.isInterfaceProxied=function(Class){}

/**
*@return: String
*/
$Proxy263.prototype.toProxyConfigString=function(){}

/**
*@param TargetSource: org.springframework.aop.TargetSource
*@return: void
*/
$Proxy263.prototype.setTargetSource=function(TargetSource){}

/**
*@return: boolean
*/
$Proxy263.prototype.isProxyTargetClass=function(){}

/**
*@param boolean: boolean
*@return: void
*/
$Proxy263.prototype.setPreFiltered=function(boolean){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: List
*/
$Proxy263.prototype.getCapParcelNumberList=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: CapModel
*/
$Proxy263.prototype.getCapWithDetailByPK=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.createCapForAW=function(String, String, CapModel, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param boolean: boolean
*@return: UserRolePrivilegeModel
*/
$Proxy263.prototype.getPolicyUserRole=function(String, String, String, boolean){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param StringArray: [Ljava.lang.String;
*@param boolean: boolean
*@param String: java.lang.String
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.getCapViewBySingle=function(CapIDModel, StringArray, boolean, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param StringArray: [Ljava.lang.String;
*@param boolean: boolean
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.getCapViewBySingle=function(CapIDModel, StringArray, boolean, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param StringArray: [Ljava.lang.String;
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.getCapViewBySingle=function(CapIDModel, StringArray, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param StringArray: [Ljava.lang.String;
*@return: CapModel
*/
$Proxy263.prototype.getCapViewBySingle=function(CapIDModel, StringArray){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: Collection
*/
$Proxy263.prototype.getStautsListByType=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: CapIDModel
*/
$Proxy263.prototype.getCapIDByIDValue=function(String, String, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param boolean: boolean
*@return: void
*/
$Proxy263.prototype.copyCapStatusHistory=function(CapModel, CapModel, boolean){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.editCapforClone=function(CapModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.createProdHistory4Add=function(CapModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: CapWorkDesModel
*/
$Proxy263.prototype.getCapWorkDesByPK=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param Collection: java.util.Collection
*@param CapContactModel: com.accela.aa.aamain.people.CapContactModel
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@param RefOwnerModel: com.accela.aa.aamain.owner.RefOwnerModel
*@param LicenseProfessionalModel: com.accela.aa.aamain.people.LicenseProfessionalModel
*@param CapParcelModel: com.accela.aa.aamain.parcel.CapParcelModel
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.createCapForDerm=function(String, CapModel, Collection, CapContactModel, AddressModel, RefOwnerModel, LicenseProfessionalModel, CapParcelModel, String){}

/**
*@param String: java.lang.String
*@param Collection: java.util.Collection
*@param String: java.lang.String
*@return: Collection
*/
$Proxy263.prototype.createCapForDerm=function(String, Collection, String){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param HashMap: java.util.HashMap
*@return: CapModel
*/
$Proxy263.prototype.createWrapperForModeling=function(String, CapModel, String, String, String, HashMap){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.updateCapModelWrapper=function(String, CapModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param boolean: boolean
*@return: CapModel
*/
$Proxy263.prototype.getCapViewBySingle4ACA=function(CapIDModel, String, boolean){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.getCapViewBySingle4ACA=function(CapIDModel, String){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param boolean: boolean
*@param String: java.lang.String
*@param HashMap: java.util.HashMap
*@return: CapModel
*/
$Proxy263.prototype.createCapModelWrapper=function(String, CapModel, String, boolean, String, HashMap){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param HashMap: java.util.HashMap
*@return: CapModel
*/
$Proxy263.prototype.createCapModelWrapper=function(String, CapModel, String, String, HashMap){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param double: double
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.updateTotalFees=function(String, String, String, String, double, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param double: double
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.updateTotalFees=function(CapIDModel, double, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: void
*/
$Proxy263.prototype.removeCapViewByPK=function(CapIDModel){}

/**
*@param CapDetailModel: com.accela.aa.aamain.cap.CapDetailModel
*@param BValuatnModel: com.accela.aa.finance.feeValuation.BValuatnModel
*@return: void
*/
$Proxy263.prototype.createAddtInfo=function(CapDetailModel, BValuatnModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param StringBuilder: java.lang.StringBuilder
*@param String: java.lang.String
*@return: CapIDModel
*/
$Proxy263.prototype.createCapForModeling=function(String, String, String, CapModel, StringBuilder, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: Collection
*/
$Proxy263.prototype.getCapIDBySetID=function(String, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.copyTaskSpecInfo=function(CapModel, CapModel){}

/**
*@param PeopleModel: com.accela.aa.aamain.people.PeopleModel
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapIDsByContact=function(PeopleModel, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param boolean: boolean
*@param String: java.lang.String
*@param Map: java.util.Map
*@return: void
*/
$Proxy263.prototype.copyInspection=function(CapModel, CapModel, String, boolean, String, Map){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.editCapViewByPK=function(CapModel, String){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param HashMap: java.util.HashMap
*@param boolean: boolean
*@param boolean: boolean
*@return: CapModel
*/
$Proxy263.prototype.createWrapperForPartialCap=function(String, CapModel, String, String, HashMap, boolean, boolean){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.removePartialCap=function(CapIDModel, String){}

/**
*@param Collection: java.util.Collection
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param boolean: boolean
*@param boolean: boolean
*@return: List
*/
$Proxy263.prototype.convertCapViewByCapID=function(Collection, QueryFormat, CapModel, boolean, boolean){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param HashMap: java.util.HashMap
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param boolean: boolean
*@param boolean: boolean
*@param boolean: boolean
*@return: CapModel
*/
$Proxy263.prototype.createCapModelFromFeeEstimate=function(String, CapModel, String, String, HashMap, CapModel, boolean, boolean, boolean){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param HashMap: java.util.HashMap
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param boolean: boolean
*@param boolean: boolean
*@return: CapModel
*/
$Proxy263.prototype.createCapModelFromFeeEstimate=function(String, CapModel, String, String, HashMap, CapModel, boolean, boolean){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param HashMap: java.util.HashMap
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param boolean: boolean
*@return: CapModel
*/
$Proxy263.prototype.createCapModelFromFeeEstimate=function(String, CapModel, String, String, HashMap, CapModel, boolean){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.copyCalcValuatn=function(CapModel, CapModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getNegativeCapBySet=function(String, String){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@param String: java.lang.String
*@param Date: java.util.Date
*@param Date: java.util.Date
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@param Collection: java.util.Collection
*@param Collection: java.util.Collection
*@param List: java.util.List
*@return: AADataPage
*/
$Proxy263.prototype.getCapListByCollectionForGIS=function(String, CapModel, AddressModel, String, Date, Date, QueryFormat, String, Collection, Collection, List){}

/**
*@param CapDetailModel: com.accela.aa.aamain.cap.CapDetailModel
*@return: void
*/
$Proxy263.prototype.updateCapDetailModel=function(CapDetailModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param double: double
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.updateTotalPayment=function(String, String, String, String, double, String){}

/**
*@param String: java.lang.String
*@param Map: java.util.Map
*@param List: java.util.List
*@param Map: java.util.Map
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.cloneRecords4ACA=function(String, Map, List, Map, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@return: long
*/
$Proxy263.prototype.createProductionHistory=function(CapModel, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.createProdHistory4Update=function(CapModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param boolean: boolean
*@param String: java.lang.String
*@param String: java.lang.String
*@param Date: java.util.Date
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.updateAppStatusByCapID=function(CapIDModel, boolean, String, String, Date, String){}

/**
*@param TaskItemModel: com.accela.aa.workflow.workflow.TaskItemModel
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapsByTaskItem=function(TaskItemModel, String){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param List: java.util.List
*@return: List
*/
$Proxy263.prototype.getMyCapList4ACA=function(String, CapModel, String, QueryFormat, List){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param boolean: boolean
*@return: void
*/
$Proxy263.prototype.updateCapAPOList=function(CapModel, String, String, boolean){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param Collection: java.util.Collection
*@param Collection: java.util.Collection
*@return: void
*/
$Proxy263.prototype.updateCapAPOList4Multiple=function(CapModel, String, String, Collection, Collection){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: Collection
*/
$Proxy263.prototype.getPaymentList=function(CapModel, QueryFormat){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.updatePartialCapModelWrapper=function(String, CapModel, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@return: String
*/
$Proxy263.prototype.getNextTempAltId=function(CapModel, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param boolean: boolean
*@param boolean: boolean
*@return: CapModel
*/
$Proxy263.prototype.createRegularCapModel4ACA=function(CapModel, String, String, boolean, boolean){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: String
*/
$Proxy263.prototype.getNextProjectNbr=function(String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param boolean: boolean
*@param boolean: boolean
*@param boolean: boolean
*@return: CapModel
*/
$Proxy263.prototype.getCapModelByPK=function(CapIDModel, boolean, boolean, boolean){}

/**
*@param String: java.lang.String
*@param Map: java.util.Map
*@param Map: java.util.Map
*@param Map: java.util.Map
*@param List: java.util.List
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: Map
*/
$Proxy263.prototype.getFeatureRecordsCount=function(String, Map, Map, Map, List, CapIDModel, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getAssociatedCapsByOnlineUser=function(String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.deletePartialCap=function(CapIDModel, String){}

/**
*@param List: java.util.List
*@param boolean: boolean
*@param boolean: boolean
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.createRegularCaps4ACA=function(List, boolean, boolean, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: CapModel
*/
$Proxy263.prototype.getCapViewByPK=function(CapIDModel){}

/**
*@param List: java.util.List
*@return: List
*/
$Proxy263.prototype.getCapViewByPK=function(List){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param boolean: boolean
*@return: CapModel
*/
$Proxy263.prototype.getCapViewByPK=function(CapIDModel, boolean){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param boolean: boolean
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: CapModel
*/
$Proxy263.prototype.getCapViewByPK=function(CapIDModel, boolean, CapModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getPositiveCapBySet=function(String, String){}

/**
*@param CapTypePKModel: com.accela.orm.model.cap.CapTypePKModel
*@return: Long
*/
$Proxy263.prototype.getCapCountByCapType=function(CapTypePKModel){}

/**
*@param CapTypePKModel: com.accela.orm.model.cap.CapTypePKModel
*@return: AuditModel
*/
$Proxy263.prototype.getLatestCapAuditByCapType=function(CapTypePKModel){}

/**
*@param List: java.util.List
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapsAndContactByCapIDs=function(List, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.removeExpiredPartialCap=function(String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.editCapApplClass=function(CapIDModel, String){}

/**
*@param String: java.lang.String
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.getCap4Renewal=function(String, CapIDModel, String){}

/**
*@param List: java.util.List
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getMissingRelatedRecordIDs=function(List, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryInfo: com.accela.paging.QueryInfo
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: PageObject
*/
$Proxy263.prototype.getRelatedRecordListByCapID=function(CapIDModel, CapModel, QueryInfo, QueryFormat){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: String
*/
$Proxy263.prototype.getStatusTypeByCap=function(CapModel){}

/**
*@param String: java.lang.String
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: CapIDModel
*/
$Proxy263.prototype.getParentCapID=function(String, CapIDModel, String, String, String){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param boolean: boolean
*@param boolean: boolean
*@return: void
*/
$Proxy263.prototype.createWOTaskByWOTemplate=function(String, CapModel, String, String, boolean, boolean){}

/**
*@param List: java.util.List
*@return: void
*/
$Proxy263.prototype.setCreateBy4Records=function(List){}

/**
*@param String: java.lang.String
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getChildCapByParentCap=function(String, CapIDModel, String, String, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param boolean: boolean
*@param String: java.lang.String
*@param Map: java.util.Map
*@param List: java.util.List
*@return: void
*/
$Proxy263.prototype.cloneOwner4SetRecord=function(CapModel, CapModel, boolean, String, Map, List){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param List: java.util.List
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.cloneAddress4SetRecord=function(CapModel, CapModel, List, String, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param List: java.util.List
*@param Map: java.util.Map
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.cloneAddress4SetRecord=function(CapModel, CapModel, List, Map, String, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.cloneLicense4SetRecord=function(CapModel, CapModel){}

/**
*@param List: java.util.List
*@param List: java.util.List
*@return: List
*/
$Proxy263.prototype.getExpandCapsByCapIDs4RestAPI=function(List, List){}

/**
*@param CapTemporaryDataModel: com.accela.orm.model.cap.CapTemporaryDataModel
*@return: CapTemporaryDataModel
*/
$Proxy263.prototype.addCapTemporaryData=function(CapTemporaryDataModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param List: java.util.List
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@param boolean: boolean
*@return: SearchResultModel
*/
$Proxy263.prototype.getCapListByCapModel4ACAGIS=function(CapModel, List, QueryFormat, String, boolean){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param boolean: boolean
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.setTemplateForCap=function(CapModel, boolean, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@param List: java.util.List
*@param ExtCapSearchConditionModel: com.accela.aa.aamain.cap.ExtCapSearchConditionModel
*@return: List
*/
$Proxy263.prototype.getCapsByConditions4APIs=function(CapModel, QueryFormat, String, List, ExtCapSearchConditionModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param boolean: boolean
*@param boolean: boolean
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.clonePreserverDate=function(CapModel, CapIDModel, boolean, boolean, String){}

/**
*@param String: java.lang.String
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.cloneCapToSet4SetRecord=function(String, CapIDModel, String, String){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.cloneAssetList=function(String, CapModel, CapIDModel, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param List: java.util.List
*@param Map: java.util.Map
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.cloneParcel4SetRecord=function(CapModel, CapModel, List, Map, String, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param List: java.util.List
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.cloneParcel4SetRecord=function(CapModel, CapModel, List, String, String){}

/**
*@param List: java.util.List
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryInfo: com.accela.paging.QueryInfo
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapsByCapIdsWithCapStyle=function(List, CapModel, QueryInfo, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param boolean: boolean
*@param boolean: boolean
*@return: void
*/
$Proxy263.prototype.setContactInformation2Cap=function(CapModel, boolean, boolean){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param Map: java.util.Map
*@param boolean: boolean
*@param boolean: boolean
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.updateCapDetail=function(CapModel, CapModel, Map, boolean, boolean, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: List
*/
$Proxy263.prototype.getChildRenewalCaps=function(CapIDModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@param List: java.util.List
*@param ExtCapSearchConditionModel: com.accela.aa.aamain.cap.ExtCapSearchConditionModel
*@return: List
*/
$Proxy263.prototype.getCapsByConditions=function(CapModel, QueryFormat, String, List, ExtCapSearchConditionModel){}

/**
*@param CapTemporaryDataModel: com.accela.orm.model.cap.CapTemporaryDataModel
*@return: CapTemporaryDataModel
*/
$Proxy263.prototype.getCapTemporaryData=function(CapTemporaryDataModel){}

/**
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param List: java.util.List
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getMyShareSimpleCaps4ACA=function(String, QueryFormat, List, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: boolean
*/
$Proxy263.prototype.isEnforceValidationRecord=function(CapIDModel, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: Collection
*/
$Proxy263.prototype.getParcelGisObjectByCap=function(CapIDModel, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param boolean: boolean
*@param boolean: boolean
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.cloneInspection4SetRecord=function(CapModel, CapModel, boolean, boolean, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param boolean: boolean
*@param boolean: boolean
*@return: void
*/
$Proxy263.prototype.cloneContact4SetRecord=function(CapModel, CapModel, boolean, boolean){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.updateMaintenancesByCapModel=function(CapModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: String
*/
$Proxy263.prototype.getCapStatusType=function(CapIDModel, String, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.cloneValuationCalc4SetRecord=function(CapModel, CapModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param boolean: boolean
*@param boolean: boolean
*@param ASIParameter: com.accela.aa.aamain.cap.ASIParameter
*@return: CapModel
*/
$Proxy263.prototype.getCapByPKOther=function(CapIDModel, boolean, boolean, ASIParameter){}

/**
*@param List: java.util.List
*@return: Map
*/
$Proxy263.prototype.getCapStatusByCapIDs=function(List){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@return: ProjectTreeNodeModel
*/
$Proxy263.prototype.getSectionalRelatedCapTree=function(CapIDModel, QueryFormat, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@param boolean: boolean
*@param List: java.util.List
*@return: ProjectTreeNodeModel
*/
$Proxy263.prototype.getSectionalRelatedCapTree=function(CapIDModel, QueryFormat, String, boolean, List){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param List: java.util.List
*@return: void
*/
$Proxy263.prototype.copyGISObject4SetRecord=function(CapModel, CapModel, String, List){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param Map: java.util.Map
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.updateCapForCloneSingle=function(CapModel, Map, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapByType=function(String, String, String, String, String, QueryFormat, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: boolean
*/
$Proxy263.prototype.isExistAltID=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@param boolean: boolean
*@return: CapModel
*/
$Proxy263.prototype.createCap=function(String, String, CapModel, String, boolean){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapIDList=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getCapIDList=function(String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: CapModel
*/
$Proxy263.prototype.getCapByAltID=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryInfo: com.accela.paging.QueryInfo
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: PageObject
*/
$Proxy263.prototype.getSetCapList=function(String, String, String, QueryInfo, QueryFormat){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param Collection: java.util.Collection
*@param Collection: java.util.Collection
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param ParcelModel: com.accela.aa.aamain.parcel.ParcelModel
*@param OwnerModel: com.accela.aa.aamain.owner.OwnerModel
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@param Collection: java.util.Collection
*@param Collection: java.util.Collection
*@param Collection: java.util.Collection
*@param Collection: java.util.Collection
*@param Date: java.util.Date
*@param Date: java.util.Date
*@param Date: java.util.Date
*@param boolean: boolean
*@param List: java.util.List
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@param Date: java.util.Date
*@param Date: java.util.Date
*@param List: java.util.List
*@param List: java.util.List
*@param Collection: java.util.Collection
*@param Date: java.util.Date
*@param Date: java.util.Date
*@return: AADataPage
*/
$Proxy263.prototype.getCaps4AW=function(String, CapModel, Collection, Collection, CapModel, ParcelModel, OwnerModel, AddressModel, Collection, Collection, Collection, Collection, Date, Date, Date, boolean, List, QueryFormat, String, Date, Date, List, List, Collection, Date, Date){}

/**
*@param String: java.lang.String
*@param Date: java.util.Date
*@param Date: java.util.Date
*@param StringArray: [Ljava.lang.String;
*@return: Collection
*/
$Proxy263.prototype.countCAPs4Day=function(String, Date, Date, StringArray){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.deleteCap=function(CapIDModel, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@return: void
*/
$Proxy263.prototype.editCap=function(CapModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: List
*/
$Proxy263.prototype.getNewCases=function(String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: boolean
*/
$Proxy263.prototype.existsAltID=function(String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: String
*/
$Proxy263.prototype.getCapStatus=function(CapIDModel){}

/**
*@param String: java.lang.String
*@return: Collection
*/
$Proxy263.prototype.getCapStatus=function(String){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param ParcelModel: com.accela.aa.aamain.parcel.ParcelModel
*@param OwnerModel: com.accela.aa.aamain.owner.OwnerModel
*@param AddressModel: com.accela.aa.aamain.address.AddressModel
*@param Collection: java.util.Collection
*@param Collection: java.util.Collection
*@param Collection: java.util.Collection
*@param Collection: java.util.Collection
*@param Date: java.util.Date
*@param Date: java.util.Date
*@param Date: java.util.Date
*@param boolean: boolean
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@return: AADataPage
*/
$Proxy263.prototype.getCaps=function(String, CapModel, CapModel, CapModel, ParcelModel, OwnerModel, AddressModel, Collection, Collection, Collection, Collection, Date, Date, Date, boolean, QueryFormat, String){}

/**
*@param Collection: java.util.Collection
*@param String: java.lang.String
*@param SysUserModel: com.accela.aa.aamain.people.SysUserModel
*@param String: java.lang.String
*@param Date: java.util.Date
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.closeCap=function(Collection, String, SysUserModel, String, Date, String){}

/**
*@param String: java.lang.String
*@param List: java.util.List
*@return: List
*/
$Proxy263.prototype.getCapsByPKs=function(String, List){}

/**
*@param String: java.lang.String
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param List: java.util.List
*@param ExtCapSearchConditionModel: com.accela.aa.aamain.cap.ExtCapSearchConditionModel
*@return: List
*/
$Proxy263.prototype.getMyCaps=function(String, CapModel, QueryFormat, List, ExtCapSearchConditionModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.assignCapByPK=function(CapIDModel, String, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.editCapByPK=function(CapModel, String){}

/**
*@param Collection: java.util.Collection
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.assignCap=function(Collection, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: void
*/
$Proxy263.prototype.removeCap=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: CapIDModel
*/
$Proxy263.prototype.getCapID=function(String, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: CapIDModel
*/
$Proxy263.prototype.getCapID=function(String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: CapIDModel
*/
$Proxy263.prototype.getCapID=function(String, String, String){}

/**
*@param String: java.lang.String
*@param long: long
*@param String: java.lang.String
*@return: CapIDModel
*/
$Proxy263.prototype.getCapID=function(String, long, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@param boolean: boolean
*@return: List
*/
$Proxy263.prototype.getCapList=function(CapIDModel, QueryFormat, String, boolean){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@return: AADataPage
*/
$Proxy263.prototype.getCapList=function(String, String, String, String, String, QueryFormat, String){}

/**
*@return: boolean
*/
$Proxy263.prototype.isPreFiltered=function(){}

/**
*@param int: int
*@param Advice: org.aopalliance.aop.Advice
*@return: void
*/
$Proxy263.prototype.addAdvice=function(int, Advice){}

/**
*@param Advice: org.aopalliance.aop.Advice
*@return: void
*/
$Proxy263.prototype.addAdvice=function(Advice){}

/**
*@param int: int
*@return: void
*/
$Proxy263.prototype.removeAdvisor=function(int){}

/**
*@param Advisor: org.springframework.aop.Advisor
*@return: boolean
*/
$Proxy263.prototype.removeAdvisor=function(Advisor){}

/**
*@param Advisor: org.springframework.aop.Advisor
*@return: void
*/
$Proxy263.prototype.addAdvisor=function(Advisor){}

/**
*@param int: int
*@param Advisor: org.springframework.aop.Advisor
*@return: void
*/
$Proxy263.prototype.addAdvisor=function(int, Advisor){}

/**
*@return: Advisor[]
*/
$Proxy263.prototype.getAdvisors=function(){}

/**
*@return: boolean
*/
$Proxy263.prototype.isExposeProxy=function(){}

/**
*@param Advice: org.aopalliance.aop.Advice
*@return: boolean
*/
$Proxy263.prototype.removeAdvice=function(Advice){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param ClassArray: [Ljava.lang.Class;
*@param ObjectArray: [Ljava.lang.Object;
*@return: int
*/
$Proxy263.prototype.getFeatureRecordCount=function(String, String, ClassArray, ObjectArray){}

/**
*@return: Class
*/
$Proxy263.prototype.getTargetClass=function(){}

/**
*@param CapDetailModel: com.accela.aa.aamain.cap.CapDetailModel
*@param String: java.lang.String
*@return: void
*/
$Proxy263.prototype.createCapDetail=function(CapDetailModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: CapDetailModel
*/
$Proxy263.prototype.getCapDetailByPK=function(CapIDModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.getCapIDAndCapTypeByPK=function(CapIDModel, String){}

/**
*@param CapDetailModel: com.accela.aa.aamain.cap.CapDetailModel
*@param String: java.lang.String
*@return: int
*/
$Proxy263.prototype.editCapDetail=function(CapDetailModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param Date: java.util.Date
*@return: int
*/
$Proxy263.prototype.editCapDetail=function(CapIDModel, String, String, String, Date){}

/**
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: Collection
*/
$Proxy263.prototype.getGroupCode=function(String, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param boolean: boolean
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.getCapByPK=function(CapIDModel, boolean, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: CapModel
*/
$Proxy263.prototype.getCapByPK=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: CapModel
*/
$Proxy263.prototype.getCapByPK=function(CapIDModel, String){}

/**
*@param Class: java.lang.Class
*@return: boolean
*/
$Proxy263.prototype.isProxyClass=function(Class){}

/**
*@param Object: java.lang.Object
*@return: InvocationHandler
*/
$Proxy263.prototype.getInvocationHandler=function(Object){}

/**
*@param ClassLoader: java.lang.ClassLoader
*@param ClassArray: [Ljava.lang.Class;
*@return: Class
*/
$Proxy263.prototype.getProxyClass=function(ClassLoader, ClassArray){}

/**
*@param ClassLoader: java.lang.ClassLoader
*@param ClassArray: [Ljava.lang.Class;
*@param InvocationHandler: java.lang.reflect.InvocationHandler
*@return: Object
*/
$Proxy263.prototype.newProxyInstance=function(ClassLoader, ClassArray, InvocationHandler){}

/**
*@param long: long
*@param int: int
*@return: void
*/
$Proxy263.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
$Proxy263.prototype.wait=function(long){}

/**
*@return: void
*/
$Proxy263.prototype.wait=function(){}

/**
*@return: Class
*/
$Proxy263.prototype.getClass=function(){}

/**
*@return: void
*/
$Proxy263.prototype.notify=function(){}

/**
*@return: void
*/
$Proxy263.prototype.notifyAll=function(){}

/**
* class MerchantAccountBusiness
*/
function MerchantAccountBusiness(){
}
/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: List
*/
MerchantAccountBusiness.prototype.getConvFeeFormula=function(String, Long){}

/**
*@param String: java.lang.String
*@return: List
*/
MerchantAccountBusiness.prototype.getMerchantAccountList=function(String){}

/**
*@param RefMerchantAccountModel: com.accela.orm.model.epayments.RefMerchantAccountModel
*@return: RefMerchantAccountModel
*/
MerchantAccountBusiness.prototype.createMerchantAccountModel=function(RefMerchantAccountModel){}

/**
*@param RefMerchantAccountModel: com.accela.orm.model.epayments.RefMerchantAccountModel
*@return: RefMerchantAccountModel
*/
MerchantAccountBusiness.prototype.updateMerchantAccountModel=function(RefMerchantAccountModel){}

/**
*@param CapTypeModel: com.accela.aa.aamain.cap.CapTypeModel
*@param boolean: boolean
*@return: RefMerchantAccountModel
*/
MerchantAccountBusiness.prototype.searchMerchantAccount=function(CapTypeModel, boolean){}

/**
*@param String: java.lang.String
*@param List: java.util.List
*@return: int
*/
MerchantAccountBusiness.prototype.batchRemoveMerchantAccount=function(String, List){}

/**
*@param RefMerchantAccountModel: com.accela.orm.model.epayments.RefMerchantAccountModel
*@return: List
*/
MerchantAccountBusiness.prototype.checkDuplicatedMerchantAcc=function(RefMerchantAccountModel){}

/**
*@param String: java.lang.String
*@param List: java.util.List
*@return: int
*/
MerchantAccountBusiness.prototype.deleteConvFeeFormula=function(String, List){}

/**
*@param String: java.lang.String
*@return: CapTypeModel
*/
MerchantAccountBusiness.prototype.getAssociateAgency=function(String){}

/**
*@param Long: java.lang.Long
*@return: RefMerchantAccountModel
*/
MerchantAccountBusiness.prototype.getMerchantAccountByID=function(Long){}

/**
*@param String: java.lang.String
*@return: RefMerchantAccountModel
*/
MerchantAccountBusiness.prototype.getAssociateAgencyMerchantAcc=function(String){}

/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: List
*/
MerchantAccountBusiness.prototype.getAssociatedRecordTypeList=function(String, Long){}

/**
*@param RefConvenienceFeeFormulaPKModel: com.accela.orm.model.epayments.RefConvenienceFeeFormulaPKModel
*@return: RefConvenienceFeeFormulaModel
*/
MerchantAccountBusiness.prototype.getConvFeeFormulaDetails=function(RefConvenienceFeeFormulaPKModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: RefMerchantAccountModel
*/
MerchantAccountBusiness.prototype.getMerchantAccountByName=function(String, String){}

/**
*@param RefConvenienceFeeFormulaModel: com.accela.orm.model.epayments.RefConvenienceFeeFormulaModel
*@return: int
*/
MerchantAccountBusiness.prototype.createConvFeeFormula=function(RefConvenienceFeeFormulaModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: RefMerchantAccountModel
*/
MerchantAccountBusiness.prototype.getMerchantAccountByCapID=function(CapIDModel){}

/**
*@param RefConvenienceFeeFormulaModel: com.accela.orm.model.epayments.RefConvenienceFeeFormulaModel
*@return: int
*/
MerchantAccountBusiness.prototype.updateConvFeeFormula=function(RefConvenienceFeeFormulaModel){}

/**
*@param RefMerchantAccountModel: com.accela.orm.model.epayments.RefMerchantAccountModel
*@param CapTypeModel: com.accela.aa.aamain.cap.CapTypeModel
*@return: List
*/
MerchantAccountBusiness.prototype.searchMerchantAccountList=function(RefMerchantAccountModel, CapTypeModel){}

/**
*@param String: java.lang.String
*@param List: java.util.List
*@return: int
*/
MerchantAccountBusiness.prototype.deleteAssociatedAppTypes=function(String, List){}

/**
*@param RefMerchantAccountPKModel: com.accela.orm.model.epayments.RefMerchantAccountPKModel
*@return: RefMerchantAccountModel
*/
MerchantAccountBusiness.prototype.getMerchantAccountByPK=function(RefMerchantAccountPKModel){}

/**
*@param RefMerchantAccountModel: com.accela.orm.model.epayments.RefMerchantAccountModel
*@param List: java.util.List
*@return: int
*/
MerchantAccountBusiness.prototype.assignAppTypesToMerchantAccount=function(RefMerchantAccountModel, List){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param boolean: boolean
*@return: RefMerchantAccountModel
*/
MerchantAccountBusiness.prototype.getMerchantAccountModelByAppType=function(String, String, String, String, String, String, boolean){}

/**
*@param RefMerchantAccountPKModel: com.accela.orm.model.epayments.RefMerchantAccountPKModel
*@return: RefMerchantAccountModel
*/
MerchantAccountBusiness.prototype.getMerchantAccountByPKWithFormula=function(RefMerchantAccountPKModel){}

/**
*@param long: long
*@param int: int
*@return: void
*/
MerchantAccountBusiness.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
MerchantAccountBusiness.prototype.wait=function(long){}

/**
*@return: void
*/
MerchantAccountBusiness.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
MerchantAccountBusiness.prototype.equals=function(Object){}

/**
*@return: String
*/
MerchantAccountBusiness.prototype.toString=function(){}

/**
*@return: int
*/
MerchantAccountBusiness.prototype.hashCode=function(){}

/**
*@return: Class
*/
MerchantAccountBusiness.prototype.getClass=function(){}

/**
*@return: void
*/
MerchantAccountBusiness.prototype.notify=function(){}

/**
*@return: void
*/
MerchantAccountBusiness.prototype.notifyAll=function(){}

/**
* class AdditionalInfoScript
*/
function AdditionalInfoScript(){
}
/**
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
AdditionalInfoScript.prototype.getAppStatusGroupByGroup=function(String, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
AdditionalInfoScript.prototype.getAppSpecificInfoGroupByCapID=function(CapIDModel, QueryFormat){}

/**
*@param AppStatusGroupModel: com.accela.aa.aamain.cap.AppStatusGroupModel
*@return: ScriptResult
*/
AdditionalInfoScript.prototype.editAppStatusGroup=function(AppStatusGroupModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AdditionalInfoScript.prototype.getAppStatusGroupByPK=function(String, String){}

/**
*@param AppStatusGroupModel: com.accela.aa.aamain.cap.AppStatusGroupModel
*@return: ScriptResult
*/
AdditionalInfoScript.prototype.createAppStatusGroup=function(AppStatusGroupModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AdditionalInfoScript.prototype.getCheckboxByPK=function(CapIDModel, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
AdditionalInfoScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
AdditionalInfoScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
AdditionalInfoScript.prototype.wait=function(long){}

/**
*@return: void
*/
AdditionalInfoScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
AdditionalInfoScript.prototype.equals=function(Object){}

/**
*@return: String
*/
AdditionalInfoScript.prototype.toString=function(){}

/**
*@return: int
*/
AdditionalInfoScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
AdditionalInfoScript.prototype.getClass=function(){}

/**
*@return: void
*/
AdditionalInfoScript.prototype.notify=function(){}

/**
*@return: void
*/
AdditionalInfoScript.prototype.notifyAll=function(){}

/**
* class ExpirationScript
*/
function ExpirationScript(){
}
/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
ExpirationScript.prototype.activeLicensesByCapID=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
ExpirationScript.prototype.isExpiredLicenses=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
ExpirationScript.prototype.sendApprovedNoticEmailToCitizenUser=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
ExpirationScript.prototype.sendDeniedNoticeEmailToCitizenUser=function(CapIDModel){}

/**
*@param B1ExpirationModel: com.accela.aa.license.expiration.B1ExpirationModel
*@return: ScriptResult
*/
ExpirationScript.prototype.editB1Expiration=function(B1ExpirationModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ExpirationScript.prototype.getLicensesByDate=function(String, String, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
ExpirationScript.prototype.getLicensesByStatus=function(String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
ExpirationScript.prototype.getLicensesByCapID=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
ExpirationScript.prototype.getLicensesByCapID=function(CapIDModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
ExpirationScript.prototype.sendNoAutoIssueLicenseEmail=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
ExpirationScript.prototype.isAboutToExpireStatus=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
ExpirationScript.prototype.sendAutoIssueLicenseEmail=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
ExpirationScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ExpirationScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ExpirationScript.prototype.wait=function(long){}

/**
*@return: void
*/
ExpirationScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ExpirationScript.prototype.equals=function(Object){}

/**
*@return: String
*/
ExpirationScript.prototype.toString=function(){}

/**
*@return: int
*/
ExpirationScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
ExpirationScript.prototype.getClass=function(){}

/**
*@return: void
*/
ExpirationScript.prototype.notify=function(){}

/**
*@return: void
*/
ExpirationScript.prototype.notifyAll=function(){}

/**
* class LicenseScript
*/
function LicenseScript(){
}
/**
*@param CapScriptModel: com.accela.aa.emse.dom.CapScriptModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseScript.prototype.isApproveTradeName=function(CapScriptModel, String, String, String){}

/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: ScriptResult
*/
LicenseScript.prototype.getRefLicenseProfBySeqNbr=function(String, Long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
LicenseScript.prototype.getLicenseProf=function(CapIDModel){}

/**
*@param String: java.lang.String
*@return: PublicUserModel
*/
LicenseScript.prototype.getPublicUserByUserName=function(String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseScript.prototype.getProviderBySeq=function(String){}

/**
*@return: LicenseScriptModel
*/
LicenseScript.prototype.createLicenseScriptModel=function(){}

/**
*@param LicenseScriptModel: com.accela.aa.emse.dom.LicenseScriptModel
*@return: ScriptResult
*/
LicenseScript.prototype.createRefLicenseProf=function(LicenseScriptModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseScript.prototype.getRefLicProfByOnlineUser=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseScript.prototype.getRefLicensesProfByLicNbr=function(String, String){}

/**
*@param LicenseScriptModel: com.accela.aa.emse.dom.LicenseScriptModel
*@return: ScriptResult
*/
LicenseScript.prototype.editRefLicenseProf=function(LicenseScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseScript.prototype.getRefLicensesProfByName=function(String, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param LicenseScriptModel: com.accela.aa.emse.dom.LicenseScriptModel
*@return: ScriptResult
*/
LicenseScript.prototype.associateLpWithCap=function(CapIDModel, LicenseScriptModel){}

/**
*@param PublicUserModel: com.accela.v360.publicuser.PublicUserModel
*@param LicenseScriptModel: com.accela.aa.emse.dom.LicenseScriptModel
*@return: ScriptResult
*/
LicenseScript.prototype.associateLpWithPublicUser=function(PublicUserModel, LicenseScriptModel){}

/**
*@param PublicUserModel: com.accela.v360.publicuser.PublicUserModel
*@param LicenseScriptModel: com.accela.aa.emse.dom.LicenseScriptModel
*@return: ScriptResult
*/
LicenseScript.prototype.notifyPublicUserByEmail=function(PublicUserModel, LicenseScriptModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseScript.prototype.getRefLicenseProfByProviderNo=function(String){}

/**
*@param CapScriptModel: com.accela.aa.emse.dom.CapScriptModel
*@param PublicUserModel: com.accela.v360.publicuser.PublicUserModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseScript.prototype.createApprovalTradeNameLicense=function(CapScriptModel, PublicUserModel, String, String, String, String, String){}

/**
*@param CapScriptModel: com.accela.aa.emse.dom.CapScriptModel
*@param PublicUserModel: com.accela.v360.publicuser.PublicUserModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseScript.prototype.createApprovalTradeNameLicense=function(CapScriptModel, PublicUserModel, String, String, String, String, String, String, String, String, String){}

/**
*@param CapScriptModel: com.accela.aa.emse.dom.CapScriptModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseScript.prototype.createAssociatedLicenseProfessional=function(CapScriptModel, String, String, String, String, String, String, String, String, String){}

/**
*@param LicenseScriptModel: com.accela.aa.emse.dom.LicenseScriptModel
*@return: ScriptResult
*/
LicenseScript.prototype.getCapIDsByLicenseModel=function(LicenseScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseScript.prototype.getTradeNameList=function(String, String){}

/**
*@param CapScriptModel: com.accela.aa.emse.dom.CapScriptModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseScript.prototype.checkTradeNamesGroupByGroup=function(CapScriptModel, String, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseScript.prototype.associateContactWithPublicUser=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseScript.prototype.updateLicenseStatusByTypeAndNbr=function(String, String, String){}

/**
*@return: PeopleAttributeScriptModel
*/
LicenseScript.prototype.createPeopleAttributeScriptModel=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
LicenseScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
LicenseScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
LicenseScript.prototype.wait=function(long){}

/**
*@return: void
*/
LicenseScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
LicenseScript.prototype.equals=function(Object){}

/**
*@return: String
*/
LicenseScript.prototype.toString=function(){}

/**
*@return: int
*/
LicenseScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
LicenseScript.prototype.getClass=function(){}

/**
*@return: void
*/
LicenseScript.prototype.notify=function(){}

/**
*@return: void
*/
LicenseScript.prototype.notifyAll=function(){}

/**
* class OwnerScript
*/
function OwnerScript(){
}
/**
*@param ParcelScriptModel: com.accela.aa.emse.dom.ParcelScriptModel
*@return: ScriptResult
*/
OwnerScript.prototype.getOwnersByParcel=function(ParcelScriptModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
OwnerScript.prototype.getParcelOwnersByCap=function(CapIDModel){}

/**
*@param CapOwnerScriptModel: com.accela.aa.emse.dom.CapOwnerScriptModel
*@return: ScriptResult
*/
OwnerScript.prototype.removeCapOwnerModel=function(CapOwnerScriptModel){}

/**
*@return: ScriptResult
*/
OwnerScript.prototype.getCapOwnerScriptModel=function(){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
OwnerScript.prototype.getOwnerByCapId=function(CapIDModel){}

/**
*@param CapOwnerScriptModel: com.accela.aa.emse.dom.CapOwnerScriptModel
*@param CapOwnerScriptModel: com.accela.aa.emse.dom.CapOwnerScriptModel
*@return: ScriptResult
*/
OwnerScript.prototype.copyCapOwnerModel=function(CapOwnerScriptModel, CapOwnerScriptModel){}

/**
*@param CapOwnerScriptModel: com.accela.aa.emse.dom.CapOwnerScriptModel
*@return: ScriptResult
*/
OwnerScript.prototype.createCapOwnerWithAPOAttribute=function(CapOwnerScriptModel){}

/**
*@param CapOwnerScriptModel: com.accela.aa.emse.dom.CapOwnerScriptModel
*@return: ScriptResult
*/
OwnerScript.prototype.updateDailyOwnerWithAPOAttribute=function(CapOwnerScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
OwnerScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
OwnerScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
OwnerScript.prototype.wait=function(long){}

/**
*@return: void
*/
OwnerScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
OwnerScript.prototype.equals=function(Object){}

/**
*@return: String
*/
OwnerScript.prototype.toString=function(){}

/**
*@return: int
*/
OwnerScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
OwnerScript.prototype.getClass=function(){}

/**
*@return: void
*/
OwnerScript.prototype.notify=function(){}

/**
*@return: void
*/
OwnerScript.prototype.notifyAll=function(){}

/**
* class BizDomainScript
*/
function BizDomainScript(){
}
/**
*@param BizDomainModel: com.accela.aa.aamain.systemConfig.BizDomainModel
*@return: ScriptResult
*/
BizDomainScript.prototype.createBizDomain=function(BizDomainModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
BizDomainScript.prototype.createBizDomain=function(String, String, String, String){}

/**
*@param BizDomainModel: com.accela.aa.aamain.systemConfig.BizDomainModel
*@return: ScriptResult
*/
BizDomainScript.prototype.editBizDomain=function(BizDomainModel){}

/**
*@param BizDomainModel: com.accela.aa.aamain.systemConfig.BizDomainModel
*@param String: java.lang.String
*@return: ScriptResult
*/
BizDomainScript.prototype.editBizDomain=function(BizDomainModel, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
BizDomainScript.prototype.getBizDomainByValue=function(String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
BizDomainScript.prototype.getBizDomainByValue=function(String, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
BizDomainScript.prototype.getBizDomain=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
BizDomainScript.prototype.getBizDomainByValueWithSD=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
BizDomainScript.prototype.getBizDomainByDescription=function(String, String, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
BizDomainScript.prototype.getBizDomainsBySuperAgency=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
BizDomainScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
BizDomainScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
BizDomainScript.prototype.wait=function(long){}

/**
*@return: void
*/
BizDomainScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
BizDomainScript.prototype.equals=function(Object){}

/**
*@return: String
*/
BizDomainScript.prototype.toString=function(){}

/**
*@return: int
*/
BizDomainScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
BizDomainScript.prototype.getClass=function(){}

/**
*@return: void
*/
BizDomainScript.prototype.notify=function(){}

/**
*@return: void
*/
BizDomainScript.prototype.notifyAll=function(){}

/**
* class UtilScript
*/
function UtilScript(){
}
/**
*@param StringArray: [Ljava.lang.String;
*@return: void
*/
UtilScript.prototype.main=function(StringArray){}

/**
*@param double: double
*@param double: double
*@return: double
*/
UtilScript.prototype.add=function(double, double){}

/**
*@param double: double
*@param double: double
*@return: int
*/
UtilScript.prototype.compare=function(double, double){}

/**
*@return: AVLogger
*/
UtilScript.prototype.getLogger=function(){}

/**
*@param String: java.lang.String
*@return: Double
*/
UtilScript.prototype.parseDouble=function(String){}

/**
*@param String: java.lang.String
*@return: Integer
*/
UtilScript.prototype.parseInt=function(String){}

/**
*@param String: java.lang.String
*@return: Long
*/
UtilScript.prototype.parseLong=function(String){}

/**
*@param double: double
*@param int: int
*@return: double
*/
UtilScript.prototype.round=function(double, int){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param ObjectArray: [Ljava.lang.Object;
*@return: ScriptResult
*/
UtilScript.prototype.update=function(String, String, ObjectArray){}

/**
*@return: Calendar
*/
UtilScript.prototype.getCalendar=function(){}

/**
*@param Double: java.lang.Double
*@return: String
*/
UtilScript.prototype.numberFormat=function(Double){}

/**
*@param double: double
*@param double: double
*@return: double
*/
UtilScript.prototype.subtract=function(double, double){}

/**
*@param double: double
*@param double: double
*@return: double
*/
UtilScript.prototype.divide=function(double, double){}

/**
*@param double: double
*@param double: double
*@param int: int
*@return: double
*/
UtilScript.prototype.divide=function(double, double, int){}

/**
*@param double: double
*@param double: double
*@return: double
*/
UtilScript.prototype.multiply=function(double, double){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param ObjectArray: [Ljava.lang.Object;
*@return: ScriptResult
*/
UtilScript.prototype.select=function(String, String, ObjectArray){}

/**
*@param String: java.lang.String
*@return: void
*/
UtilScript.prototype.deleteFile=function(String){}

/**
*@return: Date
*/
UtilScript.prototype.now=function(){}

/**
*@param Date: java.util.Date
*@param String: java.lang.String
*@return: String
*/
UtilScript.prototype.formatDate=function(Date, String){}

/**
*@param String: java.lang.String
*@param Hashtable: java.util.Hashtable
*@return: String
*/
UtilScript.prototype.getCustomContentByType=function(String, Hashtable){}

/**
*@param Object: java.lang.Object
*@param String: java.lang.String
*@return: File
*/
UtilScript.prototype.writeToFileWithoutSecurity=function(Object, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
UtilScript.prototype.httpPostToSoapWebService=function(String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param Hashtable: java.util.Hashtable
*@return: String
*/
UtilScript.prototype.getCustomDescAsSubjectByType=function(String, Hashtable){}

/**
*@return: QueryFormat
*/
UtilScript.prototype.newQueryFormat=function(){}

/**
*@param Object: java.lang.Object
*@param String: java.lang.String
*@return: File
*/
UtilScript.prototype.writeToFileWithSecurity=function(Object, String){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
UtilScript.prototype.instanceOfString=function(Object){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: String
*/
UtilScript.prototype.getValueFromXML=function(String, String){}

/**
*@param Date: java.util.Date
*@param Date: java.util.Date
*@param String: java.lang.String
*@return: ScriptResult
*/
UtilScript.prototype.getDeadlineDay=function(Date, Date, String){}

/**
*@return: StringBuffer
*/
UtilScript.prototype.newStringBuffer=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param List: java.util.List
*@return: ScriptResult
*/
UtilScript.prototype.batchUpdate=function(String, String, List){}

/**
*@param Object: java.lang.Object
*@return: ScriptResult
*/
UtilScript.prototype.deepClone=function(Object){}

/**
*@param String: java.lang.String
*@return: Date
*/
UtilScript.prototype.parseDate=function(String){}

/**
*@param Object: java.lang.Object
*@return: ScriptResult
*/
UtilScript.prototype.toObjectArray=function(Object){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
UtilScript.prototype.httpPost=function(String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
UtilScript.prototype.httpPost=function(String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
UtilScript.prototype.httpPost=function(String, String){}

/**
*@return: HashMap
*/
UtilScript.prototype.newHashMap=function(){}

/**
*@return: Hashtable
*/
UtilScript.prototype.newHashtable=function(){}

/**
*@return: ArrayList
*/
UtilScript.prototype.newArrayList=function(){}

/**
*@param Date: java.util.Date
*@param String: java.lang.String
*@param int: int
*@return: Date
*/
UtilScript.prototype.dateDiff=function(Date, String, int){}

/**
*@param Object: java.lang.Object
*@param String: java.lang.String
*@return: File
*/
UtilScript.prototype.writeToFile=function(Object, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param File: java.io.File
*@return: ScriptResult
*/
UtilScript.prototype.ftpUpload=function(String, String, String, String, String, File){}

/**
*@param Double: java.lang.Double
*@return: Double
*/
UtilScript.prototype.doubleFormat=function(Double){}

/**
*@param String: java.lang.String
*@param InspectionModel: com.accela.aa.inspection.inspection.InspectionModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param Hashtable: java.util.Hashtable
*@return: String
*/
UtilScript.prototype.getCustomContentByType4InspScheAfter=function(String, InspectionModel, CapIDModel, Hashtable){}

/**
*@param double: double
*@return: String
*/
UtilScript.prototype.formatFee=function(double){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
UtilScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
UtilScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
UtilScript.prototype.wait=function(long){}

/**
*@return: void
*/
UtilScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
UtilScript.prototype.equals=function(Object){}

/**
*@return: String
*/
UtilScript.prototype.toString=function(){}

/**
*@return: int
*/
UtilScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
UtilScript.prototype.getClass=function(){}

/**
*@return: void
*/
UtilScript.prototype.notify=function(){}

/**
*@return: void
*/
UtilScript.prototype.notifyAll=function(){}

/**
* class LicenseProfessionalScript
*/
function LicenseProfessionalScript(){
}
/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.removeLicensedProfessional=function(LicenseProfessionalScriptModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getLicenseProf=function(CapIDModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.createLicensedProfessional=function(LicenseProfessionalScriptModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getRefLicProfByOnlineUser=function(String){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.editLicensedProfessional=function(LicenseProfessionalScriptModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.createLicensedProfessionals=function(CapIDModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getLicensedProfessionalsByPK=function(LicenseProfessionalScriptModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getInfoTableGroupCode=function(LicenseProfessionalScriptModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.createInfoTable=function(LicenseProfessionalScriptModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.removeInfoTableGroupCode=function(LicenseProfessionalScriptModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.removeRefInfoTableGroupCode=function(LicenseProfessionalScriptModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.createRefInfoTable=function(LicenseProfessionalScriptModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getRefInfoTableGroupCode=function(LicenseProfessionalScriptModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.updateRefInfoTableValues=function(LicenseProfessionalScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getLicenseByUserTypeAndLicenseType=function(String, String){}

/**
*@param LicenseModel: com.accela.aa.aamain.people.LicenseModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.createLicenseeAndRecordRelationship=function(LicenseModel, CapIDModel, String){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.copyInfoTable=function(LicenseProfessionalScriptModel){}

/**
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getContactAttributeScriptModel=function(){}

/**
*@param LicenseProfessionalModel: com.accela.aa.aamain.people.LicenseProfessionalModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getLicenseProfessionScriptModel=function(LicenseProfessionalModel){}

/**
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getLicenseProfessionScriptModel=function(){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getLicensedProfessionalsByCapID=function(CapIDModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.copyLicenseProfessionalScriptModel=function(LicenseProfessionalScriptModel, LicenseProfessionalScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
LicenseProfessionalScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
LicenseProfessionalScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
LicenseProfessionalScript.prototype.wait=function(long){}

/**
*@return: void
*/
LicenseProfessionalScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
LicenseProfessionalScript.prototype.equals=function(Object){}

/**
*@return: String
*/
LicenseProfessionalScript.prototype.toString=function(){}

/**
*@return: int
*/
LicenseProfessionalScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
LicenseProfessionalScript.prototype.getClass=function(){}

/**
*@return: void
*/
LicenseProfessionalScript.prototype.notify=function(){}

/**
*@return: void
*/
LicenseProfessionalScript.prototype.notifyAll=function(){}

/**
* class LicenseProfessionalScript
*/
function LicenseProfessionalScript(){
}
/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.removeLicensedProfessional=function(LicenseProfessionalScriptModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getLicenseProf=function(CapIDModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.createLicensedProfessional=function(LicenseProfessionalScriptModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getRefLicProfByOnlineUser=function(String){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.editLicensedProfessional=function(LicenseProfessionalScriptModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.createLicensedProfessionals=function(CapIDModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getLicensedProfessionalsByPK=function(LicenseProfessionalScriptModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getInfoTableGroupCode=function(LicenseProfessionalScriptModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.createInfoTable=function(LicenseProfessionalScriptModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.removeInfoTableGroupCode=function(LicenseProfessionalScriptModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.removeRefInfoTableGroupCode=function(LicenseProfessionalScriptModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.createRefInfoTable=function(LicenseProfessionalScriptModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getRefInfoTableGroupCode=function(LicenseProfessionalScriptModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.updateRefInfoTableValues=function(LicenseProfessionalScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getLicenseByUserTypeAndLicenseType=function(String, String){}

/**
*@param LicenseModel: com.accela.aa.aamain.people.LicenseModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.createLicenseeAndRecordRelationship=function(LicenseModel, CapIDModel, String){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.copyInfoTable=function(LicenseProfessionalScriptModel){}

/**
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getContactAttributeScriptModel=function(){}

/**
*@param LicenseProfessionalModel: com.accela.aa.aamain.people.LicenseProfessionalModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getLicenseProfessionScriptModel=function(LicenseProfessionalModel){}

/**
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getLicenseProfessionScriptModel=function(){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.getLicensedProfessionalsByCapID=function(CapIDModel){}

/**
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@param LicenseProfessionalScriptModel: com.accela.aa.emse.dom.LicenseProfessionalScriptModel
*@return: ScriptResult
*/
LicenseProfessionalScript.prototype.copyLicenseProfessionalScriptModel=function(LicenseProfessionalScriptModel, LicenseProfessionalScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
LicenseProfessionalScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
LicenseProfessionalScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
LicenseProfessionalScript.prototype.wait=function(long){}

/**
*@return: void
*/
LicenseProfessionalScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
LicenseProfessionalScript.prototype.equals=function(Object){}

/**
*@return: String
*/
LicenseProfessionalScript.prototype.toString=function(){}

/**
*@return: int
*/
LicenseProfessionalScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
LicenseProfessionalScript.prototype.getClass=function(){}

/**
*@return: void
*/
LicenseProfessionalScript.prototype.notify=function(){}

/**
*@return: void
*/
LicenseProfessionalScript.prototype.notifyAll=function(){}

/**
* class BStructureScript
*/
function BStructureScript(){
}
/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
BStructureScript.prototype.getAttributes=function(CapIDModel, long, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
BStructureScript.prototype.getAttributes=function(CapIDModel, StructureModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@return: ScriptResult
*/
BStructureScript.prototype.getAttribute=function(CapIDModel, long, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param AttributeModel: com.accela.aa.structure.structure.AttributeModel
*@return: ScriptResult
*/
BStructureScript.prototype.addAttribute=function(CapIDModel, StructureModel, AttributeModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
BStructureScript.prototype.addAttribute=function(CapIDModel, long, long, String, String, String, String, String, String, String, String, String, String){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
BStructureScript.prototype.cloneStructure=function(CapModel, CapIDModel){}

/**
*@param String: java.lang.String
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
BStructureScript.prototype.updateAttribute=function(String, CapIDModel, long, long, String, String, String, String, String, String, String, String, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param AttributeModel: com.accela.aa.structure.structure.AttributeModel
*@return: ScriptResult
*/
BStructureScript.prototype.updateAttribute=function(CapIDModel, StructureModel, AttributeModel){}

/**
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
BStructureScript.prototype.getCapIDByComponentGroup=function(String, QueryFormat){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
BStructureScript.prototype.getCapIDByComponentType=function(String, String, QueryFormat){}

/**
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
BStructureScript.prototype.getCapIDByStructure=function(String, QueryFormat){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
BStructureScript.prototype.getCapIDByStructure=function(StructureModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@return: ScriptResult
*/
BStructureScript.prototype.removeStructure=function(CapIDModel, StructureModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
BStructureScript.prototype.removeStructure=function(CapIDModel, long){}

/**
*@param String: java.lang.String
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
BStructureScript.prototype.removeStrucutureRelation=function(String, CapIDModel, long, long, String){}

/**
*@param String: java.lang.String
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param String: java.lang.String
*@return: ScriptResult
*/
BStructureScript.prototype.removeStrucutureRelation=function(String, CapIDModel, StructureModel, StructureModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@return: ScriptResult
*/
BStructureScript.prototype.getParentStructures=function(CapIDModel, StructureModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
BStructureScript.prototype.getParentStructures=function(CapIDModel, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
BStructureScript.prototype.getChildStructures=function(CapIDModel, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@return: ScriptResult
*/
BStructureScript.prototype.getChildStructures=function(CapIDModel, StructureModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@return: ScriptResult
*/
BStructureScript.prototype.getStructure=function(CapIDModel, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
BStructureScript.prototype.getStructures=function(CapIDModel, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
BStructureScript.prototype.addStructure=function(CapIDModel, long, String, String, String, String, ScriptDateTime){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@return: ScriptResult
*/
BStructureScript.prototype.addStructure=function(CapIDModel, StructureModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param AttributeModel: com.accela.aa.structure.structure.AttributeModel
*@return: ScriptResult
*/
BStructureScript.prototype.deleteAttribute=function(CapIDModel, StructureModel, AttributeModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@return: ScriptResult
*/
BStructureScript.prototype.deleteAttribute=function(CapIDModel, long, long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
BStructureScript.prototype.addStrucutureRelation=function(CapIDModel, long, long, String){}

/**
*@param String: java.lang.String
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param String: java.lang.String
*@return: ScriptResult
*/
BStructureScript.prototype.addStrucutureRelation=function(String, CapIDModel, StructureModel, StructureModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@return: ScriptResult
*/
BStructureScript.prototype.updateStructure=function(CapIDModel, StructureModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@return: ScriptResult
*/
BStructureScript.prototype.updateStructure=function(CapIDModel, long, String, String, String, String, ScriptDateTime){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
BStructureScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
BStructureScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
BStructureScript.prototype.wait=function(long){}

/**
*@return: void
*/
BStructureScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
BStructureScript.prototype.equals=function(Object){}

/**
*@return: String
*/
BStructureScript.prototype.toString=function(){}

/**
*@return: int
*/
BStructureScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
BStructureScript.prototype.getClass=function(){}

/**
*@return: void
*/
BStructureScript.prototype.notify=function(){}

/**
*@return: void
*/
BStructureScript.prototype.notifyAll=function(){}

/**
* class GStructureScript
*/
function GStructureScript(){
}
/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.getAttributes=function(long, String, String, String, String){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.getAttributes=function(StructureModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param long: long
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.getAttribute=function(CapIDModel, long, long, String){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param AttributeModel: com.accela.aa.structure.structure.AttributeModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.addAttribute=function(StructureModel, AttributeModel, String){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.addAttribute=function(long, String, String, long, String, String, String, String, String, String, String, String, String){}

/**
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.deleteStructure=function(long, String){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.deleteStructure=function(StructureModel, String){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.getStrucutureLocation=function(StructureModel, String){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.getStrucutureLocation=function(long, String, String, String){}

/**
*@param long: long
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.addStrucutureOwner=function(long, long, String){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param StructureOwnerModel: com.accela.aa.structure.structure.StructureOwnerModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.addStrucutureOwner=function(StructureModel, StructureOwnerModel, String){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param StructureOwnerModel: com.accela.aa.structure.structure.StructureOwnerModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.deleteStrucutureOwner=function(StructureModel, StructureOwnerModel, String){}

/**
*@param long: long
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.deleteStrucutureOwner=function(long, long, String){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.addStrucutureLocation=function(long, String, String, String){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param StructureLocationModel: com.accela.aa.structure.structure.StructureLocationModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.addStrucutureLocation=function(StructureModel, StructureLocationModel, String){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.deleteStrucutureLocation=function(long, String, String, String, String){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param StructureLocationModel: com.accela.aa.structure.structure.StructureLocationModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.deleteStrucutureLocation=function(StructureModel, StructureLocationModel, String){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.getStrucutureOwners=function(StructureModel, String){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.getStrucutureOwners=function(long, String, String, String){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.deleteStrucutureRelation=function(StructureModel, StructureModel, String){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.updateAttribute=function(long, String, String, long, String, String, String, String, String, String, String, String, String){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param AttributeModel: com.accela.aa.structure.structure.AttributeModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.updateAttribute=function(StructureModel, AttributeModel, String){}

/**
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.removeStrucutureRelation=function(long, long, String, String){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.getParentStructures=function(StructureModel, String){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.getParentStructures=function(long, String, String, String){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.getChildStructures=function(long, String, String, String){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.getChildStructures=function(StructureModel, String){}

/**
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.getStructure=function(long, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.getStructures=function(String){}

/**
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.getStructures=function(QueryFormat, String){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.addStructure=function(long, String, String, String, String, ScriptDateTime, String){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.addStructure=function(long, String, String, String, String, String){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.addStructure=function(StructureModel, String){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param Date: java.util.Date
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.addStructure=function(long, String, String, String, String, Date, String){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param AttributeModel: com.accela.aa.structure.structure.AttributeModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.deleteAttribute=function(StructureModel, AttributeModel, String){}

/**
*@param long: long
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.deleteAttribute=function(long, long, String){}

/**
*@param long: long
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.addStrucutureRelation=function(long, long, String, String){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.addStrucutureRelation=function(StructureModel, StructureModel, String){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param ScriptDateTime: com.accela.aa.emse.util.ScriptDateTime
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.updateStructure=function(long, String, String, String, String, ScriptDateTime, String){}

/**
*@param StructureModel: com.accela.aa.structure.structure.StructureModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.updateStructure=function(StructureModel, String){}

/**
*@param long: long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GStructureScript.prototype.updateStructure=function(long, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
GStructureScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
GStructureScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
GStructureScript.prototype.wait=function(long){}

/**
*@return: void
*/
GStructureScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
GStructureScript.prototype.equals=function(Object){}

/**
*@return: String
*/
GStructureScript.prototype.toString=function(){}

/**
*@return: int
*/
GStructureScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
GStructureScript.prototype.getClass=function(){}

/**
*@return: void
*/
GStructureScript.prototype.notify=function(){}

/**
*@return: void
*/
GStructureScript.prototype.notifyAll=function(){}

/**
* class TrustAccountScript
*/
function TrustAccountScript(){
}
/**
*@return: TrustAccountScriptModel
*/
TrustAccountScript.prototype.createTrustAccountScriptModel=function(){}

/**
*@param TrustAccountPeopleModel: com.accela.aa.finance.trustAccount.TrustAccountPeopleModel
*@return: ScriptResult
*/
TrustAccountScript.prototype.createTrustAccountPeople=function(TrustAccountPeopleModel){}

/**
*@param TrustAccountModel: com.accela.aa.finance.trustAccount.TrustAccountModel
*@param TrustAccountPeopleModel: com.accela.aa.finance.trustAccount.TrustAccountPeopleModel
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountListByCondition=function(TrustAccountModel, TrustAccountPeopleModel){}

/**
*@param TrustAccountModel: com.accela.aa.finance.trustAccount.TrustAccountModel
*@param TrustAccountPeopleModel: com.accela.aa.finance.trustAccount.TrustAccountPeopleModel
*@param RefAddressModel: com.accela.aa.aamain.address.RefAddressModel
*@param ParcelModel: com.accela.aa.aamain.parcel.ParcelModel
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountListByCondition=function(TrustAccountModel, TrustAccountPeopleModel, RefAddressModel, ParcelModel){}

/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: ScriptResult
*/
TrustAccountScript.prototype.getPeopleCountInfoByTrustAccount=function(String, Long){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
TrustAccountScript.prototype.getPeopleCountInfoByTrustAccount=function(Long){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountListByAccountStatus=function(String, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountListByAccountStatus=function(String){}

/**
*@param Long: java.lang.Long
*@param String: java.lang.String
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTransactionListByAccountSeq=function(Long, String){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTransactionListByAccountSeq=function(Long){}

/**
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountListWithNegativeBalance=function(){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountListWithNegativeBalance=function(String){}

/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountPeopleListByAccount=function(String, Long){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountPeopleListByAccount=function(Long){}

/**
*@param TransactionModel: com.accela.aa.finance.trustAccount.TransactionModel
*@return: ScriptResult
*/
TrustAccountScript.prototype.adjustTrustAccount=function(TransactionModel){}

/**
*@param TrustAccountModel: com.accela.aa.finance.trustAccount.TrustAccountModel
*@return: ScriptResult
*/
TrustAccountScript.prototype.editTrustAccount=function(TrustAccountModel){}

/**
*@param Long: java.lang.Long
*@param String: java.lang.String
*@return: ScriptResult
*/
TrustAccountScript.prototype.closeTrustAccountByPK=function(Long, String){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
TrustAccountScript.prototype.closeTrustAccountByPK=function(Long){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
TrustAccountScript.prototype.getPrimaryTrustAccountByCAP=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
TrustAccountScript.prototype.getPrimaryTrustAccountID=function(CapIDModel, String){}

/**
*@param TrustAccountModel: com.accela.aa.finance.trustAccount.TrustAccountModel
*@return: ScriptResult
*/
TrustAccountScript.prototype.createTrustAccount=function(TrustAccountModel){}

/**
*@param TrustAccountAssociationModel: com.accela.aa.finance.trustAccount.TrustAccountAssociationModel
*@return: ScriptResult
*/
TrustAccountScript.prototype.createTrustAccountAssociation=function(TrustAccountAssociationModel){}

/**
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountList=function(QueryFormat){}

/**
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountList=function(String, QueryFormat){}

/**
*@param TransactionModel: com.accela.aa.finance.trustAccount.TransactionModel
*@return: ScriptResult
*/
TrustAccountScript.prototype.depositTrustAccount=function(TransactionModel){}

/**
*@param TransactionModel: com.accela.aa.finance.trustAccount.TransactionModel
*@return: ScriptResult
*/
TrustAccountScript.prototype.transferTrustAccount=function(TransactionModel){}

/**
*@param TransactionModel: com.accela.aa.finance.trustAccount.TransactionModel
*@return: ScriptResult
*/
TrustAccountScript.prototype.withdrawTrustAccount=function(TransactionModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountIDListByCAPID=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
TrustAccountScript.prototype.autoCreateTrustAccount=function(String, String){}

/**
*@param Long: java.lang.Long
*@param String: java.lang.String
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTransactionByPK=function(Long, String){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTransactionByPK=function(Long){}

/**
*@param TransactionModel: com.accela.aa.finance.trustAccount.TransactionModel
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTransactionListByCondition=function(TransactionModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@param String: java.lang.String
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountIDListBySetID=function(String, String, QueryFormat, String){}

/**
*@param String: java.lang.String
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountIDListBySetID=function(String, QueryFormat){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountListByCAPID=function(CapIDModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountByAccountID=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountByAccountID=function(String, String){}

/**
*@param Long: java.lang.Long
*@param String: java.lang.String
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountByPK=function(Long, String){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
TrustAccountScript.prototype.getTrustAccountByPK=function(Long){}

/**
*@param Long: java.lang.Long
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: ScriptResult
*/
TrustAccountScript.prototype.removeTrustAccountPeople=function(Long, String, Long){}

/**
*@param Long: java.lang.Long
*@param String: java.lang.String
*@param Long: java.lang.Long
*@param Integer: java.lang.Integer
*@param String: java.lang.String
*@return: ScriptResult
*/
TrustAccountScript.prototype.removeTrustAccountPeople=function(Long, String, Long, Integer, String){}

/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: ScriptResult
*/
TrustAccountScript.prototype.removeTrustAccountPeople=function(String, Long, String, Long){}

/**
*@return: TrustAccountPeopleScriptModel
*/
TrustAccountScript.prototype.createTrustAccountPeopleScriptModel=function(){}

/**
*@return: TrustAccountTransactionScriptModel
*/
TrustAccountScript.prototype.createTrustAccountTransactionScriptModel=function(){}

/**
*@return: CapIDScriptModel
*/
TrustAccountScript.prototype.createCapIDScriptModel=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
TrustAccountScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
TrustAccountScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
TrustAccountScript.prototype.wait=function(long){}

/**
*@return: void
*/
TrustAccountScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
TrustAccountScript.prototype.equals=function(Object){}

/**
*@return: String
*/
TrustAccountScript.prototype.toString=function(){}

/**
*@return: int
*/
TrustAccountScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
TrustAccountScript.prototype.getClass=function(){}

/**
*@return: void
*/
TrustAccountScript.prototype.notify=function(){}

/**
*@return: void
*/
TrustAccountScript.prototype.notifyAll=function(){}

/**
* class AppSpecificTableScript
*/
function AppSpecificTableScript(){
}
/**
*@param AppSpecificTableModel: com.accela.aa.aamain.appspectable.AppSpecificTableModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
AppSpecificTableScript.prototype.editAppSpecificTableInfos=function(AppSpecificTableModel, CapIDModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
AppSpecificTableScript.prototype.getAppSpecificTableModel=function(CapIDModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AppSpecificTableScript.prototype.getAppSpecificTableModel=function(CapIDModel, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
AppSpecificTableScript.prototype.getAppSpecificGroupTableNames=function(CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
AppSpecificTableScript.prototype.getMaxRowIdOfAppSpecificTable=function(CapIDModel, String, String){}

/**
*@param String: java.lang.String
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
AppSpecificTableScript.prototype.removeAppSpecificTableInfos=function(String, CapIDModel, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
AppSpecificTableScript.prototype.getAppSpecificTableGroupModel=function(CapIDModel){}

/**
*@return: TableScriptModel
*/
AppSpecificTableScript.prototype.createTableScriptModel=function(){}

/**
*@return: RowScriptModel
*/
AppSpecificTableScript.prototype.createRowScriptModel=function(){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param TableModel: com.accela.aa.aamain.appspectable.TableModel
*@return: ScriptResult
*/
AppSpecificTableScript.prototype.addAppSpecificTableInfors=function(CapIDModel, TableModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param TableModel: com.accela.aa.aamain.appspectable.TableModel
*@return: ScriptResult
*/
AppSpecificTableScript.prototype.updateAppSpecificTableInfors=function(CapIDModel, TableModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param Map: java.util.Map
*@return: ScriptResult
*/
AppSpecificTableScript.prototype.getAppSpecificTableInfo=function(CapIDModel, String, Map){}

/**
*@return: CapIDScriptModel
*/
AppSpecificTableScript.prototype.createCapIDScriptModel=function(){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param TableModel: com.accela.aa.aamain.appspectable.TableModel
*@return: ScriptResult
*/
AppSpecificTableScript.prototype.deletedAppSpecificTableInfors=function(CapIDModel, TableModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
AppSpecificTableScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
AppSpecificTableScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
AppSpecificTableScript.prototype.wait=function(long){}

/**
*@return: void
*/
AppSpecificTableScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
AppSpecificTableScript.prototype.equals=function(Object){}

/**
*@return: String
*/
AppSpecificTableScript.prototype.toString=function(){}

/**
*@return: int
*/
AppSpecificTableScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
AppSpecificTableScript.prototype.getClass=function(){}

/**
*@return: void
*/
AppSpecificTableScript.prototype.notify=function(){}

/**
*@return: void
*/
AppSpecificTableScript.prototype.notifyAll=function(){}

/**
* class ExchangeScript
*/
function ExchangeScript(){
}
/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ExchangeScript.prototype.init=function(String, String, String, String){}

/**
*@param Date: java.util.Date
*@return: ScriptResult
*/
ExchangeScript.prototype.formatDateForExchange=function(Date){}

/**
*@param Date: java.util.Date
*@param int: int
*@return: ScriptResult
*/
ExchangeScript.prototype.incrementDateByMinutes=function(Date, int){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ExchangeScript.prototype.sendNewAppointment=function(String, String, String, String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ExchangeScript.prototype.parseDate=function(String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
ExchangeScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ExchangeScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ExchangeScript.prototype.wait=function(long){}

/**
*@return: void
*/
ExchangeScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ExchangeScript.prototype.equals=function(Object){}

/**
*@return: String
*/
ExchangeScript.prototype.toString=function(){}

/**
*@return: int
*/
ExchangeScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
ExchangeScript.prototype.getClass=function(){}

/**
*@return: void
*/
ExchangeScript.prototype.notify=function(){}

/**
*@return: void
*/
ExchangeScript.prototype.notifyAll=function(){}

/**
* class EPaymentScript
*/
function EPaymentScript(){
}
/**
*@param String: java.lang.String
*@return: ScriptResult
*/
EPaymentScript.prototype.getEPaymentValue=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
EPaymentScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
EPaymentScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
EPaymentScript.prototype.wait=function(long){}

/**
*@return: void
*/
EPaymentScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
EPaymentScript.prototype.equals=function(Object){}

/**
*@return: String
*/
EPaymentScript.prototype.toString=function(){}

/**
*@return: int
*/
EPaymentScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
EPaymentScript.prototype.getClass=function(){}

/**
*@return: void
*/
EPaymentScript.prototype.notify=function(){}

/**
*@return: void
*/
EPaymentScript.prototype.notifyAll=function(){}

/**
* class RunReportScript
*/
function RunReportScript(){
}
/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
RunReportScript.prototype.hasPermission=function(String, String){}

/**
*@param ReportResultScriptModel: com.accela.aa.emse.dom.ReportResultScriptModel
*@return: ScriptResult
*/
RunReportScript.prototype.storeReportToDisk=function(ReportResultScriptModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
RunReportScript.prototype.getReportModelByName=function(String){}

/**
*@param ReportDetailModel: com.accela.v360.reports.ReportDetailModel
*@return: ScriptResult
*/
RunReportScript.prototype.getReportScriptModel=function(ReportDetailModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
RunReportScript.prototype.getReportInfoModelByName=function(String){}

/**
*@param ReportInfoScriptModel: com.accela.aa.emse.dom.ReportInfoScriptModel
*@return: ScriptResult
*/
RunReportScript.prototype.getReportResult=function(ReportInfoScriptModel){}

/**
*@param ReportInfoScriptModel: com.accela.aa.emse.dom.ReportInfoScriptModel
*@param ReportResultScriptModel: com.accela.aa.emse.dom.ReportResultScriptModel
*@return: ScriptResult
*/
RunReportScript.prototype.sendReportInEmail=function(ReportInfoScriptModel, ReportResultScriptModel){}

/**
*@return: ScriptResult
*/
RunReportScript.prototype.getReportDetailModel=function(){}

/**
*@param HashMap: java.util.HashMap
*@param ReportScriptModel: com.accela.aa.emse.dom.ReportScriptModel
*@return: ScriptResult
*/
RunReportScript.prototype.runReport=function(HashMap, ReportScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
RunReportScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
RunReportScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
RunReportScript.prototype.wait=function(long){}

/**
*@return: void
*/
RunReportScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
RunReportScript.prototype.equals=function(Object){}

/**
*@return: String
*/
RunReportScript.prototype.toString=function(){}

/**
*@return: int
*/
RunReportScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
RunReportScript.prototype.getClass=function(){}

/**
*@return: void
*/
RunReportScript.prototype.notify=function(){}

/**
*@return: void
*/
RunReportScript.prototype.notifyAll=function(){}

/**
* class ActivitySpecInfoScript
*/
function ActivitySpecInfoScript(){
}
/**
*@param RefActivityModel: com.accela.aa.aamain.activityspecinfo.RefActivityModel
*@return: ScriptResult
*/
ActivitySpecInfoScript.prototype.editRefActivity=function(RefActivityModel){}

/**
*@param RefActivityModel: com.accela.aa.aamain.activityspecinfo.RefActivityModel
*@return: ScriptResult
*/
ActivitySpecInfoScript.prototype.createRefActivity=function(RefActivityModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param List: java.util.List
*@return: ScriptResult
*/
ActivitySpecInfoScript.prototype.deleteRefActivity=function(String, String, List){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
ActivitySpecInfoScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ActivitySpecInfoScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ActivitySpecInfoScript.prototype.wait=function(long){}

/**
*@return: void
*/
ActivitySpecInfoScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ActivitySpecInfoScript.prototype.equals=function(Object){}

/**
*@return: String
*/
ActivitySpecInfoScript.prototype.toString=function(){}

/**
*@return: int
*/
ActivitySpecInfoScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
ActivitySpecInfoScript.prototype.getClass=function(){}

/**
*@return: void
*/
ActivitySpecInfoScript.prototype.notify=function(){}

/**
*@return: void
*/
ActivitySpecInfoScript.prototype.notifyAll=function(){}

/**
* class AssetScript
*/
function AssetScript(){
}
/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
AssetScript.prototype.getAssetListByWorkOrder=function(CapIDModel, QueryFormat){}

/**
*@param WorkOrderAssetModel: com.accela.ams.workorder.WorkOrderAssetModel
*@return: ScriptResult
*/
AssetScript.prototype.createWorkOrderAsset=function(WorkOrderAssetModel){}

/**
*@param WorkOrderAssetModel: com.accela.ams.workorder.WorkOrderAssetModel
*@return: ScriptResult
*/
AssetScript.prototype.removeWorkOrderAssetByPK=function(WorkOrderAssetModel){}

/**
*@param AssetMasterPK: com.accela.ams.asset.AssetMasterPK
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
AssetScript.prototype.getWorkOrderListByAsset=function(AssetMasterPK, QueryFormat){}

/**
*@param AssetMasterPK: com.accela.ams.asset.AssetMasterPK
*@return: ScriptResult
*/
AssetScript.prototype.removeAssetData=function(AssetMasterPK){}

/**
*@param AssetMasterModel: com.accela.ams.asset.AssetMasterModel
*@param Collection: java.util.Collection
*@param QueryFormat: com.accela.aa.util.QueryFormat
*@return: ScriptResult
*/
AssetScript.prototype.getAssetDataList=function(AssetMasterModel, Collection, QueryFormat){}

/**
*@param AssetDataModel: com.accela.ams.asset.AssetDataModel
*@return: ScriptResult
*/
AssetScript.prototype.createAsset=function(AssetDataModel){}

/**
*@param CapModel: com.accela.aa.aamain.cap.CapModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
AssetScript.prototype.cloneAssets=function(CapModel, CapIDModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
AssetScript.prototype.getAssetData=function(String){}

/**
*@param AssetDataModel: com.accela.ams.asset.AssetDataModel
*@return: ScriptResult
*/
AssetScript.prototype.editAsset=function(AssetDataModel){}

/**
*@param WorkOrderAssetModelArray: [Lcom.accela.ams.workorder.WorkOrderAssetModel;
*@return: ScriptResult
*/
AssetScript.prototype.batchCreateRecordAsset=function(WorkOrderAssetModelArray){}

/**
*@param WorkOrderAssetModelArray: [Lcom.accela.ams.workorder.WorkOrderAssetModel;
*@return: ScriptResult
*/
AssetScript.prototype.batchUpdateRecordAsset=function(WorkOrderAssetModelArray){}

/**
*@return: ScriptResult
*/
AssetScript.prototype.newAssetScriptModel=function(){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
AssetScript.prototype.getRecordAssetsByRecordId=function(CapIDModel){}

/**
*@return: ScriptResult
*/
AssetScript.prototype.newWorkOrderAssetScriptModel=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
AssetScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
AssetScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
AssetScript.prototype.wait=function(long){}

/**
*@return: void
*/
AssetScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
AssetScript.prototype.equals=function(Object){}

/**
*@return: String
*/
AssetScript.prototype.toString=function(){}

/**
*@return: int
*/
AssetScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
AssetScript.prototype.getClass=function(){}

/**
*@return: void
*/
AssetScript.prototype.notify=function(){}

/**
*@return: void
*/
AssetScript.prototype.notifyAll=function(){}

/**
* class CommunicationScript
*/
function CommunicationScript(){
}
/**
*@return: ScriptResult
*/
CommunicationScript.prototype.getNotificationTemplateModel=function(){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
CommunicationScript.prototype.getNotificationTemplate=function(String){}

/**
*@param StringArray: [Ljava.lang.String;
*@return: ScriptResult
*/
CommunicationScript.prototype.resendFailedMessages=function(StringArray){}

/**
*@param SMSMessageScriptModel: com.accela.aa.emse.dom.SMSMessageScriptModel
*@return: ScriptResult
*/
CommunicationScript.prototype.sendMessage=function(SMSMessageScriptModel){}

/**
*@param EmailMessageScriptModel: com.accela.aa.emse.dom.EmailMessageScriptModel
*@return: ScriptResult
*/
CommunicationScript.prototype.sendMessage=function(EmailMessageScriptModel){}

/**
*@param String: java.lang.String
*@param Hashtable: java.util.Hashtable
*@param String: java.lang.String
*@return: ScriptResult
*/
CommunicationScript.prototype.sendMessages=function(String, Hashtable, String){}

/**
*@param String: java.lang.String
*@param Hashtable: java.util.Hashtable
*@param String: java.lang.String
*@param StringArrayArray: [[Ljava.lang.String;
*@return: ScriptResult
*/
CommunicationScript.prototype.sendMessages=function(String, Hashtable, String, StringArrayArray){}

/**
*@param StringArrayArray: [[Ljava.lang.String;
*@param String: java.lang.String
*@return: ScriptResult
*/
CommunicationScript.prototype.getContactList=function(StringArrayArray, String){}

/**
*@param String: java.lang.String
*@param Hashtable: java.util.Hashtable
*@param String: java.lang.String
*@return: ScriptResult
*/
CommunicationScript.prototype.sendMessagesWithI18NParameters=function(String, Hashtable, String){}

/**
*@param CalendarTaskModel: com.accela.aa.notification.model.CalendarTaskModel
*@return: ScriptResult
*/
CommunicationScript.prototype.createTask=function(CalendarTaskModel){}

/**
*@param CalendarTaskModel: com.accela.aa.notification.model.CalendarTaskModel
*@return: ScriptResult
*/
CommunicationScript.prototype.deleteTask=function(CalendarTaskModel){}

/**
*@param CalendarTaskModel: com.accela.aa.notification.model.CalendarTaskModel
*@return: ScriptResult
*/
CommunicationScript.prototype.updateTask=function(CalendarTaskModel){}

/**
*@return: ScriptResult
*/
CommunicationScript.prototype.getSMSMessageScriptModel=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CommunicationScript.prototype.associateEnities=function(String, String, String){}

/**
*@return: ScriptResult
*/
CommunicationScript.prototype.getEmailMessageScriptModel=function(){}

/**
*@return: ScriptResult
*/
CommunicationScript.prototype.getNewTaskModel=function(){}

/**
*@return: ScriptResult
*/
CommunicationScript.prototype.getI18nVariables=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
CommunicationScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
CommunicationScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
CommunicationScript.prototype.wait=function(long){}

/**
*@return: void
*/
CommunicationScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
CommunicationScript.prototype.equals=function(Object){}

/**
*@return: String
*/
CommunicationScript.prototype.toString=function(){}

/**
*@return: int
*/
CommunicationScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
CommunicationScript.prototype.getClass=function(){}

/**
*@return: void
*/
CommunicationScript.prototype.notify=function(){}

/**
*@return: void
*/
CommunicationScript.prototype.notifyAll=function(){}

/**
* class AssetCAScript
*/
function AssetCAScript(){
}
/**
*@param AssetCAWorkOrderModel: com.accela.ams.conditionassessment.AssetCAWorkOrderModel
*@return: ScriptResult
*/
AssetCAScript.prototype.createAssetCAWorkOrder=function(AssetCAWorkOrderModel){}

/**
*@param AssetConditionAssessmentModel: com.accela.ams.conditionassessment.AssetConditionAssessmentModel
*@return: ScriptResult
*/
AssetCAScript.prototype.updateAssetCA=function(AssetConditionAssessmentModel){}

/**
*@param AssetConditionAssessmentModel: com.accela.ams.conditionassessment.AssetConditionAssessmentModel
*@return: ScriptResult
*/
AssetCAScript.prototype.createAssetCA=function(AssetConditionAssessmentModel){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
AssetCAScript.prototype.getAssetCAList=function(Long){}

/**
*@param GenericCostingModel: com.accela.orm.model.costing.GenericCostingModel
*@return: ScriptResult
*/
AssetCAScript.prototype.updateCACosting=function(GenericCostingModel){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
AssetCAScript.prototype.getAssetCAByPK=function(Long){}

/**
*@param GenericCostingModel: com.accela.orm.model.costing.GenericCostingModel
*@return: ScriptResult
*/
AssetCAScript.prototype.createCACosting=function(GenericCostingModel){}

/**
*@param GenericCostingModel: com.accela.orm.model.costing.GenericCostingModel
*@return: ScriptResult
*/
AssetCAScript.prototype.deleteCACosting=function(GenericCostingModel){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
AssetCAScript.prototype.removeAssetCA=function(Long){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
AssetCAScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
AssetCAScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
AssetCAScript.prototype.wait=function(long){}

/**
*@return: void
*/
AssetCAScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
AssetCAScript.prototype.equals=function(Object){}

/**
*@return: String
*/
AssetCAScript.prototype.toString=function(){}

/**
*@return: int
*/
AssetCAScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
AssetCAScript.prototype.getClass=function(){}

/**
*@return: void
*/
AssetCAScript.prototype.notify=function(){}

/**
*@return: void
*/
AssetCAScript.prototype.notifyAll=function(){}

/**
* class PartTransactionScript
*/
function PartTransactionScript(){
}
/**
*@param PartTransactionPK: com.accela.ams.part.PartTransactionPK
*@return: ScriptResult
*/
PartTransactionScript.prototype.getPartTransactionByPK=function(PartTransactionPK){}

/**
*@param PartTransactionModel: com.accela.ams.part.PartTransactionModel
*@return: ScriptResult
*/
PartTransactionScript.prototype.updatePartTransaction=function(PartTransactionModel){}

/**
*@param PartTransactionPK: com.accela.ams.part.PartTransactionPK
*@return: ScriptResult
*/
PartTransactionScript.prototype.removePartTransaction=function(PartTransactionPK){}

/**
*@param Long: java.lang.Long
*@param Long: java.lang.Long
*@return: ScriptResult
*/
PartTransactionScript.prototype.getPartTransactionPK=function(Long, Long){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
PartTransactionScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
PartTransactionScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
PartTransactionScript.prototype.wait=function(long){}

/**
*@return: void
*/
PartTransactionScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
PartTransactionScript.prototype.equals=function(Object){}

/**
*@return: String
*/
PartTransactionScript.prototype.toString=function(){}

/**
*@return: int
*/
PartTransactionScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
PartTransactionScript.prototype.getClass=function(){}

/**
*@return: void
*/
PartTransactionScript.prototype.notify=function(){}

/**
*@return: void
*/
PartTransactionScript.prototype.notifyAll=function(){}

/**
* class TimeAccountingScript
*/
function TimeAccountingScript(){
}
/**
*@param String: java.lang.String
*@return: ScriptResult
*/
TimeAccountingScript.prototype.getTimeTypeByTimeTypeName=function(String){}

/**
*@param TimeLogModel: com.accela.aa.finance.timeAccount.TimeLogModel
*@return: ScriptResult
*/
TimeAccountingScript.prototype.convTimeAccountingToHumaning=function(TimeLogModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
TimeAccountingScript.prototype.getTimeGroupByTimeGroupName=function(String){}

/**
*@param GenericCostingModel: com.accela.orm.model.costing.GenericCostingModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
TimeAccountingScript.prototype.convGenericCostingToCosting=function(GenericCostingModel, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
TimeAccountingScript.prototype.getTimeGroupTypeModels=function(String, String){}

/**
*@param TimeGroupTypeScriptModel: com.accela.aa.emse.dom.TimeGroupTypeScriptModel
*@return: ScriptResult
*/
TimeAccountingScript.prototype.getTimeGroupTypeModels=function(TimeGroupTypeScriptModel){}

/**
*@return: ScriptResult
*/
TimeAccountingScript.prototype.getTimeGroupTypeModel=function(){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param Long: java.lang.Long
*@param Long: java.lang.Long
*@return: ScriptResult
*/
TimeAccountingScript.prototype.getTimeLogModelByEntity=function(CapIDModel, String, String, Long, Long){}

/**
*@return: ScriptResult
*/
TimeAccountingScript.prototype.getTimeLogModel=function(){}

/**
*@param long: long
*@return: ScriptResult
*/
TimeAccountingScript.prototype.getTimeLogModel=function(long){}

/**
*@param TimeAccountingScriptModel: com.accela.aa.emse.dom.TimeAccountingScriptModel
*@return: ScriptResult
*/
TimeAccountingScript.prototype.addTimeLogModel=function(TimeAccountingScriptModel){}

/**
*@param TimeAccountingScriptModel: com.accela.aa.emse.dom.TimeAccountingScriptModel
*@return: ScriptResult
*/
TimeAccountingScript.prototype.updateTimeLogModel=function(TimeAccountingScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
TimeAccountingScript.prototype.deleteTimeAccountingSyncMapping=function(String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
TimeAccountingScript.prototype.getTimeAccountingSyncMappingList=function(String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
TimeAccountingScript.prototype.createTimeAccountingSyncMapping=function(String, String, String, String){}

/**
*@param TimeLogModel: com.accela.aa.finance.timeAccount.TimeLogModel
*@return: ScriptResult
*/
TimeAccountingScript.prototype.convTimeAccountingToGenericCosting=function(TimeLogModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
TimeAccountingScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
TimeAccountingScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
TimeAccountingScript.prototype.wait=function(long){}

/**
*@return: void
*/
TimeAccountingScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
TimeAccountingScript.prototype.equals=function(Object){}

/**
*@return: String
*/
TimeAccountingScript.prototype.toString=function(){}

/**
*@return: int
*/
TimeAccountingScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
TimeAccountingScript.prototype.getClass=function(){}

/**
*@return: void
*/
TimeAccountingScript.prototype.notify=function(){}

/**
*@return: void
*/
TimeAccountingScript.prototype.notifyAll=function(){}

/**
* class PublicUserScript
*/
function PublicUserScript(){
}
/**
*@param XPublicUserSSOModel: com.accela.orm.model.publicuser.XPublicUserSSOModel
*@return: ScriptResult
*/
PublicUserScript.prototype.syncXPublicUserSSO=function(XPublicUserSSOModel){}

/**
*@return: String
*/
PublicUserScript.prototype.getNewPublicUserUUID=function(){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
PublicUserScript.prototype.getInitialUserByUserSeqNbr=function(Long){}

/**
*@param UserDistrictModel: com.accela.aa.aamain.people.UserDistrictModel
*@return: ScriptResult
*/
PublicUserScript.prototype.createPublicUserDistrict=function(UserDistrictModel){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
PublicUserScript.prototype.getDelegateUserByUserSeqNbr=function(Long){}

/**
*@param UserDistrictModel: com.accela.aa.aamain.people.UserDistrictModel
*@return: ScriptResult
*/
PublicUserScript.prototype.getPublicUserDistrict=function(UserDistrictModel){}

/**
*@return: ScriptResult
*/
PublicUserScript.prototype.purgExpiredInactiveAccount=function(){}

/**
*@return: DepartmentModel
*/
PublicUserScript.prototype.getDepartmentModel=function(){}

/**
*@param UserDistrictModel: com.accela.aa.aamain.people.UserDistrictModel
*@return: ScriptResult
*/
PublicUserScript.prototype.deletePublicUserDistrict=function(UserDistrictModel){}

/**
*@return: ScriptResult
*/
PublicUserScript.prototype.getUserDisciplineModel=function(){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
PublicUserScript.prototype.getXPublicUserSSO=function(Long){}

/**
*@return: ScriptResult
*/
PublicUserScript.prototype.getUserDistrictModel=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
PublicUserScript.prototype.signon=function(String, String){}

/**
*@return: ScriptResult
*/
PublicUserScript.prototype.getUserModel=function(){}

/**
*@return: PublicUserModel
*/
PublicUserScript.prototype.getPublicUserModel=function(){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PublicUserScript.prototype.encryptPassword=function(String){}

/**
*@param UserDisciplineModel: com.accela.aa.aamain.people.UserDisciplineModel
*@return: ScriptResult
*/
PublicUserScript.prototype.addPublicUserAAAccountDiscipline=function(UserDisciplineModel){}

/**
*@param UserDisciplineModel: com.accela.aa.aamain.people.UserDisciplineModel
*@return: ScriptResult
*/
PublicUserScript.prototype.deletePublicUserAAAccountDiscipline=function(UserDisciplineModel){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
PublicUserScript.prototype.getPublicUserListByLicenseSeqNBR=function(Long){}

/**
*@param PublicUserModel: com.accela.v360.publicuser.PublicUserModel
*@return: ScriptResult
*/
PublicUserScript.prototype.checkPublicUserAccountInAgency=function(PublicUserModel){}

/**
*@param PublicUserModel: com.accela.v360.publicuser.PublicUserModel
*@return: ScriptResult
*/
PublicUserScript.prototype.removePublicUserInfoFromAgency=function(PublicUserModel){}

/**
*@param UserDisciplineModel: com.accela.aa.aamain.people.UserDisciplineModel
*@return: ScriptResult
*/
PublicUserScript.prototype.getPublicUserAAAccountDisciplines=function(UserDisciplineModel){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
PublicUserScript.prototype.getPublicUser=function(Long){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PublicUserScript.prototype.resetPassword=function(String){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
PublicUserScript.prototype.isRegisterred=function(Long){}

/**
*@param PublicUserModel: com.accela.v360.publicuser.PublicUserModel
*@return: ScriptResult
*/
PublicUserScript.prototype.createPublicUser=function(PublicUserModel){}

/**
*@param PublicUserModel: com.accela.v360.publicuser.PublicUserModel
*@param LicenseModelArray: [Lcom.accela.aa.aamain.people.LicenseModel;
*@return: ScriptResult
*/
PublicUserScript.prototype.createPublicUser=function(PublicUserModel, LicenseModelArray){}

/**
*@param PublicUserModel: com.accela.v360.publicuser.PublicUserModel
*@return: ScriptResult
*/
PublicUserScript.prototype.editPublicUser=function(PublicUserModel){}

/**
*@param PublicUserModel: com.accela.v360.publicuser.PublicUserModel
*@param String: java.lang.String
*@return: ScriptResult
*/
PublicUserScript.prototype.updateEmail4PublicUser=function(PublicUserModel, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PublicUserScript.prototype.isExistingUser=function(String){}

/**
*@param UserModel: com.accela.aa.aamain.security.UserModel
*@return: ScriptResult
*/
PublicUserScript.prototype.getPublicUserAAAccount=function(UserModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PublicUserScript.prototype.getPublicUserByPUser=function(String){}

/**
*@param UserModel: com.accela.aa.aamain.security.UserModel
*@return: ScriptResult
*/
PublicUserScript.prototype.updatePublicUserAAAccount=function(UserModel){}

/**
*@param PublicUserModel: com.accela.v360.publicuser.PublicUserModel
*@return: ScriptResult
*/
PublicUserScript.prototype.sendPasswordEmail=function(PublicUserModel){}

/**
*@param DepartmentModel: com.accela.aa.aamain.organization.DepartmentModel
*@return: ScriptResult
*/
PublicUserScript.prototype.getOrganizatonOwner=function(DepartmentModel){}

/**
*@param PublicUserModel: com.accela.v360.publicuser.PublicUserModel
*@param PeopleModel: com.accela.aa.aamain.people.PeopleModel
*@param boolean: boolean
*@return: ScriptResult
*/
PublicUserScript.prototype.getPublicUserBySearchKeys=function(PublicUserModel, PeopleModel, boolean){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PublicUserScript.prototype.getPublicUserListByOwnerNBR=function(String){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
PublicUserScript.prototype.getPublicUserListByContactNBR=function(Long){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PublicUserScript.prototype.activatePublicUser=function(String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PublicUserScript.prototype.getPublicUserByUserId=function(String){}

/**
*@param PublicUserModel: com.accela.v360.publicuser.PublicUserModel
*@return: ScriptResult
*/
PublicUserScript.prototype.createPublicUserForAgency=function(PublicUserModel){}

/**
*@param PublicUserModel: com.accela.v360.publicuser.PublicUserModel
*@param boolean: boolean
*@return: ScriptResult
*/
PublicUserScript.prototype.disablePublicUserAccount=function(PublicUserModel, boolean){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PublicUserScript.prototype.isExistingEmailID=function(String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
PublicUserScript.prototype.getPublicUserByEmail=function(String){}

/**
*@param PublicUserModel: com.accela.v360.publicuser.PublicUserModel
*@return: ScriptResult
*/
PublicUserScript.prototype.sendHyperlinkActivateEmail=function(PublicUserModel){}

/**
*@param PublicUserModel: com.accela.v360.publicuser.PublicUserModel
*@param boolean: boolean
*@param boolean: boolean
*@return: ScriptResult
*/
PublicUserScript.prototype.sendActivateEmail=function(PublicUserModel, boolean, boolean){}

/**
*@return: LicenseModel
*/
PublicUserScript.prototype.getLicenseModel=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
PublicUserScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
PublicUserScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
PublicUserScript.prototype.wait=function(long){}

/**
*@return: void
*/
PublicUserScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
PublicUserScript.prototype.equals=function(Object){}

/**
*@return: String
*/
PublicUserScript.prototype.toString=function(){}

/**
*@return: int
*/
PublicUserScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
PublicUserScript.prototype.getClass=function(){}

/**
*@return: void
*/
PublicUserScript.prototype.notify=function(){}

/**
*@return: void
*/
PublicUserScript.prototype.notifyAll=function(){}

/**
* class ProxyInvoker
*/
function ProxyInvoker(){
}
/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param ObjectArray: [Ljava.lang.Object;
*@return: ScriptResult
*/
ProxyInvoker.prototype.invoke=function(String, String, ObjectArray){}

/**
*@param Object: java.lang.Object
*@param String: java.lang.String
*@param ObjectArray: [Ljava.lang.Object;
*@return: ScriptResult
*/
ProxyInvoker.prototype.invoke=function(Object, String, ObjectArray){}

/**
*@param Object: java.lang.Object
*@param String: java.lang.String
*@param StringArray: [Ljava.lang.String;
*@param ObjectArray: [Ljava.lang.Object;
*@return: ScriptResult
*/
ProxyInvoker.prototype.invoke=function(Object, String, StringArray, ObjectArray){}

/**
*@param String: java.lang.String
*@param StringArray: [Ljava.lang.String;
*@param ObjectArray: [Ljava.lang.Object;
*@return: ScriptResult
*/
ProxyInvoker.prototype.newInstance=function(String, StringArray, ObjectArray){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
ProxyInvoker.prototype.newInstance=function(String){}

/**
*@param String: java.lang.String
*@param ObjectArray: [Ljava.lang.Object;
*@return: ScriptResult
*/
ProxyInvoker.prototype.newInstance=function(String, ObjectArray){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
ProxyInvoker.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ProxyInvoker.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ProxyInvoker.prototype.wait=function(long){}

/**
*@return: void
*/
ProxyInvoker.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ProxyInvoker.prototype.equals=function(Object){}

/**
*@return: String
*/
ProxyInvoker.prototype.toString=function(){}

/**
*@return: int
*/
ProxyInvoker.prototype.hashCode=function(){}

/**
*@return: Class
*/
ProxyInvoker.prototype.getClass=function(){}

/**
*@return: void
*/
ProxyInvoker.prototype.notify=function(){}

/**
*@return: void
*/
ProxyInvoker.prototype.notifyAll=function(){}

/**
* class HttpClientScript
*/
function HttpClientScript(){
}
/**
*@param String: java.lang.String
*@return: ScriptResult
*/
HttpClientScript.prototype.get=function(String){}

/**
*@param String: java.lang.String
*@param Map: java.util.Map
*@return: ScriptResult
*/
HttpClientScript.prototype.get=function(String, Map){}

/**
*@return: Map
*/
HttpClientScript.prototype.initPostParameters=function(){}

/**
*@param String: java.lang.String
*@param Map: java.util.Map
*@param StringArrayArray: [[Ljava.lang.String;
*@param StringArrayArray: [[Ljava.lang.String;
*@return: ScriptResult
*/
HttpClientScript.prototype.post=function(String, Map, StringArrayArray, StringArrayArray){}

/**
*@param String: java.lang.String
*@param Map: java.util.Map
*@param String: java.lang.String
*@return: ScriptResult
*/
HttpClientScript.prototype.post=function(String, Map, String){}

/**
*@param String: java.lang.String
*@param Map: java.util.Map
*@return: ScriptResult
*/
HttpClientScript.prototype.post=function(String, Map){}

/**
*@param String: java.lang.String
*@param Map: java.util.Map
*@param Map: java.util.Map
*@return: ScriptResult
*/
HttpClientScript.prototype.post=function(String, Map, Map){}

/**
*@param String: java.lang.String
*@param Map: java.util.Map
*@param Map: java.util.Map
*@param String: java.lang.String
*@return: ScriptResult
*/
HttpClientScript.prototype.post=function(String, Map, Map, String){}

/**
*@param String: java.lang.String
*@param Map: java.util.Map
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
HttpClientScript.prototype.post=function(String, Map, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
HttpClientScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
HttpClientScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
HttpClientScript.prototype.wait=function(long){}

/**
*@return: void
*/
HttpClientScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
HttpClientScript.prototype.equals=function(Object){}

/**
*@return: String
*/
HttpClientScript.prototype.toString=function(){}

/**
*@return: int
*/
HttpClientScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
HttpClientScript.prototype.getClass=function(){}

/**
*@return: void
*/
HttpClientScript.prototype.notify=function(){}

/**
*@return: void
*/
HttpClientScript.prototype.notifyAll=function(){}

/**
* class OAuthClientScript
*/
function OAuthClientScript(){
this.apiClassMapping= new HashMap();
}
/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
OAuthClientScript.prototype.get=function(String, String){}

/**
*@param String: java.lang.String
*@return: Map
*/
OAuthClientScript.prototype.getConfiguration=function(String){}

/**
*@return: Map
*/
OAuthClientScript.prototype.initPostParameters=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param Map: java.util.Map
*@return: ScriptResult
*/
OAuthClientScript.prototype.post=function(String, String, Map){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
OAuthClientScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
OAuthClientScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
OAuthClientScript.prototype.wait=function(long){}

/**
*@return: void
*/
OAuthClientScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
OAuthClientScript.prototype.equals=function(Object){}

/**
*@return: String
*/
OAuthClientScript.prototype.toString=function(){}

/**
*@return: int
*/
OAuthClientScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
OAuthClientScript.prototype.getClass=function(){}

/**
*@return: void
*/
OAuthClientScript.prototype.notify=function(){}

/**
*@return: void
*/
OAuthClientScript.prototype.notifyAll=function(){}

/**
* class HashMap
*/
function HashMap(){
}
/**
*@param Object: java.lang.Object
*@return: Object
*/
HashMap.prototype.remove=function(Object){}

/**
*@param Object: java.lang.Object
*@return: Object
*/
HashMap.prototype.get=function(Object){}

/**
*@param Object: java.lang.Object
*@param Object: java.lang.Object
*@return: Object
*/
HashMap.prototype.put=function(Object, Object){}

/**
*@return: Collection
*/
HashMap.prototype.values=function(){}

/**
*@return: Object
*/
HashMap.prototype.clone=function(){}

/**
*@return: void
*/
HashMap.prototype.clear=function(){}

/**
*@return: boolean
*/
HashMap.prototype.isEmpty=function(){}

/**
*@return: int
*/
HashMap.prototype.size=function(){}

/**
*@return: Set
*/
HashMap.prototype.entrySet=function(){}

/**
*@param Map: java.util.Map
*@return: void
*/
HashMap.prototype.putAll=function(Map){}

/**
*@return: Set
*/
HashMap.prototype.keySet=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
HashMap.prototype.containsKey=function(Object){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
HashMap.prototype.containsValue=function(Object){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
HashMap.prototype.equals=function(Object){}

/**
*@return: String
*/
HashMap.prototype.toString=function(){}

/**
*@return: int
*/
HashMap.prototype.hashCode=function(){}

/**
*@param long: long
*@param int: int
*@return: void
*/
HashMap.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
HashMap.prototype.wait=function(long){}

/**
*@return: void
*/
HashMap.prototype.wait=function(){}

/**
*@return: Class
*/
HashMap.prototype.getClass=function(){}

/**
*@return: void
*/
HashMap.prototype.notify=function(){}

/**
*@return: void
*/
HashMap.prototype.notifyAll=function(){}

/**
* class RatingFormulaScript
*/
function RatingFormulaScript(){
}
/**
*@param String: java.lang.String
*@return: RatingFormulaFieldModel
*/
RatingFormulaScript.prototype.getValue=function(String){}

/**
*@param String: java.lang.String
*@param RatingFormulaFieldModel: com.accela.ams.rating.RatingFormulaFieldModel
*@return: void
*/
RatingFormulaScript.prototype.setValue=function(String, RatingFormulaFieldModel){}

/**
*@param String: java.lang.String
*@param long: long
*@return: String
*/
RatingFormulaScript.prototype.addDate=function(String, long){}

/**
*@return: List
*/
RatingFormulaScript.prototype.createParamList=function(){}

/**
*@param Collection: java.util.Collection
*@return: void
*/
RatingFormulaScript.prototype.addDatePatterns=function(Collection){}

/**
*@param Double: java.lang.Double
*@return: void
*/
RatingFormulaScript.prototype.setReturnRating=function(Double){}

/**
*@param String: java.lang.String
*@return: void
*/
RatingFormulaScript.prototype.setCallerID=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: long
*/
RatingFormulaScript.prototype.diffDate=function(String, String){}

/**
*@return: HashMap
*/
RatingFormulaScript.prototype.getInputParams=function(){}

/**
*@param String: java.lang.String
*@return: void
*/
RatingFormulaScript.prototype.setServiceProviderCode=function(String){}

/**
*@return: String
*/
RatingFormulaScript.prototype.getServiceProviderCode=function(){}

/**
*@return: Double
*/
RatingFormulaScript.prototype.getReturnRating=function(){}

/**
*@param HashMap: java.util.HashMap
*@return: void
*/
RatingFormulaScript.prototype.setInputParams=function(HashMap){}

/**
*@param String: java.lang.String
*@return: Date
*/
RatingFormulaScript.prototype.parseDate=function(String){}

/**
*@param String: java.lang.String
*@param List: java.util.List
*@return: Double
*/
RatingFormulaScript.prototype.runExpression=function(String, List){}

/**
*@return: String
*/
RatingFormulaScript.prototype.getScriptText=function(){}

/**
*@return: String
*/
RatingFormulaScript.prototype.getCallerID=function(){}

/**
*@param String: java.lang.String
*@return: void
*/
RatingFormulaScript.prototype.setScriptText=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
RatingFormulaScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
RatingFormulaScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
RatingFormulaScript.prototype.wait=function(long){}

/**
*@return: void
*/
RatingFormulaScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
RatingFormulaScript.prototype.equals=function(Object){}

/**
*@return: String
*/
RatingFormulaScript.prototype.toString=function(){}

/**
*@return: int
*/
RatingFormulaScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
RatingFormulaScript.prototype.getClass=function(){}

/**
*@return: void
*/
RatingFormulaScript.prototype.notify=function(){}

/**
*@return: void
*/
RatingFormulaScript.prototype.notifyAll=function(){}

/**
* class StructureEstablishmentScript
*/
function StructureEstablishmentScript(){
}
/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
StructureEstablishmentScript.prototype.getStructEStablByCapId=function(CapIDModel){}

/**
*@param StructureEstablishmentScriptModel: com.accela.aa.emse.dom.StructureEstablishmentScriptModel
*@return: ScriptResult
*/
StructureEstablishmentScript.prototype.newStructEstab=function(StructureEstablishmentScriptModel){}

/**
*@param StructureEstablishmentScriptModel: com.accela.aa.emse.dom.StructureEstablishmentScriptModel
*@return: ScriptResult
*/
StructureEstablishmentScript.prototype.getStructEstablList=function(StructureEstablishmentScriptModel){}

/**
*@param StructureEstablishmentScriptModel: com.accela.aa.emse.dom.StructureEstablishmentScriptModel
*@return: ScriptResult
*/
StructureEstablishmentScript.prototype.updateStructEstabl=function(StructureEstablishmentScriptModel){}

/**
*@param Long: java.lang.Long
*@param Long: java.lang.Long
*@return: ScriptResult
*/
StructureEstablishmentScript.prototype.getStructEstablByPK=function(Long, Long){}

/**
*@param Long: java.lang.Long
*@param Long: java.lang.Long
*@param String: java.lang.String
*@return: ScriptResult
*/
StructureEstablishmentScript.prototype.disableStructEstabl=function(Long, Long, String){}

/**
*@param StringArray: [Ljava.lang.String;
*@return: StructureEstablishmentScriptModel
*/
StructureEstablishmentScript.prototype.getStructureEstablishmentModeData=function(StringArray){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
StructureEstablishmentScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
StructureEstablishmentScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
StructureEstablishmentScript.prototype.wait=function(long){}

/**
*@return: void
*/
StructureEstablishmentScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
StructureEstablishmentScript.prototype.equals=function(Object){}

/**
*@return: String
*/
StructureEstablishmentScript.prototype.toString=function(){}

/**
*@return: int
*/
StructureEstablishmentScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
StructureEstablishmentScript.prototype.getClass=function(){}

/**
*@return: void
*/
StructureEstablishmentScript.prototype.notify=function(){}

/**
*@return: void
*/
StructureEstablishmentScript.prototype.notifyAll=function(){}

/**
* class ContractorLicenseScript
*/
function ContractorLicenseScript(){
}
/**
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: ScriptResult
*/
ContractorLicenseScript.prototype.getContrLicenseByLicSeqNBR=function(String, Long){}

/**
*@param Long: java.lang.Long
*@param Long: java.lang.Long
*@return: ScriptResult
*/
ContractorLicenseScript.prototype.getContrLicenseByLicSeqNBR=function(Long, Long){}

/**
*@param Long: java.lang.Long
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ContractorLicenseScript.prototype.sendIssueNoticeEmail=function(Long, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ContractorLicenseScript.prototype.sendApprovNoticeEmailToUser=function(String, String, String){}

/**
*@param ContractorLicenseModel: com.accela.pa.people.license.ContractorLicenseModel
*@return: ScriptResult
*/
ContractorLicenseScript.prototype.updateContractorLicense=function(ContractorLicenseModel){}

/**
*@param Long: java.lang.Long
*@param LicenseModel: com.accela.aa.aamain.people.LicenseModel
*@param boolean: boolean
*@param boolean: boolean
*@return: ScriptResult
*/
ContractorLicenseScript.prototype.issueContrLicWithExpired=function(Long, LicenseModel, boolean, boolean){}

/**
*@param Long: java.lang.Long
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ContractorLicenseScript.prototype.sendNoticeEmailToRelatedAccounts=function(Long, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ContractorLicenseScript.prototype.getContrLicListByUserSeqNBR=function(String, String){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
ContractorLicenseScript.prototype.getContrLicListByUserSeqNBR=function(Long){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
ContractorLicenseScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ContractorLicenseScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ContractorLicenseScript.prototype.wait=function(long){}

/**
*@return: void
*/
ContractorLicenseScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ContractorLicenseScript.prototype.equals=function(Object){}

/**
*@return: String
*/
ContractorLicenseScript.prototype.toString=function(){}

/**
*@return: int
*/
ContractorLicenseScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
ContractorLicenseScript.prototype.getClass=function(){}

/**
*@return: void
*/
ContractorLicenseScript.prototype.notify=function(){}

/**
*@return: void
*/
ContractorLicenseScript.prototype.notifyAll=function(){}

/**
* class SpecialSearchScript
*/
function SpecialSearchScript(){
}
/**
*@return: ScriptResult
*/
SpecialSearchScript.prototype.newSearchDataModel=function(){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param GenericSearchModelArray: [Lcom.accela.aa.aamain.people.GenericSearchModel;
*@return: ScriptResult
*/
SpecialSearchScript.prototype.recreateBatchSearchData=function(CapIDModel, GenericSearchModelArray){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
SpecialSearchScript.prototype.isTradeNameExist=function(String, String){}

/**
*@param GenericSearchModel: com.accela.aa.aamain.people.GenericSearchModel
*@return: ScriptResult
*/
SpecialSearchScript.prototype.getSearchDataList=function(GenericSearchModel){}

/**
*@param GenericSearchModelArray: [Lcom.accela.aa.aamain.people.GenericSearchModel;
*@return: ScriptResult
*/
SpecialSearchScript.prototype.createBatchSearchData=function(GenericSearchModelArray){}

/**
*@param GenericSearchModel: com.accela.aa.aamain.people.GenericSearchModel
*@return: ScriptResult
*/
SpecialSearchScript.prototype.createSearchData=function(GenericSearchModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
SpecialSearchScript.prototype.getPureEnglishText=function(String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
SpecialSearchScript.prototype.updateSearchDataStatusByCapID=function(CapIDModel, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
SpecialSearchScript.prototype.getPureArabicText=function(String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
SpecialSearchScript.prototype.removeSearchDataByCapID=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
SpecialSearchScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
SpecialSearchScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
SpecialSearchScript.prototype.wait=function(long){}

/**
*@return: void
*/
SpecialSearchScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
SpecialSearchScript.prototype.equals=function(Object){}

/**
*@return: String
*/
SpecialSearchScript.prototype.toString=function(){}

/**
*@return: int
*/
SpecialSearchScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
SpecialSearchScript.prototype.getClass=function(){}

/**
*@return: void
*/
SpecialSearchScript.prototype.notify=function(){}

/**
*@return: void
*/
SpecialSearchScript.prototype.notifyAll=function(){}

/**
* class ReconciliationScript
*/
function ReconciliationScript(){
}
/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setSubject=function(String){}

/**
*@param StringArray: [Ljava.lang.String;
*@return: void
*/
ReconciliationScript.prototype.setSuccessFileFieldValues=function(StringArray){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
ReconciliationScript.prototype.updateUploadStatusLog=function(String){}

/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setFileNamePrefix=function(String){}

/**
*@param String: java.lang.String
*@param Hashtable: java.util.Hashtable
*@return: String
*/
ReconciliationScript.prototype.getCustomContentByType=function(String, Hashtable){}

/**
*@param boolean: boolean
*@return: void
*/
ReconciliationScript.prototype.setUploadToFTP=function(boolean){}

/**
*@param StringArray: [Ljava.lang.String;
*@return: void
*/
ReconciliationScript.prototype.setFailedFileFieldNames=function(StringArray){}

/**
*@param StringArray: [Ljava.lang.String;
*@return: void
*/
ReconciliationScript.prototype.setFailedFileFieldTitles=function(StringArray){}

/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setTransStartDate=function(String){}

/**
*@param StringArray: [Ljava.lang.String;
*@return: void
*/
ReconciliationScript.prototype.setSuccessFileFieldNames=function(StringArray){}

/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setFtpPassword=function(String){}

/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setFtpUserName=function(String){}

/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setTransEndDate=function(String){}

/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setLocalDiskFolder=function(String){}

/**
*@param StringArray: [Ljava.lang.String;
*@return: void
*/
ReconciliationScript.prototype.setFailedFileFieldValues=function(StringArray){}

/**
*@return: ScriptResult
*/
ReconciliationScript.prototype.uploadTransactionFile=function(){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
ReconciliationScript.prototype.recoverTransactionFile=function(String){}

/**
*@param StringArray: [Ljava.lang.String;
*@return: void
*/
ReconciliationScript.prototype.setSuccessFileFieldTitles=function(StringArray){}

/**
*@return: ScriptResult
*/
ReconciliationScript.prototype.generateFailedTransactionFile=function(){}

/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setFromMailAddress=function(String){}

/**
*@return: Date
*/
ReconciliationScript.prototype.getTransEndDate=function(){}

/**
*@param Map: java.util.Map
*@return: void
*/
ReconciliationScript.prototype.setMessageResources=function(Map){}

/**
*@return: Date
*/
ReconciliationScript.prototype.getTransStartDate=function(){}

/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setToMailAddress=function(String){}

/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setCcMailAddress=function(String){}

/**
*@param int: int
*@return: void
*/
ReconciliationScript.prototype.setWSProjectId=function(int){}

/**
*@param int: int
*@return: void
*/
ReconciliationScript.prototype.setWSDateStoreId=function(int){}

/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setProvider=function(String){}

/**
*@return: String
*/
ReconciliationScript.prototype.getServiceProviderCode=function(){}

/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setContent=function(String){}

/**
*@return: String
*/
ReconciliationScript.prototype.getCurrentDate=function(){}

/**
*@return: ScriptResult
*/
ReconciliationScript.prototype.sendMail=function(){}

/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setWSEndPoint=function(String){}

/**
*@param boolean: boolean
*@return: void
*/
ReconciliationScript.prototype.setTestMode=function(boolean){}

/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setFtpFolder=function(String){}

/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setWSPassword=function(String){}

/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setFtpPort=function(String){}

/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setFtpSite=function(String){}

/**
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.setWSUserName=function(String){}

/**
*@return: ScriptResult
*/
ReconciliationScript.prototype.generateApprovedTransactionFile=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
ReconciliationScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ReconciliationScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ReconciliationScript.prototype.wait=function(long){}

/**
*@return: void
*/
ReconciliationScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ReconciliationScript.prototype.equals=function(Object){}

/**
*@return: String
*/
ReconciliationScript.prototype.toString=function(){}

/**
*@return: int
*/
ReconciliationScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
ReconciliationScript.prototype.getClass=function(){}

/**
*@return: void
*/
ReconciliationScript.prototype.notify=function(){}

/**
*@return: void
*/
ReconciliationScript.prototype.notifyAll=function(){}

/**
* class ShoppingCartScript
*/
function ShoppingCartScript(){
}
/**
*@return: ScriptResult
*/
ShoppingCartScript.prototype.removeSavedExpireItems=function(){}

/**
*@return: ScriptResult
*/
ShoppingCartScript.prototype.removeSelectedExpireItems=function(){}

/**
*@return: ScriptResult
*/
ShoppingCartScript.prototype.removeExpireShoppingCartItems=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
ShoppingCartScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ShoppingCartScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ShoppingCartScript.prototype.wait=function(long){}

/**
*@return: void
*/
ShoppingCartScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ShoppingCartScript.prototype.equals=function(Object){}

/**
*@return: String
*/
ShoppingCartScript.prototype.toString=function(){}

/**
*@return: int
*/
ShoppingCartScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
ShoppingCartScript.prototype.getClass=function(){}

/**
*@return: void
*/
ShoppingCartScript.prototype.notify=function(){}

/**
*@return: void
*/
ShoppingCartScript.prototype.notifyAll=function(){}

/**
* class GlobalSearchScript
*/
function GlobalSearchScript(){
}
/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GlobalSearchScript.prototype.rebuildIndex=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
GlobalSearchScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
GlobalSearchScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
GlobalSearchScript.prototype.wait=function(long){}

/**
*@return: void
*/
GlobalSearchScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
GlobalSearchScript.prototype.equals=function(Object){}

/**
*@return: String
*/
GlobalSearchScript.prototype.toString=function(){}

/**
*@return: int
*/
GlobalSearchScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
GlobalSearchScript.prototype.getClass=function(){}

/**
*@return: void
*/
GlobalSearchScript.prototype.notify=function(){}

/**
*@return: void
*/
GlobalSearchScript.prototype.notifyAll=function(){}

/**
* class CommonConditionScript
*/
function CommonConditionScript(){
}
/**
*@param long: long
*@param String: java.lang.String
*@return: ScriptResult
*/
CommonConditionScript.prototype.getCapIDsByRefConditionIDAndType=function(long, String){}

/**
*@param CommonConditionScriptModel: com.accela.aa.emse.dom.CommonConditionScriptModel
*@return: ScriptResult
*/
CommonConditionScript.prototype.addCommonCondition=function(CommonConditionScriptModel){}

/**
*@param CommonConditionModel: com.accela.aa.condition.condition.CommonConditionModel
*@return: ScriptResult
*/
CommonConditionScript.prototype.addCommonCondition=function(CommonConditionModel){}

/**
*@param CommonConditionScriptModel: com.accela.aa.emse.dom.CommonConditionScriptModel
*@return: ScriptResult
*/
CommonConditionScript.prototype.editCommonCondition=function(CommonConditionScriptModel){}

/**
*@return: ScriptResult
*/
CommonConditionScript.prototype.getNewCommonConditionModel=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@return: ScriptResult
*/
CommonConditionScript.prototype.removeCommonCondition=function(String, String, long){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CommonConditionScript.prototype.getCommonConditions=function(String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param long: long
*@return: ScriptResult
*/
CommonConditionScript.prototype.getCommonCondition=function(String, String, long){}

/**
*@return: ScriptResult
*/
CommonConditionScript.prototype.getNewConditionScriptModel=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
CommonConditionScript.prototype.createCommonConditionFromStdCondition=function(String, String, String){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CommonConditionScript.prototype.getCondition=function(ConditionModel, String){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CommonConditionScript.prototype.getCondition=function(ConditionScriptModel, String){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
CommonConditionScript.prototype.getAssetCondition=function(long, long){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@return: ScriptResult
*/
CommonConditionScript.prototype.createCondition=function(ConditionModel){}

/**
*@param ConditionModelArray: [Lcom.accela.aa.condition.condition.ConditionModel;
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@return: ScriptResult
*/
CommonConditionScript.prototype.createCondition=function(ConditionModelArray, ConditionModel){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@return: ScriptResult
*/
CommonConditionScript.prototype.createCondition=function(ConditionScriptModel){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: ScriptResult
*/
CommonConditionScript.prototype.editTableValue4TemplateTable=function(EntityPKModel, GenericTemplateFieldPK, String, Long){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@param String: java.lang.String
*@return: ScriptResult
*/
CommonConditionScript.prototype.editField4TemplateForm=function(EntityPKModel, GenericTemplateFieldPK, String){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@return: ScriptResult
*/
CommonConditionScript.prototype.getFields4TemplateTable=function(EntityPKModel, GenericTemplateFieldPK){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@return: ScriptResult
*/
CommonConditionScript.prototype.getFields4TemplateForm=function(EntityPKModel, GenericTemplateFieldPK){}

/**
*@return: ScriptResult
*/
CommonConditionScript.prototype.getNewOwnerConditionScriptModel=function(){}

/**
*@return: ScriptResult
*/
CommonConditionScript.prototype.getNewAssetConditionScriptModel=function(){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CommonConditionScript.prototype.createConditionFromStdCondition=function(ConditionModel, String){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
CommonConditionScript.prototype.createConditionFromStdCondition=function(ConditionScriptModel, String){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
CommonConditionScript.prototype.getOwnerCondition=function(long, long){}

/**
*@param ConditionScriptModelArray: [Lcom.accela.aa.emse.dom.ConditionScriptModel;
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@return: ScriptResult
*/
CommonConditionScript.prototype.createConditionWithMulLangs=function(ConditionScriptModelArray, ConditionScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
CommonConditionScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
CommonConditionScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
CommonConditionScript.prototype.wait=function(long){}

/**
*@return: void
*/
CommonConditionScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
CommonConditionScript.prototype.equals=function(Object){}

/**
*@return: String
*/
CommonConditionScript.prototype.toString=function(){}

/**
*@return: int
*/
CommonConditionScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
CommonConditionScript.prototype.getClass=function(){}

/**
*@return: void
*/
CommonConditionScript.prototype.notify=function(){}

/**
*@return: void
*/
CommonConditionScript.prototype.notifyAll=function(){}

/**
* class EducationScript
*/
function EducationScript(){
}
/**
*@param EducationScriptModel: com.accela.aa.emse.dom.EducationScriptModel
*@return: ScriptResult
*/
EducationScript.prototype.updateEducationModel=function(EducationScriptModel){}

/**
*@param CapIDScriptModel: com.accela.aa.emse.dom.CapIDScriptModel
*@return: ScriptResult
*/
EducationScript.prototype.getEducationList=function(CapIDScriptModel){}

/**
*@param List: java.util.List
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
EducationScript.prototype.autoApproveEducations=function(List, CapIDModel){}

/**
*@return: ScriptResult
*/
EducationScript.prototype.getEducationScriptModel=function(){}

/**
*@param List: java.util.List
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
EducationScript.prototype.copyPeopleEducationList=function(List, CapIDModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
EducationScript.prototype.getPeopleEducationList=function(String){}

/**
*@param EducationScriptModel: com.accela.aa.emse.dom.EducationScriptModel
*@return: ScriptResult
*/
EducationScript.prototype.deleteEducationModel=function(EducationScriptModel){}

/**
*@param EducationScriptModel: com.accela.aa.emse.dom.EducationScriptModel
*@return: ScriptResult
*/
EducationScript.prototype.createEducationModel=function(EducationScriptModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
EducationScript.prototype.copyEducationList=function(CapIDModel, CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
EducationScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
EducationScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
EducationScript.prototype.wait=function(long){}

/**
*@return: void
*/
EducationScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
EducationScript.prototype.equals=function(Object){}

/**
*@return: String
*/
EducationScript.prototype.toString=function(){}

/**
*@return: int
*/
EducationScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
EducationScript.prototype.getClass=function(){}

/**
*@return: void
*/
EducationScript.prototype.notify=function(){}

/**
*@return: void
*/
EducationScript.prototype.notifyAll=function(){}

/**
* class ContinuingEducationScript
*/
function ContinuingEducationScript(){
}
/**
*@param CapIDScriptModel: com.accela.aa.emse.dom.CapIDScriptModel
*@return: ScriptResult
*/
ContinuingEducationScript.prototype.getContEducationList=function(CapIDScriptModel){}

/**
*@param ContinuingEducationScriptModel: com.accela.aa.emse.dom.ContinuingEducationScriptModel
*@return: ScriptResult
*/
ContinuingEducationScript.prototype.createContinuingEducationModel=function(ContinuingEducationScriptModel){}

/**
*@param ContinuingEducationScriptModel: com.accela.aa.emse.dom.ContinuingEducationScriptModel
*@return: ScriptResult
*/
ContinuingEducationScript.prototype.deleteContinuingEducationModel=function(ContinuingEducationScriptModel){}

/**
*@param ContinuingEducationScriptModel: com.accela.aa.emse.dom.ContinuingEducationScriptModel
*@return: ScriptResult
*/
ContinuingEducationScript.prototype.updateContinuingEducationModel=function(ContinuingEducationScriptModel){}

/**
*@param CapIDScriptModel: com.accela.aa.emse.dom.CapIDScriptModel
*@return: ScriptResult
*/
ContinuingEducationScript.prototype.isContinuingEducationPassed=function(CapIDScriptModel){}

/**
*@param TaskItemModel: com.accela.aa.workflow.workflow.TaskItemModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
ContinuingEducationScript.prototype.autoApproveRequiredCEHs=function(TaskItemModel, CapIDModel){}

/**
*@return: ScriptResult
*/
ContinuingEducationScript.prototype.getContinuingEducationModel=function(){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
ContinuingEducationScript.prototype.copyContEducationList=function(CapIDModel, CapIDModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
ContinuingEducationScript.prototype.getPeopleContEducationList=function(String){}

/**
*@param List: java.util.List
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
ContinuingEducationScript.prototype.copyPeopleContEducationList=function(List, CapIDModel){}

/**
*@param List: java.util.List
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
ContinuingEducationScript.prototype.autoApproveCEHs=function(List, CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
ContinuingEducationScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ContinuingEducationScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ContinuingEducationScript.prototype.wait=function(long){}

/**
*@return: void
*/
ContinuingEducationScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ContinuingEducationScript.prototype.equals=function(Object){}

/**
*@return: String
*/
ContinuingEducationScript.prototype.toString=function(){}

/**
*@return: int
*/
ContinuingEducationScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
ContinuingEducationScript.prototype.getClass=function(){}

/**
*@return: void
*/
ContinuingEducationScript.prototype.notify=function(){}

/**
*@return: void
*/
ContinuingEducationScript.prototype.notifyAll=function(){}

/**
* class ExaminationScript
*/
function ExaminationScript(){
}
/**
*@param String: java.lang.String
*@return: ScriptResult
*/
ExaminationScript.prototype.getRefExaminationListByName=function(String){}

/**
*@return: ScriptResult
*/
ExaminationScript.prototype.getExaminationModel=function(){}

/**
*@param ExaminationScriptModel: com.accela.aa.emse.dom.ExaminationScriptModel
*@return: ScriptResult
*/
ExaminationScript.prototype.updateExaminationModel=function(ExaminationScriptModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
ExaminationScript.prototype.getAvailableSchedules=function(String){}

/**
*@param CapIDScriptModel: com.accela.aa.emse.dom.CapIDScriptModel
*@return: ScriptResult
*/
ExaminationScript.prototype.getExaminationList=function(CapIDScriptModel){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
ExaminationScript.prototype.getProviderEventModel=function(Long){}

/**
*@param Long: java.lang.Long
*@param Long: java.lang.Long
*@param Long: java.lang.Long
*@param List: java.util.List
*@return: ScriptResult
*/
ExaminationScript.prototype.batchScheduleExam=function(Long, Long, Long, List){}

/**
*@param CapIDScriptModel: com.accela.aa.emse.dom.CapIDScriptModel
*@return: ScriptResult
*/
ExaminationScript.prototype.getAvailableExamAfterWorkflowUpdated=function(CapIDScriptModel){}

/**
*@param ProviderRosterModel: com.accela.orm.model.education.ProviderRosterModel
*@return: ScriptResult
*/
ExaminationScript.prototype.getXRefExaminationProviderModelByRoster=function(ProviderRosterModel){}

/**
*@param List: java.util.List
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
ExaminationScript.prototype.autoApproveExams=function(List, CapIDModel){}

/**
*@param CapIDScriptModel: com.accela.aa.emse.dom.CapIDScriptModel
*@return: ScriptResult
*/
ExaminationScript.prototype.isExaminationPassed=function(CapIDScriptModel){}

/**
*@param Long: java.lang.Long
*@param StringArray: [Ljava.lang.String;
*@return: ScriptResult
*/
ExaminationScript.prototype.getExamScore=function(Long, StringArray){}

/**
*@param TaskItemModel: com.accela.aa.workflow.workflow.TaskItemModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
ExaminationScript.prototype.autoApproveRequiredExams=function(TaskItemModel, CapIDModel){}

/**
*@param List: java.util.List
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
ExaminationScript.prototype.copyPeopleExaminationList=function(List, CapIDModel){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
ExaminationScript.prototype.copyExaminationList=function(CapIDModel, CapIDModel){}

/**
*@return: ScriptResult
*/
ExaminationScript.prototype.getExternalExamScores=function(){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
ExaminationScript.prototype.getPeopleExaminationList=function(String){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
ExaminationScript.prototype.getExaminationModelByRosterID=function(Long){}

/**
*@param List: java.util.List
*@return: ScriptResult
*/
ExaminationScript.prototype.updateExamScore=function(List){}

/**
*@param ExaminationScriptModel: com.accela.aa.emse.dom.ExaminationScriptModel
*@return: ScriptResult
*/
ExaminationScript.prototype.deleteExaminationModel=function(ExaminationScriptModel){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
ExaminationScript.prototype.getExamNameAndProviderName=function(Long){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
ExaminationScript.prototype.getRosterModelListByEventID=function(Long){}

/**
*@param ExaminationModel: com.accela.orm.model.education.ExaminationModel
*@return: ScriptResult
*/
ExaminationScript.prototype.getExamSiteByExamModel=function(ExaminationModel){}

/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
ExaminationScript.prototype.getRosterIDListByEventID=function(Long){}

/**
*@param ExaminationScriptModel: com.accela.aa.emse.dom.ExaminationScriptModel
*@return: ScriptResult
*/
ExaminationScript.prototype.createExaminationModel=function(ExaminationScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
ExaminationScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ExaminationScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ExaminationScript.prototype.wait=function(long){}

/**
*@return: void
*/
ExaminationScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ExaminationScript.prototype.equals=function(Object){}

/**
*@return: String
*/
ExaminationScript.prototype.toString=function(){}

/**
*@return: int
*/
ExaminationScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
ExaminationScript.prototype.getClass=function(){}

/**
*@return: void
*/
ExaminationScript.prototype.notify=function(){}

/**
*@return: void
*/
ExaminationScript.prototype.notifyAll=function(){}

/**
* class WSConsumerScript
*/
function WSConsumerScript(){
}
/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param ObjectArray: [Ljava.lang.Object;
*@return: ScriptResult
*/
WSConsumerScript.prototype.consume=function(String, String, ObjectArray){}

/**
*@return: WSConsumerService
*/
WSConsumerScript.prototype.getWSConsumerService=function(){}

/**
*@param WSConsumerService: com.accela.wsconsumer.WSConsumerService
*@return: void
*/
WSConsumerScript.prototype.setWSConsumerService=function(WSConsumerService){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
WSConsumerScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
WSConsumerScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
WSConsumerScript.prototype.wait=function(long){}

/**
*@return: void
*/
WSConsumerScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
WSConsumerScript.prototype.equals=function(Object){}

/**
*@return: String
*/
WSConsumerScript.prototype.toString=function(){}

/**
*@return: int
*/
WSConsumerScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
WSConsumerScript.prototype.getClass=function(){}

/**
*@return: void
*/
WSConsumerScript.prototype.notify=function(){}

/**
*@return: void
*/
WSConsumerScript.prototype.notifyAll=function(){}

/**
* class DocumentScript
*/
function DocumentScript(){
}
/**
*@param DocumentModel: com.accela.aa.ads.ads.DocumentModel
*@return: ScriptResult
*/
DocumentScript.prototype.createDocument=function(DocumentModel){}

/**
*@param DocumentModel: com.accela.aa.ads.ads.DocumentModel
*@return: ScriptResult
*/
DocumentScript.prototype.updateDocument=function(DocumentModel){}

/**
*@return: ScriptResult
*/
DocumentScript.prototype.getTaskItemModel=function(){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@return: ScriptResult
*/
DocumentScript.prototype.getCapDocumentList=function(CapIDModel, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
DocumentScript.prototype.getDocumentByPK=function(String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
DocumentScript.prototype.removeDocumentByPK=function(String, String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
DocumentScript.prototype.getRefDocument=function(String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param Hashtable: java.util.Hashtable
*@param StringArray: [Ljava.lang.String;
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
DocumentScript.prototype.attachEmailToEntity=function(String, String, String, String, Hashtable, StringArray, String, String){}

/**
*@param DocumentModel: com.accela.aa.ads.ads.DocumentModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
DocumentScript.prototype.createDocumentAssociation=function(DocumentModel, String, String){}

/**
*@param DocumentEntityAssociationModel: com.accela.orm.model.document.DocumentEntityAssociationModel
*@return: ScriptResult
*/
DocumentScript.prototype.assignReviewer=function(DocumentEntityAssociationModel){}

/**
*@param DocumentModel: com.accela.aa.ads.ads.DocumentModel
*@return: ScriptResult
*/
DocumentScript.prototype.getOriginalDoc=function(DocumentModel){}

/**
*@param DocumentEntityAssociationModel: com.accela.orm.model.document.DocumentEntityAssociationModel
*@return: ScriptResult
*/
DocumentScript.prototype.updateReviewTask=function(DocumentEntityAssociationModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param Hashtable: java.util.Hashtable
*@param CapIDScriptModel: com.accela.aa.emse.dom.CapIDScriptModel
*@param StringArray: [Ljava.lang.String;
*@return: ScriptResult
*/
DocumentScript.prototype.sendEmailAndSaveAsDocument=function(String, String, String, String, Hashtable, CapIDScriptModel, StringArray){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
DocumentScript.prototype.getCapTaskByCapID=function(CapIDModel){}

/**
*@param String: java.lang.String
*@param DocumentModel: com.accela.aa.ads.ads.DocumentModel
*@return: ScriptResult
*/
DocumentScript.prototype.getACADocumentUrl=function(String, DocumentModel){}

/**
*@param Long: java.lang.Long
*@param TaskItemModel: com.accela.aa.workflow.workflow.TaskItemModel
*@return: ScriptResult
*/
DocumentScript.prototype.getRelatedReviewers=function(Long, TaskItemModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param Hashtable: java.util.Hashtable
*@param StringArray: [Ljava.lang.String;
*@return: ScriptResult
*/
DocumentScript.prototype.sendEmailByTemplateName=function(String, String, String, String, Hashtable, StringArray){}

/**
*@param List: java.util.List
*@param TaskItemModel: com.accela.aa.workflow.workflow.TaskItemModel
*@return: ScriptResult
*/
DocumentScript.prototype.associateDoc2Task=function(List, TaskItemModel){}

/**
*@return: ScriptResult
*/
DocumentScript.prototype.newDocumentContentModel=function(){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
DocumentScript.prototype.getDocumentListByEntity=function(String, String){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
DocumentScript.prototype.removeDocumentAssociation=function(String){}

/**
*@param DocumentModel: com.accela.aa.ads.ads.DocumentModel
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param boolean: boolean
*@return: ScriptResult
*/
DocumentScript.prototype.downloadFile2Disk=function(DocumentModel, String, String, String, boolean){}

/**
*@param List: java.util.List
*@param List: java.util.List
*@param TaskItemModel: com.accela.aa.workflow.workflow.TaskItemModel
*@return: ScriptResult
*/
DocumentScript.prototype.associateReviewer2Doc=function(List, List, TaskItemModel){}

/**
*@return: ScriptResult
*/
DocumentScript.prototype.newDocumentModel=function(){}

/**
*@param DocumentEntityAssociationModel: com.accela.orm.model.document.DocumentEntityAssociationModel
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@return: ScriptResult
*/
DocumentScript.prototype.getDocumentEntityAssociationList=function(DocumentEntityAssociationModel, CapIDModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@param StringArray: [Ljava.lang.String;
*@param ProcessNoteScriptModel: com.accela.aa.emse.dom.ProcessNoteScriptModel
*@return: ScriptResult
*/
DocumentScript.prototype.sendEmailAndSaveAsDocument4Workflow=function(String, String, String, String, String, StringArray, ProcessNoteScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
DocumentScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
DocumentScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
DocumentScript.prototype.wait=function(long){}

/**
*@return: void
*/
DocumentScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
DocumentScript.prototype.equals=function(Object){}

/**
*@return: String
*/
DocumentScript.prototype.toString=function(){}

/**
*@return: int
*/
DocumentScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
DocumentScript.prototype.getClass=function(){}

/**
*@return: void
*/
DocumentScript.prototype.notify=function(){}

/**
*@return: void
*/
DocumentScript.prototype.notifyAll=function(){}

/**
* class WorkOrderScript
*/
function WorkOrderScript(){
}
/**
*@param CostingModel: com.accela.ams.workorder.CostingModel
*@return: ScriptResult
*/
WorkOrderScript.prototype.createWorkOrderCosting=function(CostingModel){}

/**
*@param CostingModel: com.accela.ams.workorder.CostingModel
*@return: ScriptResult
*/
WorkOrderScript.prototype.deleteWorkOrderCosting=function(CostingModel){}

/**
*@param CostingModel: com.accela.ams.workorder.CostingModel
*@return: ScriptResult
*/
WorkOrderScript.prototype.updateWorkOrderCosting=function(CostingModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
WorkOrderScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
WorkOrderScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
WorkOrderScript.prototype.wait=function(long){}

/**
*@return: void
*/
WorkOrderScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
WorkOrderScript.prototype.equals=function(Object){}

/**
*@return: String
*/
WorkOrderScript.prototype.toString=function(){}

/**
*@return: int
*/
WorkOrderScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
WorkOrderScript.prototype.getClass=function(){}

/**
*@return: void
*/
WorkOrderScript.prototype.notify=function(){}

/**
*@return: void
*/
WorkOrderScript.prototype.notifyAll=function(){}

/**
* class GenericTemplateScript
*/
function GenericTemplateScript(){
}
/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@return: ScriptResult
*/
GenericTemplateScript.prototype.getTemplate=function(EntityPKModel){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
GenericTemplateScript.prototype.getTemplateStructureByGroupName=function(String){}

/**
*@param Long: java.lang.Long
*@param List: java.util.List
*@return: TemplateRow
*/
GenericTemplateScript.prototype.createTemplateRow=function(Long, List){}

/**
*@param Long: java.lang.Long
*@param GenericTemplateAttribute: com.accela.aa.template.field.GenericTemplateAttribute
*@param String: java.lang.String
*@return: GenericTemplateTableValue
*/
GenericTemplateScript.prototype.createGenericTemplateTableValue=function(Long, GenericTemplateAttribute, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
GenericTemplateScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
GenericTemplateScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
GenericTemplateScript.prototype.wait=function(long){}

/**
*@return: void
*/
GenericTemplateScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
GenericTemplateScript.prototype.equals=function(Object){}

/**
*@return: String
*/
GenericTemplateScript.prototype.toString=function(){}

/**
*@return: int
*/
GenericTemplateScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
GenericTemplateScript.prototype.getClass=function(){}

/**
*@return: void
*/
GenericTemplateScript.prototype.notify=function(){}

/**
*@return: void
*/
GenericTemplateScript.prototype.notifyAll=function(){}

/**
* class ConditionScript
*/
function ConditionScript(){
}
/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@param String: java.lang.String
*@return: ScriptResult
*/
ConditionScript.prototype.getCondition=function(ConditionModel, String){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
ConditionScript.prototype.getCondition=function(ConditionScriptModel, String){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
ConditionScript.prototype.getAssetCondition=function(long, long){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@return: ScriptResult
*/
ConditionScript.prototype.createCondition=function(ConditionModel){}

/**
*@param ConditionModelArray: [Lcom.accela.aa.condition.condition.ConditionModel;
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@return: ScriptResult
*/
ConditionScript.prototype.createCondition=function(ConditionModelArray, ConditionModel){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@return: ScriptResult
*/
ConditionScript.prototype.createCondition=function(ConditionScriptModel){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: ScriptResult
*/
ConditionScript.prototype.editTableValue4TemplateTable=function(EntityPKModel, GenericTemplateFieldPK, String, Long){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@param String: java.lang.String
*@return: ScriptResult
*/
ConditionScript.prototype.editField4TemplateForm=function(EntityPKModel, GenericTemplateFieldPK, String){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@return: ScriptResult
*/
ConditionScript.prototype.getFields4TemplateTable=function(EntityPKModel, GenericTemplateFieldPK){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@return: ScriptResult
*/
ConditionScript.prototype.getFields4TemplateForm=function(EntityPKModel, GenericTemplateFieldPK){}

/**
*@return: ScriptResult
*/
ConditionScript.prototype.getNewOwnerConditionScriptModel=function(){}

/**
*@return: ScriptResult
*/
ConditionScript.prototype.getNewAssetConditionScriptModel=function(){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@param String: java.lang.String
*@return: ScriptResult
*/
ConditionScript.prototype.createConditionFromStdCondition=function(ConditionModel, String){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
ConditionScript.prototype.createConditionFromStdCondition=function(ConditionScriptModel, String){}

/**
*@return: ScriptResult
*/
ConditionScript.prototype.getNewConditionScriptModel=function(){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
ConditionScript.prototype.getOwnerCondition=function(long, long){}

/**
*@param ConditionScriptModelArray: [Lcom.accela.aa.emse.dom.ConditionScriptModel;
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@return: ScriptResult
*/
ConditionScript.prototype.createConditionWithMulLangs=function(ConditionScriptModelArray, ConditionScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
ConditionScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ConditionScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ConditionScript.prototype.wait=function(long){}

/**
*@return: void
*/
ConditionScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ConditionScript.prototype.equals=function(Object){}

/**
*@return: String
*/
ConditionScript.prototype.toString=function(){}

/**
*@return: int
*/
ConditionScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
ConditionScript.prototype.getClass=function(){}

/**
*@return: void
*/
ConditionScript.prototype.notify=function(){}

/**
*@return: void
*/
ConditionScript.prototype.notifyAll=function(){}

/**
* class OwnerConditionScript
*/
function OwnerConditionScript(){
}
/**
*@param OwnerConditionScriptModel: com.accela.aa.emse.dom.OwnerConditionScriptModel
*@return: ScriptResult
*/
OwnerConditionScript.prototype.createOwnerCondition=function(OwnerConditionScriptModel){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
OwnerConditionScript.prototype.removeOwnerCondition=function(long, long){}

/**
*@param OwnerConditionScriptModel: com.accela.aa.emse.dom.OwnerConditionScriptModel
*@return: ScriptResult
*/
OwnerConditionScript.prototype.editOwnerCondition=function(OwnerConditionScriptModel){}

/**
*@param long: long
*@return: ScriptResult
*/
OwnerConditionScript.prototype.getOwnerConditions=function(long){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
OwnerConditionScript.prototype.getOwnerCondition=function(long, long){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
OwnerConditionScript.prototype.createOwnerConditionFromStdCondition=function(String, String){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@param String: java.lang.String
*@return: ScriptResult
*/
OwnerConditionScript.prototype.getCondition=function(ConditionModel, String){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
OwnerConditionScript.prototype.getCondition=function(ConditionScriptModel, String){}

/**
*@param long: long
*@param long: long
*@return: ScriptResult
*/
OwnerConditionScript.prototype.getAssetCondition=function(long, long){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@return: ScriptResult
*/
OwnerConditionScript.prototype.createCondition=function(ConditionModel){}

/**
*@param ConditionModelArray: [Lcom.accela.aa.condition.condition.ConditionModel;
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@return: ScriptResult
*/
OwnerConditionScript.prototype.createCondition=function(ConditionModelArray, ConditionModel){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@return: ScriptResult
*/
OwnerConditionScript.prototype.createCondition=function(ConditionScriptModel){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@param String: java.lang.String
*@param Long: java.lang.Long
*@return: ScriptResult
*/
OwnerConditionScript.prototype.editTableValue4TemplateTable=function(EntityPKModel, GenericTemplateFieldPK, String, Long){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@param String: java.lang.String
*@return: ScriptResult
*/
OwnerConditionScript.prototype.editField4TemplateForm=function(EntityPKModel, GenericTemplateFieldPK, String){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@return: ScriptResult
*/
OwnerConditionScript.prototype.getFields4TemplateTable=function(EntityPKModel, GenericTemplateFieldPK){}

/**
*@param EntityPKModel: com.accela.aa.template.entity.EntityPKModel
*@param GenericTemplateFieldPK: com.accela.aa.template.field.GenericTemplateFieldPK
*@return: ScriptResult
*/
OwnerConditionScript.prototype.getFields4TemplateForm=function(EntityPKModel, GenericTemplateFieldPK){}

/**
*@return: ScriptResult
*/
OwnerConditionScript.prototype.getNewOwnerConditionScriptModel=function(){}

/**
*@return: ScriptResult
*/
OwnerConditionScript.prototype.getNewAssetConditionScriptModel=function(){}

/**
*@param ConditionModel: com.accela.aa.condition.condition.ConditionModel
*@param String: java.lang.String
*@return: ScriptResult
*/
OwnerConditionScript.prototype.createConditionFromStdCondition=function(ConditionModel, String){}

/**
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@param String: java.lang.String
*@return: ScriptResult
*/
OwnerConditionScript.prototype.createConditionFromStdCondition=function(ConditionScriptModel, String){}

/**
*@return: ScriptResult
*/
OwnerConditionScript.prototype.getNewConditionScriptModel=function(){}

/**
*@param ConditionScriptModelArray: [Lcom.accela.aa.emse.dom.ConditionScriptModel;
*@param ConditionScriptModel: com.accela.aa.emse.dom.ConditionScriptModel
*@return: ScriptResult
*/
OwnerConditionScript.prototype.createConditionWithMulLangs=function(ConditionScriptModelArray, ConditionScriptModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
OwnerConditionScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
OwnerConditionScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
OwnerConditionScript.prototype.wait=function(long){}

/**
*@return: void
*/
OwnerConditionScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
OwnerConditionScript.prototype.equals=function(Object){}

/**
*@return: String
*/
OwnerConditionScript.prototype.toString=function(){}

/**
*@return: int
*/
OwnerConditionScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
OwnerConditionScript.prototype.getClass=function(){}

/**
*@return: void
*/
OwnerConditionScript.prototype.notify=function(){}

/**
*@return: void
*/
OwnerConditionScript.prototype.notifyAll=function(){}

/**
* class ActivityScript
*/
function ActivityScript(){
}
/**
*@param Long: java.lang.Long
*@return: ScriptResult
*/
ActivityScript.prototype.getActivityByID=function(Long){}

/**
*@param List: java.util.List
*@return: ScriptResult
*/
ActivityScript.prototype.deleteActivities=function(List){}

/**
*@return: ScriptResult
*/
ActivityScript.prototype.getNewActivityModel=function(){}

/**
*@param ActivityModel: com.accela.aa.aamain.servicerequest.ActivityModel
*@return: ScriptResult
*/
ActivityScript.prototype.createActivity=function(ActivityModel){}

/**
*@param ActivityModel: com.accela.aa.aamain.servicerequest.ActivityModel
*@return: ScriptResult
*/
ActivityScript.prototype.updateActivity=function(ActivityModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
ActivityScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ActivityScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ActivityScript.prototype.wait=function(long){}

/**
*@return: void
*/
ActivityScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ActivityScript.prototype.equals=function(Object){}

/**
*@return: String
*/
ActivityScript.prototype.toString=function(){}

/**
*@return: int
*/
ActivityScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
ActivityScript.prototype.getClass=function(){}

/**
*@return: void
*/
ActivityScript.prototype.notify=function(){}

/**
*@return: void
*/
ActivityScript.prototype.notifyAll=function(){}

/**
* class ACAPageFlowScript
*/
function ACAPageFlowScript(){
}
/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ACAPageFlowScript.prototype.hideCapPage4ACA=function(CapIDModel, String, String){}

/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
ACAPageFlowScript.prototype.getPageComponents=function(CapIDModel, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
ACAPageFlowScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ACAPageFlowScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ACAPageFlowScript.prototype.wait=function(long){}

/**
*@return: void
*/
ACAPageFlowScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ACAPageFlowScript.prototype.equals=function(Object){}

/**
*@return: String
*/
ACAPageFlowScript.prototype.toString=function(){}

/**
*@return: int
*/
ACAPageFlowScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
ACAPageFlowScript.prototype.getClass=function(){}

/**
*@return: void
*/
ACAPageFlowScript.prototype.notify=function(){}

/**
*@return: void
*/
ACAPageFlowScript.prototype.notifyAll=function(){}

/**
* class GuidesheetScript
*/
function GuidesheetScript(){
}
/**
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param String: java.lang.String
*@param Boolean: java.lang.Boolean
*@return: ScriptResult
*/
GuidesheetScript.prototype.getFailGGuideSheetItemsByCapIDAndInspID=function(CapIDModel, String, Boolean){}

/**
*@param List: java.util.List
*@param CapIDModel: com.accela.aa.aamain.cap.CapIDModel
*@param Long: java.lang.Long
*@param String: java.lang.String
*@return: ScriptResult
*/
GuidesheetScript.prototype.copyGGuideSheetItems=function(List, CapIDModel, Long, String){}

/**
*@param GGuideSheetModel: com.accela.aa.inspection.guidesheet.GGuideSheetModel
*@param String: java.lang.String
*@return: ScriptResult
*/
GuidesheetScript.prototype.updateGGuidesheet=function(GGuideSheetModel, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
GuidesheetScript.prototype.getStatusResultType=function(String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
GuidesheetScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
GuidesheetScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
GuidesheetScript.prototype.wait=function(long){}

/**
*@return: void
*/
GuidesheetScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
GuidesheetScript.prototype.equals=function(Object){}

/**
*@return: String
*/
GuidesheetScript.prototype.toString=function(){}

/**
*@return: int
*/
GuidesheetScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
GuidesheetScript.prototype.getClass=function(){}

/**
*@return: void
*/
GuidesheetScript.prototype.notify=function(){}

/**
*@return: void
*/
GuidesheetScript.prototype.notifyAll=function(){}

/**
* class MessageScript
*/
function MessageScript(){
}
/**
*@param String: java.lang.String
*@param String: java.lang.String
*@param String: java.lang.String
*@return: ScriptResult
*/
MessageScript.prototype.sendAnnouncement=function(String, String, String){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
MessageScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
MessageScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
MessageScript.prototype.wait=function(long){}

/**
*@return: void
*/
MessageScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
MessageScript.prototype.equals=function(Object){}

/**
*@return: String
*/
MessageScript.prototype.toString=function(){}

/**
*@return: int
*/
MessageScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
MessageScript.prototype.getClass=function(){}

/**
*@return: void
*/
MessageScript.prototype.notify=function(){}

/**
*@return: void
*/
MessageScript.prototype.notifyAll=function(){}

/**
* class FailureDocumentScript
*/
function FailureDocumentScript(){
}
/**
*@return: ScriptResult
*/
FailureDocumentScript.prototype.reuploadFailureDocuments=function(){}

/**
*@param Date: java.util.Date
*@param Date: java.util.Date
*@return: ScriptResult
*/
FailureDocumentScript.prototype.removeFailurePartialCapDocumentByRange=function(Date, Date){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
FailureDocumentScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
FailureDocumentScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
FailureDocumentScript.prototype.wait=function(long){}

/**
*@return: void
*/
FailureDocumentScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
FailureDocumentScript.prototype.equals=function(Object){}

/**
*@return: String
*/
FailureDocumentScript.prototype.toString=function(){}

/**
*@return: int
*/
FailureDocumentScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
FailureDocumentScript.prototype.getClass=function(){}

/**
*@return: void
*/
FailureDocumentScript.prototype.notify=function(){}

/**
*@return: void
*/
FailureDocumentScript.prototype.notifyAll=function(){}

/**
* class ASIDrillDownScript
*/
function ASIDrillDownScript(){
}
/**
*@param List: java.util.List
*@return: ScriptResult
*/
ASIDrillDownScript.prototype.createASITableDrillDValMap=function(List){}

/**
*@param List: java.util.List
*@return: ScriptResult
*/
ASIDrillDownScript.prototype.deleteASITableDrillDValMap=function(List){}

/**
*@param ASITableDrillDownModel: com.accela.v360.asitabledrilldown.ASITableDrillDownModel
*@return: ScriptResult
*/
ASIDrillDownScript.prototype.getASIDrillDown=function(ASITableDrillDownModel){}

/**
*@return: ScriptResult
*/
ASIDrillDownScript.prototype.getASITableDrillDValMapModel=function(){}

/**
*@param String: java.lang.String
*@return: ScriptResult
*/
ASIDrillDownScript.prototype.getASIDrillDownSeries=function(String){}

/**
*@param Long: java.lang.Long
*@param Long: java.lang.Long
*@return: ScriptResult
*/
ASIDrillDownScript.prototype.deleteASIDrillDownSeries=function(Long, Long){}

/**
*@param StringArray: [Ljava.lang.String;
*@return: ScriptResult
*/
ASIDrillDownScript.prototype.deleteASIDrillDown=function(StringArray){}

/**
*@param ASITableDrillDownModel: com.accela.v360.asitabledrilldown.ASITableDrillDownModel
*@return: ScriptResult
*/
ASIDrillDownScript.prototype.createASIDrillDown=function(ASITableDrillDownModel){}

/**
*@return: ScriptResult
*/
ASIDrillDownScript.prototype.getASITableDrillDSeriesModel=function(){}

/**
*@param List: java.util.List
*@return: ScriptResult
*/
ASIDrillDownScript.prototype.createASIDrillDownSeries=function(List){}

/**
*@param List: java.util.List
*@return: ScriptResult
*/
ASIDrillDownScript.prototype.updateASIDrillDownSeries=function(List){}

/**
*@return: ScriptResult
*/
ASIDrillDownScript.prototype.getASITableDrillDownModel=function(){}

/**
*@param ASITableDrillDownModel: com.accela.v360.asitabledrilldown.ASITableDrillDownModel
*@return: ScriptResult
*/
ASIDrillDownScript.prototype.updateASIDrillDown=function(ASITableDrillDownModel){}

/**
*@param String: java.lang.String
*@param String: java.lang.String
*@return: void
*/
ASIDrillDownScript.prototype.initScript=function(String, String){}

/**
*@param long: long
*@param int: int
*@return: void
*/
ASIDrillDownScript.prototype.wait=function(long, int){}

/**
*@param long: long
*@return: void
*/
ASIDrillDownScript.prototype.wait=function(long){}

/**
*@return: void
*/
ASIDrillDownScript.prototype.wait=function(){}

/**
*@param Object: java.lang.Object
*@return: boolean
*/
ASIDrillDownScript.prototype.equals=function(Object){}

/**
*@return: String
*/
ASIDrillDownScript.prototype.toString=function(){}

/**
*@return: int
*/
ASIDrillDownScript.prototype.hashCode=function(){}

/**
*@return: Class
*/
ASIDrillDownScript.prototype.getClass=function(){}

/**
*@return: void
*/
ASIDrillDownScript.prototype.notify=function(){}

/**
*@return: void
*/
ASIDrillDownScript.prototype.notifyAll=function(){}