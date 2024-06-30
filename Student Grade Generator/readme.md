<!-- @format -->

# Grade Calculator

This function calculates a grade based on the marks provided.

## Usage

### `calculateGrade(marks)`

Calculates and returns the grade based on the marks given.

####_Note_

Ensure marks is a valid number between 0 and 100.
Grades are categorized as follows:
A: 80-100
B: 60-79
C: 50-59
D: 40-49

#### Parameters

- `marks` (Number): The marks obtained, should be between 0 and 100 inclusive.

#### Returns

- String: The grade corresponding to the marks. Returns `"Invalid"` if marks are not within the valid range.

## Example

```javascript
const { calculateGrade } = require("./calculateGrade.js");

console.log(calculateGrade(70)); // Output: "B"
console.log(calculateGrade(90)); // Output: "A"
console.log(calculateGrade(55)); // Output: "C"
console.log(calculateGrade(-10)); // Output: "Invalid Marks: Please enter marks between 0 to 100"

E: 0 - 39;
```
