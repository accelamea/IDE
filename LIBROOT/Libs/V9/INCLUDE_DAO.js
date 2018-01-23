/*------------------------------------------------------------------------------------------------------/
| Program		: DBO
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 31/08/2016 11:42:54
|
/------------------------------------------------------------------------------------------------------*/
function DBO(tableName, pkfield, id, sequence) {

	this.tableName = tableName;
	this.pkfield = pkfield;
	this.id = id;
	this.dao = new DAO(tableName);
	this.fields = {};
	this.modifiedFields = {};
	if (this.id != null && this.id != "") {
		var whereFields = {};
		whereFields[this.pkfield] = this.id;
		var data = this.dao.execQuery(whereFields);
		if (data.length == 0) {
			throw "record with id [" + this.id + "] does not exist in table [" + this.tableName + "]";
		}
		this.fields = data[0];

	}
	this.sequence = sequence;
}
DBO.prototype.getDAO = function() {
	return this.dao;
}
DBO.prototype.getID = function() {
	return this.id;
}
DBO.prototype.save = function() {
	if (this.exists()) {

		if (Object.keys(this.modifiedFields).length > 0) {
			logDebug("UPDATE MODE [" + this.tableName + "]:" + this.id)
			var whereFields = {};
			whereFields[this.pkfield] = this.id;
			this.dao.execUpdate(this.modifiedFields, whereFields);
		} else {
			logDebug("UPDATE MODE [" + this.tableName + "], NO CHANGES:" + this.id)
		}

	} else {
		logDebug("INSERT MODE [" + this.tableName + "]:")
		if (this.sequence) {
			var service = com.accela.util.AVContext.getBean(java.lang.Class.forName("com.accela.sequence.SequenceGeneratorService"));
			var id = service.getNextValue(this.sequence);
			this.fields[this.pkfield] = id;
			this.dao.execBaseInsert(this.fields);
			this.id = id;
		} else {
			this.id = this.dao.execInsert(this.fields);
		}

	}
	this.modifiedFields = {};
	return this.id;
}
DBO.prototype.deleteRecord = function() {
	if (this.exists()) {
		var whereFields = {};
		whereFields[this.pkfield] = this.id;
		this.dao.execDelete(whereFields);
	}
	this.modifiedFields = {};
	this.id = null;

}
DBO.prototype.exists = function() {
	return (this.id != null && this.id != "");
}
DBO.prototype.getFields = function() {
	return this.fields;
}
DBO.prototype.getIntField = function(name) {
	return parseInt(this.getStringField(name), 10);
}
DBO.prototype.getStringField = function(name) {
	var val = this.fields[name];
	if (val == null || val == "undefined") {
		val = "";
	}
	return val;
}
DBO.prototype.setField = function(name, value) {
	this.fields[name] = value;
	this.modifiedFields[name] = value;
}
/*------------------------------------------------------------------------------------------------------/
| Program		: DAO
| Event			: 
|
| Usage			: 
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: SLEIMAN
| Created at	: 31/08/2016 11:42:54
|
/------------------------------------------------------------------------------------------------------*/
function DAO(tableName) {

	this.tableName = tableName;
}
DAO.prototype.execDelete = function(whereFields) {
	var params = [];
	var usql = " DELETE FROM " + this.getFullTableName()

	if (whereFields) {

		var where = "";
		for ( var x in whereFields) {
			if (where != "") {
				where += " AND "
			}
			var val = whereFields[x];
			if (val instanceof Date) {
				where += x + "= TO_DATE(?, 'yyyymmddhh24miss')";
				val = aa.util.formatDate(val, "yyyyMMddHHmmss");
			} else {
				where += x + "= ?";
			}

			params.push(val)
		}
		if (where != "") {
			usql += " WHERE " + where;
		}
	}

	return this.execSimpleDelete(usql, params)
}
DAO.prototype.execSimpleDelete = function(sql, params) {

	logDebug("SQL=" + sql);
	var dba = com.accela.aa.datautil.AADBAccessor.getInstance();
	var result = dba.update(sql, params);

	return result
}
DAO.prototype.execUpdate = function(fields, whereFields, strWhere) {

	var usql = " update " + this.getFullTableName() + " SET ";
	var values = "";
	var params = [];
	for ( var x in fields) {
		var val = fields[x];
		if (values != "") {
			values += ","

		}
		if (val instanceof Date) {
			values += x + "=CONVERT(DATETIME, ?, 20)";
			val = aa.util.formatDate(val, "yyyy-MM-dd HH:mm:ss ");
		} else {
			values += x + "=?";
		}
		params.push(val)
	}
	usql += values;
	var whereAdded = false;
	if (whereFields) {

		var where = "";
		for ( var x in whereFields) {
			if (where != "") {
				where += " AND "
			}
			var val = whereFields[x];
			if (val instanceof Date) {
				where += x + "= TO_DATE(?, 'yyyymmddhh24miss')";
				val = aa.util.formatDate(val, "yyyyMMddHHmmss");
			} else {
				where += x + "= ?";
			}

			params.push(val)
		}
		if (where != "") {
			whereAdded = true;
			usql += " WHERE " + where;
		}
	}
	if (strWhere) {
		usql += whereAdded ? " AND " + strWhere : " WHERE " + strWhere;
	}
	var strd = "";
	for ( var c in fields) {
		strd += c + "=[" + fields[c] + "],";
	}
	logDebug("SQLPARAMS=" + strd);
	logDebug("SQL=" + usql);
	var dba = com.accela.aa.datautil.AADBAccessor.getInstance();
	var result = dba.update(usql, params);

	return result
}
DAO.prototype.execBaseInsert = function(fields) {

	var insertSql = " INSERT INTO " + this.getFullTableName() + "(";
	var values = "";
	var params = [];
	for ( var x in fields) {
		var val = fields[x];
		if (values != "") {
			values += ","
			insertSql += ","
		}
		if (val instanceof Date) {
			values += "CONVERT(DATETIME, ?, 20)";
			val = aa.util.formatDate(val, "yyyy-MM-dd HH:mm:ss ");
		} else {
			values += "?";
		}

		insertSql += x;
		params.push(val)
	}
	insertSql += ")values(" + values + ")";
	logDebug("SQL=" + insertSql);
	var strd = "";
	for ( var c in fields) {
		strd += c + "=[" + fields[c] + "],";
	}
	logDebug("SQLPARAMS=" + strd);

	var dba = com.accela.aa.datautil.AADBAccessor.getInstance();
	var result = dba.update(insertSql, params);

}
DAO.prototype.execInsert = function(fields) {
	this.execBaseInsert(fields)
	var data = this.execSimpleQuery("select @@identity ID", []);
	if (data.length == 0) {
		throw "COULD NOT GET PK";
	}
	return data[0]["ID"];
}
DAO.prototype.getFullTableName = function() {

	return this.tableName;
}
DAO.prototype.execAdvancedQuery = function(filters, orderBy) {
	var where = "";

	var params = [];
	for ( var x in filters) {
		if (where != "") {
			where += " AND "
		}
		var filter = filters[x];
		var val = filter.value;
		var field = filter.property;
		if (!field) {
			field = filter.field;
		}
		var op = filter.comparison
		if (!op) {
			op = "like";
		}
		if (op == "lt") {
			op = "<"
		} else if (op == "gt") {
			op = ">"
		} else if (op == "eq") {
			op = "=";
		}
		if (filter.type == "date") {

			try {

				val = new Date(val)
			} catch (e) {
				logDebug("WARN:" + e)
			}

		}
		if (Array.isArray(val)) {

			where += "UPPER(" + field + ") "
			var inp = [];
			for ( var b in val) {
				var v = val[b];
				v = v.toUpperCase();
				inp.push("?")
				params.push(v)
			}
			where += " IN (" + inp.join(",") + ")"
		} else {

			if (val instanceof Date) {

				val = aa.util.formatDate(val, "yyyyMMdd");
				where += field + " " + op + " CONVERT(date,?,112)";
			} else {
				if (isNaN(val)) {
					where += "UPPER(" + field + ") " + op + "  UPPER(?)";
				} else {
					where += field + " " + op + " ? ";
				}

			}
			params.push(val)
		}

	}
	var sql = "select * from " + this.getFullTableName();
	if (where != "") {
		sql += " WHERE " + where;
	}
	if (orderBy != null && orderBy != "") {
		sql += " order by " + orderBy;
	}
	return this.execSimpleQuery(sql, params)
}

