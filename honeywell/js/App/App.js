Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: 'app',

    controllers: ['AppController'],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [Ext.create('AM.view.PersonGrid')//Ext.create('AM.view.PersonGrid')// AM.view.Main
            ]
        });
    }
});