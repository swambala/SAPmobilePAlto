Ext.define('App.view.SalesOrdersList', {
    extend: 'Ext.dataview.List',
    xtype: 'salesOrdersList',
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
		emptyText: 'There is no Sales Order to display',
        itemTpl: '<div class="airline">{CustomerName}<br></div>' +
                     '<div class="currency">Total : {TotalSum} {Currency}<br/><span >Bill Status : {BillingStatusDescription}</span></div>',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                style:'border-color:lightgray',
                ui:'white',
                title: 'Sales Orders',
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