DAO.prototype.execQuery = function(whereFields, orderBy, ignoreCase, swhere) {
	var where = "";
	if (swhere) {
		where = swhere;
	}
	var params = [];
	for ( var x in whereFields) {
		if (where != "") {
			where += " AND "
		}
		var val = whereFields[x];
		if (Array.isArray(val)) {
			if (ignoreCase == true) {
				where += "UPPER(" + x + ") "
			} else {
				where += x + " "
			}
			var inp = [];
			for ( var b in val) {
				var v = val[b];
				if (ignoreCase) {
					v = v.toUpperCase();
				}
				inp.push("?")
				params.push(v)
			}
			where += " IN (" + inp.join(",") + ")"
		} else {
			var isNot = val.toString().indexOf("$NOT$") == 0
			val = isNot ? val.substring("$NOT$".length) : val;
			isNot = isNot ? "NOT" : ""
			if (val instanceof Date) {
				where += " CONVERT(nvarchar, " + x + ",112)= ? ";
				val = aa.util.formatDate(val, "yyyyMMdd");

			} else if (ignoreCase == true) {

				where += "UPPER(" + x + ") " + isNot + " like UPPER(?)";
			} else {
				where += x + " " + isNot + " like ? ";
			}

			params.push(val)
		}

	}
	var sql = "select * from " + this.getFullTableName();
	if (where != "") {
		sql += " WHERE " + where;
	}
	if (orderBy != null && orderBy != "") {
		sql += " order by " + orderBy;
	}
	return this.execSimpleQuery(sql, params)
}
DAO.prototype.execSimpleQuery = function(sql, params) {
	logDebug("SQL=" + sql);
	var strd = "";
	for ( var c in params) {
		strd += c + "=[" + params[c] + "],";
	}
	logDebug("SQLPARAMS=" + strd);
	var dba = com.accela.aa.datautil.AADBAccessor.getInstance();
	var utilProcessor = new JavaAdapter(com.accela.aa.datautil.DBResultSetProcessor, {
		processResultSetRow : function(rs) {
			var meta = rs.getMetaData();
			var numcols = meta.getColumnCount();
			var record = {}
			var result = null;

			for (var i = 0; i < numcols; i++) {
				var columnName = meta.getColumnName(i + 1);
				columnName = columnName.toUpperCase()
				result = rs.getObject(i + 1);
				if (result == null) {
					record[columnName] = String("");
				} else {

					if (result.getClass && result.getClass().getName() == "java.sql.Timestamp") {

						record[columnName] = String(new Date(rs.getTimestamp(i + 1).getTime()).toString("MM/dd/yyyy HH:mm:ss"));
					} else {
						record[columnName] = String(rs.getObject(i + 1));
					}
				}

			}

			return record;
		}
	});
	var result = dba.select(sql, params, utilProcessor, null);
	ret = result.toArray()
	var data = [];
	for ( var x in ret) {
		var o = {};
		for ( var y in ret[x]) {
			o[y] = String(ret[x][y])
		}
		data.push(o)
	}

	logDebug("SQL RETURNED=" + data.length);
	return data;
}