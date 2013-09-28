Ext.define('App.api.Xml', {
	requires: ['App.model.BusinessPartner', 'App.model.SalesOrder', 'Ext.DateExtras'],
	singleton: true,

	allBusinessPartners: null,
	allSalesOrders: null,
	
	getAllBusinessPartners: function (scope, callback) {
	
		if (this.allBusinessPartners === undefined) {
			Ext.Error.raise({
				sourceClass: 'App.api.Xml',
				sourceMethod: 'getAllBusinessPartners',
				msg: 'a download for All Business Partners is already in progress'
			});
		}

		this.allBusinessPartners = undefined;

		var store = Ext.create('App.store.AllBusinessPartners', {
			model: 'App.model.BusinessPartner',
			storeId: 'businessPartner-all',
			proxy: {
				type: 'odata',
				enablePagingParams: true,
				withCredentials: true,
				username: 'P1733662435',
				password: 'Initial123',
				//url: "https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZGWSAMPLE_SRV/BusinessPartnerCollection/?skip=1&top=2&sap-ds-debug=true&$format=xml",
				url:"https://sapes1.sapdevcenter.com/sap/opu/odata/IWBEP/GWDEMO/BusinessPartnerCollection",
				reader: {
					type: 'xml',
					rootProperty: 'feed',
					record: 'entry'
				},
				listeners: {
                   'exception': function (proxy, response, operation) {
						App.api.Error.alert(response);
					}
				}
			}
		});

		this.allBusinessPartners = store;
          
		Ext.callback(callback, scope, [store]);
		
	},
	
	getAllSalesOrders: function (scope, callback) {
	
		if (this.allSalesOrders === undefined) {
			Ext.Error.raise({
				sourceClass: 'App.api.Xml',
				sourceMethod: 'getAllSalesOrders',
				msg: 'a download for All Sales Orders is already in progress'
			});
		}

		this.allSalesOrders = undefined;

		var store = Ext.create('App.store.AllSalesOrders', {
			model: 'App.model.SalesOrder',
			storeId: 'salesorder-all',
			proxy: {
				type: 'odata',
				enablePagingParams: true,
				withCredentials: true,
				username: 'P1733662435',
				password: 'Initial123',
				//url: "https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZGWSAMPLE_SRV/BusinessPartnerCollection/?skip=1&top=2&sap-ds-debug=true&$format=xml",
				url:"https://sapes1.sapdevcenter.com/sap/opu/odata/IWBEP/GWDEMO/SalesOrderCollection",
				reader: {
					type: 'xml',
					rootProperty: 'feed',
					record: 'entry'
				},
				listeners: {
                   'exception': function (proxy, response, operation) {
						App.api.Error.alert(response);
					}
				}
			}
		});

		this.allSalesOrders = store;
          
		Ext.callback(callback, scope, [store]);
		
	},
	
	
});