var buttonLess =  document.getElementById("buttonLess");
var buttonMore =  document.getElementById("buttonMore");
var total = document.getElementById("numberBuy");
buttonMore.addEventListener("click", numberMore);
buttonLess.addEventListener("click", numberLess)

function numberMore() {
	total.value = parseFloat(total.value) + 1; 
}

function numberLess(){
	if(parseFloat(total.value) > 0){
		total.value = parseFloat(total.value) - 1;
	} 
}