Ext.define('App.model.BusinessPartner', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.proxy.OData', 'Ext.data.reader.Xml', 'App.api.Error'],
    config: {
        fields: [
            'id',		
		{
			name:'BusinessPartnerID',
			type:'string'
		},
		{
			name:'BusinessPartnerKey',
			type:'string'
		},{
			name:'Address',
			type:'string'		
		},
		{
			name:'Street',
			type:'string'
		},
		{
			name:'City',
			type:'string'
		},
		{
			name:'AddressTypeCode',
			type:'string'
		},
		{
			name:'PostalCode',
			type:'string'
		},
		{
			name:'CountryText',
			type:'string'
		},
		{
			name:'Building',
			type:'string'
		},
		{
			name:'AddressTypeText',
			type:'string'
		},
		{
			name:'CountryCode',
			type:'string',
		},
		{
			name:'AddressKey',
			type:'string'
		},
		{
			name:'Company',
			type:'string'
		},
		{
			name:'BusinessPartnerRoleText',
			type:'string'
		},
		{
			name:'CurrencyText',
			type:'string'
		},
		{
			name:'WebAddress',
			type:'string'
		},
		{
			name:'BusinessPartnerRoleCode',
			type:'string'
		},
		{
			name:'FaxNumber',
			type:'string'
		},
		{
			name:'LegalForm',
			type:'string'
		},
		{
			name:'EmailAddress',
			type:'string'
		},
		{
			name:'TelephoneNumber',
			type:'string'
		},
		{
			name:'CurrencyCode',
			type:'string'
		},
		{
			name:'CountryCode',
			type:'string'
		},
		{
			name:'GenderCode',
			type:'string'
		},
		{
			name:'updated',
            type: 'date',
            dateFormat: 'c'			
		}
        ]
    }
});
