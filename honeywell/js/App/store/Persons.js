Ext.define('AM.store.Persons', {
    autoLoad: true,
    extend: 'Ext.data.Store',
    model: 'AM.model.Person',

    data: [{
	            name: 'Ed Spencer',
	            age: '55'
	        },{
	            name: 'Abe Elias',
	            age: '66'
	        },{
	            name: 'Raju',
	            age: '15'
	        },{
	            name: 'Elias',
	            age: '27'
	        },{
	            name: 'Ed',
	            age: '50'
	        },{
	            name: 'Abe',
	            age: '66'
	        },{
	            name: 'EdSpencer',
	            age: '55'
	        },{
	            name: 'Abe_Elias',
	            age: '66'
	        }]/*
    data : {
	    users: [{
	            name: 'Ed Spencer',
	            age: '55'
	        },{
	            name: 'Abe Elias',
	            age: '66'
	        },{
	            name: 'Raju',
	            age: '15'
	        },{
	            name: 'Elias',
	            age: '27'
	        },{
	            name: 'Ed',
	            age: '50'
	        },{
	            name: 'Abe',
	            age: '66'
	        },{
	            name: 'EdSpencer',
	            age: '55'
	        },{
	            name: 'Abe_Elias',
	            age: '66'
	        }]
	},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'users'
        }
    }*/
});
