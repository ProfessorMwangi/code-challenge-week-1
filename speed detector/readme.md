<!-- @format -->
# Speed Governer

This is a simple JavaScript function to check the speed of a car and determine if the driver receives any demerit points. If the speed exceeds the limit by a certain amount, demerit points are assigned, and if the demerit points exceed a threshold, the driver's license is suspended.

## Usage

The function `speedGoverner(speed)` takes the speed of the car as input and returns a message based on the speed:

- If the speed is less than or equal to the speed limit (70 km/h), it returns "Ok".
- If the speed exceeds the speed limit, it calculates demerit points (1 point for every 5 km/h above the limit).
- If the total demerit points exceed 12, it returns "License suspended".
- Otherwise, it returns the number of demerit points.

## Example

```javascript
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
			return `Points: ${demeritPoints}`;
		}
	}
}

// Example usage:
console.log(speedGoverner(71)); // Points: 0
console.log(speedGoverner(80)); // Points: 2
console.log(speedGoverner(150)); // License suspended
```
