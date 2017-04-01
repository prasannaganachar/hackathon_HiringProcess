 Ext.define('Person',{
        extend: 'Ext.data.Model',
        fields: ['Name', 'dob']
    });

    var store = Ext.create('Ext.data.Store', {
        model: 'Person',
        autoLoad: true,
        proxy: {
            type: 'memory',
            data: createFakeData(10),
            reader: {type: 'array'}
        },
        sorters: [{
            direction:'ASC'
        }]
    });


    function createFakeData(count) {
        var firstNames   = ['Ed', 'Tommy', 'Aaron', 'Abe'];
        var lastNames    = ['Spencer', 'Maintz', 'Conran', 'Elias'];            
        var data = [];
        for (var i = 0; i < count ; i++) {
            var dob = getRandomDate();           
            var firstNameId = Math.floor(Math.random() * firstNames.length);
            var lastNameId  = Math.floor(Math.random() * lastNames.length);
            var name        = Ext.String.format("{0} {1}", firstNames[firstNameId], lastNames[lastNameId]);
            data.push([name, dob]);
        }
        return data;
    }


    Ext.create('Ext.grid.Panel', {
        store: store,
        columns: [
            {text: "Name", width:120, dataIndex: 'Name', tdCls :'x-cell'},
            {text: "DOB", width: 120, dataIndex: 'dob', renderer: Ext.util.Format.dateRenderer('M d, Y'), tdCls :'x-cell'},
            {text: "Age", width:40, 
                renderer : function(value, metaData, record, rowIdx, colIdx, store, view){
                    return calcAge(record.get('dob'));
                },
                tdCls :'x-cell'
            },
            {
                xtype: 'actioncolumn',
                width: 30,
                sortable: false,
                menuDisabled: true,
                items: [{
                    icon: 'http://etf-prod-projects-1415177589.us-east-1.elb.amazonaws.com/trac/docasu/export/2/trunk/client/extjs/shared/icons/fam/delete.gif',
                    handler: function(grid, rowIndex, colIndex) {
                       store.removeAt(rowIndex);
                    },
                    tdCls :'x-cell'
                }]
            },
           
        ],
        renderTo:'example-grid',
        width: 320,
        height: 280,
        viewConfig: { 
            stripeRows: false, 
            getRowClass: function(record) { 
                return calcAge(record.get('dob')) < 18 ? 'minor' : 'adult'; 
            } 
        } 
    });