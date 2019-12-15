
function typical_function() {
	variable = document.getElementById("Age").value;
	
	if (variable >= 100) {
		Ride= "You can not Ride!";
	}
	else {
		Ride = "You can Ride!";
	}
	
	document.getElementById("Words").innerHTML = Ride;
}
