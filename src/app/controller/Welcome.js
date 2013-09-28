Ext.define('App.controller.Welcome', {
    extend: 'Ext.app.Controller',
    requires: ['App.api.Xml','App.api.Error'],
    config: {
        refs: {
            viewManager: 'viewmanager',
            list : 'welcome list'
        },

        control: {
            list:{
                itemtap:'onMenu'
            }
        }
    },

   onMenu:function(view, index, target, record, e, eOpts){
        var me = this,
            views = me.getViewManager();
        switch(record.data.action){
			case 'allBusinessPartners':
                App.api.Xml.getAllBusinessPartners( me, function (businessPartnersList) {
                    Ext.Viewport.unmask();
                    if (businessPartnersList) {
                       var views = me.getViewManager();
                        views.switchTo('businessPartnersList');
                    }
                });
                break;
			case 'allSalesOrders':
                App.api.Xml.getAllSalesOrders( me, function (salesOrdersList) {
                    Ext.Viewport.unmask();
                    if (salesOrdersList) {
                       var views = me.getViewManager();
                        views.switchTo('salesOrdersList');
                    }
                });
                break;
        }

    }
});