
// BUDGET CONTROLLER

var budgetController = (function(){
	
})();


// UI CONTROLLER
var UIController = (function(){
	
	var DOMstrings = {
		inputType: '.add__type',
		inputDiscription: '.add__description',
		inputValue: '.add__value'
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
	
	var ctrlAddItem = function(){
		
		var DOM = UICtrl.getDOMstrings();
		
		// 1. Get the field input Data
		var input = UICtrl.getInput();
		console.log(input);
		// 2. Add the item to the budget controller
		
		// 3. Add the item tot he UI
		
		// 4. Calculate the budget
		
		// 5. Display the budget on the UI
		
		
		
		
	};
		document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
		
	
	
	document.addEventListener('keypress', function(event){
							  
			if (event.keyCode === 13 || event.which === 13){
				ctrlAddItem();
			}			  
	});
	
})(budgetController, UIController);

