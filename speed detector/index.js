/** @format */

function speedGoverner(speed) {
	const speedLimit = 70;
	const speedIncrementToStartDemeritsCount = 5;
	const suspensionDemeritsPoint = 12;

	if (speed <= speedLimit) {
		return "Ok";
	} else {
		const demeritPoints = Math.floor(
			(speed - speedLimit) / speedIncrementToStartDemeritsCount
		);

		if (demeritPoints > suspensionDemeritsPoint) {
			return "License suspended";
		} else {
			return `Demerit Points: ${demeritPoints}`;
		}
	}
}


function checkSpeed() {
	const speedInput = document.getElementById("speedInput").value;
	const speed = Number(speedInput);

	if (isNaN(speed)) {
		document.getElementById("result").innerText =
			"Please enter a valid number.";
		return;
	}

	const result = speedGoverner(speed);
	document.getElementById("result").innerText = result;
}