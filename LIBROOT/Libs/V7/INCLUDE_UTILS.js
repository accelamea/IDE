/**
 * contains Utilities functions
 * @class
 */
function Utils() {

}
Utils.getFormattedDate = function(date) {
	var year = date.getFullYear();
	var month = (1 + date.getMonth()).toString();
	month = month.length > 1 ? month : '0' + month;
	var day = date.getDate().toString();
	day = day.length > 1 ? day : '0' + day;
	return month + '/' + day + '/' + year;
}
Utils.getNextWorkingDate = function(dDate, includeThisDate) {
	var month = dDate.getMonth() + 1;
	var day = dDate.getDate();
	var year = dDate.getFullYear();
	if (includeThisDate) {
		day--;
	}
	return new Date(aa.calendar.getNextWorkDay(aa.date.parseDate(month + "/" + day + "/" + year)).getOutput().getTime());

}
/**
 * null safe check if specified string is null or empty.
 *
 * @param {string} value - the string to be checked.
 * @returns {Boolean}
 */
Utils.isBlankOrNull = function(value) {
	return value == null || String(value).trim().equals(String('')) || String(value).trim().equals(String('null'));
}

/**
 * check if passed parameter is java script array.
 *
 * @param {object} arr - parameter to be checked
 * @returns {Boolean} if passed parameter is java script array.
 */
Utils.isJSArray = function(arr) {
	//Array.isArray(arr)
	return arr != null && arr.constructor != null && arr.constructor.toString().indexOf("Array") > -1;
}

/**
 * check if passed parameter is java array.
 *
 * @param {object} arr - parameter to be checked
 * @returns {Boolean} if passed parameter is java array.
 */
Utils.isJavaArray = function(arr) {
	return arr != null && ("getClass" in arr) && arr.getClass().equals(aa.util.newArrayList().getClass());
}

/**
 * check if passed parameter is java or java script array.
 *
 * @param {object} arr - parameter to be checked
 * @returns {Boolean} if passed parameter is java or java script array.
 */
Utils.isArray = function(arr) {
	return Utils.isJSArray(arr) || Utils.isJavaArray(arr);
}

/**
 * get java script array size.
 *
 * @param {Array} arr - parameter to get size.
 * @returns {number} array size.
 */
Utils.getJSArraySize = function(arr) {

	if (!Utils.isJSArray(arr)) {
		throw "Expected JS Array, but found : " + arr;
	}

	var size = 0, key;
	for (key in arr) {
		if (arr.hasOwnProperty(key)) {
			size++;
		}
	}
	return size;
}

/**
 * check if passed parameter is java script array.
 *
 * @param {Array} arr - parameter to be checked
 * @returns {Boolean} if passed parameter is java script array.
 */
Utils.isEmptyJSArray = function(arr) {

	if (!Utils.isJSArray(arr)) {
		throw "expected JS Array, but found : " + arr;
	}

	return arr.length == 0 && Utils.getJSArraySize(arr) == 0;
}

/**
 * null safe check if specified array is null or empty.
 *
 * @param {(Array|java.util.ArrayList)} arr - array to be checked
 * @returns {Boolean}
 */
Utils.isNullOrEmptyArr = function(arr) {

	if (arr == null) {
		return true;
	}

	if (Utils.isJSArray(arr)) {
		return Utils.isEmptyJSArray(arr);
	}

	if (Utils.isJavaArray(arr)) {
		return arr.isEmpty();
	}

	throw "not supported object type";
}

/**
 * check if check box value is not checked.
 *
 * @param {string} checkBoxValue check box value.
 * @returns {boolean} true if check box value is not checked.
 */
Utils.isCheckBoxUnChecked = function(checkBoxValue) {
	return String(checkBoxValue).equalsIgnoreCase(String('NO')) || String(checkBoxValue).equalsIgnoreCase(String('N'))
			|| String(checkBoxValue).equalsIgnoreCase(String('UNCHECKED')) || String(checkBoxValue).equalsIgnoreCase(String('UNSELECTED'))
			|| String(checkBoxValue).equalsIgnoreCase(String('FALSE')) || String(checkBoxValue).equalsIgnoreCase(String('OFF'));
}

/**
 * check if check box value is checked.
 *
 * @param {string} checkBoxValue check box value.
 * @returns {boolean} true if check box value is checked.
 */
Utils.isCheckBoxChecked = function(checkBoxValue) {
	return String(checkBoxValue).equalsIgnoreCase(String('YES')) || String(checkBoxValue).equalsIgnoreCase(String('Y'))
			|| String(checkBoxValue).equalsIgnoreCase(String('CHECKED')) || String(checkBoxValue).equalsIgnoreCase(String('SELECTED'))
			|| String(checkBoxValue).equalsIgnoreCase(String('TRUE')) || String(checkBoxValue).equalsIgnoreCase(String('ON'));
}

/**
 * compare if two dates are equal.
 *
 * @param {Date} date2 - date object to be compared.
 * @returns true if both dates are equal.
 */
Date.prototype.isEqual = function(date2) {
	return this.getTime() == date2.getTime();
}

/**
 * construct new date with the same year and month and day of this date
 *
 * @returns {Date} new java script date without minutes and seconds of this date.
 */
Date.prototype.trimTime = function() {
	return new Date(this.getFullYear(), this.getMonth(), this.getDate());
}

/**
 * Check if this date is less than passed date.
 *
 * @param {Date} date2 - date object to be compared.
 * @returns true if this date is less than passed date.
 */
Date.prototype.isBefore = function(date2) {
	return this.getTime() < date2.getTime();
}

/**
 * get time of this date in 24 format ex. (15:23)
 *
 * @param {String} [separator] - to be used between minutes and hours
 * @returns {String} time of this date in 24 format
 */
