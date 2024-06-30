/** @format */

function calculateGrade(marks) {
	marks = Number(marks);
	if (isNaN(marks) || marks < 0 || marks > 100) {
		console.log("Invalid Marks:Please enter marks(between 0 to 100)");
		return "Invalid";
	}

	if (marks > 79) {
		return "A";
	} else if (marks >= 60 && marks <= 79) {
		return "B";
	} else if (marks >= 50 && marks <= 59) {
		return "C";
	} else if (marks >= 40 && marks <= 49) {
		return "D";
	} else {
		return "E";
	}
}
console.log(calculateGrade(50));
function geneRateGrade() {
	const marksInput = document.getElementById("marksInput").value;
	const grade = calculateGrade(marksInput);

	document.getElementById("gradeResult").innerText = `Your Grade is: ${grade}`;
}
