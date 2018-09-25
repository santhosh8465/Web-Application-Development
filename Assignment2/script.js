function santhosh_calculator(id) {
	first_text = document.getElementById('first_text');
	second_text = document.getElementById('second_text');
	third_text = document.getElementById('third_text');
	//temp = document.getElementById('third_text');
	
	if ( first_text.value == '0' && second_text.value == '' && third_text.value  == '' )
	{
		setTimeout(function () { location.reload(1); }, 3000);

	}
	first_value = Number(first_text.value);
	//alert(first_value);
	second_value = second_text.value;
	third_value = Number(third_text.value);
	enter = equal(second_text)
	//alert(enter);
	function equal(e) {
	    if (e.keyCode == 13) {
	        return e.keyCode;
	    }
	}
	
	
	//checking the validity of number
	
	if (validity(first_text.value) == false) {
	// functioning of CE
	} else if (id == 'CE') {

		first_text.value = '';
		second_text.value = '';
		third_text.value = '';
    //functioning of c
	} else if (id == 'C') {
		if (first_text.value == ''){
			if(second_text.value == ''){
				if (third_text.value == ''){
					
				}
				third_text.value = '';
			}
			second_text.value = '';
		}
		first_text.value == '';
		first_text.value = '';
		
		
		
		
		
		
		
	// functioning of M's	
	//} else if(id == 'MC'){
			//temp = 0;
			//alert("mc");
			//alert(temp);
			//santhosh_calculator(id);

	/*		
	} else if (id == 'MR'){
			alert("mr");
			mr();
			first_value = temp;
			alert(temp)
			
			//temp = disp()
			//first_text = 0;
			//temp1 = first_text.value;
			//temp = temp1;
			//first_text.value = temp;
			//alert(temp);
			
			//santhosh_calculator(id);
			
	} else if (id == 'M+'){
			alert("m+");
			//temp1 += disp(first_text.value);
			temp1 = first_text.value;
			temp += temp1;
			alert(temp);
			//first_text.value = '';
			//santhosh_calculator(id);
	} else if (id == 'M-'){
			alert("m-");
			temp1 = first_text.value;
			temp -= temp1;
			alert(temp);
			//first_text.value = '';
			//santhosh_calculator(id);
			
			
			
		*/	
			
			
			
	// sign changing positive or negatuive number as input		
	} else if (first_value != '' && id == '+-') {

		temp = 0 - first_text.value;
		first_text.value = temp;
	// remove one entry
	} else if (id == '<-') {
		if (first_text.value == ''){
			if(second_text.value == ''){
				if(third_text.value == ''){
					
				}third_text.value = third_text.value.slice(0, -1);
			}second_text.value = second_text.value.slice(0, -1);
		}
		first_text.value = first_text.value.slice(0, -1);
	
	} else if (second_value == '=' && third_value != 0) {
		//temp = first_value;
		third_text.value = '';
		second_text.value = '';
		first_text.value = temp;
	} 
	else if ((second_value == '+' && (id == '=' || enter)) && (first_value != '' && third_value != '')) {

		second_text.value = '';
		third_text.value = '';
		first_text.value = add(first_value, third_value);

		if (first_text.value == 0){
			setTimeout(function () { location.reload(1); }, 5000);
		}

	} else if ((second_value == '-' && id == '=')
			&& (first_value != '' && third_value != '')) {

		second_text.value = '';
		third_text.value = '';
		first_text.value = substract(first_value, third_value);
		if (first_text.value == '0'){
			setTimeout(function () { location.reload(1); }, 5000);
		}

	}else if (id=='sqrt') {

		second_text.value = '';
		third_text.value = '';
		first_text.value = sqrt(first_value);
		if (first_text.value == '0'){
			setTimeout(function () { location.reload(1); }, 5000);
		}

	} else if (id == '1/x') {

		second_text.value = '';
		third_text.value = '';
		first_text.value = onebyx(first_text.value);
		first_text.value = '';
		if (first_text.value == '0'){
			setTimeout(function () { location.reload(1); }, 5000);
		}




	}else if ((second_value == '*' && id == '=')
			&& (first_value != '' && third_value != '')) {

		second_text.value = '';
		third_text.value = '';
		first_text.value = multiply(first_value, third_value);
		if (first_text.value == '0'){
			setTimeout(function () { location.reload(1); }, 5000);
		}

	} else if ((second_value == '/' && id == '=') || (id == '%')
			&& (first_value != '' && third_value != '')) {

		first_text.value += id
		if (id == '/' || id == '=') {
			second_text.value = '';
			third_text.value = '';
			first_text.value = divide(first_value, third_value);
			if (first_text.value == '0'){
				setTimeout(function () { location.reload(1); }, 5000);
			}
			
		} else if (id == '%' || id == '=') {
			second_text.value = '';
			third_text.value = '';
			first_text.value = percentage(first_value, third_value);
			if (first_text.value == '0'){
				setTimeout(function () { location.reload(1); }, 5000);
			}
			
		}

	} else if ((second_value == '%' && id == '=')
			&& (first_value != '' && third_value != '')) {

		second_text.value = '';
		third_text.value = '';
		first_text.value = percentage(first_value, third_value);
		if (first_text.value == '0'){
			setTimeout(function () { location.reload(1); }, 5000);
		}

	}
	
	else if (isSign(id) == false) {
		// alert()
		first_text.value += document.getElementById(id).value;
	} else if(isSign(id) == true && first_text.value ==''){
		alert("Enter a Numerical value");

	}else{
		
		
		first_text.value = '';
		second_text.value = id;
		third_text.value = first_value;		
	}
}
function disp(){
	return first_text.value;
}
function add(num1, num2) {

	return num1 + num2;
}

function substract(num1, num2) {

	return num2 - num1;
}

function multiply(num1, num2) {

	return num1 * num2;
}
function divide(num1, num2) {

	return num2 / num1;
}

function percentage(num1, num2) {

	return (num2 / num1) * 100;
}

function sqrt(num1) {

	return Math.sqrt(num1);
}
function onebyx(num1){
	if (num1 == 0){
		alert("Error (Divide by Zero)")
		first_text.value = '';
		}
	else{
	return 1 / num1;
	}
}

function isSign(id) {

	if (id == '+' || id == '-' || id == '*' || id == '/' || id == '%'
			|| id == '=' || id == '1/x' || id == 'sqrt' || id == '+-' || id == '.') {

		return true;
	} else {
		return false;
	}
}

function validity(number) {

	
	return eval(number)

}





//function mr()
//{
	//alert("in mr")
	//if ((second_value != '' && id == MR ) && (first_value == '' && third_value != 0)){
		//alert("in mr if")
		//return temp;
	//}
//}