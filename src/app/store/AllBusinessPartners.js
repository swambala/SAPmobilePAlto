Ext.define('App.store.AllBusinessPartners', {
    extend: 'Ext.data.Store',
    requires: ['App.model.BusinessPartner'],

    config: {
        model: 'App.model.BusinessPartner'
    }
});