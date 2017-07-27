/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_ASSET.js
| Event			: 
|
| Usage			: Asset common functions library
| Notes			: used to handle asset data
| Created by	: Sleiman KOZAIZAN
| Created at	: 25/05/2017 10:30:00
|
/------------------------------------------------------------------------------------------------------*/

/**
 * constructor with either asset ID or AssetMasterPK
 */
function Asset(id) {
	if (id == null || id == "") {
		throw "ID cannot be null or empty"
	}
	this.service = com.accela.aa.emse.dom.service.CachedService.getInstance().getAssetDataService();
	var assetSequenceNumber = null;
	if (id.getClass && id.getClass().getName() == "AssetMasterPK") {
		assetSequenceNumber = id.getG1AssetSequenceNumber();
	} else {
		var assets = this.service.getAssetDataByID(aa.getServiceProviderCode(), id, aa.util.newQueryFormat());

		if (assets != null) {
			assets = assets.toArray();
			if (assets.length == 0) {
				throw "Asset with ID " + id + " does not exist";
			}
			assetSequenceNumber = assets[0].getAssetMaster().getG1AssetSequenceNumber();
		}
	}

	var assetResp = aa.asset.getAssetData(String(assetSequenceNumber));
	if (!assetResp.getSuccess()) {
		throw assetResp.getErrorMessage();
	}
	if (assetResp.getOutput() == null) {
		throw "Asset with Seq " + assetSequenceNumber + " does not exist";
	}
	this.assetModel = assetResp.getOutput().getAssetDataModel();
	this.dataAttributes = {};
	var dataAttributes = this.assetModel.getDataAttributes();
	for (var i = 0; i < dataAttributes.size(); i++) {
		var dataAttributeModel = dataAttributes.get(i);
		this.dataAttributes[dataAttributeModel.getG1AttributeName()] = dataAttributeModel;
	}
}

/**
 * get the description of this asset
 * 
 * @returns {String}
 */
Asset.prototype.getDescription = function() {
	return this.assetModel.getAssetMaster().getDispG1Description();
}

/**
 * get the group of this asset
 * 
 * @returns {String}
 */
Asset.prototype.getGroup = function() {
	return this.assetModel.getAssetMaster().getG1AssetGroup();
}

/**
 * get the type of this asset
 * 
 * @returns {String}
 */
Asset.prototype.getType = function() {
	return this.assetModel.getAssetMaster().getG1AssetType();
}

/**
 * get the ID of this asset
 * 
 * @returns {String}
 */
Asset.prototype.getID = function() {
	return this.assetModel.getAssetMaster().getG1AssetID();
}
/**
 * get the sequence number of this asset
 * 
 * @returns {Number}
 */
Asset.prototype.getSequenceNumber = function() {
	return this.assetModel.getAssetMaster().getG1AssetSequenceNumber();
}

/**
 * get the primary key of this asset
 * 
 * @returns com.accela.ams.asset.AssetMasterPK
 */
Asset.prototype.getAssetPK = function() {
	return this.assetModel.getAssetMaster().getAssetPK();
}

/**
 * return the last usage reading value for a unit
 * 
 * @param unit
 *            the unit
 * @returns {Number} the
 */
Asset.prototype.getLastUsageReading = function(unit) {
	if (this.usageBiz == null) {
		this.usageBiz = com.accela.util.AVContext.getBean(java.lang.Class.forName("com.accela.ams.asset.AssetUsageTrackService"));
	}

	var usage = 0;
	var lastUsage = this.usageBiz.getLastUsage(this.getAssetPK(), unit);
	if (lastUsage != null) {
		usage = lastUsage.getUsageReading();
	}
	return usage;

}

/**
 * create a usage for this asset
 * 
 * @param lastUsageReading
 *            last reading value, number
 * @param usageReading
 *            current reading value, number
 * @param unit
 *            the unit of the reading
 * @param comments
 *            comments of the reading
 */
Asset.prototype.createUsage = function(lastUsageReading, usageReading, unit, comments) {
	if (this.usageBiz == null) {
		this.usageBiz = com.accela.util.AVContext.getBean(java.lang.Class.forName("com.accela.ams.asset.AssetUsageTrackService"));
	}
	var assetUsage = new com.accela.ams.asset.AssetUsageTrackModel();
	assetUsage.setServProvCode(aa.getServiceProviderCode());
	assetUsage.setUsageReading(Number(usageReading))
	assetUsage.setReadingDifference(Number(usageReading) - lastUsageReading);
	assetUsage.setUsageUnitType(unit)
	assetUsage.setReadingDate(aa.util.now())
	assetUsage.setGeneratedWO("N")
	assetUsage.setComments(comments)
	assetUsage.setRecordDate(aa.util.now())
	assetUsage.setRecordStatus("A")
	var reader = aa.person.getCurrentUser().getOutput();
	assetUsage.setReadingByFname(reader.getFirstName());
	assetUsage.setReadingByMname(reader.getMiddleName());
	assetUsage.setReadingByLname(reader.getLastName());
	assetUsage.setRecordFullName(reader.getUserID());
	assetUsage.setReadingByUserID(reader.getUserID())
	assetUsage.setReadingByFullDept(reader.getDeptOfUser())
	assetUsage.setAssetID(this.getSequenceNumber())
	this.usageBiz.createAssetUsageTrack(assetUsage);
}
/**
 * return attribute value for this asset
 * 
 * @param name
 *            the attribute name
 * @returns {String}
 */
Asset.prototype.getASI = function(name) {
	var ret = null;

	var dataAttributeModel = this.dataAttributes[name];
	if (dataAttributeModel) {
		ret = dataAttributeModel.getG1AttributeValue();
	}
	return ret;
}
/**
 * update an attribute value
 * 
 * @param name
 *            the name
 * @param value
 *            the value to set
 * @param bsave
 *            boolean, true to save to db
 */
Asset.prototype.updateASI = function(name, value, bsave) {

	
	var dataAttributeModel = this.dataAttributes[name];

	if (!dataAttributeModel) {
		dataAttributeModel = new com.accela.ams.asset.DataAttributeModel()
		dataAttributeModel.setServiceProviderCode(aa.getServiceProviderCode());
		dataAttributeModel.setG1AssetSequenceNumber(this.getSequenceNumber());
		dataAttributeModel.setG1AttributeName(name);
		dataAttributeModel.setRecStatus("A");
		dataAttributeModel.setRecFulNam(aa.getAuditID());
		dataAttributeModel.setRecDate(new Date());
		this.dataAttributes[name] = dataAttributeModel;
	}
	dataAttributeModel.setG1AttributeValue(value);
	if (bsave) {
		this.save()
	}

}
/**
 * save asset to db
 */
Asset.prototype.save = function() {
	var atts = aa.util.newArrayList();
	for ( var x in this.dataAttributes) {
		atts.add(this.dataAttributes[x])
	}
	this.assetModel.setDataAttributes(atts)
	var assetResp = aa.asset.editAsset(this.assetModel)
	if (!assetResp.getSuccess()) {
		throw assetResp.getErrorMessage();
	}
}