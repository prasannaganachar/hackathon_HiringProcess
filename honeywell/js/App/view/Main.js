Ext.define('AM.view.Main', {
	extend: 'Ext.panel.Panel',
	alise: 'widget.main',
    itemId: 'test-grid',

initComponent: function() {

    	//this.getModel();
    	Ext.apply(this, {
    //		width: 450,
	//	    height: 400,
		    padding: 20,
		    //title: 'Grid',
		    title: 'Filters',
		    layout: 'vbox',
		    items: [{
		    	xtype: 'container',
		    	layout: 'vbox',
		    	items: [{
			    	xtype:'container',
			    	layout: 'hbox',
			    	margin: 10,
			    	//flex: 0.5,
			        items: [{
				        xtype: 'textfield',
				        fieldLabel: 'Location',
				        padding: 5
				    }, {
				        xtype: 'textfield',
				        fieldLabel: 'Skills',
				        padding: 5
				    }]
				}]
			}]

		});
    	this.callParent(arguments);
    }
});