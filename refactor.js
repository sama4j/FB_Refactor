$(document).ready(function() {
	$('body').find('.hidden').hide();
	$('body').find('.errorM').hide();
	$('body #engage').on('click','button',function() {
		var yeso = $(this).parent().find('.entered').val();
		var message = " ";
		if (!(parseInt(yeso) == yeso)) {
			message = errorText();
			$('body').append('<p>'+message+'</p>');
		}
		else if (parseInt(yeso) <= 0) {
			message = errorMinus();
			$('body').append('<p>'+message+'</p>');
		}

		else {
			yeso = parseInt(yeso);
			$('body').find('.hidden').slideDown();
			for (i=1; i<=yeso; i++) {
				$('body').append('<p>'+buzzman(i)+'</p>');
			}
		}		
	});
}); 

var errorMinus = function() {
	return ("Number needs to be positive and greater than zero. Please refresh page and enter whole positive number");
}

var errorText = function() {
	return ("No text allowed. Please refresh page and enter whole positive number");
}

var buzzman = function(current) {
	var check = current;
	var outcome;
	
	if ((check%3) === 0) 
	{ 
		if ((check%5) === 0) { 
			outcome = "FizzBuzz";
			return outcome;
		} 
		else outcome = "Fizz";
		return outcome
	}
	else if ((check%5) === 0) {
		outcome = "Buzz";
		return outcome
	} 
	else {
		outcome = check;
		return outcome;
	}

}