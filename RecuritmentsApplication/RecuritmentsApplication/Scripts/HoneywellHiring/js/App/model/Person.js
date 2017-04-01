Ext.define('AM.model.Person',{
    extend: 'Ext.data.Model',
    
     /*proxy: {
        type: 'memory',
        url: '/localhost:/suppliers'
        reader: {
            type: 'json',
            root: 'users'
        }
    },*/
    fields: [{
    	name: 'name',
    	type: 'string'
    }, {
    	name: 'age',
    	type: 'int'
    }]
});