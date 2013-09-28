Ext.define('App.controller.AllSalesOrders', {
    extend: 'Ext.app.Controller',
    requires: ['App.api.Xml','App.api.Error'],
    config: {
        refs: {
            viewManager: 'viewmanager',
            allSalesOrders: 'salesOrdersList',
            list: 'salesOrdersList',
            back: 'salesOrdersList button[action=back]'
        },

        control: {
            back: {
                tap: 'onBack'
            },
            list: {
                itemtap: 'onSalesOrderSelect'
            },
            allSalesOrders: {
                activate: 'onActivate'
            }
        }
    },

    onActivate: function () {
        myMask = new Ext.LoadMask(Ext.getBody(), {message:"Loading..."});
		myMask.show();
		timeout = setTimeout(App.app.onHideMask, 3500);    
        var me= this,
        list = this.getList(),
        store = App.api.Xml.allSalesOrders;
          
        list.setStore(store);

        //list.setLoadingText('Retrieving data');
        list.getStore().loadPage(1, {});
		
        store.on({
				scope:me
            }
        );
    },

    onBack: function () {
        var views = this.getViewManager();
        views.back();
    },

    onSalesOrderSelect: function (list, index, target, record) {
        App.app.setSapepmParams.salesRecord = record.data;
		var views = this.getViewManager();
        views.switchTo('salesOrder-info');
    }
});