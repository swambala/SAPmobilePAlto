Ext.define('App.controller.AllBusinessPartners', {
    extend: 'Ext.app.Controller',
    requires: ['App.api.Xml','App.api.Error'],
    config: {
        refs: {
            viewManager: 'viewmanager',
            allBusinessPartners: 'businessPartnersList',
            list: 'businessPartnersList',
            back: 'businessPartnersList button[action=back]'
        },

        control: {
            back: {
                tap: 'onBack'
            },
            list: {
                itemtap: 'onBusinessPartnerSelect'
            },
            allBusinessPartners: {
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
        store = App.api.Xml.allBusinessPartners;
          
        list.setStore(store);

        list.setLoadingText('Retrieving data');
        list.getStore().loadPage(1, {});
		store.on({
              //  load:me.removeLoadMask,
                scope:me
            }
			
        );
    },

    onBack: function () {
        var views = this.getViewManager();
        views.back();
    },

    onBusinessPartnerSelect: function (list, index, target, record) {
       /*  Ext.Viewport.mask({
            xtype: 'loadmask',
            message: 'Retrieving data'
        }); */
		App.app.setSapepmParams.businessRecord = record.data;
		var views = this.getViewManager();
        views.switchTo('businessPartner-info');
    }
});