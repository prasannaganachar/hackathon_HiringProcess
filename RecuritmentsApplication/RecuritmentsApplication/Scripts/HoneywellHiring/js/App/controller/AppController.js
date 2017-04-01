Ext.define('AM.controller.AppController', {
    extend: 'Ext.app.Controller',

    views: [
        'PersonGrid',
        'Main'
    ],

    stores: ['Persons'],
    models: ['Person'],
    
    refs: [{
        ref: 'personGrid',
        selector: 'viewport #test-grid'
    }],

    init: function() {
    	console.log('Initialized Users! This happens before the Application launch function is called');
        this.control({
            'viewport #test-grid': {
                render: this.onPanelRendered,
                selectionchange: this.onSelectionChange 
            }
        });
    },

    onPanelRendered: function() {
        //alert('test');
        console.log('The panel was rendered');
    },

    onSelectionChange: function(I) {
        alert('change+ ' +this.getPersonGrid().getItemId());
    }
});