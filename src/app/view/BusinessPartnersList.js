Ext.define('App.view.BusinessPartnersList', {
    extend: 'Ext.dataview.List',
    xtype: 'businessPartnersList',
	requires: ['Ext.dataview.List', 'Ext.TitleBar', 'Ext.plugin.ListPaging'],

    config: {
        style:'background-color:white;',
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        onItemDisclosure: true,
        plugins: [
            {
                xclass: 'Ext.plugin.ListPaging'
            }
        ],
        //loadingText: 'Please wait..',
		emptyText: 'There is no Business Partner to display',
        itemTpl: '<div class="airline">{Company}<br></div>' +
                     '<div class="fare">{EmailAddress} <br/><span >{TelephoneNumber}</span></div>',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                style:'border-color:lightgray',
                ui:'white',
                title: 'Business Partners',
                defaults:{
                    cls:'clear-button',
                    pressedCls:'clear-button'
                },
                items: [
                    {
                        align:'left',
                        action:'back',
                        text:'<img src="src/resources/pictos/icon-back.png" height="29">'
                    }
                ]
            }
        ]
    }
});