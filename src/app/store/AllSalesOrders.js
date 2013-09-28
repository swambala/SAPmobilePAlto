Ext.define('App.store.AllSalesOrders', {
    extend: 'Ext.data.Store',
    requires: ['App.model.SalesOrder'],

    config: {
        model: 'App.model.SalesOrder'
    }
});