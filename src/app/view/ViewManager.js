Ext.define('App.view.ViewManager', {
    extend: 'Ext.Panel',
    xtype: 'viewmanager',
    config: {
        layout: {
            type: 'card',
            animation:{
                type:'slide',
                direction:'left'
            }
        },

        items: [{
            xtype: 'welcome'
        },{
        	xtype: 'businessPartnersList'
        },{
        	xtype: 'businessPartner-info'
        },{
        	xtype: 'salesOrdersList'
        },{
        	xtype: 'salesOrder-info'
        }
		]
    },

    viewStack: [],

    back: function () {
        var me = this,
            xtype = me.viewStack.pop(),
            l = me.getLayout(),
            view = me.child(xtype);

        // Don't call switch to as this 
        // will push the current view 
        // back onto the stack!!
        l.setAnimation({type:'slide', direction:'right'});
        me.setActiveItem(view);
    },

    switchTo: function (xtype) {
        var me = this,
            view = me.child(xtype),
            l = me.getLayout();

        if (!view) {
            Ext.Error.raise({
                sourceClass: 'ViewManager',
                sourceMethod: 'switch',
                msg: 'Attempting to switch to view xtype [' + xtype + '] which was not found!'
            });
        } else {
            l.setAnimation({type:'slide', direction:'left'});
            me.viewStack.push(me.getActiveItem().xtype);
            me.setActiveItem(view);
        }
    },

    view: function (xtype) {
		return this.child(xtype);
    }
});