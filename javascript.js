
var counter = 4;

$(document).ready(function() {
	initializePage();
})


function initializePage() {

$("#new-cat").click(projectClick);

}

function projectClick(e) {
	e.preventDefault();
	var category = $(this);
	console.log(category);
	counter++;
	category.prepend("<li class='budg-item'> New Category <input type='range' class='slider' min='0' max='50' value='0' step='10' oninput='showValue" + counter + "(this.value)' /><span id='range" + counter + "'>0</span></li>");
}

function showValue1(newValue)
{
	document.getElementById("range1").innerHTML=newValue;
}

function showValue2(newValue)
{
	document.getElementById("range2").innerHTML=newValue;
}

function showValue3(newValue)
{
	document.getElementById("range3").innerHTML=newValue;
}

function showValue4(newValue)
{
	document.getElementById("range4").innerHTML=newValue;
}