Date.prototype.formatTime24 = function(separator) {
	separator = separator || ":"
	var timeStr = this.getHours() + separator + this.getMinutes();
	return timeStr;
}

/**
 * construct date object of passed data default today.
 *
 * @param {String} [date] - date string used to construct date object (ex. 30/11/2015).
 * @param {String} [time] - time string used to construct date object (ex. 10:01).
 * @param {String} [amPm] - am / pm value used to construct date object (ex. AM).
 *
 * @returns date object of passed data.
 */
Utils.constructDateObj = function(date, time, amPm) {

	var dateTimeObj = null;

	if (!Utils.isBlankOrNull(date) || !Utils.isBlankOrNull(time)) {

		dateTimeObj = new Date();
		dateTimeObj.setMilliseconds(0);
		dateTimeObj.setSeconds(0);
		dateTimeObj.setMinutes(0);
		dateTimeObj.setHours(0);

		if (!Utils.isBlankOrNull(date)) {

			var day = date.split("/")[0];
			var month = parseInt(date.split("/")[1]) - 1;
			var year = date.split("/")[2];

			dateTimeObj.setDate(day);
			dateTimeObj.setMonth(month);
			dateTimeObj.setFullYear(year);
		}

		if (!Utils.isBlankOrNull(time)) {
			var hours = parseInt(time.split(":")[0], 10);
			var minutes = parseInt(time.split(":")[1], 10);
			hours = amPm == "PM" ? (parseInt(hours) + 12) : hours;
			dateTimeObj.setMinutes(minutes);
			dateTimeObj.setHours(hours);
		}
	}

	return dateTimeObj;
}

/**
 * construct hash map of rows from passed array using passed key name.
 *
 * @param {[][]} array - array of rows to fill the map with them.
 * @param {String} keyName - name of row property to be the key of map.
 *
 * @returns {HashMap} - Map contains rows from passed array.
 */
Utils.toHashMap = function(arrayOfRows, keyName) {

	var rowsMap = aa.util.newHashMap();

	if (arrayOfRows == null || arrayOfRows.length == 0) {
		return rowsMap;
	}

	if (Utils.isBlankOrNull(keyName)) {
		throw "Utils.toHashMap :: keyName can not be null";
	}

	for (idx in arrayOfRows) {
		var row = arrayOfRows[idx];
		rowsMap.put(String(row[keyName]), row);
	}
	return rowsMap;
}

/**
 *
 * @returns The language of the current user session like "ar" or "en".
 */
Utils.getCurrentUserSessionLanguage = function() {
	return Utils.getCurrentUserSessionLocale().getLanguage();
}

/**
 * @returns the locale of the current user session like "ar_AE" or "en_US".
 */
Utils.getCurrentUserSessionLocale = function() {
	return com.accela.aa.emse.util.LanguageUtil.getCurrentLocale();
}

/**
 * Interval class
 */
function Interval(from, to) {
	this.from = parseFloat(from);
	this.to = parseFloat(to);

}

/**
 * check if interval is valid
 *
 * @returns {Boolean} true if interval start is less tahn or equal interval end
 */
Interval.prototype.isValid = function() {
	return (this.from <= this.to);
}

/**
 * check if passed interval overlap with current interval.
 *
 * @param interval interval to be compared.
 * @returns {Boolean} true if the two intervals ovelap.
 */
Interval.prototype.overlapWith = function(interval) {
	var overlap = false;

	if (!interval.isValid()) {
		throw "invalid interval : " + interval;
	}

	if (!this.isValid()) {
		throw "invalid interval : " + this;
	}

	if (this.from <= interval.to && interval.from <= this.to) {
		overlap = true
	}

	return overlap;
}

Utils.asyncExec = function(scriptCode, envParameters) {
	aa.runAsyncScript(scriptCode, envParameters);

}

/**
 * override to string
 */
Interval.prototype.toString = function() {
	return "[" + this.from + "-" + this.to + "]";
}


/**
 * Validate regex strings
 * @class
 */

function Validator() {
}

Validator.prototype.constructor = Validator;

/**
 * validate mobile
 */
Validator.prototype.isValidMobile = function(mobile) {
    return this.regexValidator(mobile, /^(\+\d{1,3}[- ]?)?\d{10}$/, true);
};

/**
 * validate mobile in UAE only
 */
Validator.prototype.isValidUAEMobile = function(mobile) {
    return this.regexValidator(mobile, /^(?:\+971|00971|0)?(?:50|51|52|55|56)\d{7}$/, true);
};

/**
 * validate email
 */
Validator.prototype.isValidEmail = function(email) {
    return this.regexValidator(email, /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, true);
};

/**
 * validate phone
 */
Validator.prototype.isValidPhone = function(phone) {
    return this.regexValidator(phone, /^\d{2}\d{7}$/, true);
};

/**
 * validate mobile in UAE only
 */
Validator.prototype.isValidUAEPhone = function(mobile) {
    return this.regexValidator(mobile, /^(?:\+971|00971|0)?(?:2|3|4|6|7|9)\d{7}$/, true);
};

/**
 * validate MAKANI ID in UAE only
 */
Validator.prototype.isValidMakaniId = function(makaniId) {
    return this.regexValidator(makaniId, /^\d{5}\s\d{5}$/, true);
};

/**
 * validate string with given regex
 * @param str to be validated.
 * @param reg Regular Expression string.
 * @returns {Boolean} true if the string matches the given regex.
 * @returns {Boolean} true if the string matches the given regex.
 */
Validator.prototype.regexValidator = function(str, reg, passIfEmpty) {
		if(passIfEmpty)//passIfEmpty defined
				if(passIfEmpty === true)// defently true
						if(Utils.isBlankOrNull(str))//not null or blank
								return true;
    return reg.test(String(str));
};