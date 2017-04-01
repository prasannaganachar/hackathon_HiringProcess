Ext.define('AM.view.PersonGrid', {
	extend: 'Ext.grid.Panel',
	alise: 'widget.personGrid',
    itemId: 'test-grid',

    store: 'Persons',
    initComponent: function() {

    	//this.getModel();
    	Ext.apply(this, {
		    padding: 20,
		    title: 'Grid',

		    selModel: Ext.create('Ext.selection.CheckboxModel', {
                mode: 'MULTI'
            }),
    		columns: [{
    			text: 'Name',
    			//width: 220,
    			dataIndex: 'name',
    			flex: 1
    		}, {
    			text: 'Age',
    			//width:220,
    			dataIndex: 'age',
    			flex: 1
    		}]
		});
    	this.callParent(arguments);
    }
  });
