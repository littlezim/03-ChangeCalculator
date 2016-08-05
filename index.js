
$(document).ready(function(){									//Begin function on ready

	$("#btnCalculate").click(function() {						//Begin function on click
		var amountDue = $("#amountDue").val();					//Set variables for input
		var amountPaid = $("#amountPaid").val();
		var amountReturn = amountPaid - amountDue;				

		var dollar = Math.floor(amountReturn);					
		//Round down the money back
console.log(dollar);
		var coins = Math.round((amountReturn % 1) * 100);		
		//Find the change and convert it into a whole number
console.log(coins);
		var quarter = Math.floor(coins / 25);					
		//Find Quarters from the change ammount
console.log(quarter);
		var dime = Math.floor((coins - (quarter * 25)) / 10);	
		/*Find Dimes by subtracting the quarters coin value from the whole change amount and dividing by
		 Dime's coin value*/
console.log(dime);
		var knickel = Math.floor((coins -(quarter*25)-(dime*10)) / 5); 
		/*Find Knickels by subtracting quarter's coin value and dime's coin value from the Whole change ammount,
		 and then divide by Knickels coin value*/
console.log(knickel);
		var penny = Math.floor((coins -(quarter*25)-(dime*10)-(knickel*5)) / 1);
		/*Find Pennys by subtracting all previous coin values from whole change value and divide by pennys
		 coin value*/
console.log(penny);





		$("p").text(dollar);				//Set outputs
		$("p1").text(quarter);
		$("p2").text(dime);
		$("p3").text(knickel);
		$("p4").text(penny);
		
	})


});