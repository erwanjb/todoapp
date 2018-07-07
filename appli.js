//FONCTION

//fonction pour ajouter une tâche
function addTask(){
	var input = document.querySelector("#addTask input");
	var todo = Ext.get('todo');
	if (input.value) {
		Ext.create({
		xtype: 'panel',
	    renderTo: Ext.get('todo'),
	    layout: {
	    	type: 'hbox',
	    	align: 'center'
		},
	    items:[{
	    	html: '<input type="checkbox">'
	    },{
	    	html: input.value
	    },{
	    	xtype: 'button',
	    	iconCls: 'x-fa fa-trash',
	    	listeners: {
	    		click: supp
	    	}
	    }]
	});
	}
}

function supp(e){
	e.el.dom.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(e.el.dom.parentNode.parentNode.parentNode.parentNode.parentNode);
}
//fonction main du programme
function main(){
	//créer les éléments du DOM
	Ext.create({
		xtype: 'panel',
		renderTo: Ext.get('todo'),
	    layout: {
	    	type: 'hbox',
	    	align: 'center'
		},
	    items:[{
	    	html: '<input type="checkbox">'
	    },{
	    	html: 'tâche 1'
	    },{
	    	xtype: 'button',
	    	iconCls: 'x-fa fa-trash',
	    	listeners: {
	    		click: supp
	    	}
	    }]
	});
	Ext.create({
		xtype: 'panel',
		renderTo: Ext.get('todo'),
	    layout: {
	    	type: 'hbox',
	    	align: 'center'
		},
	    items:[{
	    	html: '<input type="checkbox">'
	    },{
	    	html: 'tâche 2'
	    },{
	    	xtype: 'button',
	    	iconCls: 'x-fa fa-trash',
	    	listeners: {
	    		click: supp
	    	}
		}]
	});
	//créer la partie pour ajouter
	Ext.get('addTask').appendChild({
		tag: 'div',
		id: 'addTask2',
		iconCls: 'x-fa fa-trash',
		children: [{
			tag: 'h2',
			html: 'ajouter une tâche'
		},{
			tag: 'input',
			type: 'text'
		}]
	});
	//créer les boutons
	Ext.create('Ext.Button',{
		renderTo:Ext.get('addTask2'),
		text: 'ajouter',
		listeners:{
			click:addTask
		}
	});
}

//démarer le programme
Ext.onReady(main);