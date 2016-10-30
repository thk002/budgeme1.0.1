
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
	category.prepend("<li class='budg-item'>New Category (Place Holder)</li>");
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