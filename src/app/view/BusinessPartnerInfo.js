Ext.define('App.view.BusinessPartnerInfo', {
    extend: 'Ext.Container',
    xtype: 'businessPartner-info',

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
                        tpl:'<div><span class="fo">Name : </span><span>{Company}</span></div>'+
                       '<div><span class="fo">Role : </span><span>{BusinessPartnerRoleText}</span></div>'+
                            '<div><span class="fo">ID : </span><span>{BusinessPartnerID}</span></div>'+
                           '<div class="divider"></div>'+                            
                            '<div><span class="fo">Gender Code : </span><span>{GenderCode}</span></div>'
                    },
                    {
                        page:'second',
                        tpl:'<div><span class="fo">Street : </span><span>{Street}</span></div>'+
							'<div><span class="fo">Building : </span><span>{Building}</span></div>'+
                            '<div><span class="fo">City : </span><span>{City}</span></div>'+
							'<div><span class="fo">Country : </span><span>{CountryText}</span></div>'+
							'<div><span class="fo">PostalCode : </span><span>{PostalCode}</span></div>' +
                            '<div class="divider"></div>'+
							'<div><span class="fo">Email : </span><span>{EmailAddress}</span></div>'+
							'<div><span class="fo">Phone : </span><span>{TelephoneNumber}</span></div>'+                        
							'<div><span class="fo">Fax : </span><span>{FaxNumber}</span></div>'                        
                    }
                ]
            }
        ]
    }
});