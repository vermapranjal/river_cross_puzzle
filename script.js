var COWBOY = -1, INDIAN = 1;
var LEFT = 0, RIGHT = 1;
var GOING = 0, WIN = 1, LOSE = 2;
var BOATMAX = 2;
var NUMCHARACTERS = 6;

var leftShore = [COWBOY, COWBOY, COWBOY, INDIAN, INDIAN, INDIAN];	//The population of the left shore
var boat = [];														//The population of the boat
var boatSide = leftShore;											//An alias for the boat's current shore
var rightShore = [];												//The population of the right shore

var leftShoreImages = [];
var rightShoreImages = [];
var boatImages = [];

//Move a passenger from the shore to the boat
function moveToBoat(passenger) {
	//Where is the passenger in the array?
	passengerPosition = boatSide.indexOf(passenger);

	//If the boat is full or the passenger being loaded doesn't exist...
	if (boat.length == 2 || passengerPosition < 0) {
		return;
	}

	//Remove the passenger from the shore and add him to the boat.


	boatSide.splice(passengerPosition, 1);
	boat.push(passenger);


	display();
	//handleEndGame(checkShores());
}

//Move a passenger from the boat to the shore
function moveFromBoat(passenger) {
	//Where is the passenger in the boat?
	passengerPosition = boat.indexOf(passenger);

	//If the passenger is not on the boat...
	if (passengerPosition < 0) {
		return;

	}

	//Remove the passenger from the boat and add him to the shore.
	boat.splice(passengerPosition, 1);
	boatSide.push(passenger);

	display();
	//handleEndGame(checkShores());
}

//Move the boat from one side of the river to the other.
function moveBoat() {
	//Do not move the boat if there's no one in it.
	if (boat.length == 0) {
		return;
	}

	//Switch the shores of the boat.
	if (boatSide == leftShore) {
		boatSide = rightShore;
	}
	else {
		boatSide = leftShore;
	}

	display();
	//handleEndGame(checkShores());
}

//Check the status of the game and display the proper message or keep going.
function handleEndGame(gameStatus) {
	if (gameStatus == GOING) {
		return;
	}

	if (gameStatus == WIN) {
		alert("You Win!");
	}

	if (gameStatus == LOSE) {
		alert("You Lose");
	}
}

//Determine the status of the game.
//Use the values of COWBOY and INDIAN to determine whether or not the Indians outnumber the cowboys.
//By adding them up, if the number is 0 or less, then the Indians do not outnumber the cowboys.
//If the number is positive, then there are more Indians than cowboys.
//If there are cowboys where they're outnumbered, the game is over.
function handleEndGame(){

}

function cowboys(){

}

function checkShores(){

}

function displayGroup(shoreImages, shore) {
	//Use the image list as a measure for the loop.
	for (var i = 0; i < shoreImages.length; i++) {
		//Display the image.
		shoreImages[i].style.display = "initial";

		//If there's no character, hide the image.
		if (i >= shore.length) {
			shoreImages[i].style.display = "none";
		}
		else {
			//Display the proper image.
			if (shore[i] == COWBOY) {
				shoreImages[i].src = "images/cowboyeastwhite.png";
			}
			else {
				shoreImages[i].src = "images/indianeast.png";
			}
		}
	}
}

//Display both of the shores, the boat, and the characters in the boat.
function display() {
	displayGroup(leftShoreImages, leftShore);
	displayGroup(rightShoreImages, rightShore);
	displayGroup(boatImages, boat);

	if (boatSide == leftShore) {
		leftShoreDiv.style.width = "35%";
		riverDiv.style.width = "35%";
	}
	else {
		leftShoreDiv.style.width = "60%";
		riverDiv.style.width = "10%";
	}
}
