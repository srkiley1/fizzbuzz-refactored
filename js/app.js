$(document).ready( function(){
	function fizzbuzz () {
	 
		for (i=1; i<=20; i++){
	
			if (number % 15 === 0){
				$("#append2").append("<li>FizzBuzz</li>");
			}
			else if (number % 3 === 0){
				$("#append2").append("<li>Fizz</li>");
			}
			
			else if (number % 5=== 0){
				$("#append2").append("<li>Buzz</li>");
			}
			//else {
				//$("#append2").append("<li>"+number+"</li>");
			//}
		}
	}
	var number =prompt("please enter a number between 1 and 20")
	number =parseInt($("number").attr("#append2"));
	fizzbuzz ()
	$("#append2").append("<li>" + number + "</li>");
});
