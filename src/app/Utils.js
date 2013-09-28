Ext.define('App.Utils', {
	requires: ['App.model.BusinessPartner', 'App.model.SalesOrder'],
	singleton: true,

	emptyText: '-Not Found-',

	formatOneValue: function (value, precision) {
		if (Ext.isEmpty(value)) {
			return App.Utils.emptyText;
		}

		if (Ext.isDate(value)) {
			return Ext.Date.format(value, 'j F Y');
		}

		if (Ext.isNumber(value)) {
			return Ext.Number.toFixed(value, precision);
		}

		return value;
	},

	formatTwoValues: function (value1, value2, seperator, precision1, precision2) {
		if (Ext.isEmpty(value1)) {
			return App.Utils.emptyText;
		}

		var formattedValue1 = App.Utils.formatOneValue(value1, precision1);
		if (Ext.isEmpty(value2)) {
			return formattedValue1;
		}

		var formattedValue2 = App.Utils.formatOneValue(value2, precision2);
		if (Ext.isEmpty(seperator)) {
			return formattedValue1 + ' ' + formattedValue2;
		}

		return formattedValue1 + seperator + formattedValue2;
	}

});