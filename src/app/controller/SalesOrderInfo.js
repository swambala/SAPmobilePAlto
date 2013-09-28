Ext.define('App.controller.SalesOrderInfo', {
    extend: 'Ext.app.Controller',
    requires: ['App.api.Xml','App.api.Error'],
    config: {
        refs: {
            viewManager: 'viewmanager',
            infoPanel:'salesOrder-info',
			back: 'salesOrder-info button[action=back]',
			
			fistPage:'salesOrder-info carousel container[page=first]'
        },

        control: {
            back: {
                tap: 'onBack'
            },
            infoPanel: {
                activate: 'onShow'
            }
        }
    },

    onShow: function () {
		var me = this;
		var data = App.app.setSapepmParams.salesRecord;
		me.getFistPage().setData(data);		
       
    },

    onBack: function () {
        var views = this.getViewManager();
        views.back();
    }
});