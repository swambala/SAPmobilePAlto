Ext.define('App.view.Welcome', {
    extend: 'Ext.Container',
    xtype: 'welcome',
	requires: ['Ext.Img'],

    config:{
        layout:'vbox',
        style:'background:white',
        items:[
           {
				xtype: 'image',
				flex:1,
				width:'100%',
				height:'100%',
				src: 'src/resources/images/welcome.jpg'
			},{
                xtype: 'list',
                height:230,
                ui: 'round',
                itemTpl:'{text}',
                scrollable:false,
                onItemDisclosure: true,
                disableSelection:true,
                data: [
                	{
                    	text: 'All Business Partners',
                   	 	action: 'allBusinessPartners'
                	},
					{
						text:'All Sales orders',
						action: 'allSalesOrders'
					},
                ]
            }
        ]
    }
});