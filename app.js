
// BUDGET CONTROLLER

var budgetController = (function(){
	
	var Expense = function(id, description, value){
		this.id = id;
		this.description = description;
		this.value = value;
		
	};
	
	var Income = function(id, description, value){
		this.id = id;
		this.description = description;
		this.value = value;
		
	};
	
	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	
	
	}
	
	return{
		addItem: function(type, des, val){
			var newItem, ID;
			
			ID = data.allItems[type][data.allItems[type].length - 1].id +1;
			
			if (type === 'exp'){
				newitem = new Expense(ID, Des, val);
				}else if (type === 'inc'){
					newItem = new Income(ID, des, val);
				}
			    
			    data.allItems[type].push(newItem);
			return newItem;
			 
		}
	};
	
	
})();




// UI CONTROLLER
var UIController = (function(){
	
	var DOMstrings = {
		inputType: '.add__type',
		inputDiscription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	}
	
   return {
	   getInput: function(){
		   
		   return{
			    type: document.querySelector(DOMstrings.inputType).value,
		   description: document.querySelector(DOMstrings.inputDiscription).value,
		   value: document.querySelector(DOMstrings.inputValue).value
           }
		  
	   },
	   getDOMstrings: function(){
		   return DOMstrings;
	   }
   };
	
})();


// GLOBAL APP CONTROLLER

var controller = (function(budgetCtrl, UICtrl){
	var setupEventListener = function(){
		
		var DOM = UICtrl.getDOMstrings();
		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
		
	
	
	    document.addEventListener('keypress', function(event){
							  
			if (event.keyCode === 13 || event.which === 13){
				ctrlAddItem();
			}			  
	});
		
	};
	
	
	
	var ctrlAddItem = function(){
		
		
		
		// 1. Get the field input Data
		var input = UICtrl.getInput();
		
		// 2. Add the item to the budget controller
		
		// 3. Add the item tot he UI
		
		// 4. Calculate the budget
		
		// 5. Display the budget on the UI
		
	};
	
	return{
		init: function(){
			console.log('App has started');
			setupEventListener();
		}
	}
		
})(budgetController, UIController);

controller.init();

