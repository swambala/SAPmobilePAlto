Ext.define('App.controller.BusinessPartnerInfo', {
    extend: 'Ext.app.Controller',
    requires: ['App.api.Xml','App.api.Error'],
    config: {
        refs: {
            viewManager: 'viewmanager',
            infoPanel:'businessPartner-info',
			back: 'businessPartner-info button[action=back]',
			
			fistPage:'businessPartner-info carousel container[page=first]',
            secondPage:'businessPartner-info carousel container[page=second]'
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
		var data = App.app.setSapepmParams.businessRecord;
		me.getFistPage().setData(data);
        me.getSecondPage().setData(data);		
       
    },

    onBack: function () {
        var views = this.getViewManager();
        views.back();
    }
});