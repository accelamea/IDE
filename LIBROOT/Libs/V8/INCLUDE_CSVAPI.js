/*------------------------------------------------------------------------------------------------------/
| Program		: INCLUDE_CVSAPI.js
|
| Usage			: this library parse CSV file and return an array of data, similar to ASIT array
| Notes			: 
| Created by	: SLEIMAN
| Created at	: 20/09/2017 12:17:08
|
/------------------------------------------------------------------------------------------------------*/
/**
 * constructor
 * @param csvFile: string file path
 * @param separator optional, can be , or \t default to ,
 * @param charset optional, the charset, default to UTF-8
 */
function CSVAPI(csvFile, separator, charset) {
	this.file = csvFile;
	this.separator = separator ? separator : ",";
	this.charset = charset ? charset : "UTF-8";
	this.header = [];
	this.dataset = [];
	this.parsed = false;
	this.columnsSpecifications = {};
	this.errors = [];
}
CSVAPI.prototype.setColumnSpecs = function(colName, required, type, alias, maxlength, values) {
	if (!colName) {
		throw "Column Name is mandatory when calling function setColumnSpecs";
	}
	colName = colName.toUpperCase();
	if (required == null || required == undefined) {
		required = false;
	}
	if (!type) {
		type = "String";
	}
	if (!alias) {
		alias = colName;
	}
	if (isNaN(maxlength)) {
		maxlength = 100000000000000000000;
	} else {
		maxlength = parseInt(maxlength, 10);
	}
	if (!values) {
		values = [];
	}
	var specs = {
		required : required,
		type : type,
		alias : alias,
		maxlength : maxlength,
		values : values
	}
	this.columnsSpecifications[colName] = specs;
}
CSVAPI.prototype.getRequiredFields = function() {
	var ret = [];
	for ( var x in this.columnsSpecifications) {
		if (this.columnsSpecifications[x].required) {
			ret.push(x)
		}
	}
	return ret;
}
CSVAPI.prototype.validateAndSetCell = function(row, colName, value) {
	var specs = this.columnsSpecifications[colName];
	if (specs) {
		var required = specs.required;
		var type = specs.type;
		var alias = specs.alias;
		var maxlength = specs.maxlength;
		var values = specs.values;
		if (specs.required && (value == null || value.trim() == "")) {
			throw "Value is required";
		}

		if (values.length > 0) {

			if (value != null && value != "") {
				var found = false;
				for ( var v in values) {
					if (value == values[v]) {
						found = true;
						break;
					}
				}
				if (!found) {
					throw "Value [" + value + "] is not valid. Should be one of " + values.join(",")
				}
			}

		} else {
			if (value && value.length > maxlength) {
				throw "Value [" + value + "] exceeded Max Length for column";
			}

			switch (type.toLowerCase()) {
			case "string":
				break;
			case "int":
			case "integer":
				if (value) {
					if (!value === parseInt(value, 10)) {
						throw "Value [" + value + "] is not " + type;
					}
				} else {
					value = 0;
				}

				break;
			case "bool":
			case "boolean":
				if (value) {
					value = value.toLowerCase();
					value = (value == "yes" || value == "y" || value == "true" || value == "checked")
				} else {
					value = false;
				}

				break;
			case "double":
			case "float":
				if (value) {
					if (isNaN(value)) {
						throw "Value [" + value + "] is not " + type;
					}
				} else {
					value = 0;
				}
				break;
			case "date":
				try {
					if (value) {
						new Date(value);
					}

				} catch (e) {
					throw "Value [" + value + "] is not " + type
				}

				break;
			default:
				throw "Invalid Type[" + type + "] in column specifications";
			}
		}
		if (!alias) {
			alias = colName
		}
		row[alias] = value;
	} else {
		row[colName] = value;
	}

	return value;
}
/**
 * 
 * private function used to parse the file, throws an error if the reader failed to find the file or failed to parse it
 */
CSVAPI.prototype.parse = function() {
	if (!this.parsed) {
		this.parsed = true;
		var reader = new com.csvreader.CsvReader(this.file, this.separator, java.nio.charset.Charset.forName(this.charset))
		try {
			if (reader.readHeaders()) {
				this.header = reader.getHeaders();
				for ( var c in this.header) {
					this.header[c] = String(this.header[c].toUpperCase()).trim();

				}

				var arrRequired = this.getRequiredFields();
				for ( var c in arrRequired) {

					if (!this.containsHeader(arrRequired[c])) {
						throw "Required Field[" + arrRequired[c] + "] is not present in the CSV File";
					}
				}
				while (reader.readRecord()) {
					var currentRow = reader.getValues();
					var row = {};
					var rowError = false;
					for ( var x in this.header) {
						var colName = this.header[x];
						var value = currentRow[x];
						try {
							this.validateAndSetCell(row, colName, value)
						} catch (e) {
							var msg = e;
							if (e.message) {
								msg = e.message;
							}
							msg = "PARSING ERROR AT ROW[" + (this.dataset.length + 1) + "][" + colName + "]:" + msg;
							this.errors.push(msg)
							rowError = true;
						}

					}
					if (!rowError) {
						this.dataset.push(row);
					}

				}
			}
		} finally {
			if (reader != null) {
				reader.close();
				reader = null;
			}
		}

	}

}
CSVAPI.prototype.getErrors = function() {
	return this.errors;
}
CSVAPI.prototype.hasErrors = function() {
	return this.errors.length > 0;
}
/**
 * return the header String array names
 * @returns {Array}
 */
CSVAPI.prototype.getHeaders = function() {
	this.parse();//ensure the file is parsed
	return this.header;
}
CSVAPI.prototype.containsHeader = function(colName) {
	var bret = false;
	if (colName) {
		var headers = this.getHeaders();
		for ( var h in headers) {
			if (new java.lang.String(headers[h]).equalsIgnoreCase(colName)) {
				bret = true;
				break;
			}
		}
	}

	return bret;
}
/**
 * return the dataset as array of objects rows
 * @returns {Array}
 */
CSVAPI.prototype.getDataSet = function() {
	this.parse();//ensure the file is parsed
	return this.dataset;
}
/**
 * return the count of records
 * @returns integer
 */
CSVAPI.prototype.getRecordsCount = function() {
	return this.getDataSet().length;
}

/**
 * return the count of columns
 * @returns integer
 */
CSVAPI.prototype.getColumnsCount = function() {
	return this.getHeaders().length;
}