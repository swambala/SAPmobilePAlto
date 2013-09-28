//<debug>
Ext.Loader.setPath({
    'Ext': 'src/touch/src',
    'App': 'src/app'
});
//</debug>

Ext.application({
    name: 'App',

    requires: [
        'Ext.Anim',
        'Ext.MessageBox',
        'Ext.carousel.Carousel'
    ],
	
	models: [
		'BusinessPartner',
		'SalesOrder'
	],
	
	views: [
        'ViewManager',
		'Welcome',
		'BusinessPartnersList',
		'BusinessPartnerInfo',
		'SalesOrdersList',
		'SalesOrderInfo'
    ],
	
	controllers: [
        'Welcome',
		'AllBusinessPartners',
		'BusinessPartnerInfo',
		'AllSalesOrders',
		'SalesOrderInfo'
    ],
	
	stores:[
		'AllBusinessPartners',
		'AllSalesOrders'
    ],
    

    icon: {
        '57': 'src/resources/icons/Icon.png',
        '72': 'src/resourcesicons/Icon~ipad.png',
        '114': 'src/resourcesicons/Icon@2x.png',
        '144': 'src/resourcesicons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'src/resourcesstartup/320x460.jpg',
        '640x920': 'src/resourcesstartup/640x920.png',
        '768x1004': 'src/resourcesstartup/768x1004.png',
        '748x1024': 'src/resourcesstartup/748x1024.png',
        '1536x2008': 'src/resourcesstartup/1536x2008.png',
        '1496x2048': 'src/resourcesstartup/1496x2048.png'
    },
    
	setSapepmParams:{},
	
    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
		
        if (!Ext.browser.is.WebKit) {
            alert("The current browser is unsupported.\n\nSupported browsers:\n" +
                "Google Chrome\n" +
                "Apple Safari\n" +
                "Mobile Safari (iOS)\n" +
                "Android Browser\n" +
                "BlackBerry Browser"
            );
        }
        // create the main view but ensure that none of the testing
        // functions above are called
        var mainview = Ext.create('App.view.ViewManager');
		//if the device is not a phone, we want to create a centered panel and put the list
        //into that
        if (!Ext.os.is.Phone) {
            //if we are on a tablet or a browser put this into a panel
            Ext.Viewport.add({
                xtype: 'panel',
                style:'margin:auto;background:url(src/resourcesimages/Sencha-Generic-Phone-by-Jay.png)',
                width: 380,
                height: 640,
                items: [
                    {
                        width:320,
                        height:480,
                        style:'position:absolute;left:30px;top:80px',
                        layout:'fit',
                        items:[mainview]
                    }
                ]
            });
        } else {
            //if we are a phone, simply add the list as an item to the viewport
            mainview.fullscreen = true;
            Ext.Viewport.add(mainview);
        }
    },
	onHideMask: function() {
		myMask.hide();
		clearTimeout(timeout);
        timeout = null;
	}

});
