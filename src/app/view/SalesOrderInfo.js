Ext.define('App.view.SalesOrderInfo', {
    extend: 'Ext.Container',
    xtype: 'salesOrder-info',

    config:{
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                style:'border-color:lightgray',
                ui:'white',
                title: 'Detail Info',
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
            },{
                xtype:'carousel',
                height:430,
                style:'padding-top:20px',
                cls:'details-list',
                items:[
                    {
                        page:'first',
                        tpl:'<div><span class="fo">Name : </span><span>{CustomerName}</span></div>'+
                       '<div><span class="fo">ID : </span><span>{CustomerID}</span></div>'+
                            '<div><span class="fo">Sales Order ID : </span><span>{SalesOrderID}</span></div>'+
                            '<div><span class="fo">Net Sum : </span><span>{NetSum} {Currency}</span></div>'+
                            '<div><span class="fo">Tax : </span><span>{Tax} {Currency}</span></div>'+
                            '<div><span class="fo">Total Sum : </span><span>{TotalSum} {Currency}</span></div>'+
                            '<div class="divider"></div>'+ 
							'<div><span class="fo">Billing Status : </span><span>{BillingStatusDescription}</span></div>'
                    }
                ]
            }
        ]
    }